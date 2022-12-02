import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {  FaTimes } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`

body{
    background: #EFEFEF;
    font-family: Thedus;
    overflow-x: hidden;
    margin: 0;
    box-sizing: border-box;
}
`;

export const CenterFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${(props) => props.direction};
`;

export const MainContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const MainWrapper = styled(CenterFlexContainer)`
  min-height: 100vh;
  flex-direction: ${(props) => props.direction};
`;

export const Section = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
`;

export const OverLay = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  > img {
    height: 90vh;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    > img {
      height: 100vh;
    }
  }
`;

export const RouteButton = styled(Link)`
      padding: 12px 22px;
  width: fit-content;
  z-index: 12;
  font-family: Thedus Light;
  margin: 14px 0;
  background-color: #cd5623;
  text-decoration: none;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  border-radius: 24px;

  font-size: 22px;

  &:hover {
    background-color: #cc5e2f;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 12px 22px;
  }
`;

export const RoundedButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 12px 28px;
  margin: 14px 0;
  background-color: #cd5623;
  text-decoration: none;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  border-radius: 24px;
  line-height: 18px;
  &:hover {
    background-color: #cc5e2f;
    color: #fff;
    cursor: pointer;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
  height: 40px;
  margin: auto;
  &:hover{
    color: #cc5e2f;
    cursor: pointer;
  }
`;