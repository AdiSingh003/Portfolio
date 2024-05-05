import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div>
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Deloitte */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">Junior Software Developer</Card.Title>
              </div>
              <div>
                <div className="text-center style">
                <strong className="body-title-style ">
                    Nadsoft IT Solutions
                  </strong>
                  <br />
                  <strong>Technology:</strong> Php, Ajax, JQuery, SiMan CMS,
                  Javascript,Smarty
                  <br />
                  <strong>Duration:</strong> Jan 2024 - Present
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                      <li>Working on developing and enhancing the CRM for one of the <strong>best online payment service provider in US</strong>, <strong>Deposyt</strong>.</li>
                      <li>Made the web application more <strong>robust</strong>,<strong>modular</strong>,<strong>responsive</strong> and <strong>interactive</strong> by harnessing technologies like <strong>Php</strong>,<strong>Javascript</strong> and <strong>Smarty</strong> template.</li> 
                      <li>I have successfully implemented a number of functionalities like <strong>QR code generation</strong> on user profile page, a <strong>"add to contacts"</strong> feature which enables a user to save one's contact, on their <strong>IOS</strong> or <strong>Android</strong> phone,just on a click of a button.</li>
                      <li>I have worked on making the CRM more <strong>secure</strong> and <strong>robust</strong> by implementing <strong>user access level</strong>.</li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>

      {/* Accenture */}
      <Jumbotron className="jumbo-style">
        <Tilt options={{ max: 5, scale: 1 }}>
          <Card>
            <Card.Header
              as="h5"
              className="d-flex justify-content-center flex-wrap"
            >
              <Card.Img
                variant="top"
                className="img-resize"
                
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center flex-column">
              <div>
                <Card.Title className="text-center">
                  Associate Software Engineer
                </Card.Title>
              </div>
              <div>
                <div className="text-center style">
                  <strong className="body-title-style ">
                    Inditech Health Solutions
                  </strong>
                  <br />
                  <strong>Technology:</strong> Html,Css,Php,Mysql,Javascript
                  <br />
                  <strong>Duration:</strong> August 2022 - JAN 2024
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      I worked on building web application for <strong>Serum Institute of India</strong> and other pharma brands like <strong>Zydus</strong>,<strong>DIAP</strong>,<strong>BioSynth Pharma</strong>,etc., by using php, with <strong>secure login and authentication</strong> by using <strong>Google APIs</strong>.</li>
                      <li>Implemented <strong>Rewrite Rule</strong> feature to <strong>hide filename from URLs</strong> to make URLs look more cleaner and professional.</li> 
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Tilt>
      </Jumbotron>
    </div>
  );
};

export default Experience;
