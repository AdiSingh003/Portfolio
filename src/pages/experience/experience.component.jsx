import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/accenture-3.svg";
import L_DELOITTE from "../../assets/img/experience/deloitte.svg";
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
                    <li>
                      <strong>I am working on developing and enhancing the CRM for one of the best online payment service provider in US, Deposyt. Made the web application more robust,modular,responsive and interactive by harnessing technologies like Php, Javascript and SiMan CMS.I have successfully implemented a number of functionalities like QR code generation for easy access to the user profile page, a "add to contacts" feature which enables a user to save one's contact, on their IOS or Android phone,just on a click of a button. I have worked on making the CRM more secure and robust by implementing user access level.</strong> 
                    </li>
                    
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
                  <strong>Technology:</strong> Html,Css,Php,Mysql
                  <br />
                  <strong>Duration:</strong> August 2022 - JAN 2024
                  <br />
                  <strong> Description </strong>
                  <ul className="text-left">
                    <li>
                      <strong>I worked on building web application for Serum Institute of India and other pharma brands like Zydus,DIAP, BioSynth Pharma,etc., by using php, with secure login and authentication by using Google APIs. Have implemented features to hide filename from URLs to make URLs look more cleaner and professional.</strong> 
                      </li>
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
