import React from "react";
import "./NavBar.css";
import logo from "../../logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const menuItems = [
  { link: "/", title: "Home" },
  { link: "statistics", title: "Statistics" },
  { link: "blogs", title: "Blogs" },
];

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" className="logo-container">
          <img src={logo} alt="" className="img-fluid" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav className="ms-auto">
            {menuItems.map((item, index) => (
              <Link
                key={item.link + index}
                to={item.link}
                className={`menu-item text-dark fs-6 fw-semibold mx-auto my-3 my-lg-0 ${
                  index === menuItems.length - 1 ? "me-lg-0" : "me-lg-4"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/* 
<nav>
      <img src={logo} alt="" />
      <div>
        
      </div>
    </nav>
*/
