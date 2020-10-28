import React from "react";
import { Row, Col, Container } from "react-bootstrap";
const FormContainer = ({ children }) => {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col>{children}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormContainer;
