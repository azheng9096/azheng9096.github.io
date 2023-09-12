"use client";

import Image from "next/image";
import profilePic from "../public/images/birb.jpg";
import "@/styles/components/header.scss";
import styled from "styled-components";
import { deviceSizes } from "@/utils/constants";

type Props = {
  links: SocialLink[];
};

type SocialLink = {
  title: string;
  href: string;
};

const Display = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 70%;

  @media only screen and ${deviceSizes.lg} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

  @media only screen and ((${deviceSizes.md}) or (${deviceSizes.sm})) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderTextContainer = styled.div`
  @media only screen and ${deviceSizes.lg} {
    margin-right: 2.5vw;
  }

  @media only screen and ${deviceSizes.md} {
    margin-top: 2vw;
  }

  @media only screen and ${deviceSizes.sm} {
    margin-top: 2.5vw;
  }
`;

const Title = styled.h1`
  font-family: var(--font-raleway);
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
`;

const Sub = styled.div`
  font-family: var(--font-raleway);
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  font-size: calc(12.5px + 0.25vw);
`;

export default function Header({ links }: Props) {
  return (
    <div className="row">
      <div className="col-md-12 text-white" id="header">
        <Display>
          <Image src={profilePic} alt="Profile Picture" />
          <HeaderTextContainer>
            <Title>
              Welcome to <span id="headerName">Anna Zheng's</span> Portfolio
            </Title>
            <hr />
            <Sub>
              <p>
                Code, Design, Create. Contact me at{" "}
                <span>anna.zheng@nyu.edu</span>
              </p>
            </Sub>
          </HeaderTextContainer>
        </Display>

        <div id="headerSocial">
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
