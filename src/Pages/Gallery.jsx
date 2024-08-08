import React, { useEffect } from "react";
import Heading from "../Component/Heading";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
import ZoomInComponent from "../Component/ZoomInComponent";
import WorkInProgress from "../Component/WorkInProgress";

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
