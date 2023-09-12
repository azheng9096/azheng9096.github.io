"use client";
import styled from "styled-components";
import FullHeightContainer from "../fullHeightContainer";

type Props = {
  heading: string;
  description: string;
  extraInfo?: string;
  className: string;
  children: React.ReactNode;
  smDeviceCondense?: boolean;
};

const TextContainer = styled.div`
  max-width: 90%;
  margin-top: 125px;
  margin-bottom: 125px;

  font-family: var(--font-raleway);
  text-transform: uppercase;

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
  }

  p {
    font-size: calc(10.5px + 0.25vw);
  }

  small {
    font-size: calc(4.25px + 0.25vw);
    letter-spacing: 1.25px;
  }
`;

export default function HorizontalSection({
  heading,
  description,
  extraInfo,
  className,
  children,
}: Props) {
  return (
    <FullHeightContainer className={`row ${className}`}>
      <div className="col-md-3 text-white d-flex flex-column justify-content-center align-items-center">
        <TextContainer className="text-center text-md-start">
          <h2>{heading}</h2>
          <p>{description}</p>
          {extraInfo && <small>{extraInfo}</small>}
        </TextContainer>
      </div>
      <div className="col-md-9 d-flex align-items-center justify-content-center">
        {children}
      </div>
    </FullHeightContainer>
  );
}
