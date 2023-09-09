import NavBar from "@/components/navbar";

const navLinks = [
  { title: "Games", href: "#games" },
  { title: "Websites", href: "#websites" },
  { title: "Programs", href: "programs" },
];

export default function Home() {
  return (
    <main>
      <NavBar links={navLinks} />
    </main>
  );
}
