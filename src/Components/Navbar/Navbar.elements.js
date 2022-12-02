import styled from "styled-components";
import { CenterFlexContainer } from "../Global";
import { FaAngleRight, FaBars, FaHome, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin: 0 auto;
  background-color: rgb(15, 17, 40);
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
    margin: 0 7px;
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
    padding: 5px;
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

  @media screen and (max-width: 768px) {
    
    justify-content: space-around;
  }
`;

export const Title = styled.a`
  text-decoration: none;
  color: ${(props) => (props.isActive === "active" ? "#DE8721" : "#fff")};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Dots = styled.p`
  color: #aaa;
  margin: 0;
  line-height: 4px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

//avatar
export const AvatarContainer = styled(CenterFlexContainer)`
  margin: 20px 0;

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
  width: 70px;

  display: none;
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    font-size: 25px;
    cursor: pointer;
    width: 36px;
    margin-right: 30px;
  }
`;

export const BarsIcon = styled(FaBars)`
  color: white;
  &:hover {
    color: #ccc;
  }
`;

export const HomeIcon = styled(FaHome)`
  color: ${(props) => (props.ishome ? "#CE7B1F" : "#fff")};
  height: 36px;

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
  top: 80px;
  width: 240px;
  z-index: 12;

  /* margin-left: ${(props) => props.lmargin}; */
  background-color: #0f1128;

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
  height: 80px;
  width: 80px;
  cursor: pointer;
  font-weight: ${(props) => props.state};

  &:hover {
    color: #ccc;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    height: 80px;
    width: 36px;
  }
`;

export const DropdownItem = styled(Link)`
  width: 100%;
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  padding: 5px 7px;
  background-color: rgba(14, 14, 14, 0.2);
  color: #eee;
  &:hover {
    cursor: pointer;
    background-color: #cc5e2f;
    color: #eee;

    > a {
      color: #c57d1b;
    }
  }
`;

export const Logo = styled.img`
  height: 36px;
  @media screen and (max-width: 768px) {
    height: 24px;
  }
`;
