import styled, { createGlobalStyle } from 'styled-components'
import { Color, Font, Media } from '@src/const/styles/variables'
import { transparentize } from "polished";

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: ${Font.defaultHeading};
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url(${Font.defaultHeadingFile}) format('woff2');
  }

  @font-face {
    font-family: ${Font.default};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url(${Font.defaultFile}) format('woff2');
  }

  @font-face {
    font-family: ${Font.default};
    font-style: normal;
    font-weight: bold;
    font-display: swap;
    src: url(${Font.defaultBoldFile}) format('woff2');
  }

  html, body {  
    width: 100%;
    height: 100%;
    min-width: 300px;
    margin: 0;
    font-size: 62.5%;
    line-height: 10px;
    font-family: ${Font.default};
    font-display: fallback;
    color: ${Color.text1};
    background: ${Color.white};
    background-attachment: fixed;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-variant: none;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    scrollbar-color: ${Color.text1} ${Color.white};

    &::-webkit-scrollbar {
      width: 2.4rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${Color.white};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Color.text1};
      border-radius: 10rem;
    }
  }

  ::selection,
  ::-moz-selection,
  ::-webkit-selection {
    background: ${Color.orange};
    color: ${Color.text1};
  }
  
  ::-moz-placeholder {
    line-height: revert;
  }

  ::-webkit-scrollbar {
    width: 1rem !important;
    height: 1rem !important;
  }

  ::-webkit-scrollbar-thumb {
      background-color: rgba(0,0,0,.2);
  }

  ::-webkit-scrollbar-track {
      background: hsla(0,0%,100%,.1);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {   
    text-decoration: underline;
    cursor: pointer;
  }

  a.anchor {
    display: block;
    position: relative;
    top: -15rem;
    visibility: hidden;
  }

  h1, h2, h3 {
    font-family: ${Font.defaultHeading};
  }

  h1, h2, h3, p, b, i, strong {
    margin: 0;
    line-height: 1;
  }

  ul, ol {
    margin: 0 0 1rem;
    padding: 0;
    list-style-position: inside;

    > li {
      display: list-item;
      align-items: center;
      gap: 0.7rem;
    }

    > li::marker {
      font-weight: bold;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    outline: 0;

    &:hover {
      background-color: var(--color-background-button-hover);
      color: var(--color-text-button-hover);
    }

    &:disabled,
    &[disabled]{
      opacity: .35;
      pointer-events: none;

      &:hover {
        opacity: .35;
      pointer-events: none;
      }
    }
  }

  input {
    
    &::placeholder {
      color: inherit;
      font-size: inherit;
    }
    
    &:focus::placeholder {
      color: transparent;
    }

    &:focus {
      border-color: ${Color.text1};
    }

    &:disabled {
      opacity: 0.8;
    }
  }
  
  .noScroll {
    overflow: hidden;
  }

  .mobileOnly {
    display: none !important;
    
    ${Media.mobile} {
      display: block !important;
    }
  }

  .hideMobile {
    ${Media.mobile} {
      display: none;
    }
  }

  .copied {
    color: ${Color.orange};
    font-weight: bold;
    width: 100%;
    margin: 2.4rem 0 0;
    background: ${transparentize(0.9, Color.orange)};
    padding: 1rem;
    border-radius: 1.2rem;
    text-align: center;
  }

  .container {
    margin: 0 auto;
  }

  // RWebShare widget style overrides
  .rws-container {
    max-width: 54rem!important;
    margin: 0 0 2rem!important;
    border-radius: 1rem!important;
    overflow: hidden!important;

    ${Media.mobile} {
      max-width: 100%!important;
    }
  }

  .rws-header {
    font-size: 2rem!important;
    margin: 2.4rem auto;
    text-align: center;
  }

  .rws-close {
    font-size: 2rem!important;
    font-weight: bold;
    background: ${Color.orange}!important;
  }
`

export const ExternalLink = styled.a`
  display: inline-block;
  color: ${Color.text1};
  font-size: inherit;
  white-space: nowrap;

  &::after {
    content: "↗";
    color: inherit;
    font-size: ${Font.sizeDefault};
    display: inline-block;
    margin: 0 0 0 0.2rem;
  }
`

export const DropDown = styled.div`
  border: 0.1rem solid ${transparentize(0.9, Color.text1)};
  border-radius: 0.6rem;
  width: 100%;
  padding: 0;
  background: ${Color.text1};
  color: ${Color.text1};
  font-size: 1.8rem;
  margin: 0 0 2.4rem;
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  font-family: ${Font.default};

  &::after {
    content: "▼";
    position: absolute;
    border: 0;
    color: inherit;
    font-size: ${Font.sizeDefault};
    display: flex;
    align-items: center;
    pointer-events: none;
    margin: auto;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 1.2rem;
    cursor: pointer;
  }

  > select {
    appearance: none;
    cursor: pointer;
    height: 100%;
    padding: 1.2rem;
    width: 100%;
    display: block;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    border: 0;
    border-radius: inherit;
    background: ${transparentize(0.9, Color.text1)};

      &:focus {
        outline: none;
      }

      > option {
        background-color: ${Color.black};
        color: ${Color.text1};
      }
  }
`

export const CopyIcon = styled.div<{size?: number}>`
  --size: ${({ size }) => size ? `${size}rem` : '1.6rem'};
  cursor: pointer;
  display: inline-block;
  height: var(--size);
  width: var(--size);
  background: url('copy.svg') no-repeat center/contain;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;

    &:hover {
      opacity: 1;
    }
`

export default GlobalStyles
