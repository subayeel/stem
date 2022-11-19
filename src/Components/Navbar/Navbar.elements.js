import styled from "styled-components";
import { CenterFlexContainer } from "../Global";
import { FaAngleRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  margin: 0 auto;
  background-color: rgba(14,14,14,0.8);
  position:fixed;
  width: 100%;
  transition: top 0.3s; 
  top:0;z-index: 999;
`;
export const NavbarWrapper = styled(CenterFlexContainer)`
  max-width: 1140px;
  
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 56px;
  padding: 0 15px;
  @media screen and (max-width:768px){
    margin: 0;
  }
`;

export const LogoContainer = styled(CenterFlexContainer)`
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
export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
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
