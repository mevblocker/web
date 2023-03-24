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
  min-height: 50vh;
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

export const SectionContent = styled.div<{maxWidth?: number, align?: string}>`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? `${maxWidth}rem` : 'var(--sectionMaxWidth)'};
  height: auto;
  padding: 0;
  margin: 9rem 0;
  justify-content: center;
  align-items: ${({ align }) => align === 'center' ? 'center' : 'flex-start'};

  ${Media.desktopDown} {
    max-width: 100%;
    height: auto;
    padding: 0 2.4rem 0;
    margin: 2.4rem auto;
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
  > h3,
  > h4,
  > h5 {
    text-align: ${({ align }) => align === 'center' ? 'center' : 'left'};
    font-size: 7rem;
    line-height: 1.1;
    color: ${Color.text1};
    font-weight: ${Font.weightBold};
    margin: 0 0 2.4rem;

    ${Media.desktopDown} {
      margin: 2.4rem 0;
    }

    > b {
      font-weight: ${Font.weightBold};
    }
  }

  > h1 {
    ${Media.desktopDown} {
      font-size: 4.2rem;
    }
  }

  > h2 {
    margin: 2.4rem 0;
    font-weight: ${Font.weightBold};

    ${Media.desktopDown} {
      font-size: 2.4rem;
    }
  }

  > h3 {
    margin: 0 0 3.2rem;
    font-weight: ${Font.weightBold};
  }

  > h5 {
    font-size: 2.8rem;
    margin: 0 0 5.6rem;
    font-weight: normal;
  }

  > p,
  > small,
  > ul,
  > ol {
    font-size: 2.1rem;
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

    ${Media.desktopDown} {
      width: 100%;
      gap: 2.4rem;
    }
  }

  details {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 0 auto;
    line-height: 1;
    font-size: 2.4rem;

    ${Media.desktopDown} {
      font-size: 2rem;
    }
  }

  details > summary {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
    list-style-type: none;
    line-height: 1.2;

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

export const CardWrapper = styled.div<{count?: number}>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  display: grid;
  grid-template-columns: ${({ count }) => count ? `repeat(${count}, 1fr)` : 'unset'};
  gap: 2.4rem;
  align-items: stretch;

  ${Media.desktopDown} {
    display: flex;
    flex-flow: column wrap;
  }
`

export const CardItem = styled.div<{ backgroundColor?: string }>`
  font-size: 1.5rem;
  line-height: 1.1;
  display: flex;
  flex-flow: column wrap;
  align-items: stretch;
  border: 0.2rem solid ${Color.black};
  box-shadow: 0.3rem 0.3rem 0 ${Color.black};
  background: ${({ backgroundColor }) => backgroundColor ? backgroundColor : Color.white};
  border-radius: 0.5rem;
  margin: 0 auto;
  padding: 2.4rem;
  position: relative;
  width: 100%;
  justify-content: space-between;

  h4 {
    width: 100%;
    font-size: 2.1rem;
    text-align: center;
    margin: 1.6rem auto 2.4rem;;
  }

  table {
    width: 100%;
    border-spacing: 0.5rem;
  }

  table tr > td:last-of-type {
    padding: 0 0 0 1rem;
  }

  table td > span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const USPWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`

export const USPItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: calc(100% / 3);
  padding: 0 1.4rem;

  > h4 {
    font-size: 1.8rem;
    width: 100%;
    line-height: 1.1;
  }

  > p {
    font-size: 1.3rem;
  }
`