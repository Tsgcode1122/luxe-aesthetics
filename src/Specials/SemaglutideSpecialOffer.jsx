import React, { useEffect } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import offerImage from "../Image2025/semab.png";
import variesImage from "../Image2025/varies.png";
import { Colors, Gradients } from "../Component/ColorComponent";
import { Link } from "react-router-dom";
const ButCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.3rem 0 0 0;
`;
const Button = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  @media screen and (min-width: 800px) {
    font-size: 1.1rem;
  }
  color: #fff;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  font-family: "Philosopher", sans-serif;

  border-radius: 30px;
  text-decoration: none;

  &:hover {
    background: #353535;
  }
  border: none;
  border-radius: 20px 5px;
  cursor: pointer;
  /* transition: background-color 0.1s ease; */
`;
const OfferSection = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #fff8f0; */
  padding: 3rem 1rem;
  border-radius: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const OfferImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin: 2rem 1rem;
  box-shadow: 2px 2px 6px rgba(225, 225, 225, 0.6);
`;

const PriceContainer = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;

const NewPrice = styled.p`
  font-size: 1.5rem;
  @media screen and (min-width: 800px) {
    font-size: 2rem;
  }
  color: black;
  span {
    font-size: 2rem;
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
    @media screen and (min-width: 800px) {
      font-size: 2.2rem;
    }
  }
  font-weight: bold;
`;

const SpecialTag = styled.p`
  color: red;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
  @media screen and (min-width: 800px) {
    font-size: 1.7rem;
  }
`;

const SectionText = styled.p`
  /* font-size: 1.1rem; */
  color: black;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 0rem auto;
  line-height: 1.6;
  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
`;

const FeaturesList = styled.ul`
  list-style: disc;
  padding: 0;
  margin-top: 1rem;
  text-align: left;
  max-width: 800px;
  color: black;
  padding-left: 1.8rem;
  @media screen and (min-width: 800px) {
    font-size: 1.1rem;
  }
  li {
    margin-bottom: 0.8rem;
    /* position: relative; */
    /* padding-left: 1.8rem; */
  }
`;

const Disclaimer = styled.p`
  font-size: 1rem;
  color: #7f7f7f;
  margin-bottom: 1rem;
  text-align: center;
`;
const Heading = styled.div`
  position: absolute;
  top: 7.7rem;
  left: 53%;
  transform: translate(-50%, -50%);
  text-align: right;
  @media screen and (min-width: 800px) {
    top: 10rem;
  }
  h2 {
    font-size: 2rem;
    color: white;
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
    /* text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6); */
    margin: 0;
    @media screen and (min-width: 800px) {
      font-size: 3rem;
    }
  }

  span {
    font-size: 1.5rem;
    color: #383838;
    display: inline-block;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  /* margin-top: 1.5rem; */
`;
const Split = styled.div`
  @media screen and (min-width: 800px) {
    display: grid;
    gap: 40px;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }
`;
const TimeBox = styled.div`
  background: white;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  text-align: center;
  min-width: 50px;
  box-shadow: 0 2px 8px rgba(166, 166, 166, 0.1);

  .time {
    font-size: 1.2rem;
    font-weight: bold;
    color: black;
    @media screen and (min-width: 800px) {
      font-size: 1.6rem;
    }
  }

  .label {
    font-size: 0.8rem;
    color: #555;
    /* margin-top: 0.2rem; */
    @media screen and (min-width: 800px) {
      font-size: 1.1rem;
    }
  }
`;

// Countdown Renderer
const CountdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <TimerContainer>
      <TimeBox>
        <div className="time">{days}</div>
        <div className="label">Days</div>
      </TimeBox>
      <TimeBox>
        <div className="time">{hours}</div>
        <div className="label">Hrs</div>
      </TimeBox>
      <TimeBox>
        <div className="time">{minutes}</div>
        <div className="label">Min</div>
      </TimeBox>
      <TimeBox>
        <div className="time">{seconds}</div>
        <div className="label">Sec</div>
      </TimeBox>
    </TimerContainer>
  );
};
const SemaglutideSpecialOffer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const countdownDate = new Date("2025-08-31T23:59:59").getTime();

  return (
    <OfferSection>
      <OfferImage src={offerImage} alt="Semaglutide Special Offer" />
      <Heading>
        <h2>SEMAGLUTIDE </h2>
        <span>GLP-1</span>
      </Heading>
      <div>
        <SectionText>
          Are you ready to embrace a healtheir, happier you? if you're feelin
          overwhelmed about starting your weight loss journey, we're here to
          support you every step of the way. Our Semaglutide package is designed
          specifically for those who want to make a change but may need a little
          extra encouragement to get started.
        </SectionText>
        <PriceContainer>
          {/* <OldPrice>Regular Price: $699</OldPrice> */}
          <span>Initial Dosage</span>
          <NewPrice>
            <span> $150 </span>
          </NewPrice>

          {/* <SpecialTag>Ends </SpecialTag> */}
          {/* <Countdown date={countdownDate} renderer={CountdownRenderer} /> */}
          <ButCont>
            <Button to="/appointment">Book Now</Button>
          </ButCont>
        </PriceContainer>
      </div>
      <Split>
        <div>
          <img src={variesImage} />
          <Disclaimer>*Results may vary.</Disclaimer>
        </div>
        {/* <SectionTitle>Unlock the Power of Semaglutide</SectionTitle>
      <SectionText>
        The revolutionary GLP-1 agonist works by enhancing insulin secretion and
        reducing appetite, making it easier for you to create a calorie deficit
        and achieve your weight loss goals.
      </SectionText> */}
        <div>
          <SectionTitle>What Makes Our Package Special?</SectionTitle>
          <FeaturesList>
            <li>
              <strong>Accelerated Results:</strong> Enhanced with a potent
              booster for faster transformation.
            </li>
            <li>
              <strong>Visible Changes:</strong> Focus on inch loss first – watch
              your body transform before your eyes!
            </li>
            <li>
              <strong>Healthy Benefits:</strong> Supports glycemic control and
              may help reduce reliance on diabetes medications.
            </li>
            <li>
              <strong>Real Results:</strong> Average weight loss of 5 – 10 lbs
              per month – imagine how amazing you'll feel.
            </li>
          </FeaturesList>
        </div>
      </Split>
    </OfferSection>
  );
};

export default SemaglutideSpecialOffer;
