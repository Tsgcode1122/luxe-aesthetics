import React from "react";
import styled from "styled-components";
import Glow from "../Images/Glow.png";
import Opulent from "../Images/opulent.png";
import Revive from "../Images/Revive.png";
import Sereni from "../Images/sereni.png";
import Check from "../Images/checkk.png";
import Endurance from "../Images/Endurance.png";
import Heading from "./Heading";

import { Colors, Gradients } from "./ColorComponent";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "Glow Drip IV Hydration",

    description:
      "Glow Drip IV Hydration Therapy is a rejuvenating treatment that restores hydration and delivers essential vitamins, minerals, and electrolytes to boost skin health and overall wellness.",
    Benefits: [
      "<strong>Ascorbic Acid:</strong> Increases skin moisture, repairs damaged cells,and promotes new cell growth.",
      "<strong>Gem Luxe Aesthetics' Vita-Complex:</strong> Reduces fatigue and helps manage stress.",

      "<strong>Gem Luxe Aesthetics' Mineral Blend:</strong> Restores electrolytes and maintains fluid balance for optimal hydration.",
    ],
    buttonLabel: "Book Now",
    imageUrl: Glow,

    lastDescription:
      "Glow Drip is perfect for restoring vitality, enhancing your skin’s glow, and feeling refreshed from the inside out.",
  },
  {
    id: 2,
    title: "SereniDrip IV Hydration",

    description:
      "Experience relief with SereniDrip IV Hydration, designed to ease PMS symptoms like bloating, cramps, and fatigue, leaving you balanced, refreshed, and revitalized throughout your cycle.",
    Benefits: [
      "<strong>Calcium Chloride:</strong> Restores calcium levels to ease muscle cramps and reduce irritability.",
      "<strong>Gem Luxe Vita-Complex:</strong> Enhances mood and boosts energy, helping you feel your best during your cycle.",
      "<strong>Hydroxocobalamin B12:</strong> Supports energy, improves mood, and promotes mental clarity.",
      "<strong>Magnesium Chloride:</strong> Relieves muscle tension, relaxes uterine spasms, and eases discomfort.",
    ],
    buttonLabel: "Book Now",
    imageUrl: Sereni,
    lastDescription:
      "Each SereniDrip IV Kit provides up to 7 infusions, delivering continuous relief from PMS discomfort.",
  },
  {
    id: 3,
    title: "Endurance Elite Drip IV Hydration",

    description:
      "Unlock your best with Endurance Elite Drip at Gem Luxe Aesthetics! Perfect for athletes, it boosts recovery, enhances performance, and replenishes essential nutrients to keep you at the top of your game",
    Benefits: [
      "<strong>Ascorbic Acid:</strong> Promotes muscle tissue repair, boosts immunity, and aids in the recovery of damaged cells.",
      "<strong>Gem Luxe Vita-Complex:</strong> Reduces fatigue, relieves stress, and combats inflammation.",
      "<strong>Gem Luxe Mineral Blend:</strong> Replenishes vital electrolytes, regulates fluid balance.",
    ],
    buttonLabel: "Book Now",
    imageUrl: Endurance,
    lastDescription:
      "Each session of Endurance Elite Drip delivers a powerful infusion of hydration and nutrients, helping you stay at the top of your game. ",
  },
  {
    id: 4,
    title: "Revive Luxe Drip IV Hydration",

    description:
      "Bounce back fast with Revive Luxe Drip at Gem Luxe Med Spa! Hydrate, ease hangover symptoms, and restore your energy effortlessly to feel your best again.",
    Benefits: [
      "<strong>Ondansetron:</strong> Reduces nausea and prevents vomiting, easing those tough hangover symptoms.",
      "<strong>Gem Luxe Vita-Complex:</strong> Combats dehydration-induced fatigue.",
      "<strong>Gem Luxe Mineral Blend:</strong> Restores essential electrolytes, balances fluid levels.",
    ],
    buttonLabel: "Book Now",
    imageUrl: Revive, // Replace with the correct image path
    lastDescription:
      "Each Revive Luxe Drip provides up to 10 infusions, delivering a luxurious and effective solution to rehydrate, revitalize, and refresh.",
  },
  {
    id: 5,
    title: "Opulent Glow IV Hydration",

    description:
      "Reveal your radiance with Opulent Glow IV Therapy at Gem Luxe Med Spa! Hydrate, nourish, and rejuvenate your skin, hair, and nails for a youthful, luminous glow.",
    Benefits: [
      "<strong>Ascorbic Acid:</strong> Vital for collagen production, ascorbic acid increases skin moisture, repairs damaged cells. ",
      "<strong>Gem Luxe Vita-Complex:</strong> Reduces inflammation, boosts cellular regeneration.",
      "<strong>Biotin:</strong> Supports collagen and keratin formation, improves skin elasticity, and stimulates hair follicles.",
    ],
    buttonLabel: "Book Now",
    imageUrl: Opulent,
    lastDescription:
      "Each Opulent Glow IV Kit provides up to 10 infusions, delivering deep hydration and beauty-boosting benefits from within.",
  },
];

