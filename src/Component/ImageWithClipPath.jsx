import React from "react";
import styled from "styled-components";
import exampleImage from "../Images/chopp.png";

const ImageContainer = styled.div`
  /* height: 400px; */
  overflow: hidden;
  position: relative;
`;

const ClippedImage = styled.img`
  max-width: 100%;
  height: 100%;
  /* object-fit: cover; */
`;

const ImageWithClipPath = () => (
  <ImageContainer>
    <ClippedImage src={exampleImage} alt="Clipped" />
  </ImageContainer>
);

export default ImageWithClipPath;
