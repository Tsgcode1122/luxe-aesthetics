import React, { useState, useEffect } from "react";

import { Form, Input, Select, Button, notification, message } from "antd";
import axios from "axios";
import styled from "styled-components";
Colors;
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

import faq from "../Images/33.png";
const { Option } = Select;

const services = [
  "Select Service",
  "Neurotoxin",
  "Dermal Fillers",
  "GLP-1 SEMAGLUTIDE",
  "GIP/GLP-1 TIRZEPATIDE",
  "NAD+ IV Therapy",
  "Mobile IV Hydration",
  "Glow drip IV Hydration",
  "Sereni Drip IV Hydration",
  "Opulent Glow  IV Hydration",
  "Endurance Elite IV Hydration",
  "Revive Luxe Drip IV Hydration",
  "Tri-Immune Boost Injections",
  "Weight Loss Injections",
  "Vitamin B12 Injections",
  "Vitamin D3 Injections",
  "Biotin Injections",
];
// import from "../Component/Button";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";

import Heading from "../Component/Heading";
import ColorComponent, { Colors, Gradients } from "../Component/ColorComponent";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    console.log("hy");
    setLoading(true);
    try {
      // Send form data to backend
      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/formSubmission",
        values,
      );

      // Show success notification
      message.success({
        content: "Your message has been sent successfully.",
        style: {
          textAlign: "center",
          marginTop: "20px",
        },
      });

      // Reset form fields
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      notification.error({
        message: "Error",
        description: "Failed to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const phoneRegex = /^\+?[0-9\s\-()]{7,15}$/;
  return (
    <>
      <PageHeading backgroundImage={backgroundImage} text="Book Appointment" />
      <Container>
        <Cont>
          <Content>
            <p>
              Kindly fill out the form to book an appointment or submit
              inquiries. We will respond promptly to discuss further details.
            </p>
          </Content>
          <Image>
            <img src={faq} />
          </Image>
        </Cont>
        <FormContainer>
          <Form
            form={form}
            name="contact_us"
            layout="vertical"
            onFinish={onFinish}
            initialValues={{
              service: services[0],
            }}
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            // }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item
              name="number"
              label="Phone Number"
              rules={[
                { required: true, message: "Please enter your phone number" },
                {
                  pattern: phoneRegex,
                  message: "Please enter a valid phone number",
                },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            {/* <Form.Item
              name="zip"
              label="Zip Code"
              rules={[
                { required: true, message: "Please enter your zip code" },
              ]}
            >
              <Input placeholder="Enter your Zip code" />
            </Form.Item> */}

            <Form.Item
              name="service"
              label="Select Service"
              rules={[{ required: true, message: "Please select a service" }]}
            >
              <Select placeholder="Select a service">
                {services.map((service, index) => (
                  <Option key={index} value={service}>
                    {service}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name="message"
              label="Additional Information"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Enter your additional information"
                rows={4}
              />
            </Form.Item>

            <Form.Item noStyle>
              <ButtonS type="primary" htmlType="submit" loading={loading}>
                Submit
              </ButtonS>
            </Form.Item>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Contact;
const Container = styled.div`
  padding-top: 4rem;
  position: relative;
  overflow: hidden;
  padding: 20px 20px 100px 20px;
  background: ${Colors.light};
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${Colors.forest};
    padding: 20px;
    text-align: center;
  }
  @media screen and (min-width: 800px) {
    display: grid;
    gap: 20px;
    margin: 1rem 2rem 5rem 2rem;
    grid-template-columns: 40% 60%;
  }
  @media screen and (min-width: 1000px) {
    margin: 1rem 5% 2rem 5rem;
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: 45% 55%;
    margin: 1rem 11rem 2rem 11rem;
    gap: 30px;
  }
`;

const Image = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    display: block;
  }
  img {
    max-width: 100%;
  }
`;
const Cont = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: left;
  flex-wrap: wrap;
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const ContactItem = styled.div`
  display: flex;
  background: ${Colors.lightgreen};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 5px;

  font-size: 1rem;
  color: ${Colors.coolBlack};

  &:hover {
    background: #cbd8b9;
  }
  a {
    color: ${Colors.coolBlack};
    text-decoration: none;
  }
`;

const FormContainer = styled.div`
  position: relative;
  border-radius: 10px;
  margin-top: 20px;

  box-shadow:
    rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 20px;
  @media screen and (min-width: 800px) {
    margin-top: 0px;
  }
`;
const ButtonS = styled(Button)`
  position: relative;

  padding: 20px 20px !important;
  cursor: pointer;
  margin: 0;

  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  ) !important;
  font-family: "Philosopher", sans-serif;
  box-shadow:
    0 0 10px #f3d57f,
    0 0 11px #f3d57f,
    0 0 4px #a08733,
    0 0 6px#a08733;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: #f7d782 !important;
    color: black !important;
  }
`;
const Content = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  p {
    color: black;
  }
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;
