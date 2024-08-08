import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Typography,
  Modal,
  Checkbox,
} from "antd";
import styled from "styled-components";
import axios from "axios";
import moment from "moment";
import LoaderModal from "./LoaderModal";
const { TextArea } = Input;

const StyledForm = styled(Form)`
  max-width: 800px;
  padding: 20px;
  color: #000000;
  background-color: #ffffff;
`;

const Paragraph = styled.div`
  padding-bottom: 20px;
  color: #000000;
  font-size: 12px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  background-color: #000000;
  text-decoration: none;
  transition: background-color 0.3s;
  color: white;
  &:hover {
    color: #000000 !important;
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Group = styled.div`
  padding: 5px;
  box-shadow:
    rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
    rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
    rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
    rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
    rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
    rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
    rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
`;

const Footer = styled.div`
  text-align: center;
  padding-top: 20px;

  p {
    margin: 0;
  }
`;

const RevokeConsent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const onFinish = async (values) => {
    setLoader(true);
    setLoading(true);
    try {
      const htmlContent = `
        <div style="padding: 20px 30px;">
          <p style="font-size: 22px;"><strong>REVOCATION OF CONSENT TO TELEPHONE CALL APPOINTMENT REMINDERS, EMAIL AND/OR TEXT USAGE</strong></p>
          <p style="font-size: 22px;">I hereby <strong>revoke</strong> my request to receive: (Check which apply)</p>
          <p style="font-size: 22px;">${
            values.communicationCheck ? "✔" : "✘"
          } Any future communications, including appointment reminders, via telephone</p>
          <p style="font-size: 22px;"><span style="border-bottom: 1px solid #000; display: inline-block; width: 20%; padding: 7px;">${
            values.patientInitials
          }</span>(Patient Initials)</p>
          <p style="font-size: 22px;">${
            values.remindersTextCheck ? "✔" : "✘"
          } Any future communications, including appointment reminders, feedback inquiries, special offers, newsletters, and general health information via text messages.</p>
          <p style="font-size: 22px;"><span style="border-bottom: 1px solid #000; display: inline-block; width: 20%; padding: 7px;">${
            values.patientInitials
          }</span>(Patient Initials)</p>
          <p style="font-size: 22px;">${
            values.reminderEmailCheck ? "✔" : "✘"
          } Any future communications, including appointment reminders, feedback inquiries, special offers, newsletters, and general health information via email.</p>
          <p style="font-size: 22px;"><span style="border-bottom: 1px solid #000; display: inline-block; width: 20%; padding: 7px;">${
            values.patientInitials
          }</span>(Patient Initials)</p>
          <p style="font-size: 22px;">The foregoing revocation only applies to communications from the practice.</p>
          <p style="font-size: 22px;">Patient Name: <span style="border-bottom: 1px solid #000; display: inline-block; width: 50%; padding: 7px;">${
            values.patientName
          }</span></p>
          <p style="font-size: 22px;">Patient Signature: <span style="border-bottom: 1px solid #000; display: inline-block; width: 60%; padding: 7px;">${
            values.patientSignature
          }</span></p>
          <p style="font-size: 22px;">Date: <span style="border-bottom: 1px solid #000; display: inline-block; width: 70%; padding: 7px;">${values.date.format(
            "YYYY-MM-DD",
          )}</span></p>
          <div style="text-align:center; padding-top:10px;">
            <p style="font-size: 22px;">1418 Manoa Road, Wynnewood, PA 19096</p>
            <p style="font-size: 22px;">(484) 995-2726</p>
            <p style="font-size: 22px;">Gemluxemedspa@gmail.com</p>
          </div>
        </div>
      `;

      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/revokeConsent",
        {
          htmlContent,
          patientName: values.patientName,
        },
      );

      setModalVisible(true);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    } finally {
      setLoader(false);
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    form.resetFields();
  };

  return (
    <>
      {" "}
      {loader && <LoaderModal />}
      <StyledForm form={form} onFinish={onFinish}>
        <Title>
          REVOCATION OF CONSENT TO TELEPHONE CALL APPOINTMENT REMINDERS, EMAIL
          AND/OR TEXT USAGE
        </Title>
        <Paragraph>
          I hereby <strong>revoke</strong> my request to receive: (Check which
          apply)
        </Paragraph>
        <Group>
          <Paragraph>
            <Form.Item
              name="communicationCheck"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>
                Any future communications, including appointment reminders, via
                telephone.
              </Checkbox>
            </Form.Item>
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
        </Group>
        <Group>
          <Paragraph>
            <Form.Item
              name="remindersTextCheck"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>
                Any future communications, including appointment reminders,
                feedback inquiries, special offers, newsletters, and general
                health information via text messages.
              </Checkbox>
            </Form.Item>
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
        </Group>
        <Group>
          <Paragraph>
            <Form.Item
              name="reminderEmailCheck"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>
                Any future communications, including appointment reminders,
                feedback inquiries, special offers, newsletters, and general
                health information via email.
              </Checkbox>
            </Form.Item>
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
        </Group>
        <Paragraph style={{ paddingTop: "20px" }}>
          The foregoing revocation only applies to communications from the
          practice.
        </Paragraph>
        <Form.Item>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 70%",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>Patient Name: </span>
            <Form.Item name="patientName" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "90%",
                }}
                placeholder="Enter Your full Name"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 70%",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>Patient signature: </span>
            <Form.Item name="patientSignature" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="Patient Signature"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 70%",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span>Date: </span>
            <Form.Item name="date" noStyle>
              <DatePicker
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "60%",
                }}
                placeholder="Select Date"
              />
            </Form.Item>
          </div>
        </Form.Item>
        <StyledButton htmlType="submit" loading={loading}>
          Submit
        </StyledButton>
        <Modal
          title="Success"
          visible={modalVisible}
          onCancel={closeModal}
          footer={null} // Remove footer
          afterClose={() => form.resetFields()}
        >
          <p>Your consent form has been submitted successfully!</p>
        </Modal>
        <Footer>
          <p>1418 Manoa Road, Wynnewood, PA 19096</p>
          <p>(484) 995-2726</p>
          <p>Gemluxemedspa@gmail.com</p>
        </Footer>
      </StyledForm>
    </>
  );
};

export default RevokeConsent;
