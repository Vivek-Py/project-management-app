import React from "react";
import Body from "./Body";
import { useDispatch, useSelector } from "react-redux";
import oops from "../../img/oops.svg";
import { Button, Col, Nav, Row } from "react-bootstrap";
import Form from "./LoginPage/Form";
import { Link } from "react-router-dom";
import { toggleFormOn } from "../state/actions";

const LoggedInOut = () => {
  const user = useSelector((state) => state.user);
  const showForm = useSelector((state) => state.toggleform);
  const dispatch = useDispatch();

  return (
    <>
      {user ? (
        <Body />
      ) : showForm ? (
        <Form />
      ) : (
        <Row className="justify-content-md-center">
          <Col md="auto" className="body-container">
            <div className="error-img-container">
              <object data={oops} type="image/svg+xml" className="img">
                Error in Logging
              </object>
            </div>
            <div className="error-msg">Oops! you haven't logged in yet.</div>
            <div style={{ display: "flex" }}>
              <Nav.Link
                as={Link}
                className="nav-links"
                data-testid="nav-links"
                to="/signin"
                style={{ margin: "auto" }}
              >
                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(toggleFormOn());
                  }}
                  style={{ fontSize: "25px", marginTop: "10px" }}
                >
                  Sign In
                </Button>
              </Nav.Link>
            </div>
          </Col>
        </Row>
      )}
    </>
  );
};

export default LoggedInOut;
