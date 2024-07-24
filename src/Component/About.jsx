import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import AboutContent from "./AboutContent";
const Container = styled.div`
  padding: 0rem 2rem;
  /* margin-top: -2rem; */

  /* border-top: 4px solid #8c6c28; */
  -moz-border-top-colors: red;
  /* background: #f5f2ea !important; */
  z-index: 3 !important;
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
