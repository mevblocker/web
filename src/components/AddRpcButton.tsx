import styled from "styled-components";
import { transparentize } from "polished";
import { Defaults, Color, Font, Media } from "@src/const/styles/variables";
import { BigButton } from "./Button";

const BigButtonWrapper = styled.a``;

export function AddRpcButton() {
  return <BigButton label="Add to MetaMask" href="https://metamask.io/" />;
}
