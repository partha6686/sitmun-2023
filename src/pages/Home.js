import React from "react";
import "../App.css";
import AboutUs from "../components/Home/AboutUs";
import MsgSecGen from "../components/Home/MsgSecGen";
import Testimonials from "../components/Home/Testimonials";
import '../css/home.css'

function LandingPage() {



  return (
    <>
      <AboutUs />
      <MsgSecGen />
      <Testimonials />

    </>
  );
}

export default LandingPage;
