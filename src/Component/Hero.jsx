import React from "react";
import styled from "styled-components";
import bgg from "../Images/drug.png";
import belly from "../Images/belly.png";
import SwipeComponent from "./SwipeComponent";
const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <SwipeComponent direction="left-to-right">
          <Heading>Achieve Your Dream Body with Gem Luxe Aesthetics</Heading>
        </SwipeComponent>
        <SwipeComponent direction="right-to-left">
          <Subheading>
            Tailored Weight Loss Solutions for a Vibrant You!
          </Subheading>
        </SwipeComponent>
        <CTAButton href="#packages">Book Appointment</CTAButton>
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

  text-align: center;
  background: linear-gradient(
    -135deg,
    #f0e8d7 0%,
    #f0e8d7 10%,
    #faf2df 20%,
    #f0e8d7 30%,
    #e1d7c0 60%,
    #d6d0c1 70%,
    #f0e8d7 80%,
    #d6d0c1 90%,
    #f0e8d7 100%
  );

  color: #333;
  height: 90vh;
`;

const HeroContent = styled.div`
  position: relative;
  padding: 60px 0px;
  background: none;
  border-radius: 8px;
  overflow: hidden;
  background: url(${bgg}) no-repeat center;
  background-position: 50% center;
  background-size: 110%;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  background: linear-gradient(
    180deg,
    #0b090a 0%,
    #a08733 10%,
    #f3d57f 20%,
    #7d6023 30%,
    #f3d57f 40%,
    #9c782c 50%,
    #7d6023 60%,
    #8c6c28 70%,
    #9a762a 80%,
    #f3d57f 90%,

    #0b090a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
  /* font-family: "Quincy CF", sans-serif; */
  margin-bottom: 20px;
  z-index: 2 !important;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  font-family: "Quincy CF", sans-serif;
  margin-bottom: 30px;
  z-index: 2 !important;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  font-family: "Quincy CF", sans-serif;
  box-shadow:
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7d782;
  }
`;
const Image = styled.div`
  border-radius: 200px;

  img {
    max-width: 100%;
    border-radius: 50px 50px 0 0;
    background: linear-gradient(
      -135deg,
      #f0e8d7 0%,
      #f0e8d7 10%,
      #faf2df 20%,
      #f0e8d7 30%,
      #e1d7c0 60%,
      #d6d0c1 70%,
      #f0e8d7 80%,
      #d6d0c1 90%,
      #f0e8d7 100%
    );
    box-shadow:
      0 0 2px #f3d57f,
      0 0 2px #f3d57f,
      0 0 2px #a08733,
      0 0 2px#a08733;
  }
`;
export default Hero;
