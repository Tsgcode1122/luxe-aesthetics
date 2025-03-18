import React from "react";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import { Colors, Gradients } from "./ColorComponent";
import PendulumSwing from "./PendulumSwing";

const Container = styled.div`
  background: ${Colors.back};
  margin: 2rem 1rem 0rem 1rem;
  padding: 2rem 1rem 0rem 1rem;
  @media screen and (max-width: 320px) {
    /* margin: 0.5rem 0.5rem; */
    padding: 0.5rem 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    /* margin: 0.65rem 0.65rem; */
    padding: 1rem 0.65rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    /* margin: 0.75rem 0.75rem; */
    padding: 1.75rem 0.75rem;
  }
  @media screen and (min-width: 800px) {
    margin: 4rem 4rem 0rem 4rem;
    border-radius: 40px;
  }

  @media screen and (min-width: 1200px) {
    /* padding: 2rem 8rem 4rem 8rem; */
    margin: 5rem 7rem 3rem 7rem;
    border-radius: 40px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  margin: 0 !important;
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  font-size: 2rem;
  position: relative;
  font-family: "Philosopher", sans-serif;
  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

const About = () => {
  return (
    <Container>
      <Heading>About Us</Heading>
      <AboutContent />
      {/* <PendulumSwing /> */}
    </Container>
  );
};

export default About;
