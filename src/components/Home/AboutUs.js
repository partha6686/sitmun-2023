import React from "react";
import "../../css/about-us.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../../img/about-img.jpg'
import Heading from "../common/heading";

function AboutUs() {
  return (
    <Container className="about-us" id="about">
      <Heading head='About This Event' />
      <div className="about-us-div">
        <img src={aboutimg} alt="about-event" data-aos="fade-down" />
        <p>
          Model United Nations is a simulation that imitates the procedures of the United Nations finding solutions for real-world problems,
          done through an academic simulation of the United Nations procedure. The MUN simulation consists of negotiation, discussion, and
          lively debates, which is the cornerstone of UN activity. Model UN aims to educate students about current events, international relations,
          diplomacy, and the United Nations agenda. Along with knowledge of the world we live in, participants develop skills including public speaking,
          presentation, persuasion, situation analysis, research, and critical thinking. SITMUN is an inter-collegiate conference conducted every year.
          Students from SiliconTech and other institutes across Odisha, participate as delegates in different committees. From each committee the best
          speakers are awarded.
        </p>
      </div>
      <div className="mob-img-about">
        <img src={aboutimg} alt="about-event" data-aos="fade-down" />
      </div>


    </Container>
  );
}

export default AboutUs;
