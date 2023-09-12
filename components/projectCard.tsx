"use client";
import { Card } from "react-bootstrap";
import "@/styles/components/projectCard.scss";
import styled from "styled-components";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

const CardImg = styled.div<{ imgPath?: string | undefined }>`
  width: 100%;
  background-color: rgba(130, 130, 130, 0.5);

  display: block;

  background-repeat: no-repeat;
  background-blend-mode: multiply;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: multiply;
  background-position: center;

  ${(props) =>
    props.imgPath && `background-image: url('images/${props.imgPath}')`}
`;

const CardHeader = styled.small`
  display: block;
  margin-bottom: 7.5px;

  color: var(--secondary-text-color);
  font-family: var(--font-raleway);
  font-weight: 300;
  letter-spacing: 1.5px;
  font-size: calc(7.25px + 0.25vw);
  text-transform: uppercase;
`;

export default function ProjectCard({ project }: Props) {
  return (
    <Card>
      <CardImg className="sixteen-to-nine"></CardImg>
      <Card.Body>
        <CardHeader>{project.tags.join(", ")}</CardHeader>
        <Card.Title>{project.header}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <a href={project.link?.href} className="btn">
          {project.link?.content || "Currently Unavailable"}
        </a>
      </Card.Body>
    </Card>
  );
}
