import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";

// Components

import Header from "./Components/Header";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid>
        <Row style={{ height: "60vh" }}>
          <Col>
            <Banner />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
