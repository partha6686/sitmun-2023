import React from "react";
import "../../css/hero.css";
import { Carousel } from "react-bootstrap";
import { BsChevronDoubleLeft } from "react-icons/bs";

import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.JPG";
import img4 from "../../img/img4.jpg";

const HeroCommittee = () => {
    return (
        <div>
            <div className="hero-wrap committee" id="hero"></div>
            <Carousel id="myCarousel">

                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-img"
                        src={img4}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="hero_page_wrapper container">
                <div className="hero_page_main">
                    <div className="hero_title_wrapper team">
                        <div className="event_namec">
                            <p>
                                Commi<span className="event_year">ttees</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="vertical_div container">
                <div className="scroll_down">
                    <BsChevronDoubleLeft />
                    <span> 24.02.2023</span>
                </div>
                <div className="hero_socials">
                </div>
            </div> */}
        </div>
    );
};

export default HeroCommittee;
