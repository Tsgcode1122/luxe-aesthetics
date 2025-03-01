import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Typography, Modal } from "antd";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import LoaderModal from "./LoaderModal";
import SignatureUpload from "./SignatureUpload";
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

const Paragraph = styled.div`
  padding-bottom: 20px;
  color: #000000;
  font-size: 14px;
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
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 20px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Title2 = styled.div`
  text-align: left;
  font-size: 16px;
  padding-top: 10px;
  font-weight: 600;
`;

const Underline = styled.span`
  border-bottom: 1px solid #000;
  display: inline-block;
  width: 100%;
  height: 20px;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 20px;

  p {
    margin: 0;
  }
`;

const ConsentForEmail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    patientInitials: "",
    patientNumber: "",
    patientEmail: "",
    patientSignature: "",
  });

  const handleInputChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    form.setFieldsValue({
      ...formData,
      [name]: value,
    });
  };

  const onFinish = async (values) => {
    setLoader(true);
    setLoading(true);
    try {
      const signatureImage = values.patientSignature;
      const htmlContent = `
        <div style=" padding: 20px 30px; " >
          <div style="text-align: center; font-size: 32px; font-weight: 800;  padding-bottom: 10px; ">GEM LUXE AESTHETICS</div>
           <p style="font-size: 18px; padding-bottom: 10px;">Patient Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%; padding: 7px;">${
             values.patientName
           }</span></p>
          <div style="text-align: center; font-size: 18px; font-weight: 600; padding-bottom: 15px;">CONSENT FOR EMAIL/ TEXT/ TELEPHONE CALL APPOINTMENT REMINDERS/ REMINDER COMMUNICATIONS</div>
          <p style=" font-size: 18px; text-align:center;">This Consent Form is an acknowledgment by you and an express consent to receive emails, text messages, and/or automatic telephone communications from <strong> Gem Luxe Aesthetics </strong>(the "Practice").By signing this form you understand that by providing your consent you recognize the email, text messaging and telephone communications are not a secure form of communication. Please note that the email, text messaging and telephone communications are not a secure form of communication. There is some risk that any protected health information that may be contained in such email or text message communications may be disclosed to, or intercepted, by unauthorized third parties.<strong> You are expressly urged to never send protected health information via text, email, or otherwise. The Practice will not send protected health information via text message or email.</strong>
   Patients in the practice may be contacted via email and/or text messaging to remind them of an appointment, to obtain feedback on their experience with the healthcare team, special offers, newsletters, and to provide general health reminders/information.</p> 
          <div style=" font-size: 18px; padding-top:10px "><strong>PATIENT CONSENT</strong></div>
          <p style=" font-size: 18px; ">If at any time I provide an <strong>email address</strong> at which I may be contacted, I consent to receiving appointment reminders, feedback, inquiries, special offers, newsletters, and other healthcare communications/information at the email address from the Practice.</p>
          <p style="font-size: 18px;"> <span style="border-bottom: 1px solid #000; display: inline-block; width: 20%;padding: 7px;">${
            values.patientInitials
          }</span>(Patient Initials)</p>
        
          <div style=" font-size: 18px; display:flex; flex-direction:column; align-items:center;">The email address I am authorizing to receive such email messages is: <span style="border-bottom: 1px solid #000; display: inline-block; width: 70%; padding: 7px;">${
            values.patientEmail
          }</span></div>
          <p style=" font-size: 18px; ">If at any time I provide my <strong>cell phone number</strong> and/or any number forwarded or transferred to that number at which I may be contacted, I consent to receiving text message appointment reminders, feedback, inquiries, special offers, and other healthcare communications/information at that number from the Practice. </p>
        <p style="font-size: 18px;"> <span style="border-bottom: 1px solid #000; display: inline-block; width: 20%; padding: 7px;">${
          values.patientInitials
        }</span>(Patient Initials)</p>
          <div style=" font-size: 18px; display:flex; flex-direction:column; align-items:center;">The cell phone number I am authorizing to receive such text messages is: <span style="border-bottom: 1px solid #000; display: inline-block; width: 40%; padding: 7px;">${
            values.patientNumber
          }</span>  </div>
          <p style=" font-size: 18px; font-style:italic; font-weight:bold; ">The Practice does not charge for this service, but standard text messaging and data rates may apply as provided in your wireless plan (contact your carrier for pricing plans and details).</p>
 <p style=" font-size: 18px; ">I permit the Practice to call the following <strong>telephone number</strong> <span style="border-bottom: 1px solid #000; display: inline-block; width: 40%; padding: 7px;">${
   values.patientNumber
 }</span>  </p>
  <p style=" font-size: 18px; ">In order to provide appointment reminders. I expressly acknowledge that the appointment reminders may be made by a computer or automated system and may not be a live person making such a call.</p>
  <p style="font-size: 18px;"> <span style="border-bottom: 1px solid #000; display: inline-block; width: 20%; padding: 7px;">${
    values.patientInitials
  }</span>(Patient Initials)</p>
          <p style=" font-size: 18px; ">By executing this Agreement, I understand that this request to receive automated telephone calls, emails, and/or text messages will apply to all future appointment reminders and/or feedback inquiries, special offers, newsletters, and general health information, unless I request a change in writing. I understand that I am not required to consent to these services in order to continue to receive treatment at the Practice. Any consent provided by executing this form may be revoked at any time by me, in writing, as provided below.</p>
            <p style="font-size: 18px;">Patient Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%; padding: 7px;">${
              values.patientName
            }</span></p>
          
         <p style="font-size: 22px;">Patient Name (signature): <img src="${signatureImage}" style="width: 150px; height: auto;" alt="Patient Signature" /></p>
        <p style="font-size: 18px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 70%; padding: 7px;">${values.date.format(
          "YYYY-MM-DD",
        )}</span></p>

         
          <div style="text-align:center; padding-top:10px;" >
          <p style=" font-size: 18px; ">1418 Manoa Road, Wynnewood, PA 19096</p>
          <p style=" font-size: 18px; ">(484) 995-2726</p>
          <p style=" font-size: 18px; ">Gemluxemedspa@gmail.com</p>
          </div>
        </div>
      `;

      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/emailConsent",
        {
          htmlContent,
          patientName: values.patientName,
        },
      );
      setLoader(false);
      setLoading(false);

      setModalVisible(true);
      form.resetFields("");
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    form.resetFields("");
  };
  const handleOk = () => {
    setModalVisible(false);
    form.resetFields("");
  };
  const handleImageUpload = (imageUrl) => {
    console.log(imageUrl);
    form.setFieldsValue({ patientSignature: imageUrl });
  };
  return (
    <Container>
      {" "}
      {loader && <LoaderModal />}
      <StyledForm form={form} onFinish={onFinish} initialValues={formData}>
        <Heading>GEM LUXE AESTHETICS</Heading>
        <Form.Item>
          <div>
            <span>Patient Name: </span>
            <Form.Item name="patientName" noStyle>
              <Input
                placeholder="Enter your Name"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  // width: "70%",
                }}
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Title>
          CONSENT FOR EMAIL/ TEXT/ TELEPHONE CALL APPOINTMENT REMINDERS/
          REMINDER COMMUNICATIONS
        </Title>
        <Paragraph style={{ textAlign: "center" }}>
          This Consent Form is an acknowledgment by you and an express consent
          to receive emails, text messages, and/or automatic telephone
          communications from <strong>Gem Luxe Aesthetics </strong>(the
          "Practice"). By signing this form you understand that by providing
          your consent you recognize the email, text messaging, and telephone
          communications are not a secure form of communication. Please note
          that the email, text messaging, and telephone communications are not a
          secure form of communication. There is some risk that any protected
          health information that may be contained in such email or text message
          communications may be disclosed to, or intercepted by, unauthorized
          third parties.{" "}
          <strong>
            You are expressly urged to never send protected health information
            via text, email, or otherwise. The Practice will not send protected
            health information via text message or email.{" "}
          </strong>{" "}
          Patients in the practice may be contacted via email and/or text
          messaging to remind them of an appointment, to obtain feedback on
          their experience with the healthcare team, special offers,
          newsletters, and to provide general health reminders/information.
        </Paragraph>

        <Title2>PATIENT CONSENT</Title2>
        <Paragraph>
          If at any time I provide an <strong>email address</strong> at which I
          may be contacted, I consent to receiving appointment reminders,
          feedback, inquiries, special offers, newsletters, and other healthcare
          communications/information at the email address from the Practice.
        </Paragraph>

        <Form.Item>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Form.Item name="patientInitials" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                placeholder="Enter your Initials"
              />
            </Form.Item>
            <span>Patient Initials: </span>
          </div>
        </Form.Item>
        <Paragraph
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          The email address I am authorizing to receive such email messages is:
          <Form.Item name="patientEmail" noStyle>
            <Input
              value={formData.patientEmail}
              onChange={(e) =>
                handleInputChange("patientEmail", e.target.value)
              }
              style={{
                border: "none",
                borderBottom: "1px solid #000",
                width: "70%",
              }}
              placeholder="Enter your email address"
            />
          </Form.Item>
        </Paragraph>

        <Paragraph>
          If at any time I provide my <strong>cell phone number</strong> and/or
          any number forwarded or transferred to that number at which I may be
          contacted, I consent to receiving text message appointment reminders,
          feedback, inquiries, special offers, and other healthcare
          communications/information at that number from the Practice.
        </Paragraph>
        <Form.Item>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Form.Item name="patientInitials" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                placeholder="Enter your Initials"
              />
            </Form.Item>
            <span>Patient Initials: </span>
          </div>
        </Form.Item>
        <Paragraph
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          The cell phone number I am authorizing to receive such text messages
          is:
          <Form.Item name="patientNumber" noStyle>
            <Input
              style={{
                border: "none",
                borderBottom: "1px solid #000",
                width: "70%",
              }}
              placeholder="Enter your Phone number"
            />
          </Form.Item>
        </Paragraph>
        <Paragraph style={{ fontStyle: "italic", fontWeight: "bold" }}>
          The Practice does not charge for this service, but standard text
          messaging and data rates may apply as provided in your wireless plan
          (contact your carrier for pricing plans and details).
        </Paragraph>
        <Paragraph>
          I permit the Practice to call the following <>telephone number:</>
          <Form.Item name="patientNumber" noStyle>
            <Input
              style={{
                border: "none",
                borderBottom: "1px solid #000",
                width: "70%",
              }}
              placeholder="Enter your Phone number"
            />
          </Form.Item>
        </Paragraph>
        <Paragraph>
          In order to provide appointment reminders. I expressly acknowledge
          that the appointment reminders may be made by a computer or automated
          system and may not be a live person making such a call.
        </Paragraph>
        <Form.Item>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Form.Item name="patientInitials" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                placeholder="Enter your Initials"
              />
            </Form.Item>
            <span>Patient Initials: </span>
          </div>
        </Form.Item>
        <Paragraph>
          By executing this Agreement, I understand that this request to receive
          automated telephone calls, emails, and/or text messages will apply to
          all future appointment reminders and/or feedback inquiries, special
          offers, newsletters, and general health information, unless I request
          a change in writing. I understand that I am not required to consent to
          these services in order to continue to receive treatment at the
          Practice. Any consent provided by executing this form may be revoked
          at any time by me, in writing, as provided below.
        </Paragraph>
        <Form.Item>
          <div>
            <span>Patient Name: </span>
            <Form.Item name="patientName" noStyle>
              <Input
                placeholder="Enter your Name"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <div>
            <span>Patient Signature: </span>
            <Form.Item name="patientSignature" noStyle>
              <SignatureUpload onImageUpload={handleImageUpload} />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <div>
            <span>Date: </span>
            <Form.Item name="date" noStyle>
              <DatePicker
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <StyledButton type="primary" htmlType="submit" loading={loading}>
          Submit
        </StyledButton>
        <Footer>
          <p>1418 Manoa Road, Wynnewood, PA 19096</p>
          <p>(484) 995-2726</p>
          <p>Gemluxemedspa@gmail.com</p>
        </Footer>

        <Modal
          title="Success"
          visible={modalVisible}
          onCancel={closeModal}
          footer={null}
          afterClose={() => form.resetFields()}
        >
          <Typography.Text>
            The consent form has been submitted successfully.
          </Typography.Text>
        </Modal>
      </StyledForm>
    </Container>
  );
};

export default ConsentForEmail;
