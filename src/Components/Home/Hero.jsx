import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { CenterFlexContainer, RouteButton } from "../Global";

import { useNavigate, useLocation } from "react-router-dom";
import { ImgWrap } from "./Home.elements";
import linebg from "../../Images/lines-bg.svg";

import { gsap } from "gsap/all";
import { useAuth } from "../../Contexts/AuthContext";

import {
  Desc,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Logo,
} from "./Home.elements";
import mainlogo from "../../Images/main-logo.png";

export const HeroContainer = styled(CenterFlexContainer)`
  position: relative;
  flex-direction: column;
  margin-top: 80px;
  padding: 80px auto 80px auto;
  color: #eee;
  height: 90vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: min-content;
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

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  let col1 = useRef(null);
  let col2 = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      col1,
      {
        x: -2000,
        duration: 2,
      },
      {
        x: 0,
        duration: 2,
      }
    );

    gsap.fromTo(
      col2,
      { duration: 2, ease: "bounce", x: 1000, y: -450 },
      { duration: 2, x: 0, y: 0 }
    );
  }, [location.pathname]);
  return (
    <>
      <HeroContainer style={{ backgroundColor: "#0F1128" }}>
        {/* <OverLay>
          <img style={{ objectFit: "cover" }} src={linebg} alt="" />
        </OverLay> */}

        <InfoWrapper>
          <Column1
            ref={(el) => {
              col1 = el;
            }}
          >
            <TextWrapper>
              <Heading>STEM - 2022</Heading>
              <Desc>
                STEM 2022, formerly known as Anjuman Engineering College, is the
                prestigious unit of Anjuman Hami-e-Muslimeen, which manages 16
                institutions, and is recognized as one of the premier
                educational organizations in South India
              </Desc>

              {currentUser ? (
                <RouteButton to="/stem/profile">My Profile</RouteButton>
              ) : (
                <RouteButton to="/stem/register">Register</RouteButton>
              )}
            </TextWrapper>
          </Column1>
          <Column2
            ref={(el) => {
              col2 = el;
            }}
          >
            <ImgWrap>
              <Logo src={mainlogo} />
            </ImgWrap>
          </Column2>
        </InfoWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
