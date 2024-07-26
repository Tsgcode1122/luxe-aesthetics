import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const moveStars = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-200px);
  }
`;

const moveArrows = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
`;

const Star = styled.div`
  width: 1px;
  height: 1px;
  background: black;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${moveStars} ${() => Math.random() * 10 + 5}s linear infinite;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom: 5px solid black;
  position: absolute;
  top: ${() => Math.random() * 100}%;
  left: ${() => Math.random() * 100}%;
  animation: ${moveArrows} 2s ease-in-out infinite;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* z-index: -1; */
`;

const StarsBackground = () => {
  const [numStars, setNumStars] = useState(100);

  useEffect(() => {
    const updateNumStars = () => {
      if (window.innerWidth >= 1000) {
        setNumStars(800);
      } else {
        setNumStars(100);
      }
    };

    window.addEventListener("resize", updateNumStars);
    updateNumStars();

    return () => {
      window.removeEventListener("resize", updateNumStars);
    };
  }, []);

  const starElements = Array.from({ length: numStars }, (_, index) => (
    <Star key={index} />
  ));
  const arrowElements = Array.from({ length: 3 }, (_, index) => (
    <Arrow key={index} />
  ));

  return <Background>{starElements.concat(arrowElements)}</Background>;
};

export default StarsBackground;
