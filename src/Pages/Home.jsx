import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import GlowingDivider from "../Component/GlowingDivider";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";

const Home = () => {
  return (
    <>
      <Hero />
      <GlowingDivider />
      <About />
      <GlowingDivider />
      <Services />
      <GlowingDivider />
      <WhyUs />
    </>
  );
};

export default Home;
