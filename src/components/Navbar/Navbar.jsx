import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: 'none', color: scrolled ? "#f8e8e8" : "#800000" }}>
          <span style={{ pointerEvents: 'none' }}>HUN</span>
        </Link>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <MenuIcon style={{ fontSize: "2.5rem", color: scrolled ? "#fff" : "#800000" }} />
      </div>
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <div className="close-icon-container">
          <CloseIcon
            className="close-icon"
            style={{ fontSize: "2.5rem" }}
            onClick={toggleMenu}
          />
        </div>
        <div className="navbar-links-container">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;