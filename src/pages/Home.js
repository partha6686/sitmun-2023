import React from "react";
import "../App.css";
import CountDown from "../components/landing/CountDown";
import Gallery from "../components/landing/Gallery";
import Hero from "../components/landing/Hero";
import TimeLine from "../components/landing/TimeLine";

const Home = () => {
  return (
    <div>
      <Hero />
      <CountDown />
      <Gallery />
      <TimeLine />
    </div>
  );
};

export default Home;
