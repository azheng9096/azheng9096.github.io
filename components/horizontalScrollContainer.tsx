"use client";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ScrollContainer = styled.div`
  width: 90%;
  overflow-x: auto;

  padding-top: 75px;
  padding-bottom: 75px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.35);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.35);
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(85, 85, 85);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: fit-content;

  /* This will align cards in center when not overflow-x */
  margin-left: auto;
  margin-right: auto;

  /* In case ScrollContainer sets a height */
  margin-top: auto;
  margin-bottom: auto;
`;

export default function HorizontalScrollContainer({ children }: Props) {
  return (
    <ScrollContainer>
      <ContentContainer>{children}</ContentContainer>
    </ScrollContainer>
  );
}
