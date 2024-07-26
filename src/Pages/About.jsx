import React, { useEffect } from "react";

import AboutContent from "../Component/AboutContent";
import WhyUsContent from "../Component/WhyUsContent";
import Bottle from "../Component/Bottle";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
import styled from "styled-components";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading backgroundImage={backgroundImage} text="About Us" />
      <Container>
        <AContain>
          <AboutContent />
        </AContain>
        <Cont>
          <WhyUsContent />
          <Bottle />
        </Cont>
      </Container>
    </>
  );
};
const Container = styled.div``;
const AContain = styled.div`
  padding: 2rem;
`;
const Cont = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
export default About;
