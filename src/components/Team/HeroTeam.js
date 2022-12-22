import React from "react";
import "../../css/hero.css";
import { Carousel } from "react-bootstrap";
import { BsChevronDoubleLeft } from "react-icons/bs";

const img1 = "https://ik.imagekit.io/lvjdjaus38/img3.JPG";

const HeroTeam = () => {
    return (
        <div>
            <div className="hero-wrap team" id="hero"></div>
            <Carousel id="myCarousel">

                <Carousel.Item>
                    <img
                        className="d-block w-100 hero-img"
                        src={img1}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="hero_page_wrapper container">
                <div className="hero_page_main t">
                    <div className="hero_title_wrapper team">
                        <div className="event_nameteam">
                            <p>
                                Meet Our<span className="event_year"> Team</span>
                            </p>
                        </div>
                        <div className="event_tagline">
                            {/* <p>#ReadyForTheHustle</p> */}
                        </div>
                        {/*<div className="why_us">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis tempora sit hic! Accusamus aliquam saepe rerum facilis
                quo aliquid reiciendis laborum distinctio consequatur in
                perspiciatis ad, soluta beatae quae ea?
              </p>
            </div>*/}
                        {/* <div className="btn-section">
                            <a href="/#about" className="hero-button">
                                Know More
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="vertical_div container">
                {/* <div className="scroll_down">
                    <BsChevronDoubleLeft />
                    <span> 24.02.2023</span>
                </div> */}
                <div className="hero_socials">
                    {/* <AiFillInstagram
                        style={{ marginRight: "30px", transform: "rotate(90deg)" }}
                    />
                    <AiOutlineWhatsApp
                        style={{ marginRight: "30px", transform: "rotate(90deg)" }}
                    />
                    <AiFillYoutube
                        style={{ marginRight: "30px", transform: "rotate(90deg)" }}
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroTeam;
