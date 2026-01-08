import React from "react";
import styled from "styled-components";
import SwipeComponent from "./SwipeComponent";
// import Button from "./Button";
import aboutimg from "../Images/clop.png";
import { Colors, Gradients } from "./ColorComponent";
import { Link } from "react-router-dom";
// import Heading from "./Heading";

const AboutContent = () => {
  return (
    <Container>
      <div>
        <SwipeComponent direction="left-to-right">
          <Heading>About Us</Heading>
          <Content>
            Welcome to Gem Luxe Aesthetics Med Spa! We specialize in enhancing
            your beauty and wellness from the inside out. Our services include
            IV hydration, Neurotoxins, fillers, and weight loss management, all
            designed to help you look and feel your best. At Gem Luxe, we’re
            committed to delivering personalized care in a relaxing,
            professional environment. Thank you for letting us be part of your
            journey to confidence and vitality. Beauty starts within—let’s glow
            together!
          </Content>
        </SwipeComponent>
        <SwipeComponent direction="right-to-left">
          {/* <h3>Founded on Experience, Built on Purpose</h3> */}
          <Link to="/personal">
            <Button>Meet the Founder</Button>
          </Link>
        </SwipeComponent>
      </div>
      <AboutImg>
        <img src={aboutimg} />
      </AboutImg>
    </Container>
  );
};

const Button = styled.div`
  position: relative;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  cursor: pointer;

  color: white !important;
  background: black;
  font-family: "Philosopher", sans-serif;
  /* box-shadow:
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733; */
  border-radius: 15px 0px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(201, 201, 201, 0.5);
    color: black !important;
    backdrop-filter: blur(80px);
  }
`;
const Heading = styled.h1`
  text-align: center;
  padding: 1rem 0 0.5rem 0;
  margin: 0;
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
    font-size: 20rem;
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
    padding: 0rem 3rem 1rem 3rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0rem 3rem 1rem 3rem;
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
    display: none;
    border-radius: 50px;
    background: ${Gradients.lightGoldToGold};
    @media screen and (min-width: 600px) {
      display: block;
    }
  }
  @media screen and (min-width: 600px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1000px) {
    display: block;
    padding: 0 0;
    border-radius: 30px;
  }
`;
export default AboutContent;
