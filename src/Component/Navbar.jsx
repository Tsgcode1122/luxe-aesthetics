import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "../Image2025/geml.png";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import bg from "../Images/navb.jpg";
import { Colors } from "./ColorComponent";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isDropdownOpenBig, setIsDropdownOpenBig] = useState(false);
  const [isDropdownOpenBigOne, setIsDropdownOpenBigOne] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);
  const dropRef = useRef(null);
  const dropDownRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };
  const closebarOne = () => {
    setIsDropdownOpenBigOne(false);
  };
  const closebar = () => {
    setIsDropdownOpenBig(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };
  const toggleDropdownBig = () => {
    setIsDropdownOpenBig(!isDropdownOpenBig);
  };
  const toggleDropdownBigOne = () => {
    setIsDropdownOpenBigOne(!isDropdownOpenBigOne);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <>
      <StyledNavbar>
        <HeadSpace>
          <Link to="/">
            <Logo src={isSidebarOpen ? logo : logo} alt="Logo" />
          </Link>
          <div>
            <MenuToggle onClick={toggleSidebar}>
              <Hamburger
                toggled={isSidebarOpen}
                toggle={setIsSidebarOpen}
                color={isSidebarOpen ? "#000000" : "#000000"}
              />
            </MenuToggle>
          </div>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>

      <Sidebar isOpen={isSidebarOpen} ref={sidebarRef}>
        <Toggle onClick={toggleSidebar}>
          <Hamburger
            toggled={isSidebarOpen}
            toggle={setIsSidebarOpen}
            color={isSidebarOpen ? "#000000" : "#000000"}
          />
        </Toggle>
        <ul>
          <MenuItem onClick={closeSidebar}>
            <MenuLink to="/">
              Home <IoIosArrowDropright />
            </MenuLink>
          </MenuItem>

          <MenuItem onClick={toggleServiceDropdown}>
            <MenuLin>
              Services
              <IoIosArrowDropdown />
            </MenuLin>

            <DropdownMenu isOpen={isServiceDropdownOpen} ref={dropRef}>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/Services">
                  <IoIosArrowDropright />
                  Weight loss Management
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/ivInjections">
                  <IoIosArrowDropright />
                  Intramuscular Injections
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/IvServices">
                  <IoIosArrowDropright />
                  Iv Hydration Services
                </DropdownLink>
              </DropdownItem>

              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/neurotoxins">
                  <IoIosArrowDropright />
                  Neurotoxins
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/filler">
                  <IoIosArrowDropright />
                  Fillers
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </MenuItem>

          <MenuItem onClick={closeSidebar}>
            <MenuLink to="https://merakiluxespa.co">
              Meraki <IoIosArrowDropright />
            </MenuLink>
          </MenuItem>
          <MenuItem onClick={closeSidebar}>
            <MenuLink to="/contact">
              Contact Us <IoIosArrowDropright />
            </MenuLink>
          </MenuItem>
          <MenuItem onClick={closeSidebar}>
            <MenuLink to="/appointment">
              Book Appointment <IoIosArrowDropright />
            </MenuLink>
          </MenuItem>
          <MenuItem onClick={toggleDropdown}>
            <MenuLin>
              Consent Form/Questionnaires
              <IoIosArrowDropdown />
            </MenuLin>

            <DropdownMenu isOpen={isDropdownOpen} ref={dropDownRef}>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/patientconsentform">
                  <IoIosArrowDropright />
                  Patient Consent Form
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/consentforemail">
                  <IoIosArrowDropright />
                  Email Consent Form
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/revokeconsent">
                  <IoIosArrowDropright />
                  Revoke Consent Form
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/patientconsent">
                  <IoIosArrowDropright />
                  Patient Consent
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/hippaconsent">
                  <IoIosArrowDropright />
                  HIPAA Consent Form
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/questionaire">
                  <IoIosArrowDropright />
                  Questionnaire Form
                </DropdownLink>
              </DropdownItem>
              <DropdownItem onClick={closeSidebar}>
                <DropdownLink to="/faqs">
                  {" "}
                  <IoIosArrowDropright />
                  Frequently Asked Ques.
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem onClick={closeSidebar}>
            <MenuLink to="/policies">
              Policies <IoIosArrowDropright />
            </MenuLink>
          </MenuItem>
        </ul>
      </Sidebar>

      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
      <FixedNavbar>
        <HeadSpace>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <MenuList>
            <ul>
              <ListLink to="/">Home</ListLink>

              <ListLin onClick={toggleDropdownBigOne}>Services</ListLin>

              <ListLink to="https://merakiluxespa.co"> Meraki</ListLink>
              <ListLink to="/contact">Contact Us</ListLink>

              <ListLink to="/appointment">Book Appointment</ListLink>
              <ListLin onClick={toggleDropdownBig}>
                Consent Form/Questionnaires
              </ListLin>

              {/* <ListLink to="/policies">Policies</ListLink> */}
            </ul>
          </MenuList>
        </HeadSpace>
        {isDropdownOpenBigOne && (
          <DropdownsOne>
            <DropItem onClick={closebarOne}>
              <DropLink to="/Services"> Weight Loss Management</DropLink>
            </DropItem>
            <DropItem onClick={closebarOne}>
              <DropLink to="/IvServices">Iv Hydration</DropLink>
            </DropItem>
            <DropItem onClick={closebarOne}>
              <DropLink to="/ivInjections">Intramuscular Injections</DropLink>
            </DropItem>
            <DropItem onClick={closebarOne}>
              <DropLink to="/filler">Dermal Filler</DropLink>
            </DropItem>

            <DropItem onClick={closebarOne}>
              <DropLink to="/neurotoxins">Neurotoxin</DropLink>
            </DropItem>
          </DropdownsOne>
        )}
        {isDropdownOpenBig && (
          <Dropdowns>
            <DropItem onClick={closebar}>
              <DropLink to="/patientconsentform">Patient Consent Form</DropLink>
            </DropItem>
            <DropItem onClick={closebar}>
              <DropLink to="/consentforemail">Email Consent Form</DropLink>
            </DropItem>
            <DropItem onClick={closebar}>
              <DropLink to="/revokeconsent">Revoke Consent Form</DropLink>
            </DropItem>

            <DropItem onClick={closebar}>
              <DropLink to="/patientconsent">Patient Consent</DropLink>
            </DropItem>
            <DropItem onClick={closebar}>
              <DropLink to="/hippaconsent">HIPAA Consent Form</DropLink>
            </DropItem>
            <DropItem onClick={closebar}>
              <DropLink to="/questionaire">Questionnaire Form</DropLink>
            </DropItem>
            <DropItem onClick={closebar}>
              <DropLink to="/faqs">Frequently Asked Ques.</DropLink>
            </DropItem>
          </Dropdowns>
        )}
      </FixedNavbar>
    </>
  );
};

