import styled from 'styled-components'
import { transparentize } from 'polished'
import { Defaults, Color, Font, Media } from '@src/const/styles/variables'

type ButtonProps = {
  wrapText?: boolean
  borderRadius?: number
  fontSize?: number
  paddingLR?: number
  marginTB?: number
  variant?: string
  href?: string
  label: string
  target?: string
  rel?: string
}

const Wrapper = styled.a<Omit<ButtonProps, "href" | "label" | "target" | "rel">>`
  display: flex;
  background: ${({ variant }) => variant === 'white' ? 'transparent' : Color.darkBlue};
  flex-flow: row;
  border: 0.1rem solid ${({ variant }) => variant === 'white' ? transparentize(0.6, Color.border) : 'transparent'};
  color: ${({ variant }) => variant === 'white' ? Color.darkBlue : Color.lightBlue};
  padding: ${({ paddingLR }) => paddingLR ? `0 ${paddingLR}rem` : '0 6rem'};
  margin: ${({ marginTB }) => marginTB ? `${marginTB}rem 0` : '0'};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : Defaults.borderRadius};
  min-height: 5.6rem;
  width: auto;
  align-items: center;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}rem` : "2.2rem"};
  justify-content: center;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  white-space: ${({ wrapText }) => wrapText ? 'initial' : 'nowrap'};
  font-weight: ${Font.weightMedium};
  text-decoration: none;
  cursor: pointer;

  ${Media.desktopDown} {
    padding: ${({ paddingLR }) => paddingLR ? `0 ${paddingLR}rem` : '0 6rem'};
    margin: ${({ marginTB }) => marginTB ? `${marginTB}rem 0` : '0'};
    min-height: 5.6rem;
    font-size: 1.8rem;
  }

  &:hover {
    background: ${({ variant }) => variant === 'white' ? Color.darkBlue : Color.darkBlue2};
    color: ${Color.lightBlue};
  }
`

// General purpose multiple button wrapper
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;

  ${Media.desktopDown} {
    justify-content: center;
    flex-flow: column wrap;

    > ${Wrapper} {
      width: 100%;
    }
  }
`

export default function Button({
  wrapText,
  borderRadius,
  fontSize,
  paddingLR,
  marginTB,
  variant,
  href = "#",
  label,
  target,
  rel
}: ButtonProps) {
  return (
    <Wrapper {...{ wrapText, borderRadius, fontSize, paddingLR, marginTB, variant }} href={href} target={target} rel={rel}>
      {label}
    </Wrapper>
  )
}