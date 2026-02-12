import React, { useEffect } from "react";
import styled from "styled-components";

// Sample image imports (replace with your actual image paths)
import botoxImage from "../Image2025/special1.png";
import ivImage from "../Image2025/special2.png";
import weightLossImage from "../Image2025/special3.png";
import lipFillerImage from "../Image2025/special4.png";
import { Colors, Gradients } from "../Component/ColorComponent";
import { Link } from "react-router-dom";

const SpecialsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Container>
      <Header></Header>

      <SpecialsGrid>
        <SpecialCard>
          <ImageWrapper>
            <SpecialImage src={botoxImage} alt="Botox Special" />
          </ImageWrapper>
          <SpecialTitle>BOTOX</SpecialTitle>
          <SpecialPrice>
            {" "}
            <span>$10 </span> / unit of Jeuveau
          </SpecialPrice>
          <SpecialDescription>
            <strong>Bestie Deal: </strong> Book with a friend and receive{" "}
            <span>$1.00 </span>
            off each unit of Jeuveau.
            <br />
            <strong>Special:</strong> Complimentary IV Hydration (250 mL) with a
            single purchase of 24 units of Jeuveau.
          </SpecialDescription>
          <ButCont>
            <Button to="/appointment">Book Now</Button>
          </ButCont>
        </SpecialCard>

        <SpecialCard>
          <ImageWrapper>
            <SpecialImage src={ivImage} alt="IV Hydration Special" />
          </ImageWrapper>
          <SpecialTitle>IV Hydration</SpecialTitle>
          <SpecialList>
            <li>
              250 mL:{" "}
              <span>
                {" "}
                <strong>$100</strong>
              </span>
              <RegularPrice> (regularly $125)</RegularPrice>
            </li>
            <li>
              500 mL: <strong>$125 </strong>
              <RegularPrice>(regularly $150)</RegularPrice>
            </li>
            <li>
              1000 mL: <strong>$175 </strong>
              <RegularPrice>(regularly $200)</RegularPrice>
            </li>
          </SpecialList>
          <SpecialDescription>
            Complimentary 250 mL IV Hydration with every Morpheus package.
          </SpecialDescription>
          <ButCont>
            <Button to="/appointment">Book Now</Button>
          </ButCont>
        </SpecialCard>

        <SpecialCard>
          <ImageWrapper>
            <SpecialImage src={weightLossImage} alt="Weight Loss Special" />
          </ImageWrapper>
          <SpecialTitle>Weight Loss Management</SpecialTitle>
          <SpecialList>
            <li>
              Initial dosage Semaglutide: <strong>$300</strong>
            </li>
            <li>
              Initial dosage Tirzepatide: <strong>$400</strong>
            </li>
            <li>
              Monthly Semaglutide: <strong>$300-$423</strong>
            </li>
            <li>
              Monthly Tirzepatide: <strong>$400 -$525</strong>
            </li>
          </SpecialList>
          <ButCont>
            <Button to="/appointment">Book Now</Button>
          </ButCont>
        </SpecialCard>

        <SpecialCard>
          <ImageWrapper>
            <SpecialImage src={lipFillerImage} alt="Lip Filler Special" />
          </ImageWrapper>
          <SpecialTitle>Lip Filler</SpecialTitle>
          <SpecialList>
            <li>
              1/2 Syringe: <strong>$250 </strong>
              <RegularPrice>(regularly $300)</RegularPrice>
            </li>
            <li>
              Full Syringe: <strong>$500</strong>{" "}
              <RegularPrice>(regularly $600)</RegularPrice>
            </li>
          </SpecialList>
          <ButCont>
            <Button to="/appointment">Book Now</Button>
          </ButCont>
        </SpecialCard>
      </SpecialsGrid>

      {/* <EndingNote>Offer ends 8/31/2025</EndingNote> */}
    </Container>
  );
};

export default SpecialsPage;
const RegularPrice = styled.span`
  text-decoration: line-through;
  color: #8c8c8c;
  font-weight: 500;
  margin-left: 5px;
  font-size: 0.9rem;
`;

const ButCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.8rem;
`;
const Button = styled(Link)`
  display: inline-block;
  padding: 0.7rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
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
const SpecialPrice = styled.p`
  display: flex;
  align-items: center;
  color: black;
  gap: 5px;
  margin-bottom: 0.5rem;
  margin-top: -0.2rem;
  @media screen and (max-width: 320px) {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    margin-bottom: 0.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    margin-bottom: 0.5rem;
  }
  span {
    font-size: 1.5rem;
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
  }
  p {
    font-style: italic;
  }
`;
// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #d0ad5b;
  margin-bottom: 40px;
`;

const SpecialsGrid = styled.div`
  display: grid;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SpecialCard = styled.div`
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 15px;
`;

const SpecialImage = styled.img`
  width: 100%;
  /* height: 100%; */
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s;
`;
const SpecialTitle = styled.div`
  font-size: 1.5rem;
  /* text-align: center; */
  padding: 1rem 0 1rem 0;
  margin: 0 !important;
  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  font-weight: 500;
  position: relative;
  font-family: "Philosopher", sans-serif;
  @media screen and (max-width: 320px) {
    font-size: 1.3rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.5rem;
  }
`;

const SpecialDescription = styled.p`
  font-size: 0.95rem;
  color: black;
  span {
    background: ${Gradients.goldGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 0.9;
    -webkit-text-stroke: 0.91px #8c6c28;
    font-weight: 500;
    position: relative;
    font-family: "Philosopher", sans-serif;
  }
`;

const SpecialList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 10px;
  color: black;

  li {
    margin-bottom: 5px;
  }
`;

const EndingNote = styled.div`
  margin-top: 40px;
  font-size: 1.8rem;
  font-weight: bold;

  background: ${Gradients.goldGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 0.9;
  -webkit-text-stroke: 0.91px #8c6c28;
  @media screen and (max-width: 320px) {
    font-size: 1.4rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 1.5rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 1.6rem;
  }
`;
