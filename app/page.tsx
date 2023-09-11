import FullHeightContainer from "@/components/fullHeightContainer";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import ProjectsCarousel from "@/components/projectsCarousel";

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

export default function Home() {
  return (
    <>
      <NavBar links={navLinks} />
      <div className="container-fluid">
        <Header links={socialLinks} />
      </div>
      {/* <FullHeightContainer className="primary-background">
        <ProjectsCarousel />
      </FullHeightContainer> */}
    </>
  );
}
