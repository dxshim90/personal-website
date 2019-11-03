import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaRocket, FaMobileAlt, FaLightbulb } from "react-icons/fa";

const About = () => {
  return (
    <Container>
      <h1 style={{ marginTop: "1rem", textDecorationLine: "underline" }}>
        About Me
      </h1>
      <Row style={{ marginTop: "3em" }}>
        <Col>
          <div>
            <FaRocket size="3em" />
            <p style={{ marginTop: "1em" }}>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <FaMobileAlt size="3em" />
            <p style={{ marginTop: "1em" }}>
              My layouts will work on any device, big or small.
            </p>
          </div>
        </Col>
        <Col>
          <div>
            <FaLightbulb size="3em" />
            <p style={{ marginTop: "1em" }}>
              Strong preference for easy to use, intuitive UX/UI.
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "5rem" }}>
        <Col>
          <p>
            I’m Daniel Shimield, a full stack web developer based in London,
            England. I’m into all things web and mobile. I’ve spent the last few
            years perfecting the art and have built several projects for various
            clients with React, Node and Ruby On Rails. Please check out my
            projects and get in touch with yours so we can make it come to life!
          </p>
          <Button
            style={{ marginTop: "2em" }}
            href={`mailto:dxshim90@gmail.com`}
          >
            Contact Me
          </Button>
        </Col>
      </Row>
      <Row style={{ marginTop: "5rem" }}>
        <Col lg={4} md={4} sm={12} xs={12}>
          <h2 style={{ marginTop: "1rem", textDecorationLine: "underline" }}>
            Research
          </h2>
          <p></p>Understand the client’s subject matter completely and build on
          the knowledge related to it, becoming intimately familiar with the
          subject matter. Determine methods to address the specific customer’s
          needs and requirements.
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <h2 style={{ marginTop: "1rem", textDecorationLine: "underline" }}>
            Design
          </h2>
          <p>
            Misleadingly thought of as the superficial appearance of a product,
            design actually encompasses a lot more. It is a cross functional
            process that includes market research, technical research, design of
            a concept, and prototype mockup
          </p>
        </Col>
        <Col lg={4} md={4} sm={12} xs={12}>
          <h2 style={{ marginTop: "1rem", textDecorationLine: "underline" }}>
            Develop
          </h2>
          <p>
            Findings from the research and design phases are utilized for the
            production of specific products including materials, systems, and
            methods. Engineer utilizing the research and designs to produce
            commercial products for the customer.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
