import React from "react";
import styled from "styled-components";

const PageHeading = ({ backgroundImage, text }) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <Heading>{text}</Heading>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  padding-top: 3rem;
  align-items: center;
  justify-content: center;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: 50% center;
  background-size: cover;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.86); /* Add a semi-transparent overlay */
    z-index: 2;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: white;
  z-index: 3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a text shadow for better readability */
  text-align: center;
  @media screen and (max-width: 320px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.6rem;
    padding: 0 2rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.8rem;
    padding: 0 2rem;
  }
`;

export default PageHeading;
