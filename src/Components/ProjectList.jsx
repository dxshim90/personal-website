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
      <Container>
        {this.state.projects.map(project => {
          return (
            <Row key={project.id}>
              <Col>
                <ProjectCard project={project} />
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default ProjectList;
