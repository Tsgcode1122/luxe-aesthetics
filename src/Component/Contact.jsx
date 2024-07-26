import React from "react";
import Heading from "./Heading";
import styled from "styled-components";
import ContactContent from "./ContactContent";
import { Colors } from "./ColorComponent";
import bg from "../Images/contact.png";
import MapComponent from "./MapComponent";

const Container = styled.div`
  background: url(${bg}) no-repeat center/cover;
  div {
    @media screen and (min-width: 1000px) {
      flex: 1;
    }
  }
`;
const Content = styled.div`
  padding: 2rem 0rem;
  background: rgb(245, 242, 234, 0.9);
`;

const Contact = () => {
  return (
    <Cont>
      <div>
        <Container>
          <Content>
            <Heading>Contact Us?</Heading>
            <ContactContent />
          </Content>
        </Container>
      </div>
      <MapComponent />
    </Cont>
  );
};
const Cont = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
export default Contact;
