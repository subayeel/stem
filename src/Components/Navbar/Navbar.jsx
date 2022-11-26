import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import MenuButton from "./MenuButton";

import "./Nav.css";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarElements,
  NavbarItems,
  BarsIcon,
  CloseIcon,
  MobileIcon,
  LogoContainer,
  ProfileDropdown,
  NavDropDown,
  DropdownItem,
  HomeIcon,
  Logo,
} from "./Navbar.elements";
import Sidebar from "./Sidebar";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../Contexts/AuthContext";

import ListItem from "./ListItem";
import navlogo from "../../Images/nav-logo.png";
import { gsap } from "gsap/all";

export const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #c57d1b;
  }
`;
function Navbar({  isAdmin }) {
  const location = useLocation();
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const [profileDropdown, setProfileDropDown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  //navbar hide/show on scroll

  const navbar = useRef();

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = "0";
    } else if (prevScrollpos <= currentScrollPos && currentScrollPos >= 700) {
      navbar.current.style.top = "-80px";
    }
   
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <NavbarContainer ref={navbar}>
        <MenuButton isOpen={isOpen} toggle={toggle} />

        <NavbarWrapper>
          <MobileIcon
            onClick={() => {
              navigate("/stem");
            }}
          >
            <HomeIcon isHome={location.pathname === "/stem" ? "active" : ""} />
          </MobileIcon>
          <LogoContainer to="/stem">
            <Logo src={navlogo} alt="logo"></Logo>
          </LogoContainer>
          <NavbarElements>
            {/* <NavbarItems to="/stem">
              <ListItem
                title="Home"
                isActive={location.pathname === "/stem" ? "active" : ""}
              ></ListItem>
            </NavbarItems> */}
            {/* <NavbarItems to="/stem/events">
              <ListItem
                title="Events"
                isActive={location.pathname === "/stem/events" ? "active" : ""}
              ></ListItem>
            </NavbarItems> */}

            {currentUser !== null ? (
              <>
                <NavDropDown
                  onMouseEnter={() => setProfileDropDown(true)}
                  onMouseLeave={() => setProfileDropDown(false)}
                >
                  <Avatar imageUrl="https://www.w3schools.com/howto/img_avatar.png" />
                </NavDropDown>

                <ProfileDropdown
                  state={profileDropdown}
                  onMouseEnter={() => setProfileDropDown(true)}
                  onMouseLeave={() => setProfileDropDown(false)}
                >
                  <DropdownItem to="/stem/profile">Profile</DropdownItem>
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                </ProfileDropdown>
              </>
            ) : (
              <>
                <NavbarItems to="/stem/login">
                  <ListItem
                    title="Sign in"
                    isActive={
                      location.pathname === "/stem/login" ? "active" : ""
                    }
                  ></ListItem>
                </NavbarItems>
              </>
            )}
            {isAdmin ? (
              <>
                <NavbarItems to="/stem/login">
                  <ListItem
                    title="Admin"
                    isActive={
                      location.pathname === "stem/login" ? "active" : ""
                    }
                  ></ListItem>
                </NavbarItems>
              </>
            ) : (
              ""
            )}
          </NavbarElements>
        </NavbarWrapper>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      </NavbarContainer>
    </>
  );
}

export default Navbar;
