import React from "react";
import Card from "react-bootstrap/Card";
import "./projects-timeline.styles.css";
import Profile from "../../assets/img/profile/Aditya_Pratap_Singh.jpg";
import { Button, Col } from "react-bootstrap";

const TimeLine = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <p className="text-center text-white">Checkout my github profile for projects</p>
      <Col className="d-flex justify-content-center align-self-center flex-wrap">
        <div className="m-2">
          <a
            href="https://github.com/AdiSingh003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline-dark" title="Github">
              <i className="fab fa-github-square"></i> GitHub
            </Button>
          </a>
        </div>
      </Col>
      
          
    </div>
  );
};

export default TimeLine;
