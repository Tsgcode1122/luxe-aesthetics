import React from "react";
import styled from "styled-components";
const Pp = styled.div`
  /* display: inline-block; */
`;
const StyledButton = styled.a`
  position: relative;
  display: inline-block;
  padding: 15px 25px;
  cursor: pointer;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: black;
  background: linear-gradient(
    190deg,
    #d6d6d6 10%,
    #dddbdb 30%,
    #c6c6c5 50%,
    #dddbdb 70%,
    #f6f6f5 90%,
    #dddbdb 100%
  );
  font-family: "Philosopher", sans-serif;
  /* box-shadow:
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733; */
  border-radius: 20px 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: rgba(201, 201, 201, 0.5);
    color: black;
    backdrop-filter: blur(80px);
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
