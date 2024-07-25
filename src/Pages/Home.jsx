import React from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import GlowingDivider from "../Component/GlowingDivider";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";
import Faqs from "../Component/Faqs";
import Contact from "../Component/Contact";
import Bottle from "../Component/Bottle";

const Home = () => {
  return (
    <>
      <Hero />
      <GlowingDivider />
      <About />
      <GlowingDivider />
      <Services />

      <WhyUs />
      <Bottle />
      <GlowingDivider />
      <Faqs />
      <Contact />
    </>
  );
};

export default Home;
