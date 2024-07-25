import React from "react";
import styled from "styled-components";
import bottleImage from "../Images/bottle1.png";
import { Colors, Gradients } from "./ColorComponent";
import SwipeComponent from "./SwipeComponent";
import ZoomInComponent from "./ZoomInComponent";
import WhiteStar from "./WhiteStar";

const Bottle = () => {
  return (
    <ZoomInComponent>
      <BottleWrapper>
        <WhiteStar />
        <Circle />
        <BottleImage src={bottleImage} alt="Bottle" />
      </BottleWrapper>
    </ZoomInComponent>
  );
};

export default Bottle;

const BottleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 7rem 0 5rem 0;
  @media screen and (max-width: 320px) {
    padding: 5rem 0 3rem 0;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 5rem 0 3rem 0;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 5rem 0 3rem 0;
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${Gradients.goldGradient};
  position: absolute;
  @media screen and (max-width: 320px) {
    height: 250px;
    width: 250px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    height: 280px;
    width: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    height: 280px;
    width: 280px;
  }
`;

const BottleImage = styled.img`
  max-width: 100%;
  height: 300px;
  position: relative;
  margin-top: -3.53rem;
  @media screen and (max-width: 320px) {
    height: 250px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    height: 280px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    height: 280px;
  }
`;
