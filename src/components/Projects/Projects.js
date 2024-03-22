import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import Temp from "../../Assets/Projects/Temp.png";
import Weather from "../../Assets/Projects/Weather.png";
import NOTE from "../../Assets/Projects/NOTE.png";
import BREAST from "../../Assets/Projects/BREAST.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Temp}
              isBlog={false}
              title="TEMP_CONV"
              description="I created a temperature converter project using HTML, CSS, and JavaScript. It allows users to input a temperature in either Celsius or Fahrenheit and converts it to the other unit instantly, providing a seamless and user-friendly experience."
              ghLink="https://github.com/ShravanGujaran/TEMPARATURE_CONVERT"
              demoLink="https://tempconvertshan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather-App"
              description="This is a API based Weather Page where it fetches weather data from weatherapi in JSON Format and display the data."
              ghLink="https://github.com/ShravanGujaran/WEATHER-APP"
              demoLink="https://shravanweatherapp.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NOTE}
              isBlog={false}
              title="Make Notes - Online Notepad App"
              description="Online notepad app to take notes, share, organize, and store straight on your device."
              ghLink="https://github.com/ShravanGujaran/MAKENOTE"
              demoLink="https://makenoteshan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BREAST}
              isBlog={false}
              title="Breast Cancer Prediction"
              description="Utilized SVM to construct a robust model for classifying human cell records as benign or malignant, with output displayed via a Flask Application hosted on Netlify, showcasing expertise in machine learning deployment and web development integration."
              ghLink="https://github.com/ShravanGujaran/BREAST_CANCER"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
