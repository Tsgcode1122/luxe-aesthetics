// GlowingDivider.js
import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Divider = styled.div`
  width: 100%;
  /* max-width: 600px; */
  height: 40px; /* Increased height to fit more curves */
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0,20 C5,0 10,40 15,20 C20,0 25,40 30,20 C35,0 40,40 45,20 C50,0 55,40 60,20 C65,0 70,40 75,20 C80,0 85,40 90,20 C95,0 100,40 105,20 C110,0 115,40 120,20" stroke="%23D0AD5B" fill="transparent" stroke-width="0.3"/></svg>')
    repeat-x;
  background-size: 100% 40px;
`;

const GlowingDivider = () => {
  return (
    <DividerWrapper>
      <Divider />
    </DividerWrapper>
  );
};

export default GlowingDivider;
