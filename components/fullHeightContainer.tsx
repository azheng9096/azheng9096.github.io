"use client";
import styled from "styled-components";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Container = styled.div`
  min-height: 100vh;
`;

export default function FullHeightContainer({ className, children }: Props) {
  return <Container className={className}>{children}</Container>;
}
