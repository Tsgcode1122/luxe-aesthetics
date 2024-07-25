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
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ backgroundImage }) => `url(${backgroundImage})`} no-repeat
    center;
  /* background-position: 50% center; */
  background-size: 80%;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9); /* Add a semi-transparent overlay */
    z-index: 2;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: white;
  z-index: 3;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add a text shadow for better readability */
  text-align: center;
`;

export default PageHeading;
