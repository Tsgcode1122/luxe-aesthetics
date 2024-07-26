import React, { useEffect } from "react";
import Hero from "../Component/Hero";
import About from "../Component/About";
import GlowingDivider from "../Component/GlowingDivider";
import Services from "../Component/Services";
import WhyUs from "../Component/WhyUs";
import Faqs from "../Component/Faqs";
import Contact from "../Component/Contact";
import Bottle from "../Component/Bottle";
import styled from "styled-components";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Hero />
      <GlowingDivider />
      <About />
      <GlowingDivider />
      <Services />

      <WhyUs />
      <Divider>
        <div>
          <Bottle />
          <span>
            <GlowingDivider />
          </span>
        </div>
        <Faqs />
      </Divider>
      <Contact />
    </>
  );
};
const Divider = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    div {
      flex: 1;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;
export default Home;
