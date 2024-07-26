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
import ImageWithClipPath from "../Component/ImageWithClipPath";

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
    padding: 2rem 3rem 1rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      flex: 1;
    }
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    padding: 2rem 8rem 1rem 8rem;
  }
`;
export default Home;
