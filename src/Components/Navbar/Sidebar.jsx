import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import { CenterFlexContainer } from "../Global";
import { NavbarElements, NavbarItems } from "./Navbar.elements";
import ListItem from "./ListItem";
import { FaTimes } from "react-icons/fa";

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  
  left:${(props)=>props.isOpen ?"0":"-200px"};
  height: 100vh;
  z-index: 11;
  width: 200px;
  background-color: rgba(14, 14, 14, 0.8);
  transition: left 1s;
`;

export const MenuWrapper = styled(CenterFlexContainer)`
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0 7px;
  margin: 0;
  color: #fff;
  justify-content: space-between;
`;

export const IconContainer = styled(CenterFlexContainer)`
  width: 48px;
  height: 56px;
  &:hover {
    cursor: pointer;
    color: #eee;
  }
`;

const Sidebar = ({ toggle,isOpen }) => {
  const location = useLocation();
  return (
    <MenuContainer isOpen={isOpen}>
      <MenuWrapper>
        <ModalHeader>
          <h1>Stem 2022</h1>
          <IconContainer>
            <FaTimes onClick={toggle}></FaTimes>
          </IconContainer>
        </ModalHeader>
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
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Sidebar;
