import React, { useEffect } from "react";

import Bottle from "../Component/Bottle";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/servicebg.jpg";
import styled from "styled-components";
import ServiceDetails from "../Component/ServiceDetails";
import IvSection from "../Component/IvSection";
const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading backgroundImage={backgroundImage} text="Services" />
      <Container>
        <ServiceDetails />
        <IvSection />
      </Container>
    </>
  );
};
const Container = styled.div``;
const AContain = styled.div`
  padding: 2rem;
`;
export default Services;
