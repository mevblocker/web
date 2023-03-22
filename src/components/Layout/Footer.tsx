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
  font-size: 1.4rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  color: inherit;
  padding: 2.4rem 0;
  margin: 0;
  width: 100%;

  ${Media.desktopDown} {
    text-align: center;
    flex-flow: column wrap;
    font-size: 1.4rem;
    gap: 2.4rem;
  }

  > li > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;

    &:hover {
      text-decoration: underline;
      color: ${Color.text1};

      ${Media.desktopDown} {
        color: ${Color.text1};
      {
    }
  }
`

export default function Footer({ siteConfig, menu }) {
  const { social } = siteConfig
  const currentYear = new Date().getFullYear()

  return (
    <Wrapper>
      <Menu>
        {menu.length > 0 && <>{menu.map(({ id, title, url, target }) => (
          <li key={id}>
            <Link href={url}>{title}</Link>
          </li>
        ))}</>}
        <li>©{siteConfig.titleShort} {currentYear}</li>
      </Menu>

    </Wrapper >
  )
}