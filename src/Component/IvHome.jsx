import React from "react";
import styled from "styled-components";
import Glow from "../Images2026/Glow.png";
import Sereni from "../Images2026/Sereni.png";
import Endurance from "../Images2026/Endurance.png";
import Revive from "../Images2026/Revive.png";
import Opulent from "../Images2026/Opulent.png";

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
import { Colors, Gradients } from "./ColorComponent";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    title: "Clarity Luxe IV",
    tagline: "Mental Clarity • Focus • Cellular Wellness",

    description:
      "The Clarity Luxe IV is a premium wellness infusion designed to support mental clarity, focus, hydration, and overall cellular wellness. Powered by essential vitamins and antioxidant support, this luxury drip helps refresh the mind and body while promoting wellness from within.",

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
    tagline: "Relief • Balance • Wellness Support",

    description:
      "The Balance Luxe IV is a premium wellness infusion designed to support comfort, balance, hydration, and overall wellness during times of physical stress and discomfort. Formulated with essential vitamins and minerals, this luxury drip helps promote relaxation, energy support, and whole-body wellness from within.",

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
    tagline: "Energy • Metabolism • Wellness Support",

    description:
      "The Luxe Lean IV is a premium wellness infusion designed to support energy levels, hydration, metabolism, and overall vitality. Packed with essential B vitamins and wellness-supporting nutrients, this infusion helps fuel your body from within while supporting an active lifestyle.",

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
    tagline: "Post-Op Recovery • Hydration • Cellular Wellness",

    description:
      "The Healing Luxe Post-Op IV is a premium wellness infusion designed to support hydration, recovery, tissue wellness, and overall rejuvenation after cosmetic or surgical procedures. Packed with essential vitamins, minerals, antioxidants, and amino acids, this luxury drip helps support the body’s natural recovery process while promoting wellness and beauty from within.",

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
    tagline: "Hydration • Recovery • Wellness Support",

    description:
      "The Mineral Luxe IV is a premium wellness infusion designed to support hydration, replenish essential minerals, and promote overall wellness from within. Packed with vital nutrients and wellness-supporting minerals, this luxury drip helps restore balance, support immunity, and enhance recovery.",

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
    tagline: "Hydration • Immunity • Total Wellness",

    description:
      "The Gem Wellness Luxe IV is a premium wellness infusion designed to support hydration, immunity, energy, and overall wellness from within. Packed with essential vitamins, antioxidants, and minerals, this luxury drip helps replenish the body while promoting recovery, vitality, and cellular wellness.",

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
    tagline: "Immunity • Wellness • Antioxidant Support",

    description:
      "The Immune Luxe IV is a premium wellness infusion designed to support immunity, hydration, and overall cellular wellness from within. Packed with powerful antioxidants and immune-supporting nutrients, this luxury treatment helps strengthen the body’s natural defenses while promoting recovery, vitality, and wellness optimization. Available as both an IV infusion or intramuscular (IM) injection for convenient wellness support tailored to your lifestyle.",

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
    tagline: "Energy • Mental Clarity • Cellular Wellness",

    description:
      "The NAD+ Luxe IV is a premium restorative wellness treatment designed to replenish essential coenzymes, support cellular repair, and promote healthy aging from within. This luxury therapy helps boost energy, enhance mental clarity, and support overall wellness and vitality. Available as both an IV infusion or injection for convenient wellness support tailored to your lifestyle and wellness goals.",

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
    tagline: "Hydration • Skin Health • Wellness Support",

    description:
      "Glow Drip IV Hydration Therapy is a rejuvenating treatment that restores hydration and delivers essential vitamins, minerals, and electrolytes to boost skin health and overall wellness.",

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
    tagline: "PMS Relief • Balance • Energy Support",

    description:
      "Experience relief with SereniDrip IV Hydration, designed to ease PMS symptoms like bloating, cramps, and fatigue, leaving you balanced, refreshed, and revitalized throughout your cycle.",

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
    tagline: "Performance • Recovery • Hydration Support",

    description:
      "Unlock your best with Endurance Elite Drip at Gem Luxe Aesthetics! Perfect for athletes, it boosts recovery, enhances performance, and replenishes essential nutrients to keep you at the top of your game.",

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
    tagline: "Recovery • Hydration • Energy Support",

    description:
      "Bounce back fast with Revive Luxe Drip at Gem Luxe Med Spa! Hydrate, ease hangover symptoms, and restore your energy effortlessly to feel your best again.",

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
    tagline: "Beauty • Hydration • Glow Support",

    description:
      "Reveal your radiance with Opulent Glow IV Therapy at Gem Luxe Med Spa! Hydrate, nourish, and rejuvenate your skin, hair, and nails for a youthful, luminous glow.",

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

    tagline: "Convenience • Hydration • Wellness Support",

    description:
      "Mobile IV Hydration brings revitalizing IV therapy directly to your location, offering convenient, on-the-go wellness and hydration support.",

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

const IvHome = () => {
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
              <Title>{service.title}</Title>

              {service.tagline && <Tagline>{service.tagline}</Tagline>}

              <Description>{service.description}</Description>

              <KeyBenefits>
                <h4>POTENTIAL BENEFITS:</h4>
              </KeyBenefits>

              <BenefitsList>
                {service.Benefits?.map((benefit, index) => (
                  <Split key={index}>
                    <img src={Check} alt="check" />
                    <BenefitItem>{benefit}</BenefitItem>
                  </Split>
                ))}
              </BenefitsList>

              {service.Ingredients && (
                <>
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

export default IvHome;
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

const Tagline = styled.p`
  display: inline-block;
  padding: 8px 14px;

  background: linear-gradient(
    135deg,
    rgba(208, 173, 91, 0.15),
    rgba(247, 215, 130, 0.08)
  );

  border: 1px solid #d0ad5b;

  border-radius: 30px;

  color: #9e7a2c;

  font-size: 0.85rem;
  font-weight: 600;

  letter-spacing: 0.5px;

  margin: 0 0 16px 0;

  width: fit-content;

  box-shadow: 0 4px 12px rgba(208, 173, 91, 0.12);

  backdrop-filter: blur(6px);
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
