import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import { Colors } from "./ColorComponent";

const Container = styled.div`
  padding: 0rem 2rem 2rem 2rem;
`;
const About = () => {
  return (
    <>
      <Container>
        <Heading>About Us</Heading>
        <AboutContent />
      </Container>
    </>
  );
};

export default About;
