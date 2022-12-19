import React from "react";
import "../../css/hero.css";
import { Carousel } from "react-bootstrap";
import { BsChevronDoubleLeft } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiFillYoutube,
} from "react-icons/ai";

import img1 from "../../img/DSC05014.JPG";
import img5 from "../../img/DSC_7073.JPG";
import img8 from "../../img/DSC_6969.JPG";
import img9 from "../../img/DSC05203.JPG";

const Hero = () => {
  return (
    <div>
      <div className="hero-wrap" id="hero"></div>
      <Carousel id="myCarousel">
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img "
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={img5}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={img8}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={img9}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="hero_page_wrapper container">
        <div className="hero_page_main">
          <div className="hero_title_wrapper">
            <div className="event_name">
              <p>
                SITMUN <span className="event_year">2023</span>
              </p>
            </div>
            <div className="event_tagline">
              <p>#Revolutionthroughresolution</p>
            </div>
            {/*<div className="why_us">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tempora sit hic! Accusamus aliquam saepe rerum facilis
                quo aliquid reiciendis laborum distinctio consequatur in
                perspiciatis ad, soluta beatae quae ea?
              </p>
            </div>*/}
            <div className="btn-section">
              <a href="/#about" className="hero-button">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical_div container">
        <div className="scroll_down">
          <BsChevronDoubleLeft />
          <span> 24.02.2023</span>
        </div>
        <div className="hero_socials">
          <AiFillInstagram
            style={{ marginRight: "30px", transform: "rotate(90deg)" }}
          />
          <AiOutlineWhatsApp
            style={{ marginRight: "30px", transform: "rotate(90deg)" }}
          />
          <AiFillYoutube
            style={{ marginRight: "30px", transform: "rotate(90deg)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
