import { useCallback, useEffect, useState } from "react";
import { useConnect } from "@src/hooks/useConnect";
import { addRpcUrlAction as sendToAnalytics, AddRpcUrlActionType } from "@src/lib/analytics/events";
import { useWalletClient } from "wagmi";
import { handleRpcError } from "@src/utils/handleRpcError";
import { useAddRpcWithTimeout } from "./useAddRpcWithTimeout";
import { AddToWalletState } from "..";

const DEFAULT_STATE: AddToWalletState = { state: 'unknown', autoconnect: false }
const ADDING_STATE: AddToWalletState = { state: 'adding', autoconnect: false }
const ADDED_STATE: AddToWalletState = { state: 'added', autoconnect: false }
const CONNECTING_STATE: AddToWalletState = { state: 'connecting', autoconnect: true }

export interface UseConnectAndAddToWalletPros {
  addWalletState: AddToWalletState,
  connectAndAddToWallet: () => void,
}

export function useConnectAndAddToWallet(): UseConnectAndAddToWalletPros {
  const { isConnected, connect } = useConnect()
  const { data: walletClient } = useWalletClient()
  const [addWalletState, setState] = useState<AddToWalletState>(DEFAULT_STATE)  
  const [addingPromise, setAddRpcPromise] = useState<Promise<boolean> | null>(null)
  const { state, autoconnect } = addWalletState

  // Handle RPC errors
  const handleError = useCallback((error) => {
    const { errorMessage: message, isError, isUserRejection } = handleRpcError(error)
    isError && sendToAnalytics('error_add_rpc')
    isUserRejection && sendToAnalytics('rejected_by_user_adding_rpc')

    if (isError || isUserRejection) {
      // Display the error
      setState({ state: 'error', errorMessage: message, autoconnect: false })          
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
      setAddRpcPromise(newAddRpcPromise)
      console.log('[AddRpcButton] Add to wallet')
      sendToAnalytics('click_to_add_rpc')
      setState(ADDING_STATE)
    },
    onAdded() {
      sendToAnalytics('added_rpc_successfully')
      setState(ADDED_STATE)
      setAddRpcPromise(null)
    },
    onTimeout(errorMessage, newState, event) {
      sendToAnalytics(event)
      setState({ 
        state: newState,
        errorMessage,
        autoconnect
      })
    },
    handleError
  })   

  // Connect and auto-add the RPC endpoint
  const connectAndAddToWallet = useCallback(() => {
    if (!isConnected) {
      setState(CONNECTING_STATE) // Set state connecting + autoconnect once connected
      connect().catch(handleError) 
    } else {
      addToWallet()
    }
  }, [isConnected, handleError, connect, addToWallet])

  // Auto-connect (once we have )
  useEffect(() => {
    if (walletClient && autoconnect) {
      addToWallet()
    }
  }, [autoconnect, addToWallet, walletClient])

  return {
    connectAndAddToWallet,
    addWalletState
  }
}