import styled from "styled-components";
import Link from "next/link";
import { Color, Media, Font } from "@src/const/styles/variables";
import { Section } from "@src/const/styles/pages";
import { Logo } from "./Header";

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row;
  flex-direction: row;
  gap: 4.8rem;
  padding: 3rem;
  width: 100%;

  ${Media.mediumDown} {
    justify-content: space-around;
  }

  ${Media.mobile} {
    flex-flow: column wrap;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  color: ${Color.text2};
  font-size: ${Font.sizeDefault};
  line-height: 1;

  ${Media.mobile} {
    align-content: center;
    text-align: center;
    justify-content: center;
  }

  > b {
    display: block;
    font-size: 1.6rem;
    color: ${Color.text1};
    margin: 0 0 3rem;

    ${Media.mobile} {
      text-align: center;
      font-size: 1.9rem;
    }
  }
`;

const Menu = styled.ol``;

const CustomLink = styled.li`
  padding: 1rem 0;
  display: block;

  > a {
    font-size: inherit;
    color: inherit;
    text-decoration: none;
    line-height: 1.2;
    color: ${Color.text1};
  }
`;

const Copyright = styled.div`
  text-align: right;
  margin-left: auto;

  > div {
    font-size: 1.5rem;
    margin-top: 20px;
  }

  ${Media.mobile} {
    text-align: center;
    margin-left: initial;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export default function Footer({ siteConfig, menu }) {
  const { titleShort } = siteConfig;
  const currentYear = new Date().getFullYear();

  return (
    <Section>
      <Wrapper>
        {menu.map(({ label, links }, index) => (
          <MenuWrapper key={index}>
            <b>{label}</b>
            <Menu>
              {links.map(({ url, target, onClick, title }, index) => (
                <CustomLink key={index}>
                  <Link href={url} target={target} onClick={onClick}>
                    {title}
                  </Link>
                </CustomLink>
              ))}
            </Menu>
          </MenuWrapper>
        ))}

        <Copyright>
          <Link href={siteConfig.url.home}>
            <Logo menuVisible={true}>
              <img src={"mevblocker-logo.svg"} alt="MEVBlocker.io" />
            </Logo>
          </Link>
          <div>
            ©{titleShort} {currentYear}
          </div>
        </Copyright>
      </Wrapper>
    </Section>
  );
}
