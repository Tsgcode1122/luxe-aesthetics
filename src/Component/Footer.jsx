import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Content>
        <p>© 2024 Gem Luxe Aesthetics. All rights reserved.</p>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  text-align: center;
  color: white;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;

  p {
    margin: 0;
  }
`;

export default Footer;
