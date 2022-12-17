import React from "react";
import "../App.css";
import CountDown from "../components/Home/CountDown";
import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
import TimeLine from "../components/Home/TimeLine";

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
