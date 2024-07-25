import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import bgg from "../Images/down.png";
import styled from "styled-components";
import { Colors, Gradients, Shadows } from "./ColorComponent";

const ScrollToTop = styled.div`
  position: fixed;
  bottom: 20px;
  height: 30px;
  right: 10px;
  width: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${Gradients.lightGoldToGold};
  z-index: 999 !important;
  box-shadow: ${Shadows.goldShadow};

  border-radius: 50%;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  animation: pulse 2s infinite;
  img {
    max-width: 100%;
    height: 10px;
  }
  @media screen and (max-width: 320px) {
    right: 10px;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    right: 10px;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    right: 10px;
  }
  &:hover {
    background-color: #24d910;
    transform: scale(1.2);
    animation: none;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100;
    setIsVisible(scrollPercentage > 10);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <ScrollToTop onClick={scrollToTop}>
        <img src={bgg} />{" "}
      </ScrollToTop>
    )
  );
};

export default ScrollToTopButton;
