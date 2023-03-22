import styled, { createGlobalStyle } from 'styled-components'
import { Color, Font, Media } from '@src/const/styles/variables'
import { transparentize } from "polished";

const GlobalStyles = createGlobalStyle`

@font-face {
      font-family: 'Averta';
      src: url('fonts/averta-regular-webfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Averta';
      src: url('fonts/averta-semibold-webfont.woff2') format('woff2');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Averta';
      src: url('fonts/averta-bold-webfont.woff2') format('woff2');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Averta';
      src: url('fonts/averta-extrabold-webfont.woff2') format('woff2');
      font-weight: 900;
      font-style: normal;
      font-display: swap;
  }

  html, body {  
    width: 100%;
    height: 100%;
    min-height: 100vh;
    min-width: 300px;
    margin: 0;
    font-size: 62.5%;
    line-height: 10px;
    font-family: ${Font.default};
    font-display: fallback;
    color: ${Color.text1};
    background-image: ${Color.gradient};
    background-attachment: fixed;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-variant: none;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
    scrollbar-color: ${Color.darkBlue} ${Color.lightBlue};

    &::-webkit-scrollbar {
      width: 2.4rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${Color.lightBlue};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Color.darkBlue};
      border-radius: 10rem;
    }
  }

  *::selection {
    background: ${Color.lightBlue};
    color: ${Color.darkBlue};
  }

  *::-moz-selection {
    background: ${Color.lightBlue};
  }

  *::-webkit-selection {
    background: ${Color.lightBlue};
  }

  *::-moz-placeholder {
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

  h1, h2, h3, p, b, i, strong {
    margin: 0;
    line-height: 1;
  }

  ul, ol {
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
      border-color: ${Color.darkBlue};
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

  .container {
    margin: 0 auto;
  }
`

export const ExternalLink = styled.a`
  display: inline-block;
  color: ${Color.darkBlue};
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
  border: 0.1rem solid ${transparentize(0.9, Color.lightBlue)};
  border-radius: 0.6rem;
  width: 100%;
  padding: 0;
  background: ${Color.darkBlue4};
  color: ${Color.lightBlue};
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
    background: ${transparentize(0.9, Color.darkBlue)};

      &:focus {
        outline: none;
      }

      > option {
        background-color: ${Color.black};
        color: ${Color.darkBlue};
      }
  }
`

export default GlobalStyles
