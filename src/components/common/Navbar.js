import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../css/navbar.css";

function NavbarSection() {
  const [navBackground, setNavBackground] = useState(false);
  const setNavbar = () => {
    if (window.scrollY > 86) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", setNavbar);
    // eslint-disable-next-line
  }, []);
  return (
    // <Navbar
    //   variant={`${navBackground ? "light" : "dark"}`}
    //   expand="md"
    //   fixed="top"
    //   className={`navbar ${navBackground ? "solid" : "transparent"} `}
    // >
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <img
    //         src={logo}
    //         width="60"
    //         height="60"
    //         className="d-inline-block align-top"
    //         alt="SITMUN logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Link to="/" className="navbar-menu">
    //         HOME
    //       </Link>
    //       <Link to="/teams" className="navbar-menu">
    //         TEAM
    //       </Link>
    //       <Link to="/committee" className="navbar-menu">
    //         COMMITTEE
    //       </Link>
    //       <Nav.Link
    //         href="https://forms.gle/porYn6m1M4wPkj9x5"
    //         target="_blank"
    //         className=""
    //       >
    //         <Button className="register-button">REGISTER</Button>
    //       </Nav.Link>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <Navbar
      variant={`${navBackground ? "light" : "dark"}`}
      expand="md"
      fixed="top"
      className={`navbar ${navBackground ? "solid" : "transparent"} `}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="SITMUN logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="/" className="navbar-menu">
            HOME
          </Nav.Link>
          <Nav.Link href="/teams" className="navbar-menu">
            TEAM
          </Nav.Link>
          <Nav.Link href="/committee" className="navbar-menu">
            COMMITTEE
          </Nav.Link>
          <Nav.Link
            href="https://forms.gle/porYn6m1M4wPkj9x5"
            target="_blank"
            className=""
          >
            <Button className="register-button">REGISTER</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
