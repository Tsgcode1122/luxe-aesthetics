import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Content>
        <img src={logo} />
        <p>
          <strong>Business Hours:</strong> By Appointment Only.
        </p>
        {/* <p> 9:00 a.m. - 5:00 p.m. </p> */}
        <p>© 2024 - {currentYear} Gem Luxe Aesthetics. All rights reserved.</p>
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

  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  @media screen and (max-width: 320px) {
    padding: 0 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 1rem;
  }
  p {
    margin: 0;

    padding: 1px;
  }
  img {
    max-width: 100%;
    height: 60px;
    margin-bottom: 1rem;
  }
`;

export default Footer;
