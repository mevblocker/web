import styled from "styled-components";
import { Color, Font } from "@src/const/styles/variables";

export const Logo = styled.div<{ menuVisible: boolean }>`
  cursor: pointer;
  font-size: 1.2rem;
  line-height: 1;
  font-weight: ${Font.weightBold};
  color: ${({ menuVisible }) => (menuVisible ? Color.text1 : Color.text1)};
  z-index: 15;
  height: 4rem;
  width: 20rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
