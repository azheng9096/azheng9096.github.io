import Header from "@/components/header";
import NavBar from "@/components/navbar";
import ProjectsCarousel from "@/components/projectsCarousel";
import HorizontalSection from "@/components/sections/horizontalSection";
import { AspectRatio } from "@/utils/constants";
import { CarouselContentAlignment } from "@/utils/projectsCarousel";

const navLinks = [
  { title: "Games", href: "#games" },
  { title: "Websites", href: "#websites" },
  { title: "Programs", href: "#programs" },
];

const socialLinks = [
  { title: "GitHub", href: "https://github.com/azheng9096" },
  {
    title: "Handshake",
    href: "https://nyu.joinhandshake.com/stu/users/27360975",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anna-zheng-965866203/",
  },
];

const mock = [
  {
    header: "Condemned",
    description:
      "You are a prisoner of the first circle of Hell freed by a strange benefactor who gives you a new purpose in death - fighting your way down to the ninth circle using the chains that once held you captive.",
    tags: ["Unity"],
    imagePath: "",
    link: { href: "https://bluetitanium.itch.io/vk-00m3" },
  },
];

const mockSection = {
  heading: "Game",
  description: "Game Design and Development",
};

export default function Home() {
  return (
    <>
      <NavBar links={navLinks} />
      <div className="container-fluid">
        <Header links={socialLinks} />
      </div>
      <div className="container-fluid">
        <HorizontalSection className="primary-background" {...mockSection}>
          <ProjectsCarousel content={mock} rows={2} cols={2} smDeviceCondense />
        </HorizontalSection>
        <HorizontalSection
          className="primary-background"
          {...mockSection}
          extraInfo="*Repo available upon request and approval"
        >
          <ProjectsCarousel
            content={mock}
            rows={2}
            cols={3}
            aspectRatio={AspectRatio.OneToOne}
            contentAlign={CarouselContentAlignment.End}
            projectSpacing={5}
          />
        </HorizontalSection>
      </div>
    </>
  );
}
