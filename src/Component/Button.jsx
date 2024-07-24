import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  font-family: "Philosopher", sans-serif;
  box-shadow:
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7d782;
  }
`;

const Button = ({ children, onClick, disabled, style }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
