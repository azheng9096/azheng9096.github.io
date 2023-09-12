import Header from "@/components/header";
import HorizontalScrollContainer from "@/components/horizontalScrollContainer";
import NavBar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import ProjectsCarousel from "@/components/projectsCarousel";
import HorizontalSection from "@/components/sections/horizontalSection";
import VerticalSection from "@/components/sections/verticalSection";
import { AspectRatio } from "@/utils/constants";
import { CarouselContentAlignment } from "@/utils/projectsCarousel";
import projectData from "@/json/projects.json";
import Footer from "@/components/footer";

const navLinks = [
  { title: "Games", href: "#games" },
  { title: "Websites", href: "#websites" },
  { title: "Programs", href: "#programs" },
];

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/azheng9096",
    imagePath: "github.png",
  },
  {
    title: "Handshake",
    href: "https://nyu.joinhandshake.com/stu/users/27360975",
    imagePath: "handshake.png",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/anna-zheng-965866203/",
    imagePath: "linkedin.png",
  },
];

export default function Home() {
  return (
    <>
      <NavBar links={navLinks} />
      <div className="container-fluid">
        <Header links={socialLinks} />
        <HorizontalSection
          className="primary-background"
          {...projectData.games}
        >
          <ProjectsCarousel
            content={projectData.games.projects}
            rows={2}
            cols={2}
            smDeviceCondense
          />
        </HorizontalSection>
        <VerticalSection
          {...projectData.websites}
          className="secondary-background"
        >
          <HorizontalScrollContainer>
            {projectData.websites.projects.map((proj, idx) => (
              <ProjectCard project={proj} key={idx}></ProjectCard>
            ))}
          </HorizontalScrollContainer>
        </VerticalSection>
        <HorizontalSection
          className="primary-background"
          {...projectData.programs}
        >
          <ProjectsCarousel
            content={projectData.programs.projects}
            rows={2}
            cols={3}
            aspectRatio={AspectRatio.OneToOne}
            contentAlign={CarouselContentAlignment.End}
            projectSpacing={5}
          />
        </HorizontalSection>
        <Footer
          links={[{ title: "Top", href: "#" }, ...navLinks]}
          icons={socialLinks}
        />
      </div>
    </>
  );
}
