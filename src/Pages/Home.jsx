import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import GlowingDivider from "../Component/GlowingDivider";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";
import Faqs from "../Component/Faqs";

const Home = () => {
  return (
    <>
      <Hero />
      <GlowingDivider />
      <About />
      <GlowingDivider />
      <Services />

      <WhyUs />
      <GlowingDivider />
      <Faqs />
    </>
  );
};

export default Home;
