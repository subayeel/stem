import React, { useRef } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

import { CenterFlexContainer } from "../Global";
import { NavbarElements, NavbarItems } from "./Navbar.elements";
import ListItem from "./ListItem";
import { FaTimes } from "react-icons/fa";

export const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  top: ${(props) => (props.isOpen ? "80px" : "-280px")};
  
  height: 200px;
  z-index: 10;
  background-color: rgba(14, 14, 14, 0.8);
  transition: top 0.3s;
`;

export const MenuWrapper = styled(CenterFlexContainer)`
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  padding: 0 7px;
  margin: 0;
  color: #fff;
`;

export const IconContainer = styled(CenterFlexContainer)`
  width: 48px;
  height: 56px;
  &:hover {
    cursor: pointer;
    color: #eee;
  }
`;

const Sidebar = ({ toggle, isOpen, menuRef }) => {
  const location = useLocation();

  return (
    <MenuContainer ref={menuRef} isOpen={isOpen}>
      <MenuWrapper>
        <ModalHeader>
          <h1>Menu</h1>
        </ModalHeader>

        <ListItem
          title="Home"
          isActive={location.pathname === "/stem" ? "active" : ""}
        ></ListItem>

        <ListItem
          title="Events"
          isActive={location.pathname === "/stem/events" ? "active" : ""}
        ></ListItem>
      </MenuWrapper>
    </MenuContainer>
  );
};

export default Sidebar;
