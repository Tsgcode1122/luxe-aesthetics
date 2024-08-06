import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Typography, Modal } from "antd";
import styled from "styled-components";
import axios from "axios";

const { Paragraph } = Typography;
const { TextArea } = Input;

const StyledForm = styled(Form)`
  max-width: 800px;
  padding: 20px;
  color: #000000;
  background-color: #ffffff;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  background-color: #000000;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #000000 !important;
  }
`;

const Heading = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 800;
`;

const Title = styled.div`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
`;

const Underline = styled.span`
  border-bottom: 1px solid #000;
  display: inline-block;
  width: 100%;
  height: 20px;
`;

const PatientConsentForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const htmlContent = `
        <div style="padding: 20px 30px;">
          <div style="text-align: center; font-size: 32px; font-weight: 800; padding-bottom: 10px;">GEM LUXE AESTHETICS</div>
          <div style="text-align: center; font-size: 24px; font-weight: 600; padding-bottom: 30px;">OFFICE POLICIES FOR PATIENTS</div>
          <p style="font-size: 22px;">Welcome to <strong>GEM LUXE AESTHETICS.</strong> This notice is to inform you, the patient, of the policies in our practice.</p>
          <p style="font-size: 22px;">A patient is considered an active patient/returning patient if they are treated on an ongoing basis. Any lengthy disruption of treatment will cause you to be considered an inactive patient, as described below.</p>
          <p style="font-size: 22px;">If a patient remains inactive for 2 months, the access to our online tools and phone app will be deactivated. An email reminder will be sent to notify you. Upon the return to the practice, the tools will be reactivated.</p>
          <p style="font-size: 22px;">If a patient has not been seen in any of our locations for 2 years, they will be considered a New Patient the next time they come in. The visit will be a New Patient visit, and the patient will be charged as a New Patient.</p>
          <p style="font-size: 22px;">Please sign below to acknowledge you have read this policy:</p>
          <p style="font-size: 22px;">Patient Name (signature): <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%;">${
            values.patientSignature
          }</span></p>
          <p style="font-size: 22px;">Patient Name (print): <span style="border-bottom: 1px solid #000; display: inline-block; width: 60%;">${
            values.patientName
          }</span></p>
          <p style="font-size: 22px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 40%;">${values.date.format(
            "YYYY-MM-DD",
          )}</span></p>
        </div>
      `;

      await axios.post("http://localhost:5009/api/email/send", {
        htmlContent,
        patientName: values.patientName,
      });

      setModalVisible(true);
      form.resetFields(); // Clear the input fields after submission
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StyledForm form={form} layout="vertical" onFinish={onFinish}>
        <div id="pdfContent">
          <Typography>
            <Heading>GEM LUXE AESTHETICS</Heading>
            <Title>OFFICE POLICIES FOR PATIENTS</Title>
            <Paragraph>
              Welcome to <strong>GEM LUXE AESTHETICS.</strong> This notice is to
              inform you, the patient, of the policies in our practice.
            </Paragraph>
            <Paragraph>
              A patient is considered an active patient/returning patient if
              they are treated on an ongoing basis. Any lengthy disruption of
              treatment will cause you to be considered an inactive patient, as
              described below.
            </Paragraph>
            <Paragraph>
              If a patient remains inactive for 2 months, the access to our
              online tools and phone app will be deactivated. An email reminder
              will be sent to notify you. Upon the return to the practice, the
              tools will be reactivated.
            </Paragraph>
            <Paragraph>
              If a patient has not been seen in any of our locations for 2
              years, they will be considered a New Patient the next time they
              come in. The visit will be a New Patient visit, and the patient
              will be charged as a New Patient.
            </Paragraph>
            <Paragraph>
              Please sign below to acknowledge you have read this policy:
            </Paragraph>
            <Form.Item
              name="patientSignature"
              label="Patient Name (signature)"
              rules={[
                { required: true, message: "Please enter your signature" },
              ]}
            >
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item
              name="patientName"
              label="Patient Name (print)"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="date"
              label="Date"
              rules={[{ required: true, message: "Please select a date" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Typography>
        </div>
        <StyledButton type="primary" htmlType="submit" loading={loading}>
          Submit
        </StyledButton>
      </StyledForm>
      <Modal
        title="Success"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        okText="OK"
        centered // Center the modal
      >
        <p>
          Your consent form has been submitted successfully. Kindly click the
          button below to fill consent for email call appointment reminders
          communications.
        </p>
        <Button type="link" href="/next-consent-form">
          Fill Next Consent Form
        </Button>{" "}
        {/* Adjust the href to the actual link */}
      </Modal>
    </>
  );
};

export default PatientConsentForm;
