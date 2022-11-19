import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import bg from '../Images/hero-bg.png'

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
  flex-direction: ${(props)=>props.direction};
`;

export const MainContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const MainWrapper = styled(CenterFlexContainer)`
  min-height: 100vh;
  flex-direction:${(props)=>props.direction}
`;

export const Section = styled.section`
position:relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100vw;
  background-image: url(bg);

  @media screen and (max-width: 768px) {
    min-height: 80vh;
  }
`;
