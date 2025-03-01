import React, { useEffect } from "react";
import AppointmentContent from "../Component/AppointmentContent";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <PageHeading backgroundImage={backgroundImage} text="Book Appointment" /> */}
      <AppointmentContent />
    </>
  );
};

export default Appointment;
