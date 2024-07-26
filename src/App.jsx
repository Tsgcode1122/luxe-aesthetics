// src/App.js
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

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0 !important;
    padding: 0 !important;

  background: linear-gradient(
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
  );
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
    color: white !important;
  }
  .ant-result-subtitle {
    color: white !important;
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
        <Button type="primary" onClick={handleBackHome}>
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
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "appointment", element: <Appointment /> },
      { path: "whyus", element: <WhyUs /> },
      { path: "services", element: <Services /> },

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
