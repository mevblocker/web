import styled from 'styled-components';
import { Color, Font, Media } from '@src/const/styles/variables'
import {Wrapper as TextLinkWrapper} from '@src/components/TextLink'

export const SectionWrapper = styled.div<{ fixed?: boolean, backgroundColor?: string, borderDown?: boolean }>`
  --sectionMaxWidth: 64rem;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  margin: 0 auto;
  padding: 5.6rem 0;
  width: 100%;
  background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'transparent'};
  border-bottom: ${({ borderDown }) => borderDown ? `0.2rem solid ${Color.black}` : 'none'};

  ${TextLinkWrapper} {
    width: 100%;
    text-align: center;
    margin: 4.2rem auto;
    font-size: 1.8rem;

  }
`

export const Section = styled.section<{bgColor?: string, imageMaxHeight?: number, imageMaxWidth?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5.6rem;
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

  img {
    margin: auto;
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: auto
  }
`

export const Anchor = styled.span`
  display: block;
  position: relative;
  top: -9rem;
  visibility: hidden;
`

export const SectionContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: var(--sectionMaxWidth);
  height: auto;
  padding: 0;
  margin: 9rem 0;
  justify-content: center;
  align-items: flex-start;

  ${Media.desktopDown} {
    max-width: 100%;
    height: auto;
    padding: 3rem 3rem 0;
  }

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
    text-align: left;
    font-size: 7rem;
    line-height: 1.1;
    color: ${Color.text1};
    font-weight: ${Font.weightBold};
    margin: 0 0 2.4rem;

    /* ${Media.desktopSmallHeight} {
      font-size: 3rem;
    } */

    > b {
      font-weight: ${Font.weightBold};
    }

    ${Media.desktopDown} {
      font-size: 3.2rem;
    }
  }

  > h2 {
    margin: 2.4rem 0;
    font-weight: ${Font.weightBold};

    ${Media.desktopDown} {
      font-size: 2.4rem;
      margin: 2.4rem 0;
    }
  }

  > h3 {
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
    text-align: left;
    font-weight: ${Font.weightNormal};
    line-height: 1.6;
    margin: 0 0 2.4rem;
    word-break: break-word;
  }

  .large-text {
    font-size: 2.8rem;
  }

  .section_FAQ {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    margin: 2.4rem 0;
    width: var(--sectionMaxWidth);
    gap: 1.2rem;
  }

  details {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 0 auto;
    line-height: 1;
    font-size: 2rem;
  }

  details > summary {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    list-style-type: none;
    line-height: 1;

    &::before {
      content: '+';
      display: inline-block;
      text-align: center;
      margin: 0 1rem 0 0;
      width: 1rem;
    }
  }

  details[open] > summary::before {
    content: '−';
  }

  details > div {
    line-height: 1.5;
    margin: 1.2rem 0 2.4rem 2rem;
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