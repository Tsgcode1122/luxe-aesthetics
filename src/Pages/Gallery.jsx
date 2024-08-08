import React, { useEffect } from "react";
import Heading from "../Component/Heading";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
import ZoomInComponent from "../Component/ZoomInComponent";
import WorkInProgress from "../Component/WorkInProgress";
import PatientConsentForm from "../Form/PatientConsentForm";
import ConsentForEmail from "../Component/ConsentForEmail";
import RevokeConsent from "../Component/RevokeConsent";
import PatientConsent from "../Component/PatientConsent";
import Questionnaire from "../Component/Questionnaire";
import HippaConsent from "../Component/HippaConsent";
import Faqs from "../Component/Faqs";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {" "}
      {/* <PageHeading backgroundImage={backgroundImage} text="Gallery" /> */}
      {/* <WorkInProgress /> */}
      {/* <PatientConsentForm /> */}
      {/* <ConsentForEmail /> */}
      {/* <RevokeConsent /> */}
      {/* <PatientConsent /> */}
      {/* <Questionnaire /> */}
      <Faqs />
      {/* <HippaConsent /> */}
    </>
  );
};

export default Gallery;
