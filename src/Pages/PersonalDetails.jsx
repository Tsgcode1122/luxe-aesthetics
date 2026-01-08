import React, { useEffect } from "react";
import styled from "styled-components";
import imageSrc from "../Images2026/owner.jpg";

const PersonalDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Wrapper>
      <Container>
        <Card>
          <Top>
            <ImgWrap>
              <Img src={imageSrc} alt="Jennifer Hampton" />
            </ImgWrap>

            <Content>
              {/* <Title>About Us</Title> */}

              <Para>
                My name is <Accent>Jennifer Hampton</Accent>, and I am a
                Registered Nurse with 13 years of experience and a Nurse
                Practitioner for 5 years. My clinical background is diverse and
                extensive, including Medical-Surgical, Cardiac ICU, Medical ICU,
                Cardiac Cath Lab, Long-Term Care, Psychiatry, and Case
                Management.
              </Para>

              <Para>
                In August 2024, I founded Gem Luxe Aesthetics, where I proudly
                offer a range of services including weight loss management,
                Botox, dermal fillers, and IV hydration therapy. In 2026, I will
                expand services to include Facial Balancing, continuing my
                commitment to advanced, patient-centered aesthetic care.
              </Para>

              <Para>
                My journey has included both highs and lows, but I am not
                defined by what challenged me. I reflect strength, resilience,
                and purpose. I believe success is not if-it&apos;s when. And
                richness is more than money; it&apos;s faith, love, peace, and
                fulfillment.
              </Para>

              <Para>
                I am deeply grateful for every client and supporter who has
                believed in me since day one. I look forward to the future-not
                only as a leader in aesthetics, but as a legacy-builder.
                I&apos;m not just becoming a lady in this industry-I&apos;m
                becoming a legend.
              </Para>
            </Content>
          </Top>

          <Divider />

          <Note>
            <Accent>*</Accent> I will also be offering one on one mentoring
            opportunities as well .
          </Note>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default PersonalDetails;

const Wrapper = styled.section`
  background: #faf7f0;
  padding: 90px 0 70px;
`;

const Container = styled.div`
  width: min(1100px, 92%);
  margin: 0 auto;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid rgba(208, 173, 91, 0.28);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ImgWrap = styled.div`
  /* background: linear-gradient(
    135deg,
    rgba(208, 173, 91, 0.25),
    rgba(247, 215, 130, 0.12)
  ); */
  padding: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  max-height: 560px;
  object-fit: cover;
  border-radius: 16px;
`;

const Content = styled.div`
  padding: 26px;
  display: grid;
  gap: 14px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: clamp(26px, 3vw, 40px);
  color: #333333;
`;

const Para = styled.p`
  margin: 0;
  line-height: 1.5;
  color: rgba(51, 51, 51, 0.88);
  font-size: 16px;
`;

const Accent = styled.span`
  color: #9e7a2c;
  font-weight: 600;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(208, 173, 91, 0.18);
`;

const Note = styled.p`
  margin: 0;
  padding: 18px 26px 26px;
  line-height: 1.75;
  color: rgba(51, 51, 51, 0.92);
  font-size: 16px;
`;
