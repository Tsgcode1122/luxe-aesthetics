import React from "react";
import styled from "styled-components";
import SwipeComponent from "./SwipeComponent";
import Button from "./Button";
import aboutimg from "../Images/belly2.jpg";
import { Colors, Gradients } from "./ColorComponent";

const AboutContent = () => {
  return (
    <Container>
      <SwipeComponent direction="left-to-right">
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
      <AboutImg>
        <img src={aboutimg} />
      </AboutImg>
    </Container>
  );
};
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Content = styled.p`
  font-weight: 100 !important;
  color: ${Colors.coolBlack};
  text-align: center;

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
`;
const AboutImg = styled.div`
  img {
    max-width: 100%;

    border-radius: 50px;
    background: ${Gradients.lightGoldToGold};
  }
`;
export default AboutContent;
