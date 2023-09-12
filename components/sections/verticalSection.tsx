"use client";
import styled from "styled-components";
import FullHeightContainer from "../fullHeightContainer";
import "@/styles/components/verticalSection.scss";

type Props = {
  heading: string;
  description: string;
  children: React.ReactNode;
  className?: string;
};

const TextContainer = styled.div`
  text-align: center;
  font-family: var(--font-raleway);
  text-transform: uppercase;
  color: var(--primary-text-color);

  h2 {
    font-weight: bold;
    letter-spacing: 2px;
  }

  p {
    font-size: calc(10.5px + 0.25vw);
  }
`;

export default function VerticalSection({
  heading,
  description,
  children,
  className,
}: Props) {
  return (
    <FullHeightContainer className={`row ${className}`}>
      <div className="col-md-12 vertical-section">
        <TextContainer>
          <h2>{heading}</h2>
          <p>{description}</p>
        </TextContainer>

        {children}
      </div>
    </FullHeightContainer>
  );
}
