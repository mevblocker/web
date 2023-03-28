import styled, {css} from 'styled-components';
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

export const Section = styled.section<{columns?: number, bgColor?: string, imageMaxHeight?: number, imageMaxWidth?: number }>`
  display: grid;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  grid-template-columns: ${({ columns }) => columns ? `repeat(${columns}, 1fr)` : '1fr'};
  gap: 5.6rem 0;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  min-height: 50vh;
  flex-flow: row wrap;
  background: ${({ bgColor }) => bgColor ? bgColor : 'transparent'};

  ${Media.mediumDown} {
    display: flex;
    height: auto;
    max-width: 86rem;
    margin: 0 auto;
    min-height: initial;
    flex-flow: column wrap;
    gap: 0;
  }

  img {
    margin: auto;
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
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
  padding: 0 2.4rem;
  margin: 9rem auto;
  justify-content: center;
  align-items: ${({ align }) => align === 'center' ? 'center' : 'flex-start'};

  ${Media.mediumDown} {
    max-width: 100%;
    height: auto;
    padding: 0 2.4rem 0;
    margin: 4rem auto 0;
    align-items: center;
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
    font-size: 6rem;
    line-height: 1.1;
    color: ${Color.text1};
    font-weight: ${Font.weightBold};
    margin: 0 0 2.4rem;

    ${Media.mediumDown} {
      text-align: center;
    }

    ${Media.mobile} {
      margin: 2.4rem 0;
    }

    > b {
      font-weight: ${Font.weightBold};
    }
  }

  > h1 {
    ${Media.mobile} {
      font-size: 3.5rem;
    }
  }

  > h2 {
    margin: 2.4rem 0;
    font-weight: ${Font.weightBold};

    ${Media.mobile} {
      font-size: 3rem;
    }
  }

  > h3 {
    margin: 0 0 3.2rem;
    font-weight: ${Font.weightBold};

    ${Media.mobile} {
      font-size: 4rem;
    }
  }

  > h5 {
    font-size: 2.5rem;
    line-height: 1.3;
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
    margin: 0 0 3.2rem;
    word-break: break-word;

    ${Media.mobile} {
      font-size: 1.6rem;
      text-align: center;
    }
  }

  .large-text {
    font-size: 2.8rem;

    ${Media.mobile} {
      font-size: 1.9rem;
    }
  }

  .centered-text {
    text-align: center;
    margin: 4.2rem auto 0;
  }

  .section_FAQ {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    margin: 2.4rem 0;
    width: var(--sectionMaxWidth);

    ${Media.mobile} {
      width: 100%;
      gap: 2.4rem;
    }
  }

  details {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    line-height: 1;
    font-size: 2.4rem;
    position: relative;

    ${Media.mobile} {
      font-size: 2rem;
    }
  }

  details > summary {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: ${Font.weightBold};
    cursor: pointer;
    margin: 0;
    padding: 1rem 2.8rem 1rem 0;
    list-style-type: none;
    line-height: 1.2;
    border-bottom: 0.2rem solid ${Color.black};
    position: relative;

    &::marker,
    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: '+';
      display: flex;
      align-items: center;
      text-align: center;
      margin: auto;
      position: absolute;
      font-size: 2.8rem;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  details > div {
    font-size: 2rem;
    line-height: 1.5;
    margin: 0;
    padding: 0 0 2.4rem;
  }

  details[open] > div {
    border-bottom: 0.2rem solid ${Color.black};
  }

  details[open] > summary {
    border-bottom: 0.2rem solid transparent;
  }

  details[open] > summary::after{
    content: '−';
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

  ${Media.mobile} {
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

export const HeroImage = styled.div`
  --size: 60rem;
  display: flex;
  position: relative;
  width: var(--size);
  height: var(--size);
  max-width: 45vw;

  ${Media.desktopDown}  {
    --size: 50rem;
  }

  ${Media.mobile} {
    --size: 40rem;
    max-width: 100%;
  }

  > img {
    position: absolute;
  }

  .person {
    right: 0;
    bottom: 0;
    height: 33rem;

    ${Media.mobile} {
      height: 100%;
      width: 100%;
      max-height: 33rem;
      max-width: 100%;
    }
  }

  .sandwhich-2 {
    right: 6%;
    bottom: 58%;
    height: 22rem;
    width: auto;
    animation: moveIn 2s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.desktopDown}  {
      height: 17rem;
      bottom: 63%;
    }

    ${Media.mobile} {
      height: 12rem;
      bottom: 68%;
    }
  }

  .sandwhich-1 {
    left: 18%;
    bottom: 56%;
    height: 20rem;
    width: auto;
    animation: moveIn 2s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.desktopDown}  {
      bottom: 67%;
      left: 21%;
      height: 14rem;
    }

    ${Media.mobile} {
      height: 11rem;
      bottom: 70%;
    }
  }

  .tomato-1 {
    left: 9%;
    bottom: 60%;
    height: 5rem;
    width: auto;
    animation: moveIn 4s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.mobile} {
      height: 2.5rem;
      bottom: 70%;
      left: 15%;
    }
  }

  .tomato-2 {
    right: 41%;
    bottom: 72%;
    height: 10rem;
    width: auto;
    animation: moveIn 4s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.mediumDown} {
      height: 4rem;
    }

    ${Media.mobile} {
      height: 5rem;
      bottom: 74%;
    }
  }

  .leaf-1 {
    left: 0;
    bottom: 77%;
    height: 5rem;
    width: auto;
    animation: moveIn 1.5s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.mobile} {
      height: 2.5rem;
      bottom: 60%;
      left: 6%;
    }
  }

  .leaf-2 {
    right: 0;
    bottom: 50%;
    height: 5rem;
    width: auto;
    animation: moveIn 3s forwards cubic-bezier(.62,.16,.13,1.01);

    ${Media.desktopDown} {
      bottom: 59%;
    }

    ${Media.mobile} {
      height: 2.5rem;
      bottom: 44%;
      right: 7%;
    }
  }

  @keyframes moveIn {
    0% {
      transform: translateY(-70%) rotate(-5deg);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
`

export const CardWrapper = styled.div<{count?: number, cardRotate?: boolean}>`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  display: grid;
  grid-template-columns: ${({ count }) => count ? `repeat(${count}, 1fr)` : 'unset'};
  gap: 2.4rem;
  align-items: stretch;
  width: 100%;

  ${({ cardRotate }) => cardRotate && css`
    gap: 3.8rem; 

    > div:nth-child(3n) {
      transform: rotate(-3deg);
    }
    > div:nth-child(2n + 1) {
      transform: rotate(3deg);
    }
  `}

  ${Media.mediumDown} {
    display: flex;
    flex-flow: column wrap;
  }
`

export const CardItem = styled.div<{ backgroundColor?: string, fontSize?: number }>`
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}rem` : '1.6rem'};
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
  gap: 2.4rem;

  ${Media.mobile} {
    
  }

  h4 {
    width: 100%;
    font-size: 2.1rem;
    text-align: center;
    margin: 1.6rem auto 0;
  }

  > p {
    margin: auto;
  }

  table {
    width: 100%;
    border-spacing: 0.5rem;

    ${Media.mobile} {
      border-spacing: 0;
      display: flex;
      flex-flow: column wrap;
    }
  }

  table > tbody {
    ${Media.mobile} {
      display: flex;
      flex-flow: column wrap;
      gap: 2rem;
    }
  }

  table tr {
    ${Media.mobile} {
      display: flex;
      flex-flow: column wrap;
      gap: 0.6rem;
    }
  }

  table tr > td:last-of-type {
    padding: 0 0 0 1rem;

    ${Media.mobile} {
      padding: 0;
    }
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
  align-items: flex-start;
  justify-content: center;

  ${Media.mediumDown} {
    gap: 2.4rem;
  }

  ${Media.mobile} {
    flex-flow: column wrap;
    gap: 8rem;
  }
`

export const USPItem = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: calc(100% / 3);
  margin: 0 0 4.2rem;
  padding: 0 1.4rem;
  gap: 2.4rem;

  ${Media.mediumDown} {
    margin: 0 auto;
  }

  ${Media.mobile} {
    width: 100%;
    padding: 0;
  }

  > h4,
  > a {
    font-size: 2.2rem;
    width: 100%;
    line-height: 1.4;
    text-align: center;
    margin: 0;
    display: block;
    color: ${Color.text1};
  }

  > p {
    font-size: 1.3rem;
    margin: 0;
  }

  > img,
  > a > img {
    --size: 24rem;
    width: var(--size);
    height: var(--size);
    max-width: var(--size);
    max-height: var(--size);
    border-radius: var(--size);
    background: ${Color.white};
    border: 0.2rem solid ${Color.black};
    display: block;
    transition: transform 2s ease-in-out;
  }

  > a:hover > img {
    transform: rotate(360deg);
  }
`