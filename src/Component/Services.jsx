// ServicesList.js
import React from "react";
import Heading from "./Heading";
import { Colors, Gradients } from "./ColorComponent";
import styled, { keyframes } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import weightloss from "../Image2025/weightloss.png";
import ivhydration from "../Image2025/ivnew.jpg";
import fill from "../Image2025/fillernew.jpg";
// import Glow from "../Image/Glow.png";
import neurotoxin from "../Image2025/neurotoxinnew.jpg";
import Opulent from "../Images/opulent.png";
import Revive from "../Images/Revive.png";
import Sereni from "../Images/sereni.png";
import Check from "../Images/checkk.png";
import Endurance from "../Images/Endurance.png";
import SwipeComponent from "./SwipeComponent";

// Services Array
const services = [
  {
    name: "Weight Loss Management",
    description:
      "Personalized weight loss programs tailored to your goals, combining nutrition, exercise, and lifestyle adjustments for sustainable results and continuous support.",
    linkToView: "/services",
    imageUrl: weightloss,
  },
  {
    name: "IV Hydration Services",
    description:
      "Customized IV hydration treatments designed to replenish essential nutrients, boost energy, and promote overall wellness, helping you feel revitalized and balanced.",
    linkToView: "/IVservices",
    imageUrl: ivhydration,
  },
  {
    name: "Neurotoxins",
    description:
      "Injectable treatments to smooth wrinkles and fine lines, delivering a refreshed, youthful appearance with minimal downtime and maximum results.",
    linkToView: "/neurotoxins",
    imageUrl: neurotoxin,
  },
  {
    name: "Fillers",
    description:
      "High-quality dermal fillers that enhance facial volume and contours, addressing wrinkles and sagging to provide a natural, youthful enhancement.",
    linkToView: "/filler",
    imageUrl: fill,
  },
];

// Main Component
const Services = () => {
  return (
    <>
      <Start>
        <Heading>Services</Heading>

        <SubHead>Check out Our Services</SubHead>
      </Start>
      <Container>
        <ServicesContainer>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ImageWrapper>
                <img src={service.imageUrl} alt={service.title} />
              </ImageWrapper>

              <ServiceTitle>{service.name}</ServiceTitle>
              <SwipeComponent direction="left-to-right">
                <ServiceDescription>{service.description}</ServiceDescription>
              </SwipeComponent>
              <SwipeComponent direction="right-to-left">
                <StyledLink
                  to={service.linkToView}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button>
                    LEARN MORE
                    {/* <ArrowContainer>
                  <ArrowIcon />
                </ArrowContainer> */}
                  </Button>
                </StyledLink>
              </SwipeComponent>
            </ServiceCard>
          ))}
        </ServicesContainer>
      </Container>
    </>
  );
};

const Start = styled.div`
  margin: 2rem 1rem 0rem 1rem;
  padding: 1rem 0 0 0;
  /* background: ${Colors.back}; */
  @media screen and (max-width: 600px) {
    background: ${Colors.back};
  }
  @media screen and (max-width: 320px) {
    margin: 2rem 0.5rem 0 0.5rem;
    margin-bottom: -1rem;
    background: ${Colors.back};
  }
  @media (min-width: 321px) and (max-width: 399px) {
    /* margin: 2rem 0.5rem 0 0.5rem; */
    margin-bottom: -1rem;
    background: ${Colors.back};
  }
  @media (min-width: 400px) and (max-width: 499px) {
    /* margin: 2rem 0.5rem 0 0.5rem; */
    margin-bottom: -1rem;
    background: ${Colors.back};
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
`;
const Button = styled.div`
  position: relative;
  display: flex;
  padding: 15px 11px;
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
// Styled Components
const ImageWrapper = styled.div`
  text-align: center;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 30px;
  height: 14rem;
  @media screen and (max-width: 320px) {
    margin: 0 0rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin: 0 0rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin: 0 0rem;
  }
  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`;
const Container = styled.div`
  position: relative;
  margin: 0rem 1rem 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 320px) {
    padding: 0.5rem;

    margin: 0rem 0.5rem 2rem 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem 1rem 2rem 1rem;
    margin: 0rem 0rem 2rem 0rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem 1rem 2rem 1rem;
    margin: 0rem 0rem 2rem 0rem;
  }
  @media screen and (min-width: 600px) {
    padding: 2rem 2rem 2rem 2rem;
  }
  @media screen and (min-width: 1000px) {
    /* padding: 2rem 3rem 3rem 3rem; */
    padding: 2rem 4rem 2rem 4rem;
  }

  @media screen and (min-width: 1200px) {
    /* padding: 2rem 8rem 4rem 8rem; */
    padding: 2rem 6rem 3rem 6rem;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ServiceCard = styled.div`
  /* border-radius: 10px; */
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: ${Colors.back};
  transition: transform 0.3s ease;
  text-align: center;
  /* flex: 1 1 calc(50% - 40px); */
  /* max-width: 350px; */

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 1000px) {
    border-radius: 40px;
  }
`;

const ServiceTitle = styled.h2`
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  /* font-size: 2rem; */
  position: relative;
  font-size: 24px;
  @media screen and (min-width: 1000px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;

const ServiceDescription = styled.p`
  color: #333333;
  line-height: 1.7;
  font-weight: 40 !important;
  @media screen and (min-width: 1000px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const SubHead = styled.h5`
  font-size: 1.2rem;
  text-align: center;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

export default Services;
