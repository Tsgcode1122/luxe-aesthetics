import React from "react";
import styled from "styled-components";
import bgg from "../Images/drug.png";
import belly from "../Images/belly.png";
import HeroBg from "../Image2025/heronew2.jpg";
import HeroBgSmall from "../Image2025/smal.png";
// import HeroBg from "../Image2025/gemim.png";
import SwipeComponent from "./SwipeComponent";
import Button from "./Button";
import { Gradients } from "./ColorComponent";
import StarsBackground from "./StarsBackground";
import WhiteStar from "./WhiteStar";
import HeroMoving from "./HeroMoving";
import { Link } from "react-router-dom";
import ZoomInComponent from "./ZoomInComponent";

const Hero = () => {
  return (
    <>
      <HeroSection>
        {/* <StarsBackground /> */}
        <HeroContent>
          <Bottom>
            <SwipeComponent direction="left-to-right">
              <Heading>Luxury aesthetics, uniquely yours.</Heading>
            </SwipeComponent>
            {/* <SwipeComponent direction="right-to-left">
              <Subheading>
                Tailored Weight Loss Solutions for a Vibrant You!
              </Subheading>
            </SwipeComponent> */}
            <ZoomInComponent>
              <Link to="appointment">
                <Button href="#packages">Book Appointment</Button>
              </Link>
            </ZoomInComponent>
          </Bottom>
          {/* <Image>
          <img src={belly} />
        </Image> */}
          {/* <HeroMoving /> */}
        </HeroContent>
      </HeroSection>
    </>
  );
};

const HeroSection = styled.section`
  /* display: flex; */
  background: url(${HeroBgSmall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  text-align: center;
  position: relative;
  /* height: 70vh; */
  color: #333;
  @media screen and (min-width: 600px) {
    background: url(${HeroBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70vh;
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;

const HeroContent = styled.div`
  /* position: relative; */
  background: rgba(0, 0, 0, 0.2);
  /* flex-direction: column;
  align-items: center;
  justify-content: center; */
  padding: 40px 20px;
  @media screen and (min-width: 600px) {
    height: 70vh;
  }
  @media screen and (max-width: 320px) {
    padding: 40px 5px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 40px 5px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 40px 5px;
  }
  @media screen and (min-width: 600px) {
    padding: 6rem 2rem 2rem 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 7rem 3rem 3rem 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 7rem 8rem 4rem 8rem;
  }
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  div {
    @media screen and (min-width: 1000px) {
      flex: 1;
    }
  }
`;

const Bottom = styled.div`
  margin-top: 15rem;
  @media screen and (max-width: 320px) {
    margin-top: 16rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: 16rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: 16rem;
  }
`;
const Heading = styled.h1`
  font-size: 2.5rem;

  /* background: ${Gradients.goldGradient}; */
  /* -webkit-background-clip: text; */
  /* -webkit-text-fill-color: transparent; */
  /* background-clip: text; */
  line-height: 0.9;
  /* -webkit-text-stroke: 0.91px #8c6c28; */
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
  color: white;
  margin-bottom: 20px;
  z-index: 2 !important;
  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 2.1rem;
  }
  @media screen and (min-width: 600px) {
    font-size: 3rem;
  }
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: white;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
  z-index: 2 !important;
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    padding: 0 25px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1rem;
    padding: 0 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1rem;
    padding: 0 20px;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
    padding: 0 2rem;
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
  @media screen and (min-width: 600px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1000px) {
    transform: scaleX(-1);
    padding: 0;
  }
`;
export default Hero;
