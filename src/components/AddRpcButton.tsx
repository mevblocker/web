import styled from "styled-components";
import { transparentize } from "polished";
import { Defaults, Color, Font, Media } from "@src/const/styles/variables";
import { BigButton } from "./Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const BigButtonWrapper = styled.a``;

export function AddRpcButton() {
  return (
    <>
      <ConnectButton
        label="Connect Wallet"
        accountStatus={"avatar"}
        chainStatus={"none"}
        showBalance={false}
      />
      <BigButton label="Add to MetaMask" href="https://metamask.io/" />;
    </>
  );
}
