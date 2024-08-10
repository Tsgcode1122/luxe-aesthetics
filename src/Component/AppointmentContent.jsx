import React, { useState } from "react";
import styled from "styled-components";
import { Skeleton } from "antd"; // Import the Skeleton component from Ant Design

const AppointmentContent = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {/* <Content>
        Book your personalized weight loss appointment with our expert team.
        We're here to provide the best care and tailored treatments to help you
        achieve your wellness goals. Let's get started!
      </Content> */}
      <Container>
        {loading && (
          <SkeletonContainer>
            <Skeleton active paragraph={{ rows: 10 }} /> {/* Skeleton effect */}
          </SkeletonContainer>
        )}
        <Iframe
          src="https://gemluxeaesthetics.setmore.com/gemluxeaesthetics"
          title="Appointment Scheduling"
          frameBorder="0"
          onLoad={handleLoad} // Call handleLoad when iframe has loaded
          style={{ display: loading ? "none" : "block" }} // Hide iframe while loading
        />
      </Container>
    </>
  );
};

export default AppointmentContent;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100vh;
  border: none;
`;
