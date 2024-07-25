import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "./ColorComponent";
import Heading from "./Heading";
import Button from "./Button";
import i4 from "../Images/i4.png";
import Sema from "../Images/semagl.png";
import Tirz from "../Images/tirze.png";
import ZoomInComponent from "./ZoomInComponent";
import WhiteStar from "./WhiteStar";
import SwipeComponent from "./SwipeComponent";
const ServiceDetails = () => {
  return (
    <Container>
      <Intro>
        <p>
          Dive into the details of our offerings and discover how we can support
          your weight loss journey.
        </p>
      </Intro>
      <Package>
        <SideCross>Popular by Demand</SideCross>
        <Heading>Semaglutide Package</Heading>
        <SubHead>GLP-1 SEMAGLUTIDE</SubHead>

        <Prices>
          <Price>
            <span>$ 299.00</span>
            <p> USD/monthly</p>
          </Price>
          <Price>
            <span>$ 150.00 </span> <p>/ first month special</p>
          </Price>
        </Prices>
        <Description>
          Unlock the power of Semaglutide, a revolutionary GLP-1 agonist that
          not only aids in enhanced insulin secretion but also significantly
          reduces your appetite. This mechanism creates a calorie deficit,
          paving the way for effective weight loss. What sets our Semaglutide
          apart is the addition of a potent enhancer that amplifies your weight
          loss efforts.
        </Description>

        <BottleWrapper>
          <WhiteStar />
          <Circle />
          <BottleImage src={Sema} alt="Bottle" />
        </BottleWrapper>

        <KeyBenefits>
          <h4>KEY BENEFITS:</h4>
          <List>
            <SwipeComponent direction="left-to-right">
              <ListItem>
                <img src={i4} />{" "}
                <p>Average weight loss of 5-10 lbs per month. </p>
              </ListItem>
            </SwipeComponent>
            <ListItem>
              <img src={i4} />
              <p>
                Initial focus on inch loss, setting the stage for visible weight
                reduction.
              </p>
            </ListItem>
            <SwipeComponent direction="right-to-left">
              <ListItem>
                <img src={i4} />
                <p>
                  Helps maintain better glycemic control, reducing HbA1c levels
                  and the need for additional diabetes medications.
                </p>
              </ListItem>
            </SwipeComponent>
          </List>
        </KeyBenefits>
        <Button>Book Now!!!</Button>
      </Package>
      <Package>
        <SideCross>Highly Recommended</SideCross>
        <Heading>Tirzepatide Package</Heading>
        <SubHead>GIP/GLP-1 TIRZEPATIDE</SubHead>

        <Prices>
          <Price>
            <span>$ 349.00</span>
            <p> USD/monthly</p>
          </Price>
          <Price>
            <span>$ 199.00 </span> <p>/ first month special</p>
          </Price>
        </Prices>
        <Description>
          Explore the benefits of Tirzepatide, a combined GIP/GLP-1 receptor
          agonist that offers a comprehensive approach to weight management. By
          targeting two key pathways, Tirzepatide supports insulin production to
          manage blood while simultaneously reducing appetite and caloric
          intake, fostering a conducive environment for weight loss.
        </Description>

        <BottleWrapper>
          <WhiteStar />
          <Circle />
          <BottleImage src={Tirz} alt="Bottle" />
        </BottleWrapper>

        <KeyBenefits>
          <h4>KEY BENEFITS:</h4>
          <List>
            <SwipeComponent direction="left-to-right">
              <ListItem>
                <img src={i4} />
                <p>
                  Innovative average weight loss formula for a comprehensive
                  weight management strategy designed for individuals seeking a
                  potent solution to complement their weight loss journey.
                </p>
              </ListItem>
            </SwipeComponent>
            <ListItem>
              <img src={i4} />
              <p>
                Specifically targets and reduces visceral fat, leading to a
                healthier body composition.
              </p>
            </ListItem>
            <SwipeComponent direction="right-to-left">
              <ListItem>
                <img src={i4} />
                <p>
                  Combines the benefits of GIP and GLP-1 agonists, offering a
                  more comprehensive approach to appetite and blood sugar
                  regulation.
                </p>
              </ListItem>
            </SwipeComponent>
          </List>
        </KeyBenefits>
        <Button>Book Now!!!</Button>
      </Package>
    </Container>
  );
};

export default ServiceDetails;
const SideCross = styled.div`
  background: ${Gradients.blackToGold};
  position: absolute;
  color: white;
  right: 0;
  font-size: 0.7rem;
  font-weight: 500;
  margin-top: 0.4rem;
  margin-right: -3.5rem;
  padding: 10px 50px;
  transform: rotate(45deg);
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
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const Container = styled.div`
  padding: 2rem;
  text-align: center;
  background: ${Colors.offWhite};
`;

const Intro = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: ${Colors.coolBlack};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${Colors.coolBlack};
  }
`;

const Package = styled.div`
  position: relative;
  overflow: hidden !important;
  background: white;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.8rem;
    color: ${Colors.gold};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.6rem;
    color: ${Colors.coolBlack};
    margin-bottom: 0.5rem;
  }
`;

const BottleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 5rem; */
  padding: 3rem 0 1rem 0;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${Gradients.goldGradient};
  position: absolute;
`;

const BottleImage = styled.img`
  max-width: 100%;
  height: 300px;
  position: relative;
  margin-top: -3.53rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${Colors.coolBlack};
  margin: 1rem 0;
`;

const KeyBenefits = styled.div`
  h4 {
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
  }
`;
const List = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;

  gap: 20px;
  padding-bottom: 2rem;
  color: ${Colors.coolBlack};
  list-style: none;
`;
const ListItem = styled.div`
  p {
    margin: 0;
    padding: 0;
    text-align: left !important;
    font-size: 15px;
  }

  display: flex;
  align-items: center;
  gap: 20px;

  img {
    max-width: 100%;
    height: 20px;
  }
`;
