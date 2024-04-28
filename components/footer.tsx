"use client";
import Image from "next/image";
import { deviceSizes } from "@/utils/constants";
import styled from "styled-components";

type Props = {
  links: FooterLink[];
  icons: FooterIcons[];
};

type FooterLink = {
  title: string;
  href: string;
};

type FooterIcons = {
  href: string;
  imagePath: string;
  title?: string;
};

const PortoflioFooter = styled.div`
  min-height: 200px;
  height: fit-content;

  padding-left: 7.5%;
  padding-right: 7.5%;

  display: flex;
  align-items: center;

  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 25px;
    &:not(hr) {
      padding: 25px 0;
    }
  }

  hr {
    /* default CSS hr border styles*/
    border-style: inset;
    border-width: 1px;
    /* default CSS hr opacity*/
    opacity: 1;

    align-self: stretch;
  }

  /*
  @media only screen and ((${deviceSizes.lg}) or (${deviceSizes.md})) {
    hr:not([size]) {
      height: 100%;
    }
  }
  */

  @media only screen and ${deviceSizes.sm} {
    flex-direction: column;
    height: fit-content;
  }
`;

const FooterTextContainer = styled.div`
  * {
    font-size: calc(10px + 0.25vw);
    letter-spacing: 0.25px;
  }

  p {
    margin-bottom: 0;
  }

  @media only screen and ${deviceSizes.sm} {
    text-align: center;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  padding-left: 0;
  margin-bottom: 7.5px;

  li {
    margin-left: 5px;
    margin-right: 5px;
  }

  a {
    color: var(--primary-text-color);
    text-decoration: none;
    text-transform: uppercase;

    transition: color 0.2s ease-in-out;
    &:hover {
      color: var(--secondary-text-color);
    }
  }

  @media only screen and ((${deviceSizes.lg}) or (${deviceSizes.md})) {
    li {
      margin-right: 10px;
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    text-transform: uppercase;
    letter-spacing: 0.25px;
  }

  @media only screen and ((${deviceSizes.lg}) or (${deviceSizes.md})) {
    height: 100px;
  }

  @media only screen and ((${deviceSizes.md}) or (${deviceSizes.sm})) {
    p {
      display: none;
    }
  }

  @media only screen and (${deviceSizes.sm}) {
    height: fit-content;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: calc(25px + 0.5vw);
    width: calc(25px + 0.5vw);
  }

  @media only screen and ${deviceSizes.lg} {
    img {
      margin-right: 10px;
    }
  }

  @media only screen and ((${deviceSizes.md}) or (${deviceSizes.sm})) {
    flex-direction: column;
    img {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }
`;

const SocialMediaText = styled.p`
  font-size: calc(10px + 0.25vw);
`;

export default function Footer({ links, icons }: Props) {
  return (
    <PortoflioFooter className="row">
      <FooterLeft className="col-9">
        <h3 className="mb-0 h3">AZ</h3>
        <hr />
        <FooterTextContainer>
          <FooterLinks>
            {links.map((link, idx) => (
              <li key={idx}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </FooterLinks>
          <p>Created by Anna Zheng</p>
        </FooterTextContainer>
      </FooterLeft>

      <SocialMediaContainer className="col-3">
        <SocialMediaText>Social Media</SocialMediaText>
        <IconsContainer>
          {icons.map((icon, idx) => (
            <a href={icon.href} target="_blank" key={idx}>
              <Image
                src={`/images/${icon.imagePath}`}
                width={50}
                height={50}
                alt={`${icon.title}`}
              />
            </a>
          ))}
        </IconsContainer>
      </SocialMediaContainer>
    </PortoflioFooter>
  );
}
