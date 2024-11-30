// ServicesList.js
import React from "react";
import Heading from "./Heading";
import { Colors } from "./ColorComponent";
import styled, { keyframes } from "styled-components";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Services Array
const services = [
  {
    name: "Weight Loss Management",
    description: "Personalized programs to help you achieve your weight goals.",
    linkToView: "/services",
  },
  {
    name: "IV Hydration Services",
    description:
      "Revitalize and replenish your body with customized IV treatments.",
    linkToView: "/IVservices",
  },
  {
    name: "Neurotoxins",
    description: "Reduce wrinkles and fine lines for a youthful appearance.",
    // linkToView: "",
  },
  {
    name: "Fillers",
    description: "Enhance your natural features with our premium fillers.",
    // linkToView: "",
  },
];

// Main Component
const Services = () => {
  return (
    <Container>
      <Heading>Services</Heading>
      <SubHead>Check out Our Services</SubHead>
      <ServicesContainer>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <Link
              to={service.linkToView}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ServiceTitle>{service.name}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ArrowContainer>
                <ArrowIcon />
              </ArrowContainer>
            </Link>
          </ServiceCard>
        ))}
      </ServicesContainer>
    </Container>
  );
};

// Styled Components
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

  @media screen and (max-width: 320px) {
    padding: 0.5rem;
    border-radius: 30px;
    margin: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 1rem;

    margin: 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 1rem;

    margin: 1.5rem;
  }
  @media screen and (min-width: 600px) {
    padding: 2rem 2rem 2rem 2rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 3rem 3rem 3rem;
    margin: 2rem 3rem 2rem 3rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 8rem 4rem 8rem;
    margin: 2rem 8rem 3rem 8rem;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  flex: 1 1 calc(50% - 40px);
  max-width: 350px;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 600px) {
    flex: 1 1 100%;
  }
`;

const ServiceTitle = styled.h2`
  color: #9e7a2c;
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

const ArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ArrowIcon = styled(ArrowRightOutlined)`
  font-size: 24px;
  color: #d0ad5b;
  animation: ${pulse} 1.5s infinite;
`;

const SubHead = styled.h5`
  font-size: 1.2rem;
  text-align: center;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;

  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
`;

export default Services;
