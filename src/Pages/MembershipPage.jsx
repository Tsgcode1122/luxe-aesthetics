import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/contactb.jpg";
import { Colors, Gradients } from "../Component/ColorComponent";

import { FaGem, FaCrown, FaStar } from "react-icons/fa";

const memberships = [
  {
    id: 1,
    name: "Luxe Membership",
    price: "$125/month",
    icon: FaGem,

    benefits: [
      "1 Signature IV Hydration treatment monthly",
      "1 complimentary B12 shot",
      "10% off add-on boosters",
      "Priority booking",
    ],
  },

  {
    id: 2,
    name: "Platinum Luxe",
    price: "$249/month",
    icon: FaCrown,

    benefits: [
      "2 Signature IV Hydration treatments monthly",
      "2 complimentary B12 shots",
      "15% off add-on boosters",
      "VIP scheduling",
    ],
  },

  {
    id: 3,
    name: "Elite Wellness",
    price: "$399/month",
    icon: FaStar,

    benefits: [
      "4 IV Hydration treatments monthly",
      "Unlimited B12 injections",
      "20% off boosters/add-ons",
      "VIP booking access",
    ],
  },
];

const MembershipPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Monthly IV Hydration Memberships"
      />

      <MembershipSection>
        <Intro>
          Wellness should be consistent, not occasional. Join the Gem Luxe
          Hydration Club and enjoy monthly IV hydration, exclusive member perks,
          and VIP priority booking.
        </Intro>

        <Cards>
          {memberships.map((plan) => {
            const IconComponent = plan.icon;

            return (
              <Card key={plan.id}>
                {/* <Icon>
                  <IconComponent />
                </Icon> */}

                <h2>{plan.name}</h2>

                <Price>{plan.price}</Price>

                <Includes>Includes:</Includes>

                <ul>
                  {plan.benefits.map((benefit, index) => (
                    <li key={index}>✓ {benefit}</li>
                  ))}
                </ul>

                <Button
                  to="/appointment"
                  state={{
                    selectedService: plan.name,
                  }}
                >
                  Join Now
                </Button>
              </Card>
            );
          })}
        </Cards>

        <TermsBox>
          <h3>Membership Terms</h3>

          <p>
            Monthly auto-payment required. Three-month minimum commitment
            recommended. Memberships are non-transferable. Unused sessions
            expire after 30 days. Cancellations require 30-day written notice.
          </p>

          <Ready>Ready to elevate your wellness routine?</Ready>

          <Phone href="tel:+14849952726">(484) 995-2726</Phone>
        </TermsBox>
      </MembershipSection>
    </>
  );
};

export default MembershipPage;
const MembershipSection = styled.section`
  padding: 80px 6%;
  background: ${Colors.back} !important;
`;

const Intro = styled.p`
  max-width: 850px;
  margin: 0 auto 45px;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 2px solid white;
  border-radius: 28px;
  padding: 35px 28px;
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 15px 20px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 15px 20px;
  }
  h2 {
    color: black;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 25px 0;
    text-align: left;
  }

  li {
    margin-bottom: 14px;
    color: #333;
    line-height: 1.5;
  }
`;

const Icon = styled.div`
  font-size: 2.6rem;
  margin-bottom: 15px;
`;

const Price = styled.h3`
  color: #9e7a2c;
  font-size: 1.6rem;
  margin-bottom: 20px;

  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
`;

const Includes = styled.p`
  font-weight: 700;
  color: #333333;
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

const TermsBox = styled.div`
  margin-top: 55px;
  padding: 30px;
  border-radius: 22px;
  background: rgba(208, 173, 91, 0.12);
  border: 1px solid rgba(208, 173, 91, 0.4);

  h3 {
    color: #9e7a2c;
    margin-bottom: 10px;
    font-size: large;
    font-weight: bold;
  }

  p {
    line-height: 1.7;
    color: #333;
  }
`;

const CTA = styled.div`
  text-align: center;
  margin-top: 50px;

  h2 {
    color: #333333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #9e7a2c;
    font-weight: 600;
  }
`;

const Ready = styled.h2`
  margin-top: 35px;

  color: ${Colors.coolBlack};
`;

const Phone = styled.a`
  font-size: 1.1rem;

  color: #9e7a2c;

  font-weight: 700;

  text-decoration: none;

  transition: 0.3s;

  &:hover {
    color: #d0ad5b;
  }
`;
