import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Layout from "./Component/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import WhyUs from "./Pages/WhyUs";
import { Result, Button } from "antd";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Policies from "./Pages/Policies";

import RevokeConsent from "./Form/RevokeConsent";
import Questionnaire from "./Form/Questionnaire";
import HippaConsent from "./Form/HippaConsent";
import PatientConsentForm from "./Form/PatientConsentForm";
import PatientConsent from "./Form/PatientConsent";
import ConsentForEmail from "./Form/ConsentForEmail";
import IvServices from "./Pages/IvServices";
import GeneralFaqs from "./Pages/GeneralFaqs";
import Neurotoxins from "./Pages/Neurotoxins";
import Fillers from "./Pages/Fillers";
import IvInjections from "./Pages/IvInjections";
import SpecialsPage from "./Specials/SpecialsPage";
import SemaglutideSpecialOffer from "./Specials/SemaglutideSpecialOffer";
import TirzepatideSpecial from "./Specials/TirzepatideSpecial";
import PersonalDetails from "./Pages/PersonalDetails";

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0 !important;
    padding: 0 !important;
background:white;
  /* background: linear-gradient(
    45deg,
    #d8d5ce 0%,
    #f5f2ea 10%,
    #d8d5ce 20%,
    #f5f2ea 30%,
    #f5f2ea 60%,
    #d8d5ce 70%,
    #f5f2ea 80%,
    #f5f2ea 90%,
    #d8d5ce 100%
  ); */
 font-family: "Philosopher", sans-serif !important;

    min-height: 100%;
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }
  @font-face {
    font-family: 'Bruney';
    src: url('/Bruney.otf') format('truetype');
    
  }


/* font-family: "Quincy CF", sans-serif; */




`;

const StyledResult = styled(Result)`
  .ant-result-title {
    color: black !important;
  }
  .ant-result-subtitle {
    color: black !important;
  }
`;

// Component for handling invalid paths
const InvalidPath = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <StyledResult
      status="404"
      title="404 Not Found"
      subTitle="Oops! The page you are looking for does not exist."
      extra={
        <Button
          type="primary"
          onClick={handleBackHome}
          style={{ background: "black" }}
        >
          Back Home
        </Button>
      }
    />
  );
};

// Define your routes
const routes = [
  {
    element: <Layout />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      { path: "/appointment", element: <Appointment /> },
      { path: "/whyus", element: <WhyUs /> },
      { path: "/services", element: <Services /> },
      { path: "/IvServices", element: <IvServices /> },
      { path: "/neurotoxins", element: <Neurotoxins /> },
      { path: "/filler", element: <Fillers /> },
      { path: "/ivInjections", element: <IvInjections /> },

      { path: "/policies", element: <Policies /> },
      { path: "/consentforemail", element: <ConsentForEmail /> },
      { path: "/revokeconsent", element: <RevokeConsent /> },
      { path: "/questionaire", element: <Questionnaire /> },
      { path: "/hippaconsent", element: <HippaConsent /> },
      { path: "/patientconsent", element: <PatientConsent /> },
      { path: "/patientconsentform", element: <PatientConsentForm /> },
      { path: "/bestdeal", element: <SpecialsPage /> },
      { path: "/semaglutidedeal", element: <SemaglutideSpecialOffer /> },
      { path: "/tirzepatidedeal", element: <TirzepatideSpecial /> },
      { path: "/faqs", element: <GeneralFaqs /> },
      { path: "/personal", element: <PersonalDetails /> },

      { path: "*", element: <InvalidPath /> },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);

export default App;
