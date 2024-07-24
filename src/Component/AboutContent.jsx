import React from "react";
import styled from "styled-components";
import SwipeComponent from "./SwipeComponent";
const Content = styled.p`
  font-weight: 200 !important;

  text-align: center;
  /* font-family: "Quincy CF", sans-serif; */

  font-family: "Playwrite DE Grund", cursive;
`;
const AboutContent = () => {
  return (
    <>
      <SwipeComponent direction="left-to-right">
        <Content>
          Welcome to Gem Luxe Aesthetics, where your path to a healthier, more
          vibrant self begins. We specialize in providing tailored weight loss
          solutions designed to align perfectly with your wellness goals. <br />
          Our expert team crafts personalized plans that fit seamlessly into
          your lifestyle
        </Content>
      </SwipeComponent>
      <Content></Content>
    </>
  );
};

export default AboutContent;
