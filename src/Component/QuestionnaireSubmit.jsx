import React from "react";

const QuestionnaireSubmit = ({ values }) => {
  const containerStyle = {
    padding: "20px 30px",
  };

  const checkBoxGroupStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const checkBoxStyle = {
    margin: "5px 0",
  };

  const sectionTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
  };

  const labelStyle = {
    fontWeight: "500",
  };

  const inputStyle = {
    borderBottom: "1px solid #000",
    display: "inline-block",
    padding: "7px",
    marginLeft: "8px",
  };

  const smallInputStyle = {
    ...inputStyle,
    width: "20%",
  };

  const mediumInputStyle = {
    ...inputStyle,
    width: "30%",
  };

  const largeInputStyle = {
    ...inputStyle,
    width: "60%",
  };

  const fullWidthInputStyle = {
    ...inputStyle,
    width: "90%",
  };

  const flexContainerStyle = {
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    marginBottom: "8px",
  };

  const displayRadioValue = (value, field) => (value === field ? "✔" : "✘");
  const displayCheckboxValue = (values, field) =>
    values.includes(field) ? "✔" : "✘";

  return (
    <div style={containerStyle}>
      <p style={sectionTitleStyle}>GEM LUXE AESTHETICS</p>

      <div style={{ ...flexContainerStyle, marginBottom: "8px" }}>
        <p style={{ fontSize: "20px" }}>
          <div style={labelStyle}>Date: </div>
          <span style={{ ...inputStyle, width: "70%" }}>
            {values.date ? values.date.format("YYYY-MM-DD") : "N/A"}
          </span>
        </p>
      </div>
      <div style={{ paddingBottom: "5px", fontWeight: "500" }}>
        How did you hear about Gem Luxe Aesthetics?
      </div>

      <div>
        <p>
          <span style={smallInputStyle}>
            {values.referralSource === "newspaper" ? "✔" : "✘"}
          </span>
          Newspaper
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.referralSource === "internet" ? "✔" : "✘"}
          </span>
          Internet
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.referralSource === "socialMedia" ? "✔" : "✘"}
          </span>
          Social Media
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.referralSource === "other" ? "✔" : "✘"}
          </span>
          Other
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.referralSource === "friend" ? "✔" : "✘"}
          </span>
          Friend (if you were referred by a friend please list their names{" "}
          <span style={largeInputStyle}>{values.friendName}</span>)
        </p>
      </div>

      <div style={flexContainerStyle}>
        <span style={labelStyle}>Name: </span>
        <span style={{ ...inputStyle, width: "80%" }}>{values.name}</span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Address: </span>
        <span style={{ ...inputStyle, width: "80%" }}>{values.address}</span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>City: </span>
        <span style={largeInputStyle}>{values.city}</span>
      </div>

      <div style={flexContainerStyle}>
        <span style={labelStyle}>State: </span>
        <span style={mediumInputStyle}>{values.state}</span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Zip Code: </span>
        <span style={smallInputStyle}>{values.zipCode}</span>
      </div>

      <div style={flexContainerStyle}>
        <span style={labelStyle}>Birth Date: </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {" "}
          {values.birthDate ? values.birthDate.format("YYYY-MM-DD") : "N/A"}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Gender: </span>
        <p>
          <span style={smallInputStyle}>
            {values.gender === "male" ? "✔" : "✘"}
          </span>
          Male
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.gender === "female" ? "✔" : "✘"}
          </span>
          Female
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.gender === "other" ? "✔" : "✘"}
          </span>
          Other
        </p>
      </div>

      <div style={flexContainerStyle}>
        <p>
          <span style={labelStyle}>Height: </span>
          <span style={{ ...inputStyle, width: "70%" }}>{values.height}</span>
        </p>
        <p>
          <span style={labelStyle}>Weight: </span>
          <span style={largeInputStyle}>{values.weight}</span>
        </p>
      </div>

      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>Home Phone Number: </span>
        <span style={{ ...inputStyle, width: "50%" }}>{values.homePhone}</span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Cell Phone Number: </span>
        <span style={{ ...inputStyle, width: "60%" }}>{values.cellPhone}</span>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>E-mail Address (Mandatory): </span>
        <span style={fullWidthInputStyle}>{values.email}</span>
      </div>
      <p style={{ paddingTop: "5px" }}>
        (For important announcements, money saving discounts, special offers)
      </p>
      <strong>Emergency Contact (Mandatory):</strong>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Contact Name: </span>
        <span style={largeInputStyle}>{values.emergencyContactName}</span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Relationship: </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.emergencyContactRelationship}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Phone Number: </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.emergencyContactPhone}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Marital Status: </span>
        <p>
          <span style={smallInputStyle}>
            {values.maritalStatus === "single" ? "✔" : "✘"}
          </span>
          Single
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.maritalStatus === "married" ? "✔" : "✘"}
          </span>
          Married
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.maritalStatus === "separated" ? "✔" : "✘"}
          </span>
          Separated
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.maritalStatus === "divorced" ? "✔" : "✘"}
          </span>
          Divorced
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.maritalStatus === "widowed" ? "✔" : "✘"}
          </span>
          Widowed
        </p>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Are you allergic to any medications?</span>
        <p>
          <span style={smallInputStyle}>
            {values.allergicMedications === "yes" ? "✔" : "✘"}
          </span>
          Yes
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.allergicMedications === "no" ? "✔" : "✘"}
          </span>
          No
        </p>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>If yes, please specify </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.allergicDetails}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Do you smoke cigarettes? </span>
        <p>
          <span style={smallInputStyle}>
            {values.smokeCigarettes === "yes" ? "✔" : "✘"}
          </span>
          Yes
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.smokeCigarettes === "no" ? "✔" : "✘"}
          </span>
          No
        </p>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>
          If yes, how many do you smoke per day/per week:
        </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.smokeCigarettesDetails}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>Do you take Aspirin or blood thinners?</span>
        <p>
          <span style={smallInputStyle}>
            {values.aspirinBloodThinners === "yes" ? "✔" : "✘"}
          </span>
          Yes
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.aspirinBloodThinners === "no" ? "✔" : "✘"}
          </span>
          No
        </p>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>If yes, name medication and dose:</span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.aspirinBloodThinnersDetails}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          Do you take diet medications or herbal products?
        </span>
        <p>
          <span style={smallInputStyle}>
            {values.dietMedications === "yes" ? "✔" : "✘"}
          </span>
          Yes
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.dietMedications === "no" ? "✔" : "✘"}
          </span>
          No
        </p>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>
          If yes, please specify the name of the product and how often you use
          it:
        </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.dietMedicationsDetails}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          Will you be having surgery requiring anesthesia in the next two weeks?
        </span>
        <p>
          <span style={smallInputStyle}>
            {values.surgery === "yes" ? "✔" : "✘"}
          </span>
          Yes
        </p>
        <p>
          <span style={smallInputStyle}>
            {values.surgery === "no" ? "✔" : "✘"}
          </span>
          No
        </p>
      </div>
      <div style={{ ...flexContainerStyle, alignItems: "center" }}>
        <span style={labelStyle}>
          If yes, please specify the procedure being performed: it:
        </span>
        <span style={{ ...inputStyle, width: "70%" }}>
          {values.surgeryDetails}
        </span>
      </div>

      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          Please list all medications you are currently taking including birth
          control and over the counter medications:
        </span>
        <span style={{ ...inputStyle, width: "100%" }}>
          {values.currentMedications}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          Please list all past surgeries and the year in which they were
          performed:
        </span>
        <span style={{ ...inputStyle, width: "100%" }}>
          {values.pastSurgeries}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          Have you used any weight loss treatments in the past? If yes, when and
          what kind?
        </span>
        <span style={{ ...inputStyle, width: "100%" }}>
          {values.weightLossTreatments}
        </span>
      </div>
      <div style={flexContainerStyle}>
        <span style={labelStyle}>
          What is the main reason for your visit today?
        </span>
        <span style={{ ...inputStyle, width: "70%" }}>{values.mainReason}</span>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>
          Do you have any of the following? (Please check if applicable)
        </span>
        <div style={checkBoxGroupStyle}>
          <div style={checkBoxStyle}>
            High Blood Pressure:{" "}
            <span style={smallInputStyle}>
              {values.highBloodPressure ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Arthritis:{" "}
            <span style={smallInputStyle}>{values.arthritis ? "✔" : "✘"}</span>
          </div>
          <div style={checkBoxStyle}>
            Cancer:{" "}
            <span style={smallInputStyle}>{values.cancer ? "✔" : "✘"}</span>
          </div>
          <div style={checkBoxStyle}>
            Diabetes Type I:{" "}
            <span style={smallInputStyle}>
              {values.diabetesType1 ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Diabetes Type II:{" "}
            <span style={smallInputStyle}>
              {values.diabetesType2 ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Asthma:{" "}
            <span style={smallInputStyle}>{values.asthma ? "✔" : "✘"}</span>
          </div>
          <div style={checkBoxStyle}>
            Drug/Alcohol Abuse:{" "}
            <span style={smallInputStyle}>
              {values.drugAlcoholAbuse ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Bleeding Disorder:{" "}
            <span style={smallInputStyle}>
              {values.bleedingDisorder ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            History or Family History of Thyroid Cancer (MTC):{" "}
            <span style={smallInputStyle}>
              {values.historyThyroidCancer ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Major Depression:{" "}
            <span style={smallInputStyle}>
              {values.majorDepression ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Chronic Kidney Disease:{" "}
            <span style={smallInputStyle}>
              {values.chronicKidneyDisease ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            MEN Syndrome (Multiple Endocrine Neoplasia):{" "}
            <span style={smallInputStyle}>
              {values.menSyndrome ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            TB: <span style={smallInputStyle}>{values.tb ? "✔" : "✘"}</span>
          </div>
          <div style={checkBoxStyle}>
            Blood Transfusion:{" "}
            <span style={smallInputStyle}>
              {values.bloodTransfusion ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Hyper/Hypo Thyroid:{" "}
            <span style={smallInputStyle}>
              {values.hyperHypoThyroid ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            H.I.V. Aids:{" "}
            <span style={smallInputStyle}>{values.hivAids ? "✔" : "✘"}</span>
          </div>
          <div style={checkBoxStyle}>
            Heart Disease:{" "}
            <span style={smallInputStyle}>
              {values.heartDisease ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            High Cholesterol:{" "}
            <span style={smallInputStyle}>
              {values.highCholesterol ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Pregnant or Breastfeeding:{" "}
            <span style={smallInputStyle}>
              {values.pregnantBreastfeeding ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Increased Heart Rate:{" "}
            <span style={smallInputStyle}>
              {values.increasedHeartRate ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            History of Pancreatitis:{" "}
            <span style={smallInputStyle}>
              {values.historyPancreatitis ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Gastroparesis (stomach paralysis):{" "}
            <span style={smallInputStyle}>
              {values.gastroparesis ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Hepatitis:{" "}
            <span style={smallInputStyle}>{values.hepatitis ? "✔" : "✘"}</span>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>Other: if so specify</span>
        <div style={flexContainerStyle}>
          <span style={fullWidthInputStyle}>{values.others}</span>
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>
          Are you pregnant or is there a chance of pregnancy?
        </span>
        <div style={flexContainerStyle}>
          Yes: {displayRadioValue(values.pregnant, "yes")} No:{" "}
          {displayRadioValue(values.pregnant, "no")}
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>Do you breastfeed?</span>
        <div style={flexContainerStyle}>
          Yes: {displayRadioValue(values.breastfeed, "yes")} No:{" "}
          {displayRadioValue(values.breastfeed, "no")}
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>
          I am concerned about the following issues:
        </span>
        <div style={checkBoxGroupStyle}>
          <div style={checkBoxStyle}>
            Weight Loss:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "weightLoss" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Weight Gain:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "weightGain" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Portion Control:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "portionControl" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Slow Metabolism:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "slowMetabolism" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Lack of Energy:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "lackOfEnergy" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Acne:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "acne" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Fine Lines:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "fineLines" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Scarring:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "scarring" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Uneven Skin Tone:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "unevenSkinTone" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Excessive Sweating:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "excessiveSweating" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Sun Damaged Skin:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "sunDamagedSkin" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Problem Areas:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "problemAreas" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Wrinkles:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "wrinkles" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Cellulite:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "cellulite" ? "✔" : "✘"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Other signs of Aging:{" "}
            <span style={smallInputStyle}>
              {values.concerns === "otherSignsOfAging" ? "✔" : "✘"}
            </span>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>Other concerns:</span>
        <div style={flexContainerStyle}>
          <span style={fullWidthInputStyle}>{values.otherConcerns}</span>
        </div>
      </div>

      <div style={{ paddingTop: "5px" }}>
        <span style={{ fontWeight: "500" }}>
          Have you had any of the following in the past year? If so, please
          include the dates:
        </span>
        <div style={checkBoxGroupStyle}>
          <div style={checkBoxStyle}>
            Last Menstrual Cycle:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "lastMenstrualCycle" ? "✔" : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateMenstrual
                ? values.dateMenstrual.format("YYYY-MM-DD")
                : ""}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Routine Blood Work:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "routineBloodWork" ? "✔" : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateBlood ? values.dateBlood.format("YYYY-MM-DD") : "N/A"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            CBC:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "cbc" ? "✔" : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateCbc ? values.dateCbc.format("YYYY-MM-DD") : "N/A"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Basic or Comprehensive Metabolic Panel:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "basicOrComprehensiveMetabolicPanel"
                ? "✔"
                : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateMetabolic
                ? values.dateMetabolic.format("YYYY-MM-DD")
                : ""}
            </span>
          </div>
          <div style={checkBoxStyle}>
            (optional)TSH:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "optionalTsh" ? "✔" : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateTsh ? values.dateTsh.format("YYYY-MM-DD") : "N/A"}
            </span>
          </div>
          <div style={checkBoxStyle}>
            Lipid Panel:{" "}
            <span style={smallInputStyle}>
              {values.pastYearEvents === "optionalLipidPanel" ? "✔" : "✘"}
            </span>
            <span style={{ ...inputStyle, width: "70%" }}>
              {values.dateLipid ? values.dateLipid.format("YYYY-MM-DD") : "N/A"}
            </span>
          </div>
        </div>
      </div>

      <p>
        Semaglutide and Tirzepatide patients: Blood work is required preferably
        before treatment starts or within the first 4 weeks of treatment. We
        will accept any blood work performed within the past 6 months prior to
        treatment.
      </p>

      <p style={{ textAlign: "center" }}>
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
