import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import b1 from "../Images/equalizer.png";
import b2 from "../Images/prescription.png";
import b3 from "../Images/specialist.png";

const HeroMoving = () => {
  const items = [
    { img: b2, text: "Expert Care" },
    { img: b1, text: "Effective Prescriptions" },
    { img: b3, text: "Customized Treatment Plans" },
  ];

  const repeatedItems = Array.from({ length: 20 }).flatMap(() => items);

  return (
    <ImageWrapper>
      <MovingImage
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <ImageContainer>
          {repeatedItems.map((item, index) => (
            <Item key={index}>
              <img src={item.img} alt={item.text} />
              <p>{item.text}</p>
            </Item>
          ))}
        </ImageContainer>
      </MovingImage>
    </ImageWrapper>
  );
};

export default HeroMoving;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  position: relative;
`;

const MovingImage = styled(motion.div)`
  display: flex;
  width: 100%;
  /* position: absolute; */
  left: 0;
  top: 0;
`;

const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 5px; */
  font-size: 0.7rem;
  /* background: #f5f2ea; */
  border-radius: 20px;
  color: black;
  min-width: 100px;
  p {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: 40px;
    margin-bottom: 10px;

    @media screen and (max-width: 320px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 321px) and (max-width: 399px) {
      height: 30px;
      min-width: 30px;
    }
    @media (min-width: 400px) and (max-width: 499px) {
      height: 30px;
      min-width: 30px;
    }
  }
`;
