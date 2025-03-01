import React, { useEffect } from "react";
import DermalFillerFaqs from "../Component/DermalFillerFaqs";
import backgroundImage from "../Image2025/fillerh.jpg";
import styled from "styled-components";
import ServiceDetails from "../Component/ServiceDetails";
import PageHeading from "../Component/PageHeading";

import aboutimg from "../Image2025/fillerh.jpg";
import { Colors, Gradients } from "../Component/ColorComponent";
import { Link } from "react-router-dom";
import SwipeComponent from "../Component/SwipeComponent";
import Button from "../Component/Button";
const Fillers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Dermal Filler Services"
      />
      <BContainer>
        <Container>
          <SwipeComponent direction="left-to-right">
            <Heading>About Us</Heading>
            <Content>
              Dermal fillers are a popular, non-surgical cosmetic treatment
              designed to restore volume, smooth out wrinkles, and rejuvenate
              your appearance. Whether you're looking to soften deep lines,
              enhance facial contours, or add fullness to areas like your lips
              or cheeks, dermal fillers offer a safe and effective solution with
              minimal downtime.
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

      <DermalFillerFaqs />
    </>
  );
};

export default Fillers;
const BContainer = styled.div`
  background: ${Colors.back};
  margin: 2rem 1rem 0rem 1rem;
  padding: 2rem 1rem 0rem 1rem;
  @media screen and (max-width: 320px) {
    margin: 0;
    padding: 1rem 0.65rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: 0;
    padding: 1rem 0.65rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: 0;
    padding: 1rem 0.75rem;
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
  img {
    max-width: 100%;

    border-radius: 50px;
    background: ${Gradients.lightGoldToGold};
  }
  @media screen and (min-width: 600px) {
    padding: 0 3rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 0;
  }
`;
