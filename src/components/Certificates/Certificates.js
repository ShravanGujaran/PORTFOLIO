import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./CertificateCard"; // Make sure the path is correct
import Particle from "../Particle"; // Make sure the path is correct
import goo1 from "../../Assets/Certificates/goo1.png";
import Exclr from "../../Assets/Certificates/Exclr.png";
import goo2 from "../../Assets/Certificates/goo2.png";
import Cogni from "../../Assets/Certificates/Cogni.png";
import great from "../../Assets/Certificates/great.jpg";
import JP from "../../Assets/Certificates/JP.png";
import Mer from "../../Assets/Certificates/Mer.png";
import TATA from "../../Assets/Certificates/TATA.png";
import system from "../../Assets/Certificates/system.png";
import Acco from "../../Assets/Certificates/Acco.png";

function Certificates() { // Change the function name to Projects
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a List Certificates 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goo1}
              isBlog={false}
              title="Google Ads Measurements"
              description="The Google Ads Measurement certification demonstrates proficiency in analyzing and optimizing ad performance data. It validates expertise in leveraging Google Ads tools to track, measure, and maximize advertising ROI."
              ghLink="https://skillshop.credential.net/e8430ead-2c67-42ee-8878-2d9149f01c91"
              demoLink="https://drive.google.com/file/d/1HUZkXLWRfLQym_7dwBX-JS3FMEyLGG3E/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Exclr}
              isBlog={true}
              title="EXCLR WEBINAR"
              description="Successfully completed a comprehensive webinar on Data Analysis, Data Science, and Artificial Intelligence,demonstrating proficiency in key concepts and methodologies.Acquired valuable insights and practical skills essential for leveraging data-driven approaches in solving real-world challenges."
              ghLink="https://drive.google.com/file/d/1bqzXL3GRkKYrDFp7EP0EcEoAYbD6ktgA/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goo2}
              isBlog={false}
              title="Google Ads Display Certification"
              description="I've earned the Google Ads Display Certification, demonstrating proficiency in creating, managing, and optimizing effective display ad campaigns to reach target audiences and achieve marketing objectives."
              ghLink="https://skillshop.credential.net/55c74971-5ee6-4183-a205-39f3f0a1e562"
              demoLink="https://drive.google.com/file/d/1KXTqxjsijU4mfJkGErqXd6pdO4-TO9JC/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cogni}
              isBlog={false}
              title="Cognizant-AI Job Simulation"
              description="Cognizant's Artificial Intelligence Job Simulation immerses participants in realistic scenarios, offering hands-on experience in navigating complex AI-driven tasks and challenges. It's a dynamic tool designed to prepare individuals for the intricacies of AI roles in today's evolving workforce landscape.."
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/5N2ygyhzMWjKQmgCK_Cognizant_94B33CDQiJSCSExus_1709354338668_completion_certificate.pdf"
              demoLink="https://drive.google.com/file/d/1dghumBGX93P4vzohzjEu1Vass73Tq_S-/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={great}
              isBlog={true}
              title="Python With Machine Learning-GREAT LEARNING"
              description="comprehensive machine learning course with a focus on Python. This program provided hands-on experience and in-depth knowledge of various machine learning algorithms and techniques."
              ghLink="https://drive.google.com/file/d/1itAM87fQ6A4SbrgHgoTdliT7a4qbPV-q/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={JP}
              isBlog={false}
              title="Markets (Sales & Trading) Virtual Experience Program"
              description="Forge's Markets (Sales & Trading) Virtual Experience Program offers an immersive opportunity to gain hands-on experience in the dynamic world of financial markets, providing insights into sales and trading strategies through interactive simulations and real-world scenarios."
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/TF9ouPQomo5YcwRGR_JPMorgan%20Chase_94B33CDQiJSCSExus_1691805158740_completion_certificate.pdf"
              demoLink="https://drive.google.com/file/d/1MEiP7gd4Jy2V6ZZn4b7Et3D98tHedmSs/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mer}
              isBlog={false}
              title="Entrepreneurship & Innovation: Web Development Job Simulation"
              description="In this innovative job simulation by Forgae, experience the dynamic world of entrepreneurship and innovation through web development. Immerse yourself in real-world scenarios to hone your skills and showcase your capabilities in building cutting-edge web solutions."
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Moreton%20Bay%20Regional%20Council/7q8DN5enMzSHqLwev_Moreton%20Bay%20Regional%20Council_94B33CDQiJSCSExus_1709354525412_completion_certificate.pdf"
              demoLink="https://drive.google.com/file/d/1k3e_HDM9FE8AjI7Mt_5Vljk1-aYIQ6FB/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TATA}
              isBlog={false}
              title="Data Visualisation: Empowering Business with Effective Insights"
              description="Data visualization is a powerful tool that empowers businesses by providing them with actionable insights derived from complex data sets. By harnessing the capabilities of data visualization, TATA and Forgae have unlocked new opportunities for growth and innovation within their respective industries, driving strategic decision-making and fostering a culture of data-driven excellence"
              ghLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Tata/MyXvBcppsW2FkNYCX_Tata%20Group_94B33CDQiJSCSExus_1709354780378_completion_certificate.pdf"
              demoLink="https://drive.google.com/file/d/1cgG3n7C7tHy882WpFQfSJyxueDkhvxRE/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system}
              isBlog={true}
              title="System-Tron Web development Internship"
              description="During my internship at System Tron, I honed my web development skills using HTML, CSS, and JavaScript, gaining practical experience in creating dynamic and visually appealing websites."
              ghLink="https://drive.google.com/file/d/1HW2kd-796jvZcPjmliTgDpouMyIyjYJz/view?usp=drive_link"
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Acco}
              isBlog={true}
              title="Accolade Full stack web development Internship"
              description="At Accolade Tech Solutions, I honed my skills in full-stack web development utilizing React for dynamic front-end, Express.js and Node.js for efficient server-side operations, and MySQL for robust database management during my internship."
              ghLink="https://drive.google.com/file/d/1THx-I4WcrbFG4EDWzVRkA0G4XRKCZdeB/view?usp=drive_link"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates; // Change the export name to Certificates
