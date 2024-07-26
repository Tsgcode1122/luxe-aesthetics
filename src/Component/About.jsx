import React from "react";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import { Colors, Gradients } from "./ColorComponent";
import PendulumSwing from "./PendulumSwing";

const Container = styled.div`
  padding: 0rem 2rem 2rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 0rem 1rem 1rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0rem 1.3rem 1.3rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0rem 1.5rem 1.5rem 1.5rem;
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
      <PendulumSwing />
    </Container>
  );
};

export default About;
