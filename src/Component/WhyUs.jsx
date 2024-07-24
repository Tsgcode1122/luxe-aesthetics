import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import WhyUsContent from "./WhyUsContent";
import { Colors } from "./ColorComponent";
import bg from "../Images/nurse.png";
const Container = styled.div`
  background: url(${bg}) no-repeat center/cover;
`;
const Content = styled.div`
  padding: 2rem 0rem;
  background: rgb(245, 242, 234, 0.92);
`;
const WhyUs = () => {
  return (
    <>
      <Container>
        <Content>
          <Heading>Why Us?</Heading>
          <WhyUsContent />
        </Content>
      </Container>
    </>
  );
};

export default WhyUs;
