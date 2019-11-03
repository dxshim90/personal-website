import React, { Fragment } from "react";

import ProjectList from "../Components/ProjectList";

const Projects = () => {
  return (
    <Fragment>
      <h1 style={{ marginTop: "1rem", textDecorationLine: "underline" }}>
        My Projects
      </h1>
      <ProjectList />
    </Fragment>
  );
};

export default Projects;
