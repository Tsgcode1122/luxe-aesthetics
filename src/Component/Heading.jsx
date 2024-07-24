// Heading.js
import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  background: linear-gradient(
    180deg,
    #0b090a 0%,
    #a08733 10%,
    #f3d57f 20%,
    #7d6023 30%,
    #f3d57f 40%,
    #9c782c 50%,
    #7d6023 60%,
    #8c6c28 70%,
    #9a762a 80%,
    #f3d57f 90%,

    #0b090a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
