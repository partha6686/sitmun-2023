import React from "react";
import "../App.css";
import CountDown from "../components/Home/CountDown";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import TimeLine from "../components/Home/TimeLine";
import AboutUs from "../components/Home/AboutUs";
import MsgSecGen from "../components/Home/MsgSecGen";
import Testimonials from "../components/Home/Testimonials";
import Faq from "../components/Home/Faq";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <CountDown />
      <AboutUs />
      <MsgSecGen />
      <Gallery />
      <TimeLine />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
