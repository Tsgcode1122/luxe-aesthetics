import React from "react";
import Heading from "./Heading";
import { Colors, Gradients } from "./ColorComponent";
import styled from "styled-components";
import bgg from "../Images/sema.png";
// import Button from "./Button";

Gradients;
const Services = () => {
  return (
    <Container>
      <Heading>Services</Heading>
      <SubHead>Offering two Innovative Packages</SubHead>
      <Package>
        <>
          <Head>GLP-1 Semaglutide</Head>
          <Content>
            <Bg>
              <Prices>
                <Price>
                  <span>$ 299.00</span>
                  <p> USD/monthly</p>
                </Price>
                <Price>
                  <span>$ 150.00 </span> <p>/ first month special</p>
                </Price>
              </Prices>

              <Button href="#packages">View Details</Button>
            </Bg>
          </Content>
          <Head>GLP-1 Semaglutide</Head>
          <Content>
            <Bg>
              <Prices>
                <Price>
                  <span>$ 299.00</span>
                  <p> USD/monthly</p>
                </Price>
                <Price>
                  <span>$ 150.00 </span> <p>/ first month special</p>
                </Price>
              </Prices>

              <Button href="#packages">View Details</Button>
            </Bg>
          </Content>
        </>
      </Package>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  margin: 2rem;
  background: ${Colors.offWhite};

  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Package = styled.div`
  align-items: center;

  text-align: center;
`;
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const Head = styled.div`
  background-color: ${Colors.darkGold};
  border-radius: 5px;
  padding: 4px 2px 10px 2px;
  margin: 0 4px -2px 4px;
  color: white;
`;
const Content = styled.div`
  border: 2px solid #d8d5ce;
  border-radius: 10px;
  background: url(${bgg}) no-repeat center/cover;

  background-size: 30%;
`;
const Bg = styled.div`
  background: rgba(255, 255, 255, 0.7);
  padding: 1rem 2rem 1rem 2rem;
  justify-content: space-between;
  gap: 2rem;
  display: flex;
  flex-direction: column;
`;
const Prices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: -10px;
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
const Button = styled.div`
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1.2rem;
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
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: #f7d782;
  }
`;
export default Services;
