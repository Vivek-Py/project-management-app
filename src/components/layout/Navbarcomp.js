import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { addproject, nothing } from "../state/actions/index";

const Navbarcomp = () => {
  const dispatch = useDispatch();
  return (
    // Adding Bootstrap navbar
    <BrowserRouter>
      <Navbar bg="light" id="navbar" expand="lg">
        <Navbar.Brand className="navbrand">ProManager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* Nav Link to dashboard */}
            <Nav.Link
              className="nav-links"
              data-testid="nav-links"
              to="/"
              onClick={() => {
                dispatch(nothing());
              }}
            >
              Dashboard
            </Nav.Link>

            {/* Nav link to adding project */}
            <Nav.Link
              to="add-project"
              className="nav-links"
              data-testid="nav-links"
              onClick={() => {
                dispatch(addproject());
              }}
            >
              Add Project
            </Nav.Link>
          </Nav>
          <Nav.Link className="nav-links" data-testid="nav-links">
            Sign In/Out
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </BrowserRouter>
  );
};

export default Navbarcomp;
