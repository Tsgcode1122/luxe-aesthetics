import { Colors, Gradients } from "./ColorComponent";

import React from "react";
import styled from "styled-components";
import Glow from "../Images2026/Glow.png";
import Sereni from "../Images2026/Sereni.png";
import Endurance from "../Images2026/Endurance.png";
import Revive from "../Images2026/Revive.png";
import Opulent from "../Images2026/Opulent.png";
import Check from "../Images/checkk.png";
import ClarityLuxe from "../Images2026/ClarityLuxe.png";
import BalanceLuxe from "../Images2026/BalanceLuxe.png";
import LuxeLean from "../Images2026/LuxeLean.png";
import HealingLuxe from "../Images2026/HealingLuxe.png";
import MineralLuxe from "../Images2026/MineralLuxe.png";
import GemWellnessLuxe from "../Images2026/GemWellnessLuxe.png";
import ImmuneLuxe from "../Images2026/ImmuneLuxe.png";
import NADLuxe from "../Images2026/NADLuxe.png";
import Heading from "./Heading";
import IV from "../Images2026/MobileIV.png";

import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "Clarity Luxe IV",
    tagline: "Mental Clarity • Focus ",

    description:
      "The Clarity Luxe IV supports mental clarity, focus, hydration, and cellular wellness with essential nutrients and antioxidant support.",

    Benefits: [
      "Mental clarity & focus",
      "Cognitive wellness support",
      "Hydration support",
      "Cellular rejuvenation",
      "Antioxidant support",
      "Reduced fatigue",
      "Beauty & wellness support",
    ],

    Ingredients: ["Pyridoxine (Vitamin B6)", "Taurine", "Alpha Lipoic Acid"],

    buttonLabel: "Book Now",
    imageUrl: ClarityLuxe,
  },

  {
    id: 2,
    title: "Balance Luxe IV",
    tagline: "Relief • Balance ",

    description:
      "The Balance Luxe IV supports hydration, relaxation, comfort, and overall wellness during times of physical stress and discomfort.",
    Benefits: [
      "Comfort & relaxation support",
      "Hydration support",
      "Reduced fatigue",
      "Mood & wellness support",
      "Muscle relaxation support",
      "Headache & tension support",
      "Energy support",
      "Cellular wellness",
    ],

    Ingredients: [
      "Calcium Chloride",
      "Olympia Vita-Complex",
      "Hydroxocobalamin B12",
      "Magnesium Chloride",
    ],

    buttonLabel: "Book Now",
    imageUrl: BalanceLuxe,
  },
  {
    id: 3,
    title: "Luxe Lean IV",
    tagline: "Energy • Metabolism ",

    description:
      "The Luxe Lean IV supports energy, hydration, metabolism, and vitality to help fuel an active lifestyle.",

    Benefits: [
      "Energy support",
      "Metabolism support",
      "Hydration",
      "Mental focus",
      "Reduced fatigue",
      "Exercise recovery support",
      "Wellness optimization",
    ],

    Ingredients: ["Methylcobalamin", "Vita Complex", "L-Taurine"],

    buttonLabel: "Book Now",
    imageUrl: LuxeLean,
  },

  {
    id: 4,
    title: "Healing Luxe IV",
    tagline: "Post-Op Recovery • Hydration ",

    description:
      "The Healing Luxe IV supports hydration, recovery, tissue wellness, and rejuvenation after cosmetic or surgical procedures.",

    Benefits: [
      "Post-op recovery support",
      "Hydration support",
      "Collagen & tissue wellness support",
      "Antioxidant support",
      "Cellular rejuvenation",
      "Reduced fatigue",
      "Beauty & glow support",
      "Recovery & wellness optimization",
    ],

    Ingredients: [
      "Ascorbic Acid (Vitamin C)",
      "Olympia Mineral Blend",
      "Olympia Vita-Complex",
      "Taurine",
    ],

    buttonLabel: "Book Now",
    imageUrl: HealingLuxe,
  },
  {
    id: 5,
    title: "Mineral Luxe IV",
    tagline: "Hydration • Recovery ",

    description:
      "The Mineral Luxe IV supports hydration, mineral replenishment, immunity, and overall wellness from within.",

    Benefits: [
      "Hydration support",
      "Mineral replenishment",
      "Immune wellness support",
      "Energy support",
      "Reduced fatigue",
      "Recovery & relaxation support",
      "Cellular wellness",
    ],

    Ingredients: [
      "Magnesium Chloride",
      "Zinc Sulfate",
      "Manganese",
      "Copper Gluconate",
    ],

    buttonLabel: "Book Now",
    imageUrl: MineralLuxe,
  },
  {
    id: 6,
    title: "Gem Wellness Luxe IV",
    tagline: "Hydration • Immunity ",

    description:
      "The Gem Wellness Luxe IV supports hydration, immunity, energy, and overall wellness with essential nutrients and antioxidants.",

    Benefits: [
      "Hydration support",
      "Immune wellness support",
      "Energy support",
      "Reduced fatigue",
      "Antioxidant support",
      "Cellular wellness",
      "Recovery & relaxation support",
      "Total-body wellness optimization",
    ],

    Ingredients: [
      "Magnesium Chloride",
      "B-Complex Vitamins",
      "Hydroxo B12",
      "Calcium Gluconate",
      "Ascorbic Acid (Vitamin C)",
    ],

    buttonLabel: "Book Now",
    imageUrl: GemWellnessLuxe,
  },
  {
    id: 7,
    title: "Immune Luxe IV",
    tagline: "Immunity • Wellness ",

    description:
      "The Immune Luxe IV supports immunity, hydration, and cellular wellness with antioxidant and immune-supporting nutrients.",

    Benefits: [
      "Immune wellness support",
      "Antioxidant protection",
      "Hydration support",
      "Cellular wellness",
      "Energy support",
      "Recovery support",
      "Reduced fatigue",
      "Wellness optimization",
    ],

    Ingredients: ["Glutathione", "Ascorbic Acid (Vitamin C)", "Zinc Sulfate"],

    buttonLabel: "Book Now",
    imageUrl: ImmuneLuxe,
  },
  {
    id: 8,
    title: "NAD+ Luxe IV",
    tagline: "Energy • Mental Clarity",

    description:
      "The NAD+ Luxe IV supports energy, mental clarity, cellular repair, and healthy aging for overall vitality and wellness.",

    Benefits: [
      "Increased energy support",
      "Mental clarity & focus",
      "Cellular repair support",
      "Healthy aging support",
      "Mood & wellness support",
      "Reduced fatigue",
      "Detoxification support",
      "Overall vitality & wellness optimization",
    ],

    buttonLabel: "Book Now",
    imageUrl: NADLuxe,
  },
  {
    id: 9,
    title: "Glow Drip IV Hydration",
    tagline: "Hydration • Skin Health ",

    description:
      "The Glow Drip IV Hydration supports hydration, skin health, and overall wellness with essential vitamins and nutrients.",

    Benefits: [
      "Skin moisture support",
      "Damaged cell repair support",
      "New cell growth support",
      "Reduced fatigue",
      "Stress support",
      "Electrolyte restoration",
      "Optimal hydration",
    ],

    Ingredients: [
      "Ascorbic Acid",
      "Gem Luxe Aesthetics' Vita-Complex",
      "Gem Luxe Aesthetics' Mineral Blend",
    ],

    buttonLabel: "Book Now",
    imageUrl: Glow,
  },

  {
    id: 10,
    title: "SereniDrip IV Hydration",
    tagline: "PMS Relief • Balance ",

    description:
      "The SereniDrip IV Hydration supports comfort, balance, and wellness to help ease PMS-related symptoms.",

    Benefits: [
      "Muscle cramp relief",
      "Reduced irritability",
      "Mood support",
      "Energy support",
      "Mental clarity",
      "Muscle tension relief",
      "Cycle comfort support",
    ],

    Ingredients: [
      "Calcium Chloride",
      "Gem Luxe Vita-Complex",
      "Hydroxocobalamin B12",
      "Magnesium Chloride",
    ],

    buttonLabel: "Book Now",
    imageUrl: Sereni,
  },

  {
    id: 11,
    title: "Endurance Elite Drip IV Hydration",
    tagline: "Performance • Recovery ",

    description:
      "The SereniDrip IV Hydration supports comfort, balance, and wellness to help ease PMS-related symptoms.",

    Benefits: [
      "Muscle tissue repair support",
      "Immunity support",
      "Recovery support",
      "Reduced fatigue",
      "Stress relief",
      "Inflammation support",
      "Electrolyte replenishment",
    ],

    Ingredients: [
      "Ascorbic Acid",
      "Gem Luxe Vita-Complex",
      "Gem Luxe Mineral Blend",
    ],

    buttonLabel: "Book Now",
    imageUrl: Endurance,
  },

  {
    id: 12,
    title: "Revive Luxe Drip IV Hydration",
    tagline: "Recovery • Hydration ",

    description:
      "The Revive Luxe Drip IV Hydration supports hydration, recovery, and wellness to help restore energy and vitality.",

    Benefits: [
      "Nausea relief",
      "Vomiting prevention support",
      "Hangover symptom support",
      "Fatigue support",
      "Electrolyte restoration",
      "Fluid balance support",
      "Energy restoration",
    ],

    Ingredients: [
      "Ondansetron",
      "Gem Luxe Vita-Complex",
      "Gem Luxe Mineral Blend",
    ],

    buttonLabel: "Book Now",
    imageUrl: Revive,
  },

  {
    id: 13,
    title: "Opulent Glow IV Hydration",
    tagline: "Beauty •  Glow Support",

    description:
      "The Opulent Glow IV Hydration supports skin radiance, hydration, and beauty wellness from within.",

    Benefits: [
      "Collagen production support",
      "Skin moisture support",
      "Damaged cell repair support",
      "Inflammation support",
      "Cellular regeneration support",
      "Skin elasticity support",
      "Hair follicle support",
    ],

    Ingredients: ["Ascorbic Acid", "Gem Luxe Vita-Complex", "Biotin"],

    buttonLabel: "Book Now",
    imageUrl: Opulent,
  },
  {
    id: 14,
    title: "Mobile IV Hydration",

    tagline: "Convenience • Hydration  ",

    description:
      "Mobile IV Hydration delivers convenient hydration and wellness support directly to your location.",

    Benefits: [
      "Convenient in-home, office, or event wellness care",
      "Rapid hydration support",
      "Essential nutrient replenishment",
      "Personalized wellness support",
      "Customized IV blends",
      "Flexible scheduling",
      "On-demand hydration care",
    ],

    Ingredients: [
      "Customized IV Blends",
      "Hydration Support Nutrients",
      "Electrolyte Support",
      "Wellness Vitamins",
    ],

    buttonLabel: "Book Now",

    imageUrl: IV,
  },
];

