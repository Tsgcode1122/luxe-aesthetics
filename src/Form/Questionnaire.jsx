import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  DatePicker,
  Radio,
  Modal,
  InputNumber,
  Typography,
} from "antd";
import LoaderModal from "./LoaderModal";
import axios from "axios";
import styled from "styled-components";
import QuestionnaireSubmit from "./QuestionnaireSubmit";
import ReactDOMServer from "react-dom/server";
import SignatureUpload from "./SignatureUpload";
const { TextArea } = Input;

const Container = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Paragraph = styled.div`
  padding-bottom: 20px;
  color: #000000;
  font-size: 14px;
`;
const Heading = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
  padding-bottom: 20px;
`;
const StyledForm = styled(Form)`
  max-width: 800px;
  padding: 20px;
  color: #000000;
  background-color: #ffffff;
`;
const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Group = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px;
  justify-content: space-between;
  box-shadow:
    rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
const Groupy = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  gap: 6px;
  align-items: center;
`;
const checkBoxGroupStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
};

const checkBoxStyle = {
  flexGrow: 1,

  margin: "1px",
};
const StyledDatePicker = styled(DatePicker)`
  width: 40%;
  border: none;
  border-bottom: 1px solid #000;
  padding: 2px 5px;
  font-size: 12px; /* Reduce font size */
  line-height: 1.2; /* Adjust line height */

  .ant-picker-input {
    input {
      font-size: 12px; /* Reduce font size of input text */
      padding: 2px 0; /* Adjust padding inside input */
    }
  }

  .ant-picker {
    padding: 2px 5px;
    height: 28px; /* Adjust height */
  }
`;
const Questionnaire = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState(null);
  const onFinish = async (values) => {
    setLoader(true);

    setLoading(true);
    try {
      const htmlContent = <QuestionnaireSubmit values={values} />;

      const htmlString = ReactDOMServer.renderToString(htmlContent);
      console.log(htmlString);
      await axios.post(
        "https://gemluxebackend.onrender.com/api/email/questionaire",
        {
          htmlContent: htmlString,
          patientName: values.name,
        },
      );
      setLoader(false);
      setLoading(false);

      setModalVisible(true);
      form.resetFields("");
    } catch (error) {
      setLoading(false);
      console.error("Error sending email:", error);
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
    <Container>
      {loader && <LoaderModal />}
      <StyledForm form={form} onFinish={onFinish}>
        <Heading>GEM LUXE AESTHETICS</Heading>
        <Form.Item>
          <Split>
            <span style={{ fontWeight: "500" }}>Date: </span>
            <Form.Item name="date" noStyle>
              <DatePicker
                style={{
                  transformOrigin: "top center",
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="select date"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <div style={{ paddingBottom: "5px ", fontWeight: "500" }}>
          How did you hear about Gem Luxe Aesthetics?{" "}
        </div>
        <Form.Item name="referralSource" noStyle>
          <Radio.Group>
            <Radio value="newspaper">Newspaper</Radio>
            <Radio value="internet">Internet</Radio>
            <Radio value="socialMedia">Social Media</Radio>
            <Radio value="other">Other</Radio>
            <Radio value="friend">Friend</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>Friend's Name: </span>
            <Form.Item label="Friend's Name " name="friendName" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="(if referred by a friend):"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Name: </span>
            <Form.Item name="name" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "80%",
                }}
                placeholder="Enter Your Name"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Address: </span>
            <Form.Item name="address" noStyle>
              <TextArea
                style={{
                  borderBottom: "1px solid #000",
                  width: "80%",
                }}
                placeholder="Enter Your Address"
                rows={2}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> City: </span>
            <Form.Item name="city" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "80%",
                }}
                placeholder="Enter Your city"
                rows={1}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Groupy>
          <Form.Item>
            <Split style={{ paddingTop: "5px " }}>
              <span style={{ fontWeight: "500" }}> State: </span>
              <Form.Item name="state" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "80%",
                  }}
                  placeholder="Enter Your State"
                  rows={1}
                />
              </Form.Item>
            </Split>
          </Form.Item>
          <Form.Item>
            <Split style={{ paddingTop: "5px " }}>
              <span style={{ fontWeight: "500" }}> Zip Code: </span>
              <Form.Item name="zipCode" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "50%",
                  }}
                  placeholder="Enter Your State"
                />
              </Form.Item>
            </Split>
          </Form.Item>
        </Groupy>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Birth Date: </span>
            <Form.Item name="birthDate" noStyle>
              <DatePicker
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="Select Birthdate"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Gender: </span>
            <Form.Item name="gender" noStyle>
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Other</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Groupy>
          <Form.Item>
            <Split style={{ paddingTop: "5px " }}>
              <span style={{ fontWeight: "500" }}> Height: </span>
              <Form.Item name="height" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "70%",
                  }}
                  addonAfter='"'
                />
              </Form.Item>
            </Split>
          </Form.Item>
          <Form.Item>
            <Split style={{ paddingTop: "5px " }}>
              <span style={{ fontWeight: "500" }}> Weight: </span>
              <Form.Item name="weight" noStyle>
                <Input
                  style={{
                    border: "none",
                    borderBottom: "1px solid #000",
                    width: "60%",
                  }}
                  addonAfter="lbs"
                  placeholder=""
                />
              </Form.Item>
            </Split>
          </Form.Item>
        </Groupy>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Home Phone Number: </span>
            <Form.Item name="homePhone" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "50%",
                }}
                placeholder="Enter Number"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Cell Phone Number : </span>
            <Form.Item name="cellPhone" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "60%",
                }}
                placeholder="(Highly recommended)"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>
              {" "}
              E-mail Address (Mandatory):{" "}
            </span>
            <Form.Item name="email" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "90%",
                }}
                placeholder="Enter you email ....@..."
              />
            </Form.Item>
          </Split>
          <p style={{ paddingTop: "5px" }}>
            (For important announcements, money saving discounts, special
            offers)
          </p>
        </Form.Item>

        <strong> Emergency Contact (Mandatory):</strong>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Contact Name: </span>
            <Form.Item name="emergencyContactName" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "60%",
                }}
                placeholder="Emergency Contact Name"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Relationship: </span>
            <Form.Item name="emergencyContactRelationship" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="Emergency Contact Relationship"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>Phone Number: </span>
            <Form.Item name="emergencyContactPhone" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="Emergency Contact Phone Number"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>Marital Status: </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="maritalStatus">
              <Radio.Group>
                <Radio value="single">Single</Radio>
                <Radio value="married">Married</Radio>
                <Radio value="separated">Separated</Radio>
                <Radio value="divorced">Divorced</Radio>
                <Radio value="widowed">Widowed</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            Are you allergic to any medications?{" "}
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="allergicMedications" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>If yes, please specify</span>
            <Form.Item name="allergicDetails" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="..."
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>Do you smoke cigarettes?</span>

            <Form.Item label="" name="smokeCigarettes" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>
              If yes, how many do you smoke per day/per week
            </span>
            <Form.Item name="smokeCigarettesDetails" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="..."
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            Do you take Aspirin or blood thinners?{" "}
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="aspirinBloodThinners" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}>
              If yes, name medication and dose
            </span>
            <Form.Item name="aspirinBloodThinnersDetails" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "70%",
                }}
                placeholder="enter medicaiton name and dose"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            Do you take diet medications or herbal products?
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="dietMedications" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>

        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            If yes, please specify the name of the product and how often you use
            it
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="dietMedicationsDetails" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder="specify the name of the product "
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            Will you be having surgery requiring anesthesia in the next two
            weeks?
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="surgery" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>

        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            If yes, please specify the procedure being performed{" "}
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="surgeryDetails" noStyle>
              <Input
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder=" specify the procedure being performed"
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            Please list all medications you are currently taking including birth
            control and over the counter medications
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="currentMedications" noStyle>
              <TextArea
                style={{
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder="  Please list all medications...."
                rows={3}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            Please list all past surgeries and the year in which they were
            performed
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="pastSurgeries" noStyle>
              <TextArea
                style={{
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder="  Please list all past surgeries...."
                rows={3}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            Have you used any weight loss treatments in the past? If yes, when
            and what kind?
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="weightLossTreatments" noStyle>
              <TextArea
                style={{
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder="  If yes, when and what kind?...."
                rows={3}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            What is the main reason for your visit today?
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="mainReason" noStyle>
              <TextArea
                style={{
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                placeholder="  reason for visit...."
                rows={3}
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <span style={{ fontWeight: "500" }}>
          Do you have any of the following? (Please check if applicable){" "}
        </span>
        <div style={checkBoxGroupStyle}>
          <Form.Item name="highBloodPressure" valuePropName="checked" noStyle>
            {" "}
            <Checkbox style={checkBoxStyle}>High Blood Pressure</Checkbox>
          </Form.Item>
          <Form.Item name="arthritis" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Arthritis</Checkbox>
          </Form.Item>
          <Form.Item name="cancer" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Cancer</Checkbox>
          </Form.Item>
          <Form.Item name="diabetesType1" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Diabetes Type I</Checkbox>
          </Form.Item>
          <Form.Item name="diabetesType2" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Diabetes Type II</Checkbox>
          </Form.Item>
          <Form.Item name="asthma" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Asthma</Checkbox>
          </Form.Item>
          <Form.Item name="drugAlcoholAbuse" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Drug/Alcohol Abuse</Checkbox>
          </Form.Item>
          <Form.Item name="leedingDisorder" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle} value="b">
              Bleeding Disorder
            </Checkbox>
          </Form.Item>
          <Form.Item
            name="historyThyroidCancer"
            valuePropName="checked"
            noStyle
          >
            <Checkbox style={checkBoxStyle}>
              History or Family History of Thyroid Cancer (MTC)
            </Checkbox>
          </Form.Item>
          <Form.Item name="majorDepression" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Major Depression</Checkbox>
          </Form.Item>
          <Form.Item
            name="chronicKidneyDisease"
            valuePropName="checked"
            noStyle
          >
            <Checkbox style={checkBoxStyle}>Chronic Kidney Disease</Checkbox>
          </Form.Item>
          <Form.Item name="menSyndrome" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>
              MEN Syndrome (Multiple Endocrine Neoplasia)
            </Checkbox>
          </Form.Item>
          <Form.Item name="tb" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>TB</Checkbox>
          </Form.Item>
          <Form.Item name="bloodTransfusion" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Blood Transfusion</Checkbox>
          </Form.Item>
          <Form.Item name="hyperHypoThyroid" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Hyper/Hypo Thyroid</Checkbox>
          </Form.Item>
          <Form.Item name="hivAids" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>H.I.V. Aids</Checkbox>
          </Form.Item>
          <Form.Item name="heartDisease" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Heart Disease</Checkbox>
          </Form.Item>
          <Form.Item name="highCholesterol" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>High Cholesterol</Checkbox>
          </Form.Item>
          <Form.Item
            name="pregnantBreastfeeding"
            valuePropName="checked"
            noStyle
          >
            <Checkbox style={checkBoxStyle}>Pregnant or Breastfeeding</Checkbox>
          </Form.Item>
          <Form.Item name="increasedHeartRate" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Increased Heart Rate</Checkbox>
          </Form.Item>
          <Form.Item name="historyPancreatitis" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>History of Pancreatitis</Checkbox>
          </Form.Item>
          <Form.Item name="gastroparesis" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>
              Gastroparesis (stomach paralysis)
            </Checkbox>
          </Form.Item>
          <Form.Item name="hepatitis" valuePropName="checked" noStyle>
            <Checkbox style={checkBoxStyle}>Hepatitis</Checkbox>
          </Form.Item>
        </div>
        <Form.Item>
          <span style={{ fontWeight: "500" }}> Other: if so specify </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="others" noStyle>
              <TextArea
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                rows={1}
                placeholder=" specify "
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <span style={{ fontWeight: "500" }}>
            {" "}
            Are you pregnant or is there a chance of pregnancy?
          </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="pregnant" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>
        <Form.Item>
          <Split style={{ paddingTop: "5px " }}>
            <span style={{ fontWeight: "500" }}> Do you breastfeed?</span>
            <Form.Item name="breastfeed" noStyle>
              <Radio.Group>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </Radio.Group>
            </Form.Item>
          </Split>
        </Form.Item>

        <span style={{ fontWeight: "500" }}>
          I am concerned about the following issues
        </span>
        <div>
          <Form.Item name="weightLoss" valuePropName="checked" noStyle>
            <Checkbox>Weight Loss</Checkbox>
          </Form.Item>
          <Form.Item name="weightGain" valuePropName="checked" noStyle>
            <Checkbox>Weight Gain</Checkbox>
          </Form.Item>
          <Form.Item name="" valuePropName="checked" noStyle>
            <Checkbox value="portionControl">Portion Control</Checkbox>
          </Form.Item>
          <Form.Item name="slowMetabolism" valuePropName="checked" noStyle>
            <Checkbox>Slow Metabolism</Checkbox>
          </Form.Item>
          <Form.Item name="lackOfEnergy" valuePropName="checked" noStyle>
            <Checkbox>Lack of Energy</Checkbox>
          </Form.Item>
          <Form.Item name="acne" valuePropName="checked" noStyle>
            <Checkbox>Acne</Checkbox>
          </Form.Item>
          <Form.Item name="fineLines" valuePropName="checked" noStyle>
            <Checkbox>Fine Lines</Checkbox>
          </Form.Item>
          <Form.Item name="scarring" valuePropName="checked" noStyle>
            <Checkbox>Scarring</Checkbox>
          </Form.Item>
          <Form.Item name="unevenSkinTone" valuePropName="checked" noStyle>
            <Checkbox>Uneven Skin Tone</Checkbox>
          </Form.Item>
          <Form.Item name="excessiveSweating" valuePropName="checked" noStyle>
            <Checkbox>Excessive Sweating</Checkbox>
          </Form.Item>
          <Form.Item name="sunDamagedSkin" valuePropName="checked" noStyle>
            <Checkbox>Sun Damaged Skin</Checkbox>
          </Form.Item>
          <Form.Item name="problemAreas" valuePropName="checked" noStyle>
            <Checkbox>Problem Areas</Checkbox>
          </Form.Item>
          <Form.Item name="wrinkles" valuePropName="checked" noStyle>
            <Checkbox>Wrinkles</Checkbox>
          </Form.Item>
          <Form.Item name="cellulite" valuePropName="checked" noStyle>
            <Checkbox>Cellulite</Checkbox>
          </Form.Item>
          <Form.Item name="otherSignsOfAging" valuePropName="checked" noStyle>
            <Checkbox>Other signs of Aging</Checkbox>
          </Form.Item>
        </div>
        <Form.Item>
          <span style={{ fontWeight: "500" }}> Other concerns: </span>
          <Split style={{ paddingTop: "5px " }}>
            <Form.Item name="otherConcerns" noStyle>
              <TextArea
                style={{
                  border: "none",
                  borderBottom: "1px solid #000",
                  width: "100%",
                }}
                rows={1}
                placeholder=" specify..."
              />
            </Form.Item>
          </Split>
        </Form.Item>
        <span style={{ fontWeight: "500" }}>
          Have you had any of the following in the past year? If so, please
          include the dates:
        </span>
        <Form.Item name="pastYearEvents">
          <Group>
            <Form.Item
              name="lastMenstrualCycle"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Last Menstrual Cycle</Checkbox>
            </Form.Item>

            <Form.Item noStyle>
              <Form.Item name="dateMenstrual" noStyle>
                <DatePicker />
              </Form.Item>
            </Form.Item>
          </Group>
          <Group>
            <Form.Item name="routineBloodWork" valuePropName="checked" noStyle>
              <Checkbox>Routine Blood Work</Checkbox>
            </Form.Item>

            <Form.Item name="dateBlood" noStyle>
              <DatePicker />
            </Form.Item>
          </Group>
          <Group>
            <Form.Item name="cbc" valuePropName="checked" noStyle>
              <Checkbox>CBC</Checkbox>
            </Form.Item>

            <Form.Item name="dateCbc" noStyle>
              <DatePicker />
            </Form.Item>
          </Group>
          <Group>
            <Form.Item
              name="basicOrComprehensiveMetabolicPanel"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Basic or Comprehensive Metabolic Panel</Checkbox>
            </Form.Item>

            <Form.Item name="dateMetabolic" noStyle>
              <DatePicker />
            </Form.Item>
          </Group>
          <Group>
            <Form.Item name="optionalTsh" valuePropName="checked" noStyle>
              <Checkbox>(optional)TSH</Checkbox>
            </Form.Item>

            <Form.Item name="dateTsh" noStyle>
              <DatePicker />
            </Form.Item>
          </Group>
          <Group>
            <Form.Item
              name="optionalLipidPanel"
              valuePropName="checked"
              noStyle
            >
              <Checkbox>Lipid Panel</Checkbox>
            </Form.Item>

            <Form.Item name="dateLipid" noStyle>
              <DatePicker />
            </Form.Item>
          </Group>
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={loading}>
            Submit
          </StyledButton>
        </Form.Item>
        <Paragraph>
          Semaglutide and Tirzepatide patients: Blood work is required
          preferably before treatment starts or within the first 4 weeks of
          treatment. We will accept any blood work performed within the past 6
          months prior to treatment.
        </Paragraph>
        <Paragraph style={{ textAlign: "center" }}>
          <strong>
            In reference to fees for Gem Luxe Med Spa, LLC Weight Loss Program:
            We accept cash, Cash App, Apple Pay, Venmo or Zelle. No checks or
            insurance
          </strong>
        </Paragraph>
      </StyledForm>
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
    </Container>
  );
};

export default Questionnaire;
