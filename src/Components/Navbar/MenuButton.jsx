import React from "react";
import styled from "styled-components";
import { FaClipboardList, FaTimes } from "react-icons/fa";

import { CenterFlexContainer } from "../Global";

export const MenuButtonContainer = styled(CenterFlexContainer)`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 2;
  width: 60px;
  height: 60px;
  background-color: #ce7d1e;
  border-radius: 50px;
`;

export const MenuIcon = styled(FaClipboardList)`
  color: #fff;
  height: 40px;
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
  height: 40px;
`;
const MenuButton = ({ isOpen, toggle }) => {
  return (
    <MenuButtonContainer onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </MenuButtonContainer>
  );
};

export default MenuButton;
