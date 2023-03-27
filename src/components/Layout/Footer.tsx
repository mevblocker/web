import styled from 'styled-components';
import Link from 'next/link'
import { Color, Media } from '@src/const/styles/variables'

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  width: 100%;
  padding: 0;
  position: relative;
`

const Menu = styled.ol`
  display: flex;
  list-style: none;
  font-size: 1.8rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  color: inherit;
  padding: 2.4rem 0;
  margin: 0;
  width: 100%;

  ${Media.mobile} {
    text-align: center;
    flex-flow: column wrap;
    gap: 3.2rem;
    margin: 2.4rem;
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;

    &:hover {
      text-decoration: underline;
      color: ${Color.text1};

      ${Media.mobile} {
        color: ${Color.text1};
      {
    }
  }
`

export default function Footer({ siteConfig, menu }) {
  const { titleShort } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <Menu>
        {menu.length > 0 && <>{menu.map(({ id, title, url, target }) => (
          <li key={id}>
            <Link href={url} target={target}>{title}</Link>
          </li>
        ))}</>}
        <li>©{titleShort} {currentYear}</li>
      </Menu>

    </Wrapper >
  )
}