"use client";
import { Project } from "@/types/project";
import { AspectRatio, deviceSizes, projectImagePath } from "@/utils/constants";
import { Carousel, CarouselItem } from "react-bootstrap";
import styled from "styled-components";
import "@/styles/components/projectsCarousel.scss";
import { CarouselContentAlignment } from "@/utils/projectsCarousel";
import { useEffect } from "react";
import $ from "jquery";

type Props = {
  content: Project[];
  rows: number;
  cols: number;
  aspectRatio?: AspectRatio;
  contentAlign?: CarouselContentAlignment;
  smDeviceCondense?: boolean;
  projectSpacing?: number;
};

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

    &.condense-sm {
      flex-direction: column;
    }
  }
`;

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

const CarouselCol = styled.div<{ spacing: number | undefined }>`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: ${(props) => props.spacing || 0}px;
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
  tags: ["TBD"],
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
  smDeviceCondense = false,
  projectSpacing,
}: Props) {
  const projsPerPage = rows * cols;

  // content = content.concat(
  //   Array(projsPerPage - (content.length % projsPerPage)).fill(defaultProject)
  // );

  if (!content.length) {
    content = [defaultProject];
  }

  useEffect(() => {
    $(".carouselBoxDiv")
      .on("mouseenter", function () {
        // .carouselBoxContent initial display is none, need to set it to flex or else it's default block
        $(this)
          .find(".carouselBoxContent")
          .stop()
          .fadeIn(300)
          .css("display", "flex");

        // can also do $(this).find(".carouselBoxContent").stop().css("display", "flex").hide().fadeIn(300);
        // need to hide() after css() or else it would not fade in
      })
      .on("mouseleave", function () {
        $(this).find(".carouselBoxContent").stop().fadeOut(300);
      });

    $(".carouselBoxContentBody button").on("click", function (e) {
      e.stopPropagation(); // works without this line, although it's supposed to prevent event bubbling
      e.preventDefault(); // needed
    });
  });

  return (
    <CarouselWrapper>
      <Carousel interval={null}>
        {group(content, projsPerPage).map((page, pageIdx) => (
          <CarouselItem key={pageIdx}>
            <CarouselContent
              className={`w-100 ${smDeviceCondense && "condense-sm"}`}
            >
              {group(
                page.concat(
                  Array(projsPerPage - page.length).fill(defaultProject)
                ),
                cols
              ).map((row, rowIdx) => (
                <CarouselRow key={rowIdx}>
                  {row.map((col, colIdx) => (
                    <CarouselCol spacing={projectSpacing} key={colIdx}>
                      <CarouselBoxLinkWrap href={col.link?.href}>
                        <div
                          className={`carouselBoxDiv ${aspectRatio}`}
                          style={
                            col.imagePath
                              ? {
                                  backgroundImage: `url(${projectImagePath}/${col.imagePath})`,
                                }
                              : {}
                          }
                        >
                          <div className={`carouselBoxContent ${contentAlign}`}>
                            <CarouselBoxContentWrapper>
                              <Heading>
                                {col.header}
                                {col.requestReq && "*"}
                              </Heading>
                              <p className="carouselBoxContentBody">
                                {col.description}
                              </p>
                              <div className="carouselBoxContentTagsContainer">
                                {col.tags.map((tag, tagIdx) => (
                                  <Tag
                                    className="carouselBoxContentTag"
                                    key={tagIdx}
                                  >
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
