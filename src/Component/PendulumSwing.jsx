import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import diamondImage from "../Images/diamond.png"; // Adjust the path to your diamond image

const PendulumSwing = () => {
  return (
    <Container>
      <Diamond
        src={diamondImage}
        alt="Diamond"
        animate={{
          x: [0, 180, -180, 0],
          y: [0, -45, -45, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 40,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const Diamond = styled(motion.img)`
  max-width: 100%;
  height: 40px;
`;

export default PendulumSwing;
