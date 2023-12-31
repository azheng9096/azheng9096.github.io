"use client";
import { ButtonGroup, Card, Dropdown, DropdownButton } from "react-bootstrap";
import "@/styles/components/projectCard.scss";
import styled from "styled-components";
import { Project } from "@/types/project";
import { projectImagePath } from "@/utils/constants";
import React from "react";

type Props = {
  project: Project;
};

const CardImg = styled.div<{ imgpath?: string | undefined }>`
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
    props.imgpath &&
    `background-image: url('/${projectImagePath}/${props.imgpath}')`}
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
      <CardImg
        className="sixteen-to-nine"
        imgpath={project.imagePath}
      ></CardImg>
      <Card.Body>
        <CardHeader>{project.tags.join(", ")}</CardHeader>
        <Card.Title>{project.header}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Dropdown as={ButtonGroup}>
          <a href={project.link?.href} className="btn">
            {project.link?.content || "Currently Unavailable"}
          </a>
          {project.moreLinks && (
            <>
              <Dropdown.Toggle />
              <Dropdown.Menu>
                {project.moreLinks.map((link, idx, proj) => (
                  <React.Fragment key={idx}>
                    <Dropdown.Item href={link.href}>
                      {link.content || "Currently Unavailable"}
                    </Dropdown.Item>
                    {idx < proj.length - 1 && (
                      <hr className="dropdown-divider" />
                    )}
                  </React.Fragment>
                ))}
              </Dropdown.Menu>
            </>
          )}
        </Dropdown>
      </Card.Body>
    </Card>
  );
}
