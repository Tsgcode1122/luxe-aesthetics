import React, { useEffect } from "react";
import IvFaqs from "../Component/IvFaqs";
import NeurotoxinFaqs from "../Component/NeurotoxinFaqs";
import DermalFillerFaqs from "../Component/DermalFillerFaqs";
import styled from "styled-components";

const GeneralFaqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
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
  padding: 1rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media screen and (max-width: 320px) {
    padding: 5rem 1rem 1rem 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 5rem 1rem 1rem 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 5rem 1rem 1rem 1rem;
  }
  @media screen and (min-width: 500px) {
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
