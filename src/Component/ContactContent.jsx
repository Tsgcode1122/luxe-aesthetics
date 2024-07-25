import React from "react";
import styled from "styled-components";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Colors } from "./ColorComponent";
import ZoomInComponent from "./ZoomInComponent";

const ContactContent = () => {
  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=1418+Manoa+Rd,+Wynnewood,+PA+19096";
  return (
    <ContactContainer>
      <SubHead>Get In Touch With Us</SubHead>
      <ZoomInComponent>
        <ContactItem>
          <EnvironmentOutlined />
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            1418 Manoa Rd Wynnewood Pa 19096
          </a>
        </ContactItem>
      </ZoomInComponent>
      <ContactItem>
        <PhoneOutlined />
        <a href="tel:+14849952726">(484) 995-2726</a>
      </ContactItem>
      <ContactItem>
        <InstagramOutlined />
        <a
          href="https://www.instagram.com/gemluxeaesthetics"
          target="_blank"
          rel="noopener noreferrer"
        >
          gemluxeaesthetics
        </a>
      </ContactItem>
      <ZoomInComponent>
        <ContactItem>
          <MailOutlined />
          <a href="mailto:gemluxemedspa@gmail.com">gemluxemedspa@gmail.com</a>
        </ContactItem>
      </ZoomInComponent>
      <ContactItem>
        <FacebookOutlined />
        <a
          href="https://www.facebook.com/gemluxe.aesthetics"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gem Luxe Aesthetics
        </a>
      </ContactItem>
    </ContactContainer>
  );
};

export default ContactContent;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem !important;
  margin: 0;
  align-items: center;
  border-radius: 8px;
  @media screen and (max-width: 320px) {
    padding: 0 1rem !important;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding: 0 1.3rem !important;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0 1.5rem !important;
  }
`;
const SubHead = styled.h5`
  font-size: 1.2rem;
  color: #070b0d;
  margin: 0;
  font-weight: 500;
  text-align: center;
  font-family: "Philosopher", sans-serif;
  margin-bottom: 30px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    -1deg,
    #0b090a 0%,
    #f0e8d7 10%,
    #f4ebd0 20%,
    #f4ebd0 50%,
    #f0e8d7 70%,
    #f4ebd0 90%,
    #0b090a 100%
  );
  padding: 10px 15px;
  border-radius: 10px;
  gap: 20px;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${Colors.coolBlack};

  &:hover {
    background: #f7d782;
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;
