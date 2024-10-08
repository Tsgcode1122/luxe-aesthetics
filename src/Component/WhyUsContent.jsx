import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "./ColorComponent";
import i1 from "../Images/i1.png";
import i2 from "../Images/i2.png";
import i3 from "../Images/i3.png";
import i4 from "../Images/i4.png";
import ZoomInComponent from "./ZoomInComponent";

const WhyUsContent = () => {
  return (
    <Container>
      <SubHead>Why Choose Gem Luxe Aesthetics</SubHead>
      <List>
        <ZoomInComponent>
          <ListItem>
            <img src={i3} />
            <p>
              We provide more than just medications; we offer comprehensive
              weight loss solutions.
            </p>
          </ListItem>
        </ZoomInComponent>
        <ListItem>
          <img src={i4} />
          <p>
            Our advanced treatments, like GLP-1 Semaglutide and GIP/GLP-1
            Tirzepatide, are tailored to your needs.
          </p>
        </ListItem>
        <ListItem>
          <img src={i2} />
          <p>
            Receive individualized support and guidance throughout your wellness
            journey.
          </p>
        </ListItem>
        <ZoomInComponent>
          <ListItem>
            <img src={i1} />
            <p>
              With us, you're not just losing weight – you're gaining a new
              outlook on life.
            </p>
          </ListItem>
        </ZoomInComponent>
      </List>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 320px) {
    padding: 0 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 1.5rem;
  }
  @media screen and (min-width: 600px) {
    padding: 0 2rem;
  }
`;
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
  @media screen and (max-width: 320px) {
    font-size: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.4rem;

    font-weight: 600;
  }
`;
const List = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  color: ${Colors.coolBlack};
  list-style: none;
`;
const ListItem = styled.div`
  p {
    margin: 0;
    padding: 0;
    font-size: 15px;
    @media screen and (min-width: 1000px) {
      font-size: 17px;
    }
    @media screen and (min-width: 1200px) {
      font-size: 20px;
    }
  }

  display: flex;
  align-items: center;
  gap: 20px;

  img {
    max-width: 100%;
    height: 20px;
  }
`;
export default WhyUsContent;
