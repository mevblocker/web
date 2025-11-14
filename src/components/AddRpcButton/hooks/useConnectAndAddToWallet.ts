import { useCallback, useEffect, useState } from "react";
import { useConnect } from "@src/hooks/useConnect";
import { addRpcUrlAction as sendToAnalytics, AddRpcUrlActionType } from "@src/lib/analytics/events";
import { useWalletClient } from "wagmi";
import { handleRpcError } from "@src/utils/handleRpcError";
import { useAddRpcWithTimeout } from "./useAddRpcWithTimeout";
import { AddToWalletState } from "..";

const DEFAULT_STATE: AddToWalletState = { state: 'unknown', autoConnect: false }
const ADDING_STATE: AddToWalletState = { state: 'adding', autoConnect: false }
const ADDED_STATE: AddToWalletState = { state: 'added', autoConnect: false }
const CONNECTING_STATE: AddToWalletState = { state: 'connecting', autoConnect: true }

export interface UseConnectAndAddToWalletPros {
  addWalletState: AddToWalletState,
  connectAndAddToWallet: (() => void) | null,
}

export function useConnectAndAddToWallet(): UseConnectAndAddToWalletPros {
  const { isConnected, connect } = useConnect()
  const { data: walletClient } = useWalletClient()
  const [addWalletState, setState] = useState<AddToWalletState>(DEFAULT_STATE)  
  const [addingPromise, setAddRpcPromise] = useState<Promise<boolean> | null>(null)
  const { state, autoConnect } = addWalletState

  // Handle RPC errors
  const handleError = useCallback((error) => {
    console.error(`[connectAndAddToWallet] handleError`, error)

    const { errorMessage: message, isError, isUserRejection } = handleRpcError(error)
    isError && sendToAnalytics('error_add_rpc')
    isUserRejection && sendToAnalytics('rejected_by_user_adding_rpc')

    if (isError || isUserRejection) {
      // Display the error
      setState({ state: 'error', errorMessage: message, autoConnect: false })          
    } else {
      // Not an error: i.e The user is connecting
      setState(DEFAULT_STATE)
    }
    setAddRpcPromise(null)
  }, [setState])
  

  // Add RPC endpoint to wallet (with analytics + handle timeout state)
  const addToWallet = useAddRpcWithTimeout({
    isAdding: state === 'adding',
    addingPromise,
    onAdding (newAddRpcPromise) {
      console.debug('[connectAndAddToWallet] Adding RPC...')
      setAddRpcPromise(newAddRpcPromise)
      sendToAnalytics('click_to_add_rpc')
      setState(ADDING_STATE)
    },
    onAdded() {
      console.debug('[connectAndAddToWallet] 🎉 RPC has been added!')
      sendToAnalytics('added_rpc_successfully')
      setState(ADDED_STATE)
      setAddRpcPromise(null)
    },
    onTimeout(errorMessage, newState, event) {
      console.debug(`[connectAndAddToWallet] Event: ${event}. New State: ${newState}. Message`, errorMessage)
      sendToAnalytics(event)
      setState({ 
        state: newState,
        errorMessage,
        autoConnect
      })
    },
    walletClient,
    handleError
  })   


  // Connect and auto-add the RPC endpoint
  const allowToConnectAndAddToWallet = !isConnected || walletClient // allow to connectAndAddToWallet if not connected, or if the client is ready
  const connectAndAddToWallet = useCallback(() => {
    if (!allowToConnectAndAddToWallet) {
      return
    }
    
    if (!isConnected) {
      console.debug('[useConnectAndAddToWallet] Connecting...')
      setState(CONNECTING_STATE) // Set state connecting + autoConnect once connected
      connect()
        .then(() => console.debug('[useConnectAndAddToWallet] 🔌 Connected!'))
        .catch(handleError)
      
    } else {
      console.debug('[useConnectAndAddToWallet] Already connected. Adding RPC endpoint...')
      addToWallet()
    }
  }, [allowToConnectAndAddToWallet, isConnected, handleError, connect, addToWallet])

  // Auto-connect (once we have )
  useEffect(() => {
    if (isConnected && walletClient && autoConnect) {      
      addToWallet()
    }
  }, [isConnected, walletClient, autoConnect, addToWallet])

  return {
    connectAndAddToWallet: allowToConnectAndAddToWallet ? connectAndAddToWallet : undefined,
    addWalletState
  }
}