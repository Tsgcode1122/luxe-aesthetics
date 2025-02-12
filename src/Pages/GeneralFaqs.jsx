import React from "react";
import IvFaqs from "../Component/IvFaqs";
import NeurotoxinFaqs from "../Component/NeurotoxinFaqs";
import DermalFillerFaqs from "../Component/DermalFillerFaqs";
import styled from "styled-components";

const GeneralFaqs = () => {
  return (
    <>
      <Container>
        <IvFaqs />
        <NeurotoxinFaqs />
        <DermalFillerFaqs />
      </Container>
    </>
  );
};

export default GeneralFaqs;

const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centers items horizontally */
  gap: 10px;

  @media screen and (min-width: 600px) {
    padding: 3rem 2rem 2rem 2rem;
  }

  @media screen and (min-width: 1000px) {
    padding: 3rem 3rem 3rem 3rem;
  }

  /* Ensuring all children have the same width */
  & > * {
    width: 450px;
  }

  /* Ensuring the third item is centered */
  & > :nth-child(3) {
    width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
