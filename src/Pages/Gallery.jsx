import React from "react";
import Heading from "../Component/Heading";
import PageHeading from "../Component/PageHeading";
import backgroundImage from "../Images/about.jpg";
import ZoomInComponent from "../Component/ZoomInComponent";
import WorkInProgress from "../Component/WorkInProgress";
const Gallery = () => {
  return (
    <>
      {" "}
      <PageHeading backgroundImage={backgroundImage} text="Gallery" />
      <WorkInProgress />
    </>
  );
};

export default Gallery;
