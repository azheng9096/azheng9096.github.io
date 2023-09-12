"use client";

import { Row } from "react-bootstrap";

type Props = {
  heading: string;
  description: string;
  extraInfo?: string;
  children: React.ReactNode;
};

export default function HorizontalSection({ children }: Props) {
  return (
    <Row>
      <div className="col-md-3 text-white d-flex flex-column justify-content-center align-items-center">
        <h2></h2>
        <p></p>
        <small></small>
      </div>
      <div className="col-md-9 d-flex align-items-center justify-content-center">
        {children}
      </div>
    </Row>
  );
}
