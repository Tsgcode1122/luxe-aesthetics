import React from "react";
import styled from "styled-components";

import TriImmune from "../Image2025/triinjection.png";
import WeightLoss from "../Image2025/weightinjection.png";
import Biotin from "../Image2025/Biotininjection.png";
import B12 from "../Image2025/vitamininjection.png";
import D3 from "../Image2025/vitamindinjection.png";

import { Colors, Gradients } from "./ColorComponent";
import { Link } from "react-router-dom";

// Injection Data
const injections = [
  {
    name: "Tri-Immune Boost Injections",
    description:
      "A powerful immune support injection designed to help your body fight infections, reduce inflammation, and promote overall immune resilience.",
    ingredients: [
      "Glutathione",
      "Ascorbic Acid (Vitamin C)",
      "Zinc Sulfate",
      "Vitamin B6",
    ],
    imageUrl: TriImmune,
  },

  {
    name: "Biotin Injections",
    description:
      "Biotin injections are designed to nourish your hair, skin, and nails from the inside out, offering stronger growth and improved texture.",
    ingredients: ["Biotin (Vitamin B7)", "Vitamin B Complex"],
    imageUrl: Biotin,
  },
  {
    name: "Vitamin B12 Injections",
    description:
      "Vitamin B12 shots help replenish energy, improve mood, and support red blood cell production while enhancing nervous system health.",
    ingredients: ["Vitamin B12 (Cobalamin)", "Folic Acid"],
    imageUrl: B12,
  },
  {
    name: "Vitamin D3 Injections",
    description:
      "Vitamin D3 injections support bone strength, immune health, and healthy calcium absorption, especially for those with limited sun exposure.",
    ingredients: ["Vitamin D3 (Cholecalciferol)", "Magnesium"],
    imageUrl: D3,
  },
  {
    name: "Weight Loss Injections",
    description:
      "Specially crafted to support metabolism, break down fat, and boost your energy while helping to control appetite and maintain healthy weight goals.",
    ingredients: [
      "Pyridoxine (Vitamin B6)",
      "Methionine",
      "Inositol",
      "Choline",
      "Cyanocobalamin (Vitamin B12)",
      "L-Carnitine",
      "Thiamine (Vitamin B1)",
      "Riboflavin (Vitamin B2)",
      "Chromium",
    ],
    imageUrl: WeightLoss,
  },
];

const IvInjection = () => {
  return (
    <Wrapper>
      <Container>
        {injections.map((item, index) => (
          <Card key={index}>
            <Image src={item.imageUrl} alt={item.name} />
            <Title>{item.name}</Title>
            <Description>{item.description}</Description>
            <IngredientSection>
              <h4>Ingredients:</h4>
              <ul>
                {item.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </IngredientSection>
            <ButCont>
              <Button to="/appointment">Book Now</Button>
            </ButCont>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default IvInjection;
const ButCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  font-family: "Philosopher", sans-serif;

  border-radius: 30px;
  text-decoration: none;

  &:hover {
    background: #353535;
  }
  border: none;
  border-radius: 20px 5px;
  cursor: pointer;
  /* transition: background-color 0.1s ease; */
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem; // Optional: for spacing on smaller screens
`;
// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1624px) {
    max-width: 1200px;
    /* grid-template-columns: repeat(4, 1fr); */
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
  /* margin: 0 !important; */
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;

  position: relative;
  font-family: "Philosopher", sans-serif;
  @media screen and (max-width: 320px) {
    font-size: 1.3rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: ${Colors.coolBlack};
  margin-bottom: 1rem;
`;

const IngredientSection = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    min-height: 8rem;
  }
  h4 {
    padding-bottom: 1.1rem;
    font-size: 1.2rem;
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
    @media screen and (max-width: 320px) {
      /* padding-bottom: 1.1rem; */
    }
    @media (min-width: 321px) and (max-width: 399px) {
      padding-bottom: 1.1rem;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      padding-bottom: 1.1rem;
    }
  }

  ul {
    list-style: disc;
    padding-left: 1.25rem;
    color: #444;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;
