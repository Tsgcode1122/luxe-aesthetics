import React from "react";
import styled from "styled-components";
import bottleImage from "../Images/bottle1.png";
import { Colors, Gradients } from "./ColorComponent";
import SwipeComponent from "./SwipeComponent";
import ZoomInComponent from "./ZoomInComponent";

const Bottle = () => {
  return (
    <ZoomInComponent>
      <BottleWrapper>
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
  /* margin-top: 5rem; */
  padding: 7rem 0 5rem 0;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${Gradients.goldGradient};
  position: absolute;
`;

const BottleImage = styled.img`
  max-width: 100%;
  height: 300px;
  position: relative;
  margin-top: -3.53rem;
`;
