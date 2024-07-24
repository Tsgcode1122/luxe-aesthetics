import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

// Styled component for the container
const Container = styled.div`
  /* display: inline-block; */
`;

const ZoomInComponent = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once when in view
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.9, // Initial scale (zoomed out)
    },
    visible: {
      opacity: 1,
      scale: 1, // Final scale (zoomed in)
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.5,
      },
    },
  };

  return (
    <Container
      as={motion.div}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </Container>
  );
};

export default ZoomInComponent;
