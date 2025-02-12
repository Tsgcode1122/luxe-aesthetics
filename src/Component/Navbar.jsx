import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import { IoIosArrowDropright, IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import bg from "../Images/navb.jpg";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenBig, setIsDropdownOpenBig] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  };
  const closebar = () => {
    setIsDropdownOpenBig(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdownBig = () => {
    setIsDropdownOpenBig(!isDropdownOpenBig);
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
      <StyledNavbar style={{ top: visible ? 0 : "-5rem" }}>
        <HeadSpace>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <MenuToggle onClick={toggleSidebar}>
            <Hamburger
              toggled={isSidebarOpen}
              toggle={setIsSidebarOpen}
              color="#A08733"
            />
          </MenuToggle>
        </HeadSpace>
      </StyledNavbar>
      <NavHeight></NavHeight>
      {isSidebarOpen && (
        <Sidebar
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ul>
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/">
                Home <IoIosArrowDropright />
              </MenuLink>
            </MenuItem>
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/services">
                Weight Loss Management <IoIosArrowDropright />
              </MenuLink>
            </MenuItem>
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/IvServices">
                Iv Hydration Services <IoIosArrowDropright />
              </MenuLink>
            </MenuItem>

            {/* <MenuItem onClick={toggleDropdown}>
              <MenuLin>
                Services
                <IoIosArrowDropdown />
              </MenuLin>
              {isDropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/IV-Hydration"></DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/Services">
                      Weight loss Management
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/Neurotoxins">Neurotoxins</DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/patientconsent">Fillers</DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              )}
            </MenuItem> */}

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
              {isDropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/patientconsentform">
                      Patient Consent Form
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/consentforemail">
                      Email Consent Form
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/revokeconsent">
                      Revoke Consent Form
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/patientconsent">
                      Patient Consent
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/hippaconsent">
                      HIPAA Consent Form
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/questionaire">
                      Questionnaire Form
                    </DropdownLink>
                  </DropdownItem>
                  <DropdownItem onClick={closeSidebar}>
                    <DropdownLink to="/faqs">
                      Frequently Asked Ques.
                    </DropdownLink>
                  </DropdownItem>
                </DropdownMenu>
              )}
            </MenuItem>
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/policies">
                Policies <IoIosArrowDropright />
              </MenuLink>
            </MenuItem>
          </ul>
        </Sidebar>
      )}
      {isSidebarOpen && <Overlay onClick={closeSidebar} />}
      <FixedNavbar>
        <HeadSpace>
          <Link to="/">
            <Logo src={logo} alt="Logo" />
          </Link>
          <MenuList>
            <ul>
              <ListLink to="/">Home</ListLink>

              <ListLink to="/services">Weight Lost Management</ListLink>

              <ListLink to="/IVservices">IV Hydration</ListLink>

              <ListLink to="/contact">Contact Us</ListLink>

              <ListLink to="/appointment">Book Appointment</ListLink>
              <ListLin onClick={toggleDropdownBig}>
                Consent Form/Questionnaires
              </ListLin>

              {/* <ListLink to="/policies">Policies</ListLink> */}
            </ul>
          </MenuList>
        </HeadSpace>
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
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 1100px) {
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
  color: white;
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
  color: white;
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

const Sidebar = styled(motion.div)`
  top: 3rem;
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
  border-radius: 0 0 30px 30px;
  border: 1px solid #1f1809;
  position: fixed;
  z-index: 999 !important;
  color: white;

  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  width: 100%;
  font-family: "YourFontName", sans-serif;
  font-weight: 500;
  ul {
    list-style: none;
    text-decoration: none;
    color: white;
    margin: 0;
    padding: 10px;
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

const Dropdowns = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  background: white;
  position: absolute;
  border-radius: 0 0 10px 10px;
  border: 1px solid #f7d782;
  right: 50px;
  grid-template-columns: 1fr 1fr;
  padding: 0.5rem 1rem;
`;

const DropdownMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 1rem;

  gap: 0.5rem;
  @media screen and (max-width: 320px) {
    padding-left: 0.8rem;
  }
  @media (min-width: 321px) and (max-width: 399px) {
    padding-left: 0.9rem;
  }
  @media (min-width: 400px) and (max-width: 499px) {
    padding: 0.5rem 1rem;
  }
`;

const DropItem = styled.div``;
const DropdownItem = styled.div`
  /* padding: 0.5rem 0; */
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
  display: inline-block;
  margin: 0;
  padding: 0.2rem;
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  background: linear-gradient(
    190deg,
    #1f1809 10%,
    #181501 30%,
    #1f1809 50%,
    #181501 70%,
    #2f240d 90%,
    #181501 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: top 0.3s;
  img {
    max-width: 100%;
    height: 20px;
  }
  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const NavHeight = styled.div`
  height: 3.25rem;
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

export default Navbar;
