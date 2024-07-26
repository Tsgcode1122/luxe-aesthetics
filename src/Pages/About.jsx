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
          <div>
            <WhyUsContent />
          </div>
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 3rem;
  }

  @media screen and (min-width: 1200px) {
    padding: 0.5rem 8rem;
  }
  div {
    @media screen and (min-width: 1000px) {
      flex: 1;
    }
  }
`;
export default About;
