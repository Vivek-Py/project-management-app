import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddProject = () => {
  return (
    // Form for project name
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Give your project a name" />
      </Form.Group>

      {/* Row for two elements here */}
      <Row>
        <Col>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Team Members (Max 5)</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Label>Project Head</Form.Label>
          <Form.Control type="text" placeholder="e.g. Mike Tyson" />
        </Col>
      </Row>

      {/* Input area for project description */}
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe your project to the members"
        />
      </Form.Group>

      {/* Switch to check for urgent work */}
      <Form.Check type="switch" id="custom-switch" label="Urgent Work" />
      <br />
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default AddProject;