const FixedNavbar = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: rgba(255, 255, 255, 0.1) !important;
  color: white;
  backdrop-filter: blur(8px) !important;
  /* background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  ); */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 800px) {
    display: block;
  }
`;

const MenuList = styled.div`
  ul {
    display: flex;
    list-style: none;
    gap: 10px;
    text-decoration: none;
    color: white;

    @media screen and (min-width: 1100px) {
      gap: 20px;
    }
  }
`;

const ListLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: transparent;

  border-radius: 0.375rem;
  text-decoration: none;
  color: black;
  transition: all 0.3s;
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;
const ListLin = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: transparent;

  border-radius: 0.375rem;
  text-decoration: none;
  color: black;
  transition: all 0.3s;
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;

const Logo = styled.img`
  max-width: 100%;
  height: 30px !important;
  @media screen and (min-width: 1100px) {
    height: 40px !important;
  }
  @media screen and (min-width: 1200px) {
    height: 45px !important;
  }
`;

const Sidebar = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    right: 0;
    padding-top: 0.3rem;

    right: ${({ isOpen }) => (isOpen ? "0" : "-400px")};
    background: linear-gradient(
      -4deg,
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
    overflow-y: hidden;
    position: fixed;
    z-index: 999 !important;
    color: white;

    height: 100vh;
    transition: right 0.4s ease-in-out;
    width: 360px;

    font-weight: 500;
    ul {
      list-style: none;
      text-decoration: none;
      color: white;
      margin: 0;
      padding: 10px;
    }
  }
  @media screen and (max-width: 320px) {
    width: 80vw;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    width: 80vw;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    width: 80vw;
  }
`;

