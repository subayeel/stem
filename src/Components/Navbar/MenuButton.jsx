import React from "react";
import styled from "styled-components";
import { FaClipboardList, FaTimes } from "react-icons/fa";

import { CenterFlexContainer } from "../Global";



export const MenuButtonContainer = styled(CenterFlexContainer)`
  display: none;
  position: absolute;
  bottom: 32px;
  right: 32px;
  z-index: 2;
  width: 60px;
  height: 60px;
  background-color: #ce7d1e;
  border-radius: 50px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MenuIcon = styled(FaClipboardList)`
  color: #fff;
  height: 40px;
  margin: auto;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
  height: 40px;
  margin: auto;
`;
const MenuButton = ({ isOpen, toggle }) => {
  return (
    <MenuButtonContainer onClick={toggle}>
     {isOpen ? <CloseIcon /> : <MenuIcon />}
    </MenuButtonContainer>
  );
};

export default MenuButton;