const IvSection = () => {
  return (
    <Section>
      <Heading>Featured Treatments</Heading>
      <CardsContainer>
        {services.map((service) => (
          <Card key={service.id}>
            <ImageWrapper>
              <img src={service.imageUrl} alt={service.title} />
            </ImageWrapper>
            <Content>
              <Title>{service.title}</Title>
              <Description>{service.description}</Description>
              <KeyBenefits>
                <h4>KEY BENEFITS:</h4>
              </KeyBenefits>
              <BenefitsList>
                {service.Benefits.map((benefit, index) => (
                  <Split>
                    <img src={Check} />
                    <BenefitItem
                      key={index}
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </Split>
                ))}
              </BenefitsList>
              <LastDescription>{service.lastDescription}</LastDescription>
              <Button to="/appointment">{service.buttonLabel}</Button>
            </Content>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default IvSection;
const Section = styled.section`
  padding: 2rem;
  /* background-color: #f9f9f9; */
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 350px;
  text-align: left;
  padding: 1rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: 20rem;
    border-radius: 10px;
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

const Content = styled.div`
  margin-top: 1rem;
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
  font-size: 0.9rem;
  color: #252525;
  line-height: 1.4;
  margin-bottom: 1rem;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;

    line-height: 1.2;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;

    line-height: 1.2;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;

    line-height: 1.2;
  }
`;

const Split = styled.div`
  display: flex;
  gap: 10px;

  img {
    max-width: 100%;

    height: 12px;
    margin-top: 5px !important;
    padding: 0 !important;
  }
  margin-bottom: 1rem;
`;
const BenefitsList = styled.ul`
  list-style: none;

  margin: 0 !important;
  padding: 0 !important;
`;

const BenefitItem = styled.li`
  font-size: 0.9rem;
  color: #444;
  margin: 0 !important;
  padding: 0 !important;
`;

const LastDescription = styled.p`
  font-size: 0.9rem;
  color: #252525;
  margin-bottom: 1rem;
  font-style: italic;
  @media screen and (max-width: 320px) {
    font-size: 0.8rem;

    line-height: 1.2;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;

    line-height: 1.2;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;

    line-height: 1.2;
  }
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
  box-shadow:
    0 0 1px #f3d57f,
    0 0 1px #f3d57f,
    0 0 1px #a08733,
    0 0 6px #a08733;
  border-radius: 30px;
  text-decoration: none;

  &:hover {
    background: #353535;
  }
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* transition: background-color 0.1s ease; */
`;

const KeyBenefits = styled.div`
  margin-top: 1rem;

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
  @media screen and (max-width: 320px) {
    margin-top: 1.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-top: 2.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-top: 2.5rem;
  }
`;
