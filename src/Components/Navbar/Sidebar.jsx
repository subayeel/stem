import React from "react";
import styled from "styled-components";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { CenterFlexContainer } from "../Global";
import { useAuth } from "../../Contexts/AuthContext";


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
  margin-top: 14px;
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

export const MenuList = styled(CenterFlexContainer)`
  justify-content: space-around;
  flex-direction: column;
`;

function Sidebar({ toggle, isOpen }) {
  const location = useLocation();
  
  const { logout, currentUser } = useAuth();

  return (
    <MenuContainer isOpen={isOpen}>
      <MenuWrapper>
        <ModalHeader>
          <h1>Menu</h1>
        </ModalHeader>
        <MenuList onClick={toggle}>
          <ListItem
          clickRoute="/stem"
            title="Home"
            isActive={location.pathname === "/stem" ? "active" : ""}
          ></ListItem>
          {currentUser !== null ? (
            <ListItem
              clickRoute="/stem/profile"
              title="Profile"
              isActive={location.pathname === "/stem/profile" ? "active" : ""}
            ></ListItem>
          ) : (
            <ListItem
            clickRoute="/stem/login"
              title="Login"
              isActive={location.pathname === "/stem/login" ? "active" : ""}
            ></ListItem>
          )}

          
        </MenuList>
      </MenuWrapper>
    </MenuContainer>
  );
}

export default Sidebar;
