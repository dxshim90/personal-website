import React from "react";
import { Container, Row, Col } from "reactstrap";
import data from "./Data";
import ProjectCard from "./ProjectCard";

class ProjectList extends React.Component {
  state = {
    projects: data
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.projects.map(project => {
            return (
              <Col key={project.id}>
                <ProjectCard project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default ProjectList;
