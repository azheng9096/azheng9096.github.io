"use client";

import "@/styles/components/navbar.scss";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

type Props = {
  links: NavBarLink[];
};

type NavBarLink = {
  title: string;
  href: string;
};

export default function NavBar({ links }: Props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar navbar-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="mb-0 h1">
          AZ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            {links.map((link, idx) => (
              <Nav.Link key={idx} href={link.href}>
                {link.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
