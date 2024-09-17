import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Image, Shimmer } from "react-shimmer";

const Header = () => {
  const [headerBackground, setHeaderBackground] = useState(
    "rgba(248, 254, 250, 1)"
  );
  const location = useLocation();

  const handleScroll = () => {
    const heroSection = document.querySelector(".hero_container");
    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const headerHeight = document.querySelector(".header").offsetHeight;

      if (heroBottom <= headerHeight) {
        setHeaderBackground("rgba(248, 254, 250, 0.8)");
      } else {
        setHeaderBackground("rgba(248, 254, 250, 1)");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkStyle = (path) => {
    return {
      color: location.pathname === path ? "#007bff" : "black",
      fontWeight: location.pathname === path ? "bold" : "normal",
    };
  };

  return (
    <Navbar
      expand="lg"
      className="header"
      style={{ backgroundColor: headerBackground }}
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">
          <Image
            fallback={<Shimmer width={100} height={30} />}
            src="/assets/images/logo.png"
            alt="FIREBYTE"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-nav">
            <Link to="/" className="nav-link" style={getLinkStyle("/")}>
              Home
            </Link>
            <Link
              to="/products"
              className="nav-link"
              style={getLinkStyle("/products")}
            >
              Products
            </Link>
            <Link
              to="/about"
              className="nav-link"
              style={getLinkStyle("/about")}
            >
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
