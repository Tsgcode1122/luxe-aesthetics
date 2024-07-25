import React from "react";
import Heading from "./Heading";
import { Colors, Gradients } from "./ColorComponent";
import styled, { keyframes } from "styled-components";
import bgg from "../Images/sema.png";
import bg from "../Images/tirz.png";
import arrow from "../Images/arrow.png";
import Button from "./Button";
import "animate.css";
import StarsBackground from "./StarsBackground";
import SwipeComponent from "./SwipeComponent";
Gradients;
const Services = () => {
  return (
    <Container>
      <StarsBackground />
      <Heading>Services</Heading>
      <SubHead>Offering two Innovative Packages</SubHead>
      <Package>
        <>
          <SwipeComponent direction="left-to-right">
            <Content>
              <Head>GLP-1 Semaglutide</Head>
              <Bg>
                <Intro>
                  A treatment that create calorie defict for weight loss.
                </Intro>
                <Prices>
                  <Price>
                    <span>$ 299.00</span>
                    <p> USD/monthly</p>
                  </Price>
                  <Price>
                    <span>$ 150.00 </span> <p>/ first month special</p>
                  </Price>
                </Prices>
              </Bg>
              <Button2 href="#packages">
                View Details{" "}
                <img
                  src={arrow}
                  alt="Arrow"
                  className="animate__animated animate__headShake animate__slower animate__infinite"
                />
              </Button2>
            </Content>
          </SwipeComponent>
          <SwipeComponent direction="right-to-left">
            <Content2>
              <Head>GIP/GLP-1 TIRZEPATIDE</Head>

              <Bg>
                <Intro>
                  A treatment that regulates appetite and blood sugar, enhancing
                  weight loss.
                </Intro>
                <Prices>
                  <Price>
                    <span>$ 349.00</span>
                    <p> USD/monthly</p>
                  </Price>
                  <Price>
                    <span>$ 199.00 </span> <p>/ first month special</p>
                  </Price>
                </Prices>
              </Bg>

              <Button2>
                View Details{" "}
                <img
                  src={arrow}
                  alt="Arrow"
                  className="animate__animated  animate__headShake animate__slower animate__infinite"
                />
              </Button2>
            </Content2>
          </SwipeComponent>
        </>
        <Button>Book Now</Button>
      </Package>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 2rem;

  margin: 2rem;
  background: ${Colors.offWhite};
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Package = styled.div`
  align-items: center;
  position: relative;
  text-align: center;
`;
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const Head = styled.div`
  background: linear-gradient(
    -1deg,
    #0b090a 0%,
    #f0e8d7 10%,
    #f4ebd0 20%,

    #f4ebd0 50%,
    #f0e8d7 70%,
    #f4ebd0 90%,
    #0b090a 100%
  );
  border-radius: 10px 10px 0 0;
  padding: 4px 2px 10px 2px;
  font-weight: 600;
  color: black;
  z-index: 1;
`;
const Content = styled.div`
  border-radius: 10px;
  margin-bottom: 2rem;
  max-width: 300px;
  color: ${Colors.coolBlack};
  background: url(${bgg}) no-repeat center/cover;
  z-index: 3 !important;
  background-size: 30%;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Content2 = styled.div`
  margin-bottom: 2rem;
  max-width: 300px;
  border-radius: 10px;
  background: url(${bg}) no-repeat center/cover;
  z-index: 3 !important;
  background-size: 30%;
  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;
const Bg = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 0rem 1rem 1rem 1rem;
  justify-content: space-between;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const Intro = styled.p`
  margin: 0;
  padding-top: 10px;
  color: ${Colors.coolBlack};
`;
const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1px;
`;
const Price = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: -1rem;
  margin-top: -0.2rem;
  span {
    font-size: 1.5rem;
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
  }
  p {
    font-style: italic;
  }
`;
const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;
const Button2 = styled.div`
  padding: 10px 20px;
  position: relative;
  cursor: pointer;
  font-size: 1.2rem;
  gap: 20px;
  color: black;
  background: linear-gradient(
    -1deg,
    #0b090a 0%,
    #f0e8d7 10%,
    #f4ebd0 20%,

    #f4ebd0 50%,
    #f0e8d7 70%,
    #f4ebd0 90%,
    #0b090a 100%
  );
  font-family: "Philosopher", sans-serif;
  border-radius: 0 0 10px 10px;
  text-decoration: none;
  transition: background-color 0.3s;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 50%;
    width: 20%;
    height: 20%;
    background: rgba(55, 54, 54, 0.2);

    transform: translate(-50%, -50%) scale(0);
    animation: ${rippleAnimation} 2s infinite;
    z-index: 1;
  }
  &:hover {
    background: #f7d782;
  }
  img {
    max-width: 100%;
    height: 10px;
    --animate-duration: 10.5s;
    @media screen and (max-width: 320px) {
      height: 10px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 12px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 12px;
    }
  }
`;

export default Services;
