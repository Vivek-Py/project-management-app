import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addproject, nothing } from "../state/actions/index";

const Navbarcomp = () => {
  const dispatch = useDispatch();
  return (
    // Adding Bootstrap navbar
    <Navbar bg="light" id="navbar" expand="lg">
      <Navbar.Brand className="navbrand">ProManager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-links">
          {/* Nav Link to dashboard */}
          <Nav.Link>
            <Link
              className="nav-links"
              to="/"
              onClick={() => {
                dispatch(nothing());
              }}
            >
              Dashboard
            </Link>
          </Nav.Link>

          {/* Nav link to adding project */}
          <Nav.Link>
            <Link
              to="add-project"
              className="nav-links"
              onClick={() => {
                dispatch(addproject());
              }}
            >
              Add Project
            </Link>
          </Nav.Link>
        </Nav>
        <Nav.Link className="nav-links">Sign In/Out</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarcomp;
