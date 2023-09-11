"use client";
import { Carousel, CarouselItem } from "react-bootstrap";

type Props = {
  content: any[];
  rows: number;
  col: number;
  aspectRatio: string;
};

export default function ProjectsCarousel() {
  return (
    <Carousel>
      <CarouselItem></CarouselItem>
    </Carousel>
  );
}
