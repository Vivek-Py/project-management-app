import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { db, tStamp } from "../auth/Config";
import {
  noturgent,
  updateDate,
  updateDescription,
  updateHead,
  updateTeam,
  updateTitle,
  urgent,
} from "../state/actions/index";

const AddProject = () => {
  const switchState = useSelector((state) => state.urgentstatus);
  const title = useSelector((state) => state.projectitle);
  const head = useSelector((state) => state.projecthead);
  const description = useSelector((state) => state.projectdesc);
  const teammem = useSelector((state) => state.teammem);
  const enddate = useSelector((state) => state.enddate);
  const dispatch = useDispatch();

  // Function to handle the switch
  function handleSwitch() {
    if (switchState) {
      return dispatch(noturgent());
    } else {
      return dispatch(urgent());
    }
  }

  return (
    // Row & Col Bootstrap container to make it center align

    <Row className="justify-content-md-center">
      <Col md="auto" className="body-container">
        <Form>
          <Form.Group>
            <Form.Label className="text-heading">Title</Form.Label>
            <Form.Control
              onChange={(e) => {
                dispatch(updateTitle(e.target.value));
              }}
              className="primary"
              type="text"
              placeholder="Give your project a name"
            />
          </Form.Group>

          {/* Row for two elements here */}
          <Row>
            <Col>
              <Form.Label className="text-heading">Project Head</Form.Label>
              <Form.Control
                className="secondary"
                type="text"
                placeholder="e.g. Mike Tyson"
                onChange={(e) => {
                  dispatch(updateHead(e.target.value));
                }}
              />
            </Col>

            {/* For Selecting number of team memebers */}
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label className="text-heading">Team Members</Form.Label>
                <Form.Control
                  className="secondary"
                  as="select"
                  onChange={(e) => {
                    dispatch(updateTeam(e.target.value));
                  }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>

            {/* Column for the end date */}
            <Col>
              <Form.Label className="text-heading">End Date</Form.Label>
              <Form.Control
                className="secondary"
                type="date"
                onChange={(e) => {
                  dispatch(updateDate(e.target.value));
                }}
              />
            </Col>
          </Row>

          {/* Input area for project description */}
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-heading">Description</Form.Label>
            <Form.Control
              className="primary"
              as="textarea"
              rows={3}
              placeholder="Describe your project to the members"
              onChange={(e) => {
                dispatch(updateDescription(e.target.value));
              }}
            />
          </Form.Group>

          {/* Switch to check for urgent work */}
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Is work urgent?"
            className="text-heading"
            onClick={() => handleSwitch()}
          />
          <br />

          {/* Button to submit all the details at the end */}
          <Link
            className="btn btn-primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              db.collection("projectlist").add({
                projecttitle: title,
                projecthead: head,
                teammembers: teammem,
                enddate: enddate,
                projectdesc: description,
                urgentstatus: switchState,
                timestamp: tStamp,
              });
            }}
          >
            Submit
          </Link>
        </Form>
      </Col>
    </Row>
  );
};

export default AddProject;
