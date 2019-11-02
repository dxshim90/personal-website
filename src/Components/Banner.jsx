import React from "react";
import VideoBackground from "./VideoBackgroud";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div style={{ paddingTop: "6rem", color: "white", fontSize: "4rem" }}>
      <VideoBackground />
      <div>
        <h1 className="display-3">Daniel Shimield</h1>
        <p className="lead">Full Stack Web Developer</p>
        <p>Lets Build Something Great Together!</p>
        <p className="lead">
          <Link to="/projects">
            <Button size="lrg" color="dark">
              View My Portfolio
            </Button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Banner;
