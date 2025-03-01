import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  z-index: 999;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  border: 2px solid #d0ad5b; /* Gold border */
  border-radius: 8px;
  padding: 20px;
  width: 300px; /* Adjust the size of the square */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Message = styled.p`
  margin: 0 0 20px 0;
  font-size: 16px;
  color: #333;
`;

const Spinner = styled(motion.div)`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #d0ad5b; /* Gold */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderModal = () => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <Message>
          Hello, your form is uploading and will be sent to Gem Luxe Aesthetics
          for documentation.
        </Message>
        <Spinner
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: "linear", repeat: Infinity }}
        />
        <Message>Kindly exercise patience.</Message>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default LoaderModal;
