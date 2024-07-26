import React from "react";
import styled from "styled-components";
import SwipeComponent from "./SwipeComponent";
import Button from "./Button";
import aboutimg from "../Images/belly2.jpg";
import { Colors, Gradients } from "./ColorComponent";
// import Heading from "./Heading";

const AboutContent = () => {
  return (
    <Container>
      <div>
        <SwipeComponent direction="left-to-right">
          <Heading>About Us</Heading>
          <Content>
            Welcome to Gem Luxe Aesthetics, where your path to a healthier, more
            vibrant self begins. We specialize in providing tailored weight loss
            solutions designed to align perfectly with your wellness goals. Our
            expert team crafts personalized plans that fit seamlessly into your
            lifestyle
          </Content>
        </SwipeComponent>
        <SwipeComponent direction="right-to-left">
          <Button>Book Now</Button>
        </SwipeComponent>
        
      </div>
      <AboutImg>
        <img src={aboutimg} />
      </AboutImg>
    </Container>
  );
};
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
  display: none;
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
    display: block;
  }
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  @media screen and (min-width: 600px) {
    padding: 0rem 2rem 1rem 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 3rem 1rem 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 8rem 1rem 8rem;
  }
  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1000px) {
      flex: 1;
    }
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 20px;
  }
`;
const Content = styled.p`
  font-weight: 100 !important;
  color: ${Colors.coolBlack};
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif !important;
  @media screen and (max-width: 320px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
  }
`;
const AboutImg = styled.div`
  img {
    max-width: 100%;

    border-radius: 50px;
    background: ${Gradients.lightGoldToGold};
  }
  @media screen and (min-width: 600px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1000px) {
    transform: scaleX(-1);
    padding: 0;
  }
`;
export default AboutContent;
