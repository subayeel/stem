import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const GlobalStyle = createGlobalStyle`

body{
    background: #EFEFEF;
    font-family: Marcellus SC;
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
  overflow:hidden;

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

export const RoundedButton = styled(Link)`
  display:flex;
  justify-content: center;
  padding: 8px 28px;
  margin: 14px 0;
  background-color: #cd5623;
  text-decoration: none;
  outline: none;
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  border-radius: 24px;
  &:hover {
    background-color: #cc5e2f;
    color: #fff;
    cursor: pointer;
  }
`;
