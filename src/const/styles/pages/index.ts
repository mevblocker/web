import styled from 'styled-components';
import { Color, Font, Media } from '@src/const/styles/variables'
import {Wrapper as TextLinkWrapper} from '@src/components/TextLink'

export const SectionWrapper = styled.div<{ fixed?: boolean }>`
  display: flex;
  flex-flow: row wrap;
  position: ${({ fixed }) => fixed ? 'fixed' : 'relative'};
  top: ${({ fixed }) => fixed ? '0' : 'initial'};
  height: 100vh;

  ${Media.desktopDown} {
    position: relative;
    height: auto;
  }

  ${TextLinkWrapper} {
    width: 100%;
    text-align: center;
    margin: 4.2rem auto;
    font-size: 1.8rem;

  }
`

export const Section = styled.section<{ split?: boolean, hasImage?: boolean, bgColor?: string, imageMaxHeight?: number, imageMaxWidth?: number }>`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-flow: row wrap;
  background: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};

  ${Media.desktopDown} {
    height: auto;
    max-width: 86rem;
    margin: 0 auto;
    min-height: initial;
    flex-flow: column wrap;
  }

  ${({ split }) => (split && `
    width: 50%;
    flex: 0 1 50%;

    ${Media.desktopDown} {
      width: 100%;
      flex: 1 1 100%;
    }
  `)}

  img {
    margin: auto;
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: auto

    ${({ split, hasImage }) => (split && hasImage && `
        max-width: 40%;
        max-height: 40%;
    `)}

    ${Media.desktopDown} {

      ${({ split, hasImage }) => (split && hasImage && `
        max-width: 60%;
        max-height: 60%;
      `)}
    }
  }

  ${({ split, hasImage }) => (split && hasImage && `
    ${Media.desktopDown} {
      width: 100%;
      order: 2;
    }
  `)}

  ${({ split }) => (split && `
    ${Media.desktopDown} {
      max-width: 100%;
    }
  `)}
`

export const Anchor = styled.span`
  display: block;
  position: relative;
  top: -9rem;
  visibility: hidden;
`

export const SectionContent = styled.div<{ split?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 77rem;
  height: auto;
  padding: 0 9rem;
  margin: 9rem auto;
  justify-content: center;

  ${Media.desktopDown} {
    max-width: 100%;
    height: auto;
    padding: 3rem 3rem 0;
  }

  ${({ split, hasImage }) => (split && !hasImage && `
    ${Media.desktopDown} {
      max-width: 86rem;
    }
  `)}

  > hr {
    width: 100%;
    border: 0;
    height: 0.1rem;
    background: ${Color.text1};
    display: block;
    margin: 0 0 2.4rem;
    opacity: 0.3;
  }

  > h1,
  > h2,
  > h3 {
    text-align: ${({ split }) => split ? 'center' : 'left'};
    font-size: 5rem;
    line-height: 1.3;
    color: ${Color.darkBlue};
    font-weight: ${({ split }) => split ? Font.weightLight : Font.weightBold};
    margin: ${({ split }) => split ? '0 0 5.6rem' : '0 0 2.4rem'};

    ${Media.desktopSmallHeight} {
      font-size: 3rem;
    }

    > b {
      font-weight: ${Font.weightBold};
    }

    ${Media.desktopDown} {
      font-size: 3.2rem;
    }
  }

  > h2 {
    font-size: 3rem;
    margin: 2.4rem 0;
    font-weight: ${Font.weightBold};

    ${Media.desktopDown} {
      font-size: 2.4rem;
      margin: 2.4rem 0;
    }
  }

  > h3 {
    font-size: 2rem;
    margin: 0;
    font-weight: ${Font.weightBold};

    ${Media.desktopDown} {
      font-size: 2rem;
      margin: 2rem 0;
    }
  }

  > p,
  > small,
  > ul,
  > ol {
    font-size: 1.8rem;
    text-align: ${({ split }) => split ? 'center' : 'left'};
    font-weight: ${Font.weightNormal};
    line-height: 1.6;
    margin: ${({ split }) => split ? '0 0 5.6rem' : '0 0 2.4rem'};
    word-break: break-word;
  }

  > p > strong,
  > small {
    color: ${Color.darkBlue};
  }


`

export const Content = styled.main`
  margin: 0 auto;
  padding: 8rem 3.2rem;
  box-sizing: border-box;
  width: 100%;
  max-width: 90rem;
  display: flex;
  flex-flow: column wrap;
  min-height: 80rem;

  ${Media.desktopDown} {
    height: auto;
    max-width: 100%;
    min-height: initial;
  }

  p {
    margin: 0 0 1.6rem;
    font-size: ${Font.sizeDefault}rem;
    color: ${Color.text1};
    line-height: 1.4;
  }
`