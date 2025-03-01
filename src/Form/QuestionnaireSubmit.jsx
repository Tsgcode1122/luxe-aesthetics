import { Flex } from "antd";

import React from "react";

const QuestionnaireSubmit = ({ values }) => {
  const containerStyle = {
    background: "white",
    padding: "20px 30px",
    fontFamily: "sans-serif",
    color: "black",
  };

  const sectionTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const labelStyle = {
    fontWeight: "500",
  };

  const flexContainerStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    marginBottom: "8px",
  };

  const displayRadioValue = (value, field) => (value === field ? "✔" : "✘");

  return (
    <div style={containerStyle}>
      <p style={sectionTitleStyle}>GEM LUXE AESTHETICS</p>

      <p>
        <strong>Date: </strong>
        {values.date ? values.date.format("YYYY-MM-DD") : "N/A"}
      </p>

      <strong>How did you hear about Gem Luxe Aesthetics?</strong>

      <div
        style={{
          paddingTop: "-1px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p>Newspaper:</p>
        <p>{values.referralSource === "newspaper" ? "✔" : "✘"}</p>
        <p>Internet:</p>
        <p>{values.referralSource === "internet" ? "✔" : "✘"}</p>
        <p>Social Media:</p>
        <p>{values.referralSource === "socialMedia" ? "✔" : "✘"}</p>
        <p>Other:</p>
        <p>{values.referralSource === "other" ? "✔" : "✘"}</p>
        <p>
          Friend:
          {values.referralSource === "friend" ? "✔" : "✘"}
        </p>
      </div>

      <p>
        (if you were referred by a friend please list their names):{" "}
        {values.friendName}
      </p>

      <div>
        <p>
          <strong>Name: </strong>
          {values.name}
        </p>
      </div>

      <div>
        <p>
          {" "}
          <strong>Address:</strong> {values.address}{" "}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p>
          {" "}
          <strong>City:</strong> {values.city}
        </p>

        <p>
          <strong>State:</strong>
          {values.state}
        </p>

        <p>
          <strong>Zip Code: </strong> {values.zipCode}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p style={{ paddingRight: "30px" }}>
          <strong> Birth Date: </strong>
          {values.birthDate
            ? values.birthDate.format("YYYY-MM-DD")
            : "N/A"}{" "}
        </p>

        <p>
          <strong>Gender:</strong>{" "}
        </p>

        <p>Male:</p>
        <p>{values.gender === "male" ? "✔" : "✘"}</p>
        <p>Female:</p>
        <p>{values.gender === "female" ? "✔" : "✘"}</p>
        <p>Other:</p>
        <p>{values.gender === "other" ? "✔" : "✘"}</p>
      </div>
      <div style={{ display: "flex", gap: "40px" }}>
        <p>
          <strong>Height:</strong> {values.height} ''
        </p>
        <p>
          <strong>Weight:</strong> {values.weight} lbs.
        </p>
      </div>

      <div>
        <p>
          <strong>Home Phone Number: </strong>
          {values.homePhone}
        </p>
      </div>
      <div>
        <p>
          <strong>Cell Phone Number (Highly recommended):</strong>{" "}
          {values.cellPhone}{" "}
        </p>
      </div>
      <div>
        <p>
          <strong>E-mail Address (Mandatory):</strong> {values.email}{" "}
        </p>
      </div>
      <p style={{ paddingTop: "5px" }}>
        (For important announcements, money saving discounts, special offers)
      </p>
      <strong>Emergency Contact (Mandatory):</strong>
      <div>
        <p>
          <strong> Contact Name: </strong>
          {values.emergencyContactName}
        </p>

        <p>
          <strong>Relationship:</strong> {values.emergencyContactRelationship}
        </p>
      </div>
      <div>
        <p>
          <strong>Phone Number:</strong> {values.emergencyContactPhone}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p style={{ paddingRight: "10px" }}>
          <strong>Marital Status:</strong>{" "}
        </p>

        <p>Single</p>
        <p>{values.maritalStatus === "single" ? "✔" : "✘"}</p>
        <p>Married</p>
        <p>{values.maritalStatus === "married" ? "✔" : "✘"}</p>
        <p>Separated</p>
        <p>{values.maritalStatus === "separated" ? "✔" : "✘"}</p>
        <p>Divorced</p>
        <p>{values.maritalStatus === "divorced" ? "✔" : "✘"}</p>
        <p>Widowed</p>
        <p>{values.maritalStatus === "widowed" ? "✔" : "✘"}</p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p>
          {" "}
          <strong>Are you allergic to any medications? </strong>
        </p>
        <p>Yes:</p>
        <p>{values.allergicMedications === "yes" ? "✔" : "✘"}</p>
        <p>No:</p>
        <p>{values.allergicMedications === "no" ? "✔" : "✘"}</p>
      </div>
      <div>
        <p>
          <strong>If yes, please specify:</strong> {values.allergicDetails}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p style={{ paddingRight: "20px" }}>
          <strong>Do you smoke cigarettes? </strong>
        </p>
        <p> Yes:</p>
        <p>{values.smokeCigarettes === "yes" ? "✔" : "✘"}</p>
        <p>No:</p>
        <p>{values.smokeCigarettes === "no" ? "✔" : "✘"}</p>
      </div>
      <div>
        <p style={{ paddingRight: "20px" }}>
          <strong> If yes, how many do you smoke per day/per week: </strong>{" "}
          {values.smokeCigarettesDetails}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p style={{ paddingRight: "20px" }}>
          <strong> Do you take Aspirin or blood thinners?</strong>
        </p>
        <p>Yes:</p>
        <p>{values.aspirinBloodThinners === "yes" ? "✔" : "✘"}</p>
        <p>No:</p>
        <p>{values.aspirinBloodThinners === "no" ? "✔" : "✘"}</p>
      </div>
      <div>
        <p style={{ paddingRight: "20px" }}>
          <strong>If yes, name medication and dose: </strong>
          {values.aspirinBloodThinnersDetails}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p style={{ paddingRight: "20px" }}>
          <strong> Do you take diet medications or herbal products?</strong>
        </p>
        <p>Yes:</p>
        <p>{values.dietMedications === "yes" ? "✔" : "✘"}</p>
        <p>No:</p>
        <p>{values.dietMedications === "no" ? "✔" : "✘"}</p>
      </div>
      <div>
        <p>
          <strong>
            If yes, please specify the name of the product and how often you use
            it:
          </strong>
          {values.dietMedicationsDetails}
        </p>
      </div>
      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <p>
          <strong>
            Will you be having surgery requiring anesthesia in the next two
            weeks?
          </strong>
        </p>
        <p>
          Yes
          {values.surgery === "yes" ? "✔" : "✘"}
        </p>
        <p>
          No
          <p>{values.surgery === "no" ? "✔" : "✘"}</p>
        </p>
      </div>
      <div>
        <p>
          <strong>
            If yes, please specify the procedure being performed: it:{" "}
          </strong>
          {values.surgeryDetails}
        </p>
      </div>

      <div>
        <p>
          <strong>
            Please list all medications you are currently taking including birth
            control and over the counter medications:{" "}
          </strong>
          {values.currentMedications}
        </p>
      </div>
      <div>
        <p>
          <strong>
            Please list all past surgeries and the year in which they were
            performed:
          </strong>{" "}
          {values.pastSurgeries}
        </p>
      </div>
      <div>
        <p>
          <strong>
            Have you used any weight loss treatments in the past? If yes, when
            and what kind?:{" "}
          </strong>
          {values.weightLossTreatments}
        </p>
      </div>
      <div>
        <p>
          <strong>What is the main reason for your visit today? </strong>{" "}
          {values.mainReason}{" "}
        </p>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <p style={{ fontWeight: "500", backgroundColor: "yellow" }}>
          <strong>
            Do you have any of the following? (Please check if applicable)
          </strong>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <p>High Blood Pressure: {values.highBloodPressure ? "✔" : "✘"}</p>
          <p>Arthritis: {values.arthritis ? "✔" : "✘"}</p>
          <p>Cancer: {values.cancer ? "✔" : "✘"}</p>
          <p>Diabetes Type I: {values.diabetesType1 ? "✔" : "✘"}</p>
          <p>Diabetes Type II: {values.diabetesType2 ? "✔" : "✘"}</p>
          <p>Asthma: {values.asthma ? "✔" : "✘"}</p>
          <p>Drug/Alcohol Abuse: {values.drugAlcoholAbuse ? "✔" : "✘"}</p>
          <p>Bleeding Disorder: {values.bleedingDisorder ? "✔" : "✘"}</p>

          <p>Major Depression: {values.majorDepression ? "✔" : "✘"}</p>
          <p>
            Chronic Kidney Disease: {values.chronicKidneyDisease ? "✔" : "✘"}
          </p>
          <p>
            History or Family History of Thyroid Cancer (MTC):{" "}
            {values.historyThyroidCancer ? "✔" : "✘"}
          </p>
          <p>
            MEN Syndrome (Multiple Endocrine Neoplasia):{" "}
            {values.menSyndrome ? "✔" : "✘"}
          </p>
          <p>TB: {values.tb ? "✔" : "✘"}</p>
          <p>Blood Transfusion: {values.bloodTransfusion ? "✔" : "✘"}</p>
          <p>Hyper/Hypo Thyroid: {values.hyperHypoThyroid ? "✔" : "✘"}</p>
          <p>H.I.V. Aids: {values.hivAids ? "✔" : "✘"}</p>
          <p>Heart Disease: {values.heartDisease ? "✔" : "✘"}</p>
          <p>High Cholesterol: {values.highCholesterol ? "✔" : "✘"}</p>
          <p>
            Pregnant or Breastfeeding:{" "}
            {values.pregnantBreastfeeding ? "✔" : "✘"}
          </p>
          <p>Increased Heart Rate: {values.increasedHeartRate ? "✔" : "✘"}</p>
          <p>
            History of Pancreatitis: {values.historyPancreatitis ? "✔" : "✘"}
          </p>
          <p>
            Gastroparesis (stomach paralysis):{" "}
            {values.gastroparesis ? "✔" : "✘"}
          </p>
          <p>Hepatitis: {values.hepatitis ? "✔" : "✘"}</p>
          <>
            <p style={{ fontWeight: "500" }}>Other: if so specify</p>

            <>{values.others}</>
          </>
        </div>
      </div>

      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p>
          <strong>Are you pregnant or is there a chance of pregnancy?</strong>
        </p>
        <p>Yes: {displayRadioValue(values.pregnant, "yes")}</p>
        <p> No: {displayRadioValue(values.pregnant, "no")}</p>
      </div>

      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <p style={{ fontWeight: "500" }}>Do you breastfeed?</p>
        <p>Yes: {displayRadioValue(values.breastfeed, "yes")}</p>
        <p>No: {displayRadioValue(values.breastfeed, "no")}</p>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <p style={{ fontWeight: "500", backgroundColor: "yellow" }}>
          <strong>I am concerned about the following issues:</strong>
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <p>Weight Loss: {values.weightLoss ? "✔" : "✘"}</p>
          <p>Weight Gain: {values.weightGain ? "✔" : "✘"}</p>
          <p>Portion Control: {values.portionControl ? "✔" : "✘"}</p>
          <p>Slow Metabolism: {values.slowMetabolism ? "✔" : "✘"}</p>
          <p>Lack of Energy: {values.lackOfEnergy ? "✔" : "✘"}</p>
          <p>Acne: {values.acne ? "✔" : "✘"}</p>
          <p>Fine Lines: {values.fineLines ? "✔" : "✘"}</p>
          <p>Scarring: {values.scarring ? "✔" : "✘"}</p>
          <p>Uneven Skin Tone:{values.unevenSkinTone ? "✔" : "✘"}</p>
          <p>Excessive Sweating: {values.excessiveSweating ? "✔" : "✘"}</p>
          <p>Sun Damaged Skin: {values.sunDamagedSkin ? "✔" : "✘"}</p>
          <p>Problem Areas: {values.problemAreas ? "✔" : "✘"}</p>
          <p>Wrinkles: {values.wrinkles ? "✔" : "✘"}</p>
          <p>Cellulite: {values.cellulite ? "✔" : "✘"}</p>
          <p>Other signs of Aging: {values.otherSignsOfAging ? "✔" : "✘"}</p>
          <p style={{ display: "inline-block" }}>
            Other concerns:
            {values.otherConcerns}
          </p>
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <p style={{ fontWeight: "500", backgroundColor: "yellow" }}>
          <strong>
            Have you had any of the following in the past year? If so, please
            include the dates:
          </strong>
        </p>
        <div>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <p>
              <strong>Last Menstrual Cycle:</strong>{" "}
              {values.lastMenstrualCycle ? "✔" : "✘"}
            </p>
            <p>
              {values.dateMenstrual
                ? values.dateMenstrual.format("YYYY-MM-DD")
                : ""}
            </p>
          </div>
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <p>
              <strong>Routine Blood Work:</strong>{" "}
              {values.routineBloodWork ? "✔" : "✘"}
            </p>
            <p>
              {values.dateBlood ? values.dateBlood.format("YYYY-MM-DD") : "N/A"}
            </p>
          </div>
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <p>
              {" "}
              <strong>CBC:</strong> {values.cbc ? "✔" : "✘"}
            </p>
            <p>
              {values.dateCbc ? values.dateCbc.format("YYYY-MM-DD") : "N/A"}
            </p>
          </div>
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <p>
              <strong>Basic or Comprehensive Metabolic Panel: </strong>
              {values.basicOrComprehensiveMetabolicPanel ? "✔" : "✘"}
            </p>
            <p>
              {values.dateMetabolic
                ? values.dateMetabolic.format("YYYY-MM-DD")
                : "N/A"}
            </p>
          </div>
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <p>
              <strong>(optional)TSH:</strong> {values.optionalTsh ? "✔" : "✘"}
            </p>
            <p>
              {values.dateTsh ? values.dateTsh.format("YYYY-MM-DD") : "N/A"}
            </p>
          </div>
          <div
            style={{
              marginLeft: "30px",
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <p>
              <strong>(optional) Lipid Panel:</strong>{" "}
              {values.optionalLipidPanel ? "✔" : "✘"}
            </p>
            <p>
              {values.dateLipid ? values.dateLipid.format("YYYY-MM-DD") : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <p style={{ paddingTop: "20px" }}>
        Semaglutide and Tirzepatide patients: Blood work is required preferably
        before treatment starts or within the first 4 weeks of treatment. We
        will accept any blood work performed within the past 6 months prior to
        treatment.
      </p>

      <p style={{ textAlign: "center", padding: "20px" }}>
        <strong>
          In reference to fees for Gem Luxe Med Spa, LLC Weight Loss Program: We
          accept cash, Cash App, Apple Pay, Venmo or Zelle. No checks or
          insurance.
        </strong>
      </p>
    </div>
  );
};

export default QuestionnaireSubmit;
