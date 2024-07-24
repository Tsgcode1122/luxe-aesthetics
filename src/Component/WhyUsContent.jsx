import React from "react";
import styled from "styled-components";
import { Colors, Gradients } from "./ColorComponent";

const WhyUsContent = () => {
  return (
    <Container>
      <SubHead>Why Choose Gem Luxe Aesthetics</SubHead>
    </Container>
  );
};
const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubHead = styled.h5`
  margin: 0;
  font-size: 1.2rem;
  color: #070b0d;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
export default WhyUsContent;
