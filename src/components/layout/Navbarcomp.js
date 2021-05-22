import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fire } from "../auth/Config";
import {
  addproject,
  dashboard,
  updateEmail,
  updatePass,
} from "../state/actions/index";

const Navbarcomp = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  return (
    // Adding Bootstrap navbar
    <Navbar bg="light" id="navbar" expand="lg">
      <Navbar.Brand className="navbrand">ProManager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Nav Link to dashboard */}
          {user ? (
            <>
              <Nav.Link
                as={Link}
                className="nav-links"
                data-testid="nav-links"
                onClick={() => {
                  dispatch(dashboard());
                }}
              >
                Dashboard
              </Nav.Link>

              <Nav.Link
                as={Link}
                className="nav-links"
                data-testid="nav-links"
                onClick={() => {
                  dispatch(addproject());
                }}
              >
                Add Project
              </Nav.Link>
            </>
          ) : (
            ""
          )}
        </Nav>
        {user ? (
          <Nav.Link
            className="nav-links"
            as={Link}
            to="/"
            onClick={() => {
              dispatch(updateEmail(null));
              dispatch(updatePass(null));
              fire.auth().signOut();
            }}
          >
            Sign Out
          </Nav.Link>
        ) : (
          ""
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbarcomp;
