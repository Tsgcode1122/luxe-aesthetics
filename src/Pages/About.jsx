import React, { useEffect } from "react";

import AboutContent from "../Component/AboutContent";
import WhyUsContent from "../Component/WhyUsContent";
import Bottle from "../Component/Bottle";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <AboutContent />
      <WhyUsContent />
      <Bottle />
    </>
  );
};

export default About;
