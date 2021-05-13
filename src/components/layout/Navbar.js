import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addproject, nothing } from "../state/actions/index";

const Navbarcomp = () => {
  const dispatch = useDispatch();
  return (
    // Adding Bootstrap navbar
    <Navbar bg="light" expand="lg">
      <Navbar.Brand style={{ fontFamily: "Fugaz One" }}>
        Pro-Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto montserrat">
          <Nav.Link>
            <Link
              to="/"
              onClick={() => {
                dispatch(nothing());
              }}
            >
              Dashboard
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="add-project"
              onClick={() => {
                dispatch(addproject());
              }}
            >
              Add Project
            </Link>
          </Nav.Link>
        </Nav>
        {}
        <Nav.Link className="montserrat">Sign In/Out</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarcomp;
