import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Typography, Modal } from "antd";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import LoaderModal from "./LoaderModal";

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
  font-size: 15px;
  font-weight: 600;
  padding-bottom: 0px;
`;

const Title2 = styled.div`
  text-align: center;
  font-size: 15px;
  padding-bottom: 10px;
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

const PatientConsent = () => {
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
      const htmlContent = `
        <div style=" padding: 20px 30px; " >
          <div style="text-align: center; font-size: 32px; font-weight: 800;  padding-bottom: 10px; ">GEM LUXE AESTHETICS</div>
         
          <div style="text-align: center; font-size: 20px; font-weight: 600; padding-bottom: 15px;">PATIENT CONSENT</div>
          <div style="text-align: center; font-size: 20px; font-weight: 600; padding-bottom: 15px;">FOR USE AND DISCLOSURE OF PROTECTED HEALTH 
INFORMATION</div>

          <p style=" font-size: 20px;">I hereby give my permission to  <strong>  GEM LUXE AESTHETICS </strong> to use and disclose 
protected health information (PHI) about me to carry out treatment, payment and 
healthcare operations (TPO).</p> 
          <p style=" font-size: 20px; text-align:center;"> <strong> GEM LUXE AESTHETICS Notice of Privacy Practices provides a more 
complete description of such uses and disclosures.</strong></p> 
         
          <p style=" font-size: 20px; ">I have the right to review the Notice of Privacy Practices prior to signing this 
consent.<strong>  GEM LUXE AESTHETICS </strong> reserves the right to reserve its Notice of 
Privacy Practices at any time. A revised Notice of Privacy Practices may be 
obtained by forwarding a WRITTEN REQUEST to the privacy officer, MaChere 
Chiles.</p>
         
        
        
          <p style=" font-size: 20px; ">The letter should be mailed to:
           <ul style=" listStyle: none; listStyleType: none;">
          <li>44 Treaty Lane</li>
          <li>P.O. Box 65</li>
          <li>Clayton, DE 19938</li>
        </ul>
          
          </p>
        <p style="font-size: 20px;">With this consent, a representative of GEM LUXE AESTHETICS office may call 
my home or other alternative location and leave a message on the voice mail or in 
person in reference to any items that assist the practice of carrying out TPO, such 
as appointment reminders, any calls pertaining to my clinical care with the 
exception of leaving messages pertaining to test results. I understand that I will be 
asked a security question to obtain my test results. </p>
        <p style="font-size: 20px;">With this consent, GEM LUXE AESTHETICS may mail to my home or 
alternative location any items that assist in the practice of carrying out the TPO, 
such as referrals and patient statements as long as they are marked PERSONAL 
AND CONFIDENTIAL. </p>
        <p style="font-size: 20px;">With this consent, GEM LUXE AESTHETICS may fax test results, including lab 
testing to another physician or facility, any item that assists the practice in carrying 
out the TPO. With this consent I also give permission for other medical providers 
or facility’s to release my information by fax to GEM LUXE AESTHETICS for 
review for my medical treatment. </p>
        <p style="font-size: 20px;">I have the right to request that GEM LUXE AESTHETICS office restrict how it 
uses or discloses my PHI to carry out TPO. However, the practice is not required to 
agree to my requested restrictions, but if it does it is bound by this agreement. </p>
          
         
 <p style=" font-size: 20px; ">By signing this form, I am consenting to GEM LUXE AESTHETICS to use and 
disclosure of my PHI to carry out TPO. </p>
  <p style=" font-size: 20px; ">I may revoke my consent in writing to the extent that the practice has already made 
disclosures in reliance upon my prior consent. If I do not sign this consent, or later 
revoke it, <strong>  GEM LUXE AESTHETICS </strong> may decline to treat me.</p>
 
       
            <p style="font-size: 20px;">Patient Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%; padding: 7px;">${
              values.patientName
            }</span></p>
          
          <p style="font-size: 20px;">Patient Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 60%; padding: 7px;">${
            values.patientSignature
          }</span></p>
        <p style="font-size: 20px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 70%; padding: 7px;">${values.date.format(
          "YYYY-MM-DD",
        )}</span></p>


<p style="font-size: 20px;">
Receipt of Notice of Privacy Practices Written Acknowledgement Form
</p>
<p style="font-size: 20px;">
I,    <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%; padding: 7px;">${
        values.patientName
      }</span>
       have received a copy of <strong> Gem Luxe Med Spa, LLC’s </strong>
Notice of Privacy Practices.
</p>



          <p style="font-size: 20px;">Patient Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 60%; padding: 7px;">${
            values.patientSignature
          }</span></p>
        <p style="font-size: 20px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 70%; padding: 7px;">${values.date.format(
          "YYYY-MM-DD",
        )}</span></p>

         
          <div style="text-align:center; padding-top:10px;" >
          <p style=" font-size: 20px; ">1418 Manoa Road, Wynnewood, PA 19096</p>
          <p style=" font-size: 20px; ">(484) 995-2726</p>
          <p style=" font-size: 20px; ">Gemluxemedspa@gmail.com</p>
          </div>
        </div>
      `;

      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/patientConsent",
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
    form.resetFields();
  };

  return (
    <Container>
      {loader && <LoaderModal />}
      <StyledForm form={form} onFinish={onFinish} initialValues={formData}>
        <Heading>GEM LUXE AESTHETICS</Heading>

        <Title>PATIENT CONSENT</Title>
        <Title2>FOR USE AND DISCLOSURE OF PROTECTED HEALTH INFORMATION</Title2>
        <Paragraph style={{ textAlign: "left" }}>
          I hereby give my permission to <strong>GEM LUXE AESTHETICS</strong> to
          use and disclose protected health information (PHI) about me to carry
          out treatment, payment and healthcare operations (TPO).
        </Paragraph>
        <Paragraph style={{ textAlign: "left" }}>
          <strong>
            GEM LUXE AESTHETICS Notice of Privacy Practices provides a more
            complete description of such uses and disclosures.
          </strong>{" "}
        </Paragraph>
        <Paragraph style={{ textAlign: "left" }}>
          I have the right to review the Notice of Privacy Practices prior to
          signing this consent. <strong>GEM LUXE AESTHETICS</strong>reserves the
          right to reserve its Notice of Privacy Practices at any time. A
          revised Notice of Privacy Practices may be obtained by forwarding a
          WRITTEN REQUEST to the privacy officer, MaChere Chiles.
        </Paragraph>
        <Paragraph>
          The letter should be mailed to:
          <ul style={{ listStyle: "none" }}>
            <li style={{ paddingLeft: "50px" }}>44 Treaty Lane</li>
            <li style={{ paddingLeft: "50px" }}>P.O. Box 65</li>
            <li style={{ paddingLeft: "50px" }}>Clayton, DE 19938</li>
          </ul>
        </Paragraph>
        <Paragraph>
          With this consent, a representative of GEM LUXE AESTHETICS office may
          call my home or other alternative location and leave a message on the
          voice mail or in person in reference to any items that assist the
          practice of carrying out TPO, such as appointment reminders, any calls
          pertaining to my clinical care with the exception of leaving messages
          pertaining to test results. I understand that I will be asked a
          security question to obtain my test results.
        </Paragraph>

        <Paragraph>
          With this consent, GEM LUXE AESTHETICS may mail to my home or
          alternative location any items that assist in the practice of carrying
          out the TPO, such as referrals and patient statements as long as they
          are marked PERSONAL AND CONFIDENTIAL.
        </Paragraph>
        <Paragraph>
          With this consent, GEM LUXE AESTHETICS may fax test results, including
          lab testing to another physician or facility, any item that assists
          the practice in carrying out the TPO. With this consent I also give
          permission for other medical providers or facility’s to release my
          information by fax to GEM LUXE AESTHETICS for review for my medical
          treatment.
        </Paragraph>
        <Paragraph>
          I have the right to request that GEM LUXE AESTHETICS office restrict
          how it uses or discloses my PHI to carry out TPO. However, the
          practice is not required to agree to my requested restrictions, but if
          it does it is bound by this agreement.
        </Paragraph>
        <Paragraph>
          By signing this form, I am consenting to GEM LUXE AESTHETICS to use
          and disclosure of my PHI to carry out TPO.
        </Paragraph>
        <Paragraph>
          I may revoke my consent in writing to the extent that the practice has
          already made disclosures in reliance upon my prior consent. If I do
          not sign this consent, or later revoke it,{" "}
          <strong>GEM LUXE AESTHETICS</strong> may decline to treat me.
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
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                placeholder="Enter your signature"
              />
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

        <Form.Item>
          <div>
            <span>
              Receipt of Notice of Privacy Practices Written Acknowledgement
              Form I,
              <Form.Item name="patientName" noStyle>
                <Input
                  placeholder="Enter your Name"
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "50%",
                  }}
                />
              </Form.Item>
              , have received a copy of <strong>Gem Luxe Med Spa, LLC's</strong>{" "}
              Notice of Privacy Practices.
            </span>
          </div>
        </Form.Item>
        <Form.Item>
          <div>
            <span>Patient Signature: </span>
            <Form.Item name="patientSignature" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                placeholder="Enter your signature"
              />
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
          footer={null} // Remove footer
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

export default PatientConsent;
