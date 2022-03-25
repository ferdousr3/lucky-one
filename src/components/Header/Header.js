import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar className="header" fixed="top" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Burger Hut</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">About</Nav.Link>
              <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
