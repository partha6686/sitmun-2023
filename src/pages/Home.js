import React from "react";
import "../App.css";
import CountDown from "../components/CountDown";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import TimeLine from "../components/TimeLine";

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
