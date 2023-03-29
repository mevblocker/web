import styled, { css } from "styled-components";
import { transparentize } from "polished";
import { Defaults, Color, Font, Media } from "@src/const/styles/variables";

type ButtonProps = {
  wrapText?: boolean;
  borderRadius?: number;
  fontSize?: number;
  paddingLR?: number;
  marginTB?: number;
  variant?: string;
  href?: string;
  label: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

const Wrapper = styled.a<
  Omit<ButtonProps, "href" | "label" | "target" | "rel">
>`
  display: flex;
  background: ${({ variant }) =>
    variant === "white" ? "transparent" : Color.black};
  flex-flow: row;
  border: 0.1rem solid
    ${({ variant }) =>
      variant === "white" ? transparentize(0.6, Color.border) : "transparent"};
  color: ${({ variant }) => (variant === "white" ? Color.text1 : Color.white)};
  padding: ${({ paddingLR }) => (paddingLR ? `0 ${paddingLR}rem` : "0 6rem")};
  margin: ${({ marginTB }) => (marginTB ? `${marginTB}rem 0` : "0")};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : Defaults.borderRadius};
  min-height: 5.6rem;
  width: auto;
  align-items: center;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}rem` : "2.2rem")};
  justify-content: center;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  white-space: ${({ wrapText }) => (wrapText ? "initial" : "nowrap")};
  font-weight: ${Font.weightMedium};
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  ${Media.mediumDown} {
    padding: ${({ paddingLR }) => paddingLR ? `0 ${paddingLR}rem` : '0 6rem'};
    margin: ${({ marginTB }) => marginTB ? `${marginTB}rem 0` : '0'};
    min-height: 5.6rem;
    font-size: 1.8rem;
  }

  &:hover {
    /* background: ${({ variant }) =>
      variant === "white" ? Color.text1 : Color.black};
    color: ${Color.text1}; */
  }
`;

// General purpose multiple button wrapper
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;

  ${Media.mediumDown} {
    justify-content: center;
    flex-flow: column wrap;

    > ${Wrapper} {
      width: 100%;
    }
  }
`;

type BigButtonProps = {
  fontSize?: number;
  href?: string;
  label: string;
  target?: string;
  rel?: string;
  disabled?: boolean
  onClick?: () => void;
};

const BigButtonWrapper = styled.a<{disabled: boolean}>`
  text-align: center;
  line-height: 1;
  border: 0.2rem solid ${Color.black};
  padding: 2rem 4.5rem;
  font-weight: bold;
  font-size: 2.4rem;
  text-decoration: none;
  box-shadow: 0.3rem 0.3rem 0 ${Color.black};
  border-radius: 5px;
  color: ${Color.black};
  display: inline-block;
  cursor: pointer;
  
  ${({ disabled }) => disabled ?
    css`
    color: gray;
    border-color: gray;
    cursor: not-allowed;
    opacity: 0.5;
    `:
    css`
    background: ${Color.orange};
    &:hover {
      top: 0.4rem;
      left: 0.4rem;
      box-shadow: 0.1rem 0.1rem 0 ${Color.black};
      transition-property: box-shadow, top, left;
      transition-duration: 0.3s;
      transition-timing-function: ease-in-out;
    }
    `}
`;

export function Button({
  wrapText,
  borderRadius,
  fontSize,
  paddingLR,
  marginTB,
  variant,
  href = "#",
  label,
  target,
  rel,
  onClick,
}: ButtonProps) {
  return (
    <Wrapper
      onClick={onClick}
      {...{ wrapText, borderRadius, fontSize, paddingLR, marginTB, variant }}
      href={href}
      target={target}
      rel={rel}
    >
      {label}
    </Wrapper>
  );
}

export function BigButton({ label, href, target, rel, fontSize, onClick, disabled }: BigButtonProps) {
  return (
    <BigButtonWrapper {...{ href, label, target, rel, fontSize, onClick, disabled }}>{label}</BigButtonWrapper>
  )
}
