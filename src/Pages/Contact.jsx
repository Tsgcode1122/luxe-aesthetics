import React, { useEffect } from "react";
import ContactContent from "../Component/ContactContent";
import styled from "styled-components";
import MapComponent from "../Component/MapComponent";

import bg from "../Images/contact.png";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Container>
        <Content>
          <ContactContent />
        </Content>
      </Container>
      <MapComponent />
    </>
  );
};
const Container = styled.div`
  background: url(${bg}) no-repeat center/cover;
`;
const Content = styled.div`
  padding: 2rem 0rem;
  background: rgb(245, 242, 234, 0.9);
`;
export default Contact;
