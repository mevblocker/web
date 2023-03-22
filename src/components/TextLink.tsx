import styled from 'styled-components'
import { Color, Media } from '@src/const/styles/variables'

type TextLinkProps = {
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

export const Wrapper = styled.a`
  display: block;
  color: ${Color.darkBlue};
  text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
`

export default function TextLink({
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
}: TextLinkProps) {
  return (
    <Wrapper {...{ wrapText, borderRadius, fontSize, paddingLR, marginTB, variant }} href={href} target={target} rel={rel}>
      {label}
    </Wrapper>
  )
}