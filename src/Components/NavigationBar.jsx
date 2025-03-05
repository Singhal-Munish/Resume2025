import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  return (
    <div className='container-fluid gx-0 naviBar'>
      <Navbar bg="black" data-bs-theme="dark">
        <Container fluid='xl gx-0'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">AboutMe</Nav.Link>
            <NavDropdown title="Portfolio" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Resume2025/projects">NYE Bash 2025</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Resume2025/projects">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Resume2025/projects">E-Comm</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar