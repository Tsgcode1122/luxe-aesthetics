import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import logo from "../Images/logo.png";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import bg from "../Images/navb.jpg";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
              <MenuLink to="/about">
                About <IoIosArrowDropright />
              </MenuLink>
            </MenuItem>
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/services">
                Services <IoIosArrowDropright />
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
            <MenuItem onClick={closeSidebar}>
              <MenuLink to="/gallery">
                Gallery
                <IoIosArrowDropright />
              </MenuLink>
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

              <ListLink to="/about">About</ListLink>

              <ListLink to="/services">Services</ListLink>

              <ListLink to="/contact">Contact Us</ListLink>

              <ListLink to="/appointment">Book Appointment</ListLink>
              <ListLink to="/gallery">Gallery</ListLink>
              <ListLink to="/policies">Policies</ListLink>
            </ul>
          </MenuList>
        </HeadSpace>
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
  @media screen and (min-width: 900px) {
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
  &:hover {
    color: #070b0d;
    background-color: #d0ad5b;
    border-color: #f7d782;
  }
`;

const NavHeight = styled.div`
  height: 3rem;
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
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const HeadSpace = styled.div`
  align-items: center;
  display: flex;
  margin: 2px 10px;
  justify-content: space-between;
  @media screen and (min-width: 700px) {
    margin: 5px 2rem;
  }
  @media screen and (min-width: 900px) {
    margin: 5px 3rem;
  }
  @media screen and (min-width: 1100px) {
    margin: 5px 4rem;
  }
  @media screen and (min-width: 1200px) {
    margin: 5px 8rem;
  }
`;

const MenuToggle = styled.div`
  margin: 0;
  cursor: pointer;
  img {
    max-width: 100%;
    height: 40px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default Navbar;
