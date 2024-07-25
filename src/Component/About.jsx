import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import AboutContent from "./AboutContent";
import { Colors } from "./ColorComponent";

const Container = styled.div`
  padding: 0rem 2rem 2rem 2rem;
  @media screen and (max-width: 320px) {
    padding: 0rem 1rem 1rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0rem 1.3rem 1.3rem 1.3rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0rem 1.5rem 1.5rem 1.5rem;
  }
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
