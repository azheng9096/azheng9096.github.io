"use client";
import { Project } from "@/types/project";
import { deviceSizes } from "@/utils/constants";
import { Carousel, CarouselItem } from "react-bootstrap";
import styled from "styled-components";
import "@/styles/components/projectsCarousel.scss";

type Props = {
  content: Project[];
  rows: number;
  cols: number;
  aspectRatio?: AspectRatio;
  contentAlign?: CarouselContentAlignment;
};

enum AspectRatio {
  OneToOne = "one-to-one",
  FourToThree = "four-to-three",
  SixteenToNine = "sixteen-to-nine",
}

enum CarouselContentAlignment {
  Center = "carousel-content-center",
  End = "carousel-content-end",
}

const CarouselRow = styled.div`
  @media only screen and ${deviceSizes.lg} {
    width: 100%;
    display: flex;
  }

  @media only screen and ${deviceSizes.md} {
    width: 100%;
    display: flex;
  }

  @media only screen and ${deviceSizes.sm} {
    display: flex;
    flex-direction: column;
  }
`;

const CarouselCol = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselContent = styled.div`
  padding-left: 12.5%;
  padding-right: 12.5%;
  padding-top: 50px;
  padding-bottom: 50px;

  @media only screen and ${deviceSizes.lg} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and ${deviceSizes.md} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and ${deviceSizes.sm} {
    display: flex;
    justify-content: center;

    & > * {
      flex: 1;
    }
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CarouselBoxContentWrapper = styled.div`
  width: 100%;

  overflow-y: auto;
  padding: 15px;

  button {
    color: rgba(255, 255, 255, 0.65);
    background-color: transparent;

    border: none;

    margin: 0;
    padding: 0;

    text-align: left;

    display: contents;
    pointer-events: initial;

    &:hover {
      color: var(--secondary-text-color);
    }

    &:active {
      background-color: var(--transparent);
    }
  }

  a {
    position: relative;
    z-index: 2;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: color ease-in-out 0.3s;

    &:hover {
      color: var(--secondary-text-color);
    }
  }

  * {
    margin-bottom: 5px;
  }
`;

const CarouselBoxLinkWrap = styled.a`
  width: 100%;
`;

// .carouselBoxContentHeading
const Heading = styled.h5`
  font-size: calc(12.5px + 0.5vw);
`;

const Tag = styled.p`
  margin-bottom: 5px;

  width: fit-content;
  border: 1px solid var(--primary-text-color);
  text-transform: uppercase;

  @media only screen and ${deviceSizes.lg} {
    padding: 0.1vw 1.25vw;

    border-radius: 1.5vw;
    margin-right: 0.75vw;

    font-size: calc(6.75px + 0.25vw);
    letter-spacing: 0.5px;
  }

  @media only screen and ${deviceSizes.md} {
    padding: 0.15vw 1.75vw;
    margin-right: 2vw;

    border-radius: 2vw;

    font-size: calc(5.25px + 0.25vw);
    letter-spacing: 0.5px;
  }

  @media only screen and ${deviceSizes.sm} {
    padding: 0.15vw 3.75vw;

    border-radius: 3.5vw;

    font-size: 2vw;
    letter-spacing: 0.5px;
  }
`;

const defaultProject: Project = {
  header: "Coming Soon",
  description: "Please anticipate its arrival",
  tags: [],
  imagePath: null,
};

const group = (items: Project[], n: number) => {
  if (n <= 0) return [items];

  return items.reduce<Project[][]>((acc, curr, i) => {
    const idx = Math.floor(i / n);
    acc[idx] = [...(acc[idx] || []), curr];
    return acc;
  }, []);
};

export default function ProjectsCarousel({
  content,
  rows,
  cols,
  aspectRatio = AspectRatio.FourToThree,
  contentAlign = CarouselContentAlignment.Center,
}: Props) {
  const projsPerPage = rows * cols;

  // content = content.concat(
  //   Array(projsPerPage - (content.length % projsPerPage)).fill(defaultProject)
  // );

  if (!content.length) {
    content = [defaultProject];
  }

  return (
    <CarouselWrapper>
      <Carousel>
        {group(content, projsPerPage).map((page) => (
          <CarouselItem>
            <CarouselContent className="w-100">
              {group(
                content.concat(
                  Array(projsPerPage - page.length).fill(defaultProject)
                ),
                cols
              ).map((row) => (
                <CarouselRow>
                  {row.map((col) => (
                    <CarouselCol>
                      <CarouselBoxLinkWrap>
                        <div className={`carouselBoxDiv ${aspectRatio}`}>
                          <div className={`carouselBoxContent ${contentAlign}`}>
                            <CarouselBoxContentWrapper>
                              <Heading>{col.header}</Heading>
                              <p className="carouselBoxContentBody">
                                {col.description}
                              </p>
                              <div className="carouselBoxContentTagsContainer">
                                {col.tags.map((tag) => (
                                  <Tag className="carouselBoxContentTag">
                                    {tag}
                                  </Tag>
                                ))}
                              </div>
                            </CarouselBoxContentWrapper>
                          </div>
                        </div>
                      </CarouselBoxLinkWrap>
                    </CarouselCol>
                  ))}
                </CarouselRow>
              ))}
            </CarouselContent>
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
}
