import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shravan Gujaran </span>
            from <span className="purple"> Kaup, India.</span>
            <br />
            I am a Frontend Dev
            <br />
            I'm pursuing my MCA at NMAM Institute of Technology,
             Nitte.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Love for coding is like the divine love of Krishna, endless, boundless, and eternally fulfilling."{" "}
          </p>
          <footer className="blockquote-footer">Shravan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
