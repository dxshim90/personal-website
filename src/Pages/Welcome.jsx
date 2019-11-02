import React from "react";
import { Container, Row, Col } from "reactstrap";
import Banner from "../Components/Banner";

const Welcome = () => {
  return (
    <Container fluid>
      <Row style={{ height: "60vh" }}>
        <Col>
          <Banner />
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
