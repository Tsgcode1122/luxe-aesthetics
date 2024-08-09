import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Typography, Modal } from "antd";
import styled from "styled-components";
import axios from "axios";
import LoaderModal from "./LoaderModal";
import { notification } from "antd";
import SignatureUpload from "./SignatureUpload";

const { Paragraph } = Typography;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
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

const PatientConsentForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onFinish = async (values) => {
    setLoader(true);
    setLoading(true);

    try {
      const signatureImage = values.patientSignature;

      const htmlContent = `
        <div style="padding: 20px 30px;">
          <div style="text-align: center; font-size: 32px; font-weight: 800; padding-bottom: 10px;">GEM LUXE AESTHETICS</div>
          <div style="text-align: center; font-size: 24px; font-weight: 600; padding-bottom: 30px;">OFFICE POLICIES FOR PATIENTS</div>
          <p style="font-size: 22px;">Welcome to <strong>GEM LUXE AESTHETICS.</strong> This notice is to inform you, the patient, of the policies in our practice.</p>
          <p style="font-size: 22px;">A patient is considered an active patient/returning patient if they are treated on an ongoing basis. Any lengthy disruption of treatment will cause you to be considered an inactive patient, as described below.</p>
          <p style="font-size: 22px;">If a patient remains inactive for 2 months, the access to our online tools and phone app will be deactivated. An email reminder will be sent to notify you. Upon the return to the practice, the tools will be reactivated.</p>
          <p style="font-size: 22px;">If a patient has not been seen in any of our locations for 2 years, they will be considered a New Patient the next time they come in. The visit will be a New Patient visit, and the patient will be charged as a New Patient.</p>
          <p style="font-size: 22px;">Please sign below to acknowledge you have read this policy:</p>
            <p style="font-size: 22px;">Patient Name (signature): <img src="${signatureImage}" style="width: 150px; height: auto;" alt="Patient Signature" /></p>
         
          <p style="font-size: 22px;">Patient Name (print): <span style="border-bottom: 1px solid #000; padding: 7px; display: inline-block; width: 60%;">${
            values.patientName
          }</span></p>
          <p style="font-size: 22px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; padding: 7px; width: 40%;">${values.date.format(
            "YYYY-MM-DD",
          )}</span></p>
        </div>
      `;

      await axios.post("https://gemluxebackend.onrender.com/api/email/send", {
        htmlContent,
        patientName: values.patientName,
      });
      setModalVisible(true);
      form.resetFields(); // Clear the input fields after submission
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      notification.error({
        message: "Form Submission Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setLoader(false);
      setLoading(false);
    }
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleImageUpload = (imageUrl) => {
    console.log(imageUrl);
    form.setFieldsValue({ patientSignature: imageUrl });
  };

  return (
    <Container>
      {loader && <LoaderModal />}

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
              name="patientName"
              label="Patient Name (print)"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="patientSignature"
              label="Patient Name (signature)"
              rules={[
                { required: true, message: "Please upload your signature" },
              ]}
            >
              <SignatureUpload onImageUpload={handleImageUpload} />
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
        title="Form Submitted Successfully"
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleOk}
      >
        <p>
          Your consent form has been submitted successfully and is being
          reviewed by Gem Luxe Aesthetics.
        </p>
      </Modal>
    </Container>
  );
};

export default PatientConsentForm;
