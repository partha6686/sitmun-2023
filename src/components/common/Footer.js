import React from "react";
import "../../css/footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aboutimg from '../../img/about-img.jpg'
import logo from '../../img/logo.png'
import { FaWhatsapp, FaInstagram } from "react-icons/fa"

function Footer() {
    return (
        <div className="footer-container">
            <footer class="footer-sec">
                <Container>
                    <div class="main">


                        <div class="logo row1 r">
                            <div class="footer-header1">
                                <img src={logo} class="manik" alt="" />
                            </div>
                            <center><hr /></center>
                            <div className="social-links">
                                <a href="https://instagram.com/instagram.com/sitmunbbsr"><FaInstagram className="insta icon" /></a>
                                <a href="https://wa.me/+917717778982"><FaWhatsapp className="tw icon" /></a>
                            </div>


                        </div>



                        <div class="office row1">
                            <div class="footer-header">
                                <h3>Contact Us</h3>
                            </div>
                            <div class="office-des">
                                <p>
                                    USG Public Relations <br />
                                    SIT MUN 2023 <br />
                                    Silicon Institute of Technology <br />
                                    Email:- meta.academics@silicon.ac.in<br />
                                    Phone:- +91 7717778982
                                </p>
                            </div>
                        </div>


                        <div class="link row1">
                            <div class="footer-header">
                                <h3>Links</h3>
                            </div>

                            <div class="link-des">
                                <a href="/" class="footer-links">Home</a>
                                <a href="/#about" class="footer-links">About</a>
                                <a href="/committee" class="footer-links">Committee</a>
                                <a href="/#gallery" class="footer-links">Gallery</a>
                                <a href="/teams" class="footer-links">Team</a>
                            </div>

                        </div>


                        <div class="newsletter row1">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.7806763365907!2d85.80414731489338!3d20.350677286369603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9288172f3a98c7a4!2sSilicon%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1638171552502!5m2!1sen!2sin"
                                width="300"
                                height="200"
                                style={{ border: "0", }}
                                loading="lazy"
                            ></iframe>
                        </div>

                        <div class="logo row1 m">
                            <div class="footer-header">
                                <img src={logo} class="manik" alt="" />
                            </div>
                            <hr className="lhr" />
                            <div className="social-links">
                                <a href="https://www.instagram.com/sitmunbbsr/"><FaInstagram className="insta icon" /></a>
                                <a href="https://wa.me/+917717778982"><FaWhatsapp className="tw icon" /></a>
                            </div>


                        </div>


                    </div>
                </Container>
                <div class="copyright">
                    <center><hr /></center>

                    <p>© Copyright 2022 SITMUN WEBTEAM.</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
