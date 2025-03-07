import React, { useEffect } from "react";
import NeurotoxinFaqs from "../Component/NeurotoxinFaqs";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Image2025/neuro.jpg";
import aboutimg from "../Image2025/neuronew.jpg";

import styled from "styled-components";

import { Colors, Gradients } from "../Component/ColorComponent";
import { Link } from "react-router-dom";
import SwipeComponent from "../Component/SwipeComponent";
import Button from "../Component/Button";
const Neurotoxins = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Neurotoxin Services"
      />
      <BContainer>
        <Container>
          <SwipeComponent direction="left-to-right">
            <Heading>About Us</Heading>
            <Content>
              Neurotoxin treatments, such as Botox and Dysport, are a
              non-invasive way to reduce fine lines and wrinkles, giving your
              skin a smoother, more youthful appearance. By temporarily relaxing
              targeted facial muscles, neurotoxins help soften expression lines
              on the forehead, around the eyes, and between the brows.
            </Content>
          </SwipeComponent>
          <SwipeComponent direction="right-to-left">
            <Link to="/appointment">
              <Button>Book Now</Button>
            </Link>
          </SwipeComponent>

          <AboutImg>
            <img src={aboutimg} />
          </AboutImg>
        </Container>
      </BContainer>
      <NeurotoxinFaqs />
    </div>
  );
};

export default Neurotoxins;
const BContainer = styled.div`
  background: ${Colors.back};
  /* margin: 2rem 1rem -1rem 1rem; */
  padding: 2rem 1rem 2rem 1rem;
  @media screen and (max-width: 320px) {
    margin: 0;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: 0;
    padding: 2rem 0.65rem 0.65rem 0.65rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: 0;
    padding: 2rem 0.75rem 0.75rem 0.75rem;
  }
`;
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
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 30px;
  height: 14rem;
  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 30px;
    background: ${Gradients.lightGoldToGold};
    @media screen and (max-width: 320px) {
      height: 15rem;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 15rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 15rem;
    }
  }
`;
