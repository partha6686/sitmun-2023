import React from "react";
import "../App.css";
import CountDown from "../components/Home/CountDown";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import TimeLine from "../components/Home/TimeLine";
import AboutUs from "../components/Home/AboutUs";
import MsgSecGen from "../components/Home/MsgSecGen";

const Home = () => {
  return (
    <div>
      <Hero />
      <CountDown />
      <AboutUs />
      <MsgSecGen />
      <Gallery />
      <TimeLine />
    </div>
  );
};

export default Home;
