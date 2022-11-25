import styled from "styled-components";
import { CenterFlexContainer } from "../Global";
import { FaAngleRight, FaBars, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin: 0 auto;
  background-color: rgb(15,17,40);
  position: fixed;
  width: 100%;
  transition: top 0.3s;
  top: 0;
  z-index: 10;
`;
export const NavbarWrapper = styled(CenterFlexContainer)`
  max-width: 1140px;

  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  /* padding: 0 15px; */
  @media screen and (max-width: 768px) {
    margin: 0 14px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const NavbarElements = styled.div`
  display: flex;
  align-items: center;

  text-decoration: none;
  list-style: none;
`;

export const NavbarItems = styled(Link)`
  text-decoration: none;
  padding: 5px 23px;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListContainer = styled(CenterFlexContainer)`
  flex-direction: column;

  &:hover {
    cursor: pointer;
    transition: 1s;
    a {
      cursor: pointer;
      color: #ce7d1e;
    }
    p {
      color: #fff;
    }
  }
`;

export const Title = styled.a`
  text-decoration: none;
  color: ${(props) => (props.isActive === "active" ? "#DE8721" : "#fff")};
`;

export const Dots = styled.p`
  color: #aaa;
  margin: 0;
  line-height: 4px;
`;

//avatar
export const AvatarContainer = styled(CenterFlexContainer)`
  margin: 20px 0;
  height: 36px;
  width:36px;
  &:hover {
    cursor: pointer;
  }
`;

export const AvatarWrapper = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const AvatarImgWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

export const AvatarImg = styled.img`
  width: 100%;
`;

//sidebar
export const MobileIcon = styled(CenterFlexContainer)`
  width: 36px;
  display: none;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
  }
`;

export const BarsIcon = styled(FaBars)`
  color: white;
  &:hover {
    color: #ccc;
  }
`;

export const HomeIcon = styled(FaHome)`
  color: ${(props) => (props.isHome ? "#CE7B1F" : "#fff")};

  &:hover {
    color: #ccc;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #1b1a55;
  width: 22px;
  height: 22px;
  position: absolute;

  :hover {
    color: black;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ProfileDropdown = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  position: absolute;
  padding-top: 7px;
  right: 0;
  top: 80px;
  width: 240px;
  z-index: 12;

  /* margin-left: ${(props) => props.lmargin}; */
  background-color: rgba(14, 14, 14, 0.8);

  @media screen and (max-width: 768px) {
    right: 0;
    top: 80px;
    width: 160px;
  }
`;

export const NavDropDown = styled.span`
  display: flex;
  justify-content: space-around;
  color: #fff;
  text-decoration: none;
  align-items: center;
  margin: 0;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: ${(props) => props.state};

  &:hover {
    color: #ccc;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const DropdownItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 5px 7px;
  background-color: rgba(14, 14, 14, 0.2);
  color: #eee;
  &:hover {
    cursor: pointer;
    background-color: rgba(14, 14, 14, 1);
    color: #eee;

    > a {
      color: #c57d1b;
    }
  }
`;
