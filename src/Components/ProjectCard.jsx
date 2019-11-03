import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  ButtonGroup
} from "reactstrap";
import { Link } from "react-router-dom";

const ProjectCard = props => {
  const { name, desc, image, repoLink, liveLink } = props.project;
  const logo = require(`../assests/${image}`);
  return (
    <Card style={{ marginTop: "1rem", height: "100%" }}>
      <CardImg
        top
        width="100%"
        src={logo}
        alt={name}
        style={{ height: "20rem" }}
      />
      <CardBody>
        <CardTitle style={{ fontSize: "2rem" }}>{name}</CardTitle>
        <CardText>{desc}</CardText>
        <ButtonGroup>
          <Button
            color="dark"
            onClick={() => window.open(`${liveLink}`, "_blank")}
            style={{ marginRight: "3rem", borderRadius: "5px" }}
          >
            View Live Demo
          </Button>
          <Button
            color="dark"
            onClick={() => window.open(`${repoLink}`, "_blank")}
            style={{ marginLeft: "3rem", borderRadius: "5px" }}
          >
            View Code
          </Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
