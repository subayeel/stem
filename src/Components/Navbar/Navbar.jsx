import React, { useRef } from "react";
import Avatar from "./Avatar";

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
} from "./Navbar.elements";
import { useLocation, useNavigate } from "react-router-dom";

import ListItem from "./ListItem";

const Navbar = ({ toggle, isOpen, isAuth, imageUrl, isAdmin }) => {
  const location = useLocation();


//navbar hide/show on scroll

const navbar = useRef()

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.current.style.top = "0";
    } else {
      navbar.current.style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <NavbarContainer ref={navbar}>
        <NavbarWrapper>
          <MobileIcon onClick={toggle}>
            {isOpen ? <CloseIcon /> : <BarsIcon />}
          </MobileIcon>
          <LogoContainer>
            <img
              height="31px"
              src="http://www.soundconnection.biz/images/P/DF-103-HC-235.jpg"
              alt="logo"
            ></img>
          </LogoContainer>
          <NavbarElements>
            <NavbarItems to="/stem">
              <ListItem
                title="Home"
                isActive={location.pathname === "/stem" ? "active" : ""}
              ></ListItem>
            </NavbarItems>
            <NavbarItems to="/stem/events">
              <ListItem
                title="Events"
                isActive={location.pathname === "/stem/events" ? "active" : ""}
              ></ListItem>
            </NavbarItems>
            
            {isAuth ? (
            <Avatar imageUrl="https://www.w3schools.com/howto/img_avatar.png" />
              
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
      </NavbarContainer>
    </>
  );
};

export default Navbar;
