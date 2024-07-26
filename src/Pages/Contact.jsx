import React, { useEffect } from "react";
import ContactContent from "../Component/ContactContent";
import styled from "styled-components";
import MapComponent from "../Component/MapComponent";
import backgroundImage from "../Images/contactb.jpg";
import bg from "../Images/contact.png";
import PageHeading from "../Component/PageHeading";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <PageHeading backgroundImage={backgroundImage} text="Contact Us" />

      <Cont>
        <Container>
          <Content>
            <ContactContent />
          </Content>
        </Container>
        <MapComponent />
      </Cont>
    </>
  );
};
const Container = styled.div`
  background: url(${bg}) no-repeat center/cover;
`;
const Content = styled.div`
  padding: 2rem 0rem;
  background: rgb(245, 242, 234, 0.9);
  @media screen and (min-width: 1000px) {
    padding: 4rem 0rem;
  }
`;
const Cont = styled.div`
  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
export default Contact;
