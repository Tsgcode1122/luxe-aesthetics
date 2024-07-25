import React, { useEffect } from "react";

import AboutContent from "../Component/AboutContent";
import WhyUsContent from "../Component/WhyUsContent";
import Bottle from "../Component/Bottle";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/logo.png";
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
        <WhyUsContent />
        <Bottle />
      </Container>
    </>
  );
};
const Container = styled.div``;
const AContain = styled.div`
  padding: 2rem;
`;
export default About;
