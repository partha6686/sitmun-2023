import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../App.css";
import CountDown from "../components/Home/CountDown";
// import Gallery from "../components/Home/Gallery";
import Hero from "../components/Home/Hero";
// import TimeLine from "../components/Home/TimeLine";
// import AboutUs from "../components/Home/AboutUs";
// import MsgSecGen from "../components/Home/MsgSecGen";
// import Testimonials from "../components/Home/Testimonials";
// import Faq from "../components/Home/Faq";
// import Footer from "../components/common/Footer";
// const CountDown = React.lazy(() => import("../components/Home/CountDown"));
const Gallery = React.lazy(() => import("../components/Home/Gallery"));
// const Hero = React.lazy(() =>  import("../components/Home/Hero"));
const TimeLine = React.lazy(() => import("../components/Home/TimeLine"));
const AboutUs = React.lazy(() => import("../components/Home/AboutUs"));
const MsgSecGen = React.lazy(() => import("../components/Home/MsgSecGen"));
const Testimonials = React.lazy(() => import("../components/Home/Testimonials"));
const Faq = React.lazy(() => import("../components/Home/Faq"));
const Footer = React.lazy(() => import("../components/common/Footer"));

const Home = () => {
  const location = useLocation();
  return (
    <div className="landing-container">
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
