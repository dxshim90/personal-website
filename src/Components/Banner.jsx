import React from "react";
import VideoBackground from "./VideoBackgroud";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div style={{ paddingTop: "6rem", color: "white", fontSize: "4rem" }}>
      <VideoBackground />
      <div>
        <h1 className="display-3">Daniel Shimield</h1>
        <p className="lead">Full Stack Web Developer</p>
        <p>Lets Build Something Great Together!</p>
        <p className="lead">
          <p>
            <FontAwesomeIcon
              style={{ marginRight: "1em" }}
              size="3x"
              icon={faLinkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/daniel-shimield-7bb956161/",
                  "_blank"
                )
              }
              cursor="pointer"
            />
            <FontAwesomeIcon
              size="3x"
              icon={faGithub}
              onClick={() =>
                window.open("https://github.com/dxshim90", "_blank")
              }
              cursor="pointer"
            />
          </p>
          <Link to="/projects">
            <Button size="large" color="dark">
              View My Portfolio
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
