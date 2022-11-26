import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { CenterFlexContainer } from "../Global";

import ListItem from "./ListItem";

export const MenuContainer = styled.div`
  width: 100vw;
  position: absolute;
  top: ${(props) => (props.isOpen ? "80px" : "-280px")};
  overflow: hidden;
  height: 200px;
  z-index: 10;
  background-color: rgba(14, 14, 14, 0.8);
  transition: all 0.5s cubic-bezier(0.6, 0.04, 0.24, 0.68);
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

function Sidebar({ toggle, isOpen }) {
  const location = useLocation();

  return (
    <MenuContainer isOpen={isOpen}>
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
}

export default Sidebar;
