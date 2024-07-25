import React from "react";
import styled from "styled-components";
import bgg from "../Images/drug.png";
import belly from "../Images/belly.png";
import SwipeComponent from "./SwipeComponent";
import Button from "./Button";
import { Gradients } from "./ColorComponent";
import StarsBackground from "./StarsBackground";
import WhiteStar from "./WhiteStar";
const Hero = () => {
  return (
    <HeroSection>
      <StarsBackground />
      <HeroContent>
        <SwipeComponent direction="left-to-right">
          <Heading>Achieve Your Dream Body with Gem Luxe Aesthetics</Heading>
        </SwipeComponent>
        <SwipeComponent direction="right-to-left">
          <Subheading>
            Tailored Weight Loss Solutions for a Vibrant You!
          </Subheading>
        </SwipeComponent>
        <Button href="#packages">Book Appointment</Button>
        <Image>
          <img src={belly} />
        </Image>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  color: #333;
  @media screen and (max-width: 320px) {
    padding: 30px 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 50px 15px 30px 15px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 80px 15px 30px 15px;
  }
`;

const HeroContent = styled.div`
  position: relative;

  background: none;
  border-radius: 8px;
  overflow: hidden;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;

  margin-bottom: 20px;
  z-index: 2 !important;
  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2.4rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.4rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
  z-index: 2 !important;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    padding: 0 25px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
    padding: 0 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.1rem;
    padding: 0 20px;
  }
`;

const Image = styled.div`
  img {
    max-width: 100%;
    border-radius: 50px;
    background: linear-gradient(
      185deg,
      #d8d5ce 0%,
      #f5f2ea 10%,
      #d8d5ce 20%,
      #f5f2ea 30%,
      #f5f2ea 60%,
      #d8d5ce 70%,
      #f5f2ea 80%,
      #f5f2ea 90%,
      #d8d5ce 100%
    );
  }
  @media screen and (max-width: 320px) {
    padding: 0 25px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 20px;
  }
`;
export default Hero;
