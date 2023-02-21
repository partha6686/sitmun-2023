import React from "react";
import "../../css/sponsors.css";
import Heading from "../common/heading";

const Sponsors = () => {
  return (
    <div>
      <Heading head="Our Sponsors" />

      <div class="sponsor-container">
        <div class="sponsor-card">
          <img
            src="https://ik.imagekit.io/z9bmc0p3trla/sponsor1__1__knL7kixpB.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676987060857"
            alt="Sponsor 1"
          />
        </div>
        <div class="sponsor-card">
          <img
            src="https://ik.imagekit.io/z9bmc0p3trla/sponsor2_6de6pTFCp.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1676987041346"
            alt="Sponsor 2"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
