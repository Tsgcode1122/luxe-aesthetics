import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Typography, Modal } from "antd";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
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
const SubHead = styled.div`
  text-align: left;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 800;
`;

const Title = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 10px;
`;

const Unlist = styled.ul`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 0px;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 20px;

  p {
    margin: 0;
  }
`;

const HippaConsent = () => {
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
  <div>
    <h1 style="text-align: center;">GEM LUXE AESTHETICS</h1>
    <h2 style="text-align: center;">Patient Consent for Use and Disclosure of Protected Health Information</h2>
    <strong>Patient Information</strong>
    <ul style="padding: 0 20px 20px 20px;">
      <li>
          <p style="font-weight: 500;">Name: ${values.patientName} </p>
      </li>
      <li>
          <p style="font-weight: 500;">Address: ${values.address} </p>
      </li>
      <li style="display: flex; gap: 20px; align-items: center;">
          <p style="font-weight: 500;">City: ${values.city} </p>

          <p style="font-weight: 500;">State: ${values.state}</p>

          <p style="font-weight: 500;">Zip Code: ${values.zipCode}</p>

      </li>
      <li>
        <p style="font-weight: 500;">Phone Number:   ${
          values.phoneNumber ? values.phoneNumber : ""
        }</p>
      
      </li>
      <li>
        <p style="font-weight: 500;">Email:    ${
          values.email ? values.email : ""
        }</p>
      
      </li>
      <li>
        <p style="font-weight: 500;">Date of Birth:  ${
          values.dateOfBirth ? values.dateOfBirth.format("YYYY-MM-DD") : "N/A"
        } </p>
      </li>
    </ul>
    <strong>Consent</strong>
    <p style="padding-top: 10px; ">
      <strong>Purpose:</strong> This consent form allows GEM LUXE AESTHETICS to use and disclose your protected health information (PHI) for the purposes of treatment, payment, and health care operations.
    </p>
    <strong>Statement of Consent:</strong>
    <p style="text-align: left;">
      I understand that GEM LUXE AESTHETICS will use and disclose my PHI to carry out:
    </p>
    <ul style="list-style-type: decimal; padding-left: 40px;">
      <li style="margin-bottom: 10px;">
        <strong>Treatment:</strong> This includes the provision, coordination, or management of my health care and related services, including consultation between health care providers regarding my treatment and referrals for my care from one health care provider to another.
      </li>
      <li style="margin-bottom: 10px;">
        <strong> Payment:</strong> This includes activities related to obtaining reimbursement for services, confirming coverage, billing or collection activities, and utilization review.
      </li>
      <li style="margin-bottom: 10px;">
        <strong> Health Care Operations:</strong> This includes business aspects of running the practice, such as quality assessment and improvement, auditing functions, cost-management analysis, and customer service.
      </li>
    </ul>
    <strong>Disclosure of Information:</strong>
    <p style="text-align: left;">
      I understand that GEM LUXE AESTHETICS may disclose my PHI to third parties who perform services for the practice in the administration of my care. These third parties are required to protect the confidentiality of my information and are not allowed to use or disclose any information other than as specified in our contract.
    </p>
    <strong>Right to Revoke:</strong>
    <p style="text-align: left;">
      I have the right to revoke this consent in writing at any time, except to the extent that GEM LUXE AESTHETICS has already made disclosures based on my prior consent.
    </p>
    <strong>Privacy Practices:</strong>
    <p style="text-align: left;">
      I have been provided with a copy of the Notice of Privacy Practices that outlines how my information will be used and disclosed. I understand that GEM LUXE AESTHETICS has the right to change the Notice of Privacy Practices and that I may obtain a revised copy by requesting one at the office.
    </p>
    <strong>Effective Period:</strong>
    <p style="text-align: left;">
      This consent is effective upon signing and will remain in effect until revoked in writing.
    </p>
    <strong>Acknowledgment:</strong>
    <p style="text-align: left;">
      I have read and understand the above information. I have received a copy of this form, and I am aware of my rights under HIPAA.
    </p>
    <strong>Signature</strong>
    <div style="display: flex; align-items: center; gap: 20px;">
    
        <p style="font-weight: 500;">Patient Signature:
        ${values.patientSignature ? values.patientSignature : "N/A"}
        
        </p>
    
   
   
        <p style="font-weight: 500; padding-left:"20px">Date: 
        ${values.date ? values.date.format("YYYY-MM-DD") : "N/A"} 
  
        </p>

    </div>
    <div style="padding-top: 20px; padding-bottom: 20px;">
      <p style="font-weight: 500;">Guardian or Legal Representative Signature (if applicable):    ${
        values.guardianSignature ? values.guardianSignature : ""
      }</p>
  
    </div>
 
      <p style="font-weight: 500;">Date:  
      ${values.guardianDate ? values.guardianDate.format("YYYY-MM-DD") : "N/A"} 

      </p>

 
  
      <p style="font-weight: 500; padding-bottom: 20px;">Relationship to Patient:  ${
        values.relationshipToPatient ? values.relationshipToPatient : ""
      }</p>
    
 
    <strong>Office Use Only</strong>
    <div style="align-items: center;">
      <div>
        <p style="font-weight: 500;">Staff Member Name:   ${
          values.staffName ? values.staffName : ""
        }</p>
      
      </div>
      <div>
        <p>Date Received: ${
          values.staffDate ? values.staffDate.format("YYYY-MM-DD") : ""
        }</p>
   
      </div>
    </div>
     <div style="text-align:center; padding-top:10px;" >
          <p style=" font-size: 18px; ">1418 Manoa Road, Wynnewood, PA 19096</p>
          <p style=" font-size: 18px; ">(484) 995-2726</p>
          <p style=" font-size: 18px; ">Gemluxemedspa@gmail.com</p>
          </div>
  </div>
`;

      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/hippaConsent",
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
      {" "}
      {loader && <LoaderModal />}
      <StyledForm form={form} onFinish={onFinish} initialValues={formData}>
        <Heading>GEM LUXE AESTHETICS</Heading>
        <Title>
          Patient Consent for Use and Disclosure of Protected Health Information
        </Title>
        <strong>Patient Information</strong>
        <Unlist>
          <li>
            <div>
              <span style={{ fontWeight: "500" }}>Name: </span>
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
          </li>
          <li>
            <div>
              <span style={{ fontWeight: "500" }}>Address: </span>
              <Form.Item name="address" noStyle>
                <TextArea
                  style={{
                    borderBottom: "1px solid #000",
                    // width: "70%",
                  }}
                  placeholder="Enter your  address"
                />
              </Form.Item>
            </div>
          </li>
          <li>
            <div>
              <span style={{ fontWeight: "500" }}>City: </span>
              <Form.Item name="city" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "70%",
                  }}
                  placeholder="your city"
                />
              </Form.Item>
            </div>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <div>
              <span style={{ fontWeight: "500" }}>State: </span>
              <Form.Item name="state" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "60%",
                  }}
                  placeholder="Enter your state"
                />
              </Form.Item>
            </div>
            <div>
              <span style={{ fontWeight: "500" }}>Zip Code: </span>
              <Form.Item name="zipCode" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "50%",
                  }}
                  placeholder="Enter zipcode"
                />
              </Form.Item>
            </div>
          </li>
          <li>
            <span style={{ fontWeight: "500" }}>Phone Number: </span>
            <Form.Item name="phoneNumber" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "60%",
                }}
                placeholder="Enter Your number"
              />
            </Form.Item>
          </li>
          <li>
            <span style={{ fontWeight: "500" }}>Email: </span>
            <Form.Item name="email" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "80%",
                }}
                placeholder="Enter Email"
              />
            </Form.Item>
          </li>
          <li>
            <span style={{ fontWeight: "500" }}>Date of Birth: </span>
            <Form.Item name="dateOfBirth" noStyle>
              <DatePicker
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "40%",
                }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </li>
        </Unlist>
        <SubHead>Consent</SubHead>
        <Paragraph style={{ paddingTop: "10px" }}>
          <strong>Purpose:</strong> This consent form allows GEM LUXE AESTHETICS
          to use and disclose your protected health information (PHI) for the
          purposes of treatment, payment, and health care operations.
        </Paragraph>
        <strong>Statement of Consent:</strong>
        <Paragraph style={{ textAlign: "left" }}>
          I understand that GEM LUXE AESTHETICS will use and disclose my PHI to
          carry out:
        </Paragraph>
        <ul style={{ listStyleType: "decimal", paddingLeft: "40px" }}>
          <li style={{ marginBottom: "10px" }}>
            <strong>Treatment:</strong> This includes the provision,
            coordination, or management of my health care and related services,
            including consultation between health care providers regarding my
            treatment and referrals for my care from one health care provider to
            another.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong> Payment:</strong>
            This includes activities related to obtaining reimbursement for
            services, confirming coverage, billing or collection activities, and
            utilization review.
          </li>
          <li style={{ marginBottom: "10px" }}>
            <strong> Health Care Operations:</strong>
            This includes business aspects of running the practice, such as
            quality assessment and improvement, auditing functions,
            cost-management analysis, and customer service.
          </li>
        </ul>
        <strong>Disclosure of Information:</strong>{" "}
        <Paragraph style={{ textAlign: "left" }}>
          I understand that GEM LUXE AESTHETICS may disclose my PHI to third
          parties who perform services for the practice in the administration of
          my care. These third parties are required to protect the
          confidentiality of my information and are not allowed to use or
          disclose any information other than as specified in our contract.
        </Paragraph>
        <strong>Right to Revoke:</strong>{" "}
        <Paragraph style={{ textAlign: "left" }}>
          I have the right to revoke this consent in writing at any time, except
          to the extent that GEM LUXE AESTHETICS has already made disclosures
          based on my prior consent.
        </Paragraph>
        <strong>Privacy Practices:</strong>{" "}
        <Paragraph style={{ textAlign: "left" }}>
          I have been provided with a copy of the Notice of Privacy Practices
          that outlines how my information will be used and disclosed. I
          understand that GEM LUXE AESTHETICS has the right to change the Notice
          of Privacy Practices and that I may obtain a revised copy by
          requesting one at the office.
        </Paragraph>
        <strong>Effective Period:</strong>{" "}
        <Paragraph style={{ textAlign: "left" }}>
          This consent is effective upon signing and will remain in effect until
          revoked in writing.
        </Paragraph>
        <strong>Acknowledgment:</strong>{" "}
        <Paragraph style={{ textAlign: "left" }}>
          I have read and understand the above information. I have received a
          copy of this form, and I am aware of my rights under HIPAA.
        </Paragraph>
        <strong>Signature</strong>
        <div>
          <div>
            <span style={{ fontWeight: "500" }}>Patient Signature: </span>
            <Form.Item name="patientSignature" noStyle>
              <Input
                placeholder="Enter signature"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  // width: "60%",
                }}
              />
            </Form.Item>
          </div>

          <div>
            <span style={{ fontWeight: "500" }}>Date: </span>
            <Form.Item name="date" noStyle>
              <DatePicker
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  // width: "40%",
                }}
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </div>
        </div>
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <span style={{ fontWeight: "500" }}>
            Guardian or Legal Representative Signature (if applicable):{" "}
          </span>
          <Form.Item name="guardianSignature" noStyle>
            <Input
              style={{
                border: "none",
                borderBottom: "1px solid #000",
                // width: "100%",
              }}
              placeholder="Enter  guardian your signature"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <div>
            <span style={{ fontWeight: "500" }}>Date: </span>
            <Form.Item name="guardianDate" noStyle>
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
            <span style={{ fontWeight: "500" }}>Relationship to Patient:</span>

            <Form.Item name="relationshipToPatient" noStyle>
              <Input
                placeholder=" enter relationship to patient"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  // width: "60%",
                }}
              />
            </Form.Item>
          </div>
        </Form.Item>
        <strong>Office Use Only</strong>
        <div style={{ alignItems: "center" }}>
          <div>
            <span style={{ fontWeight: "500" }}>Staff Member Name: </span>
            <Form.Item name="staffName" noStyle>
              <Input
                placeholder="Enter Staff Name"
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  // width: "60%",
                }}
              />
            </Form.Item>
          </div>

          <div>
            <span>Date Received: </span>
            <Form.Item name="staffDate" noStyle>
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
        </div>
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

export default HippaConsent;
