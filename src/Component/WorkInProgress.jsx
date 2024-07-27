import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const WorkInProgress = () => {
  return (
    <Container>
      <Message>🚧 Work in Progress 🚧</Message>
      <Description>Working to bring you this feature. Stay tuned!</Description>
      <Link to="/">
        <Button> Back Home</Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  color: black;
  text-align: center;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Message = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

export default WorkInProgress;
