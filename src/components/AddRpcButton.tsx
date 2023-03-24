import styled from "styled-components";
import { transparentize } from "polished";
import { Defaults, Color, Font, Media } from "@src/const/styles/variables";
import { BigButton } from "./Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";
import { useCallback } from "react";

const BigButtonWrapper = styled.a``;

export function AddRpcButton() {
  const { isConnected } = useAccount();

  const addRpcEndpoint = useCallback(() => {
    console.log("Add RPC endpoint");
  }, []);
  return (
    <>
      {isConnected ? (
        <BigButton onClick={addRpcEndpoint} label="Add to Wallet" />
      ) : (
        <ConnectButton
          label="Connect Wallet"
          accountStatus={"avatar"}
          chainStatus={"none"}
          showBalance={false}
        />
      )}
    </>
  );
}
