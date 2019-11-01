import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

// Components

import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row style={{ height: "60vh" }}>
          <Col>Banner Component</Col>
        </Row>
        <Row>
          <Col>Projects displayed here</Col>
        </Row>
        <Row>
          <Col>About</Col>
        </Row>
        <Row>
          <Col>Contact</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
