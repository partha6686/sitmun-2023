import React from "react";
import "../../css/about-us.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../../img/about-img.jpg'

function AboutUs() {
  return (
    <Container className="about-us" id="about">
      <div className="about-us-div">
        <img src={aboutimg} alt="about-event" data-aos="fade-down" />
        <p>
          Silicon Institute Of Technology Model United Nations (SITMUN) is a
          simulation of the United Nations where students delegate on behalf of
          member countries to find solutions to the rising global issues through
          research, drafting, lobbying and debating. Students can also
          participate as members of the International Press (as
          reporters/photographers). SITMUN has always been a unique
          conglomeration of learning and experiencing a MUN, and this time
          again, we are back with an unparalleled edition. Not even a pandemic
          can stop those who dare, and this 11th-13th March, we aim at bringing
          revolution through resolution. We are in, are you!?
        </p>
      </div>
      <div className="mob-img-about">
        <img src={aboutimg} alt="about-event" data-aos="fade-down" />
      </div>


    </Container>
  );
}

export default AboutUs;
