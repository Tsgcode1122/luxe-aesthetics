import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import ContactContent from "./ContactContent";
import { Colors } from "./ColorComponent";
import bg from "../Images/contact.png";
import MapComponent from "./MapComponent";

const Container = styled.div`
  background: url(${bg}) no-repeat center/cover;
`;
const Content = styled.div`
  padding: 2rem 0rem;
  background: rgb(245, 242, 234, 0.9);
`;

const Contact = () => {
  return (
    <>
      <Container>
        <Content>
          <Heading>Contact Us?</Heading>
          <ContactContent />
        </Content>
      </Container>
      <MapComponent />
    </>
  );
};

export default Contact;