const MenuItem = styled.li`
  padding-bottom: 0.5rem;
`;

const MenuLin = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid #a08733;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #070b0d;
  transition: all 0.3s;
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;
const MenuLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: transparent;
  border: 1px solid #a08733;
  border-radius: 0.375rem;
  text-decoration: none;
  color: #070b0d;
  transition: all 0.3s;
  @media screen and (max-width: 320px) {
    // font-size: 13px;

    /* max-width: 100px; */
  }
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;

const DropdownsOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  background: white;
  position: absolute;
  border-radius: 0 0 10px 10px;
  border: 1px solid #f7d782;
  right: 190px;
  /* gap: 40px; */
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 0.5rem;
`;
const Dropdowns = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  background: white;
  position: absolute;
  border-radius: 0 0 10px 10px;
  border: 1px solid #f7d782;
  right: 20px;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 1rem;
`;

const DropdownMenu = styled.div`
  padding: 0 0 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "600px" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition:
    max-height 0.4s ease-in-out,
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  @media screen and (max-width: 320px) {
    padding-left: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding-left: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding-left: 0.9rem;
  }
`;

const DropItem = styled.div`
  padding-right: 10px;
`;
const DropdownItem = styled.div`
  margin-top: 0.5rem;
  @media screen and (max-width: 320px) {
    font-size: 12px;

    /* max-width: 100px; */
  }
  @media (min-width: 321px) and (max-width: 399px) {
    font-size: 14px;
    /* padding: 0.5rem 0.4rem; */
    /* min-width: 160px; */
  }
  @media (min-width: 400px) and (max-width: 499px) {
    font-size: 15px;
    min-width: 160px;
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 14px;
  margin: 0;
  padding: 0.2rem;
  background: transparent;
  /* border: 1px solid #a08733; */
  border-radius: 0.375rem;
  text-decoration: none;
  color: #070b0d;
  transition: all 0.3s;
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;
const DropLink = styled(Link)`
  display: inline-block;
  margin: 0;
  padding: 0.2rem;
  /* border: 1px solid #a08733; */
  background: transparent;
  border-radius: 5px;
  text-decoration: none;
  color: #070b0d;
  transition: all 0.3s;
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;

const Overlay = styled.div`
  @media screen and (max-width: 800px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 998;
  }
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;

  color: #ffffff;
  background: #ffffffe4 !important;
  backdrop-filter: blur(10px) !important;
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const NavHeight = styled.div`
  /* height: 3.25rem; */
  background: none !important;
`;

const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 2px 10px;
  justify-content: space-between;
  @media screen and (min-width: 700px) {
    margin: 5px 0.5rem;
  }
  @media screen and (min-width: 900px) {
    margin: 5px 1rem;
  }
  @media screen and (min-width: 1100px) {
    margin: 5px 4rem;
  }
  @media screen and (min-width: 1200px) {
    margin: 5px 4rem;
  }
`;

const MenuToggle = styled.div`
  display: block;
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
const Toggle = styled.div`
  padding: 0px;
  margin: 5px 10px;
  border-radius: 10px;
  background: ${Colors.back};
  display: flex;
  justify-self: right;
  align-self: right;
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

export default Navbar;
