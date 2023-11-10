import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Logo from "./Logo";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const scrollToEmail = () => {
    const emailSection = document.getElementById("email");
    if (emailSection) {
      emailSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? " scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Link
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "project" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text nav-container">
            <div className="social-icon container">
              <a
                href="https://www.linkedin.com/in/amir-roshan-525212271/"
                className="nav-icon p-2"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="fa-icon"
                  target="_blank"
                />
              </a>
              <a
                href="https://www.instagram.com/amir.__.roshan/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon p-2"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="fa-icon"
                />
              </a>

              <a href="https://github.com/amir-roshan" className="nav-icon p-2">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="fa-icon"
                  target="_blank"
                />
              </a>
              <a
                href="https://twitter.com/AmirRos45907438"
                className="nav-icon p-2"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  className="fa-icon"
                />
              </a>
              <button className="vvd " onClick={scrollToEmail}>
                <span>Let's Connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
