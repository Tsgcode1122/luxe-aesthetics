import React from "react";
import styled from "styled-components";
import Heading from "../Component/Heading";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
import ZoomInComponent from "../Component/ZoomInComponent";

const Container = styled.div`
  padding: 2rem;
  background: #f5f5f5;
  color: #333;
  font-family: "Philosopher", sans-serif;
  @media screen and (min-width: 600px) {
    padding: 0rem 3rem 1rem 3rem;
  }
  @media screen and (min-width: 1000px) {
    padding: 2rem 4rem 1rem 4rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 2rem 10rem 1rem 10rem;
  }
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const Policies = () => {
  return (
    <>
      {" "}
      <PageHeading backgroundImage={backgroundImage} text="Policies" />
      <Container>
        <Heading>Our Policies</Heading>
        <Section>
          <ZoomInComponent>
            <Paragraph>
              We are committed to ensuring you receive the best care and
              services. To maintain our high standards and ensure a smooth
              experience for all clients, we have established the following
              policies.
            </Paragraph>
          </ZoomInComponent>
          <Paragraph>
            <strong>Payment Policy:</strong> All treatments, including those
            involving GLP-1 Semaglutide and GIP/GLP-1 Tirzepatide, require
            payment in full at the time of service. Payments are non-refundable
            but can be credited towards other services within the same calendar
            year. We accept Cash, Check, Visa, MasterCard, and American Express.
          </Paragraph>
          <ZoomInComponent>
            <Paragraph>
              <strong>Appointment Scheduling:</strong> We recommend arriving
              10-15 minutes prior to your appointment. Late arrivals (more than
              15% of the scheduled time) may result in a condensed treatment or
              rescheduling, forfeiting your booking deposit.
            </Paragraph>
          </ZoomInComponent>
          <Paragraph>
            <strong>Cancellation Policy:</strong> You may cancel or modify your
            appointment without charge up to 24 hours before the scheduled time.
            Cancellations within 24 hours will be charged up to 100% of the
            service cost. No-shows will be charged the full price of the
            scheduled service.
          </Paragraph>
          <ZoomInComponent>
            <Paragraph>
              <strong>Treatment Packages:</strong> Unused treatments within a
              package can be credited towards other services within a year of
              the purchase date. All treatments are non-refundable and
              non-transferable.
            </Paragraph>
          </ZoomInComponent>
          <Paragraph>
            <strong>Price and Policy Changes:</strong> All prices are subject to
            change. Please follow our social media for updates.
          </Paragraph>
          <ZoomInComponent>
            <Paragraph>
              <strong>Appointment Confirmation:</strong> We send appointment
              confirmation messages 48 hours in advance via SMS and email.
              Failure to confirm may result in your appointment slot being given
              to another client.
            </Paragraph>
          </ZoomInComponent>
          <Paragraph>
            By booking an appointment, you agree to these terms. Thank you for
            choosing Gem Luxe Aesthetics. We look forward to helping you achieve
            your wellness goals.
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default Policies;
