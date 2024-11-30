import React, { useEffect } from "react";

import Bottle from "../Component/Bottle";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/ivH.jpg";
import styled from "styled-components";
import ServiceDetails from "../Component/ServiceDetails";
import IvSection from "../Component/IvSection";
const IvServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading
        backgroundImage={backgroundImage}
        text="Iv Hydration Services"
      />
      <Container>
        <IvSection />
      </Container>
    </>
  );
};
const Container = styled.div``;
const AContain = styled.div`
  padding: 2rem;
`;
export default IvServices;