const IvSection = () => {
  return (
    <Section>
      <p>
        Dive into the details of our IV Hydrations offerings and discover how we
        can support your weight loss journey.
      </p>
      <CardsContainer>
        {services.map((service) => (
          <Card key={service.id}>
            <ImageWrapper>
              <img src={service.imageUrl} alt={service.title} />
            </ImageWrapper>

            <Content>
              <div>
                <Title>{service.title}</Title>

                {service.tagline && (
                  <Tagline>
                    {service.tagline.split("•").map((tag, index) => (
                      <TagItem key={index}>{tag.trim()}</TagItem>
                    ))}
                  </Tagline>
                )}
              </div>
              <Description>{service.description}</Description>

              <BenefitsList>
                {" "}
                <KeyBenefits>
                  <h4>POTENTIAL BENEFITS:</h4>
                </KeyBenefits>
                {service.Benefits?.map((benefit, index) => (
                  <Split key={index}>
                    <img src={Check} alt="check" />
                    <BenefitItem>{benefit}</BenefitItem>
                  </Split>
                ))}
              </BenefitsList>

              {service.Ingredients && (
                <>
                  <div>
                    <KeyBenefits>
                      <h4>KEY INGREDIENTS:</h4>
                    </KeyBenefits>

                    <BenefitsList>
                      {service.Ingredients.map((ingredient, index) => (
                        <Split key={index}>
                          <img src={Check} alt="check" />
                          <BenefitItem>{ingredient}</BenefitItem>
                        </Split>
                      ))}
                    </BenefitsList>
                  </div>
                </>
              )}

              <ButCont>
                <Button to="/appointment">{service.buttonLabel}</Button>
              </ButCont>
            </Content>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default IvSection;
const Section = styled.section`
  margin: 2rem 1rem 2rem 1rem;
  padding: 2rem 1rem 2rem 1rem;
  background: ${Colors.back} !important;
  text-align: center;
  p {
    color: black !important;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  /* background: #f3f1ea; */
  border-radius: 20px;
  border: 2px solid white;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
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
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
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

  @media screen and (max-width: 320px) {
    font-size: 0.8rem;

    line-height: 1.2;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 0.9rem;

    line-height: 1.4;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 0.9rem;

    line-height: 1.4;
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
  margin-bottom: 0.4rem;
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

const Tagline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const TagItem = styled.span`
  padding: 2px 6px;

  border: 1px solid #d0ad5b;

  background: linear-gradient(
    135deg,
    rgba(208, 173, 91, 0.15),
    rgba(247, 215, 130, 0.08)
  );

  border-radius: 30px;

  color: #000000;

  font-size: 0.82rem;

  font-weight: 600;

  letter-spacing: 0.4px;

  box-shadow: 0 4px 12px rgba(208, 173, 91, 0.12);

  backdrop-filter: blur(6px);

  white-space: nowrap;
`;

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

const KeyBenefits = styled.div`
  h4 {
    padding: 0.7rem 0 1rem 0;
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
    }
    @media (min-width: 400px) and (max-width: 499px) {
    }
  }
  @media screen and (max-width: 320px) {
  }
  @media (min-width: 321px) and (max-width: 399px) {
  }
  @media (min-width: 400px) and (max-width: 499px) {
  }
`;
