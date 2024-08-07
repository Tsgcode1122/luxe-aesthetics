import React, { useState } from "react";
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

import styled from "styled-components";

const { TextArea } = Input;
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
const Questionnaire = () => {
  const [form] = Form.useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    console.log("Form Values:", values);
    setLoading(false);

    setModalVisible(true);
    form.resetFields("");
  };
  const closeModal = () => {
    setModalVisible(false);
    form.resetFields();
  };
  return (
    <StyledForm form={form} onFinish={onFinish}>
      <Heading>GEM LUXE AESTHETICS</Heading>
      <Form.Item>
        <Split>
          <span style={{ fontWeight: "500" }}>Date: </span>
          <Form.Item name="date" noStyle>
            <DatePicker
              style={{
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
          (For important announcements, money saving discounts, special offers)
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
          Will you be having surgery requiring anesthesia in the next two weeks?
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
                width: "70%",
              }}
              placeholder=" "
            />
          </Form.Item>
        </Split>
      </Form.Item>

      <Form.Item
        label="Please list all medications you are currently taking including birth control and over the counter medications"
        name="currentMedications"
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Please list all past surgeries and the year in which they were performed"
        name="pastSurgeries"
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Have you used any weight loss treatments in the past? If yes, when and what kind?"
        name="weightLossTreatments"
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="What is the main reason for your visit today?"
        name="mainReason"
      >
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Do you have any of the following? (Please check if applicable)"
        name="healthConditions"
      >
        <Checkbox.Group>
          <Checkbox value="highBloodPressure">High Blood Pressure</Checkbox>
          <Checkbox value="arthritis">Arthritis</Checkbox>
          <Checkbox value="cancer">Cancer</Checkbox>
          <Checkbox value="diabetesType1">Diabetes Type I</Checkbox>
          <Checkbox value="diabetesType2">Diabetes Type II</Checkbox>
          <Checkbox value="asthma">Asthma</Checkbox>
          <Checkbox value="drugAlcoholAbuse">Drug/Alcohol Abuse</Checkbox>
          <Checkbox value="bleedingDisorder">Bleeding Disorder</Checkbox>
          <Checkbox value="historyThyroidCancer">
            History or Family History of Thyroid Cancer (MTC)
          </Checkbox>
          <Checkbox value="majorDepression">Major Depression</Checkbox>
          <Checkbox value="chronicKidneyDisease">
            Chronic Kidney Disease
          </Checkbox>
          <Checkbox value="menSyndrome">
            MEN Syndrome (Multiple Endocrine Neoplasia)
          </Checkbox>
          <Checkbox value="tb">TB</Checkbox>
          <Checkbox value="bloodTransfusion">Blood Transfusion</Checkbox>
          <Checkbox value="hyperHypoThyroid">Hyper/Hypo Thyroid</Checkbox>
          <Checkbox value="hivAids">H.I.V. Aids</Checkbox>
          <Checkbox value="heartDisease">Heart Disease</Checkbox>
          <Checkbox value="highCholesterol">High Cholesterol</Checkbox>
          <Checkbox value="pregnantBreastfeeding">
            Pregnant or Breastfeeding
          </Checkbox>
          <Checkbox value="increasedHeartRate">Increased Heart Rate</Checkbox>
          <Checkbox value="historyPancreatitis">
            History of Pancreatitis
          </Checkbox>
          <Checkbox value="gastroparesis">
            Gastroparesis (stomach paralysis)
          </Checkbox>
          <Checkbox value="hepatitis">Hepatitis</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="Are you pregnant or is there a chance of pregnancy?"
        name="pregnant"
      >
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Do you breastfeed?" name="breastfeed">
        <Radio.Group>
          <Radio value="yes">Yes</Radio>
          <Radio value="no">No</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="I am concerned about the following issues"
        name="concerns"
      >
        <Checkbox.Group>
          <Checkbox value="weightLoss">Weight Loss</Checkbox>
          <Checkbox value="weightGain">Weight Gain</Checkbox>
          <Checkbox value="portionControl">Portion Control</Checkbox>
          <Checkbox value="slowMetabolism">Slow Metabolism</Checkbox>
          <Checkbox value="lackOfEnergy">Lack of Energy</Checkbox>
          <Checkbox value="acne">Acne</Checkbox>
          <Checkbox value="fineLines">Fine Lines</Checkbox>
          <Checkbox value="scarring">Scarring</Checkbox>
          <Checkbox value="unevenSkinTone">Uneven Skin Tone</Checkbox>
          <Checkbox value="excessiveSweating">Excessive Sweating</Checkbox>
          <Checkbox value="sunDamagedSkin">Sun Damaged Skin</Checkbox>
          <Checkbox value="problemAreas">Problem Areas</Checkbox>
          <Checkbox value="wrinkles">Wrinkles</Checkbox>
          <Checkbox value="cellulite">Cellulite</Checkbox>
          <Checkbox value="otherSignsOfAging">Other signs of Aging</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="Other concerns" name="otherConcerns">
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item
        label="Have you had any of the following in the past year? If so, please include the dates:"
        name="pastYearEvents"
      >
        <Group>
          <Checkbox value="lastMenstrualCycle">Last Menstrual Cycle</Checkbox>
          <Form.Item noStyle>
            <Form.Item name="dateMenstrual" noStyle>
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Group>
        <Group>
          <Checkbox value="routineBloodWork">Routine Blood Work</Checkbox>
          <Form.Item noStyle>
            <Form.Item name="dateBlook" noStyle>
              <DatePicker />
            </Form.Item>
          </Form.Item>
        </Group>
        <Group>
          <Checkbox value="cbc">CBC</Checkbox>
          <Form.Item label="Date" name="dateCbc" noStyle>
            <DatePicker />
          </Form.Item>
        </Group>
        <Group>
          <Checkbox value="basicOrComprehensiveMetabolicPanel">
            Basic or Comprehensive Metabolic Panel
          </Checkbox>

          <Form.Item label="Date" name="dateMetabolic" noStyle>
            <DatePicker />
          </Form.Item>
        </Group>
        <Group>
          <Checkbox value="optionalTsh">(optional)TSH</Checkbox>
          <Form.Item label="Date" name="dateTsh" noStyle>
            <DatePicker />
          </Form.Item>
        </Group>
        <Group>
          <Checkbox value="optionalLipidPanel">Lipid Panel</Checkbox>
          <Form.Item label="Date" name="dateLipid" noStyle>
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
        Semaglutide and Tirzepatide patients: Blood work is required preferably
        before treatment starts or within the first 4 weeks of treatment. We
        will accept any blood work performed within the past 6 months prior to
        treatment.
      </Paragraph>
      <Paragraph style={{ textAlign: "center" }}>
        <strong>
          In reference to fees for Gem Luxe Med Spa, LLC Weight Loss Program: We
          accept cash, Cash App, Apple Pay, Venmo or Zelle. No checks or
          insurance
        </strong>
      </Paragraph>

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
  );
};

export default Questionnaire;
