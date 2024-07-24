import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import WhyUsContent from "./WhyUsContent";
import { Colors } from "./ColorComponent";

const Container = styled.div`
  padding: 0rem 2rem 2rem 2rem;
`;
const WhyUs = () => {
  return (
    <>
      <Container>
        <Heading>Why Us?</Heading>
        <WhyUsContent />
      </Container>
    </>
  );
};

export default WhyUs;
