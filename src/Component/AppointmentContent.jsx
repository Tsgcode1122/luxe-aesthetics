import React from "react";
import styled from "styled-components";

const AppointmentContent = () => {
  return (
    <>
      <Content>
        We're excited to support you on your weight loss journey. Use the form
        below to book your personalized appointment. Our expert team is
        dedicated to providing you with the best care and effective treatments
        tailored just for you. Let's get started on achieving your wellness
        goals!
      </Content>
      <Container>
        <Iframe
          src="https://gemluxeaesthetics.setmore.com/gemluxeaesthetics"
          title="Appointment Scheduling"
          frameBorder="0"
        />
      </Container>
    </>
  );
};

export default AppointmentContent;
const Content = styled.p`
  font-weight: 100 !important;
  padding: 1rem;
  color: Black;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Philosopher", sans-serif !important;
  @media screen and (max-width: 320px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-bottom: 1rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1000px) {
    font-size: 1.2rem;
    padding: 2rem 3rem;
  }

  @media screen and (min-width: 1200px) {
    font-size: 1.2rem;
    padding: 2rem 8rem;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`;
