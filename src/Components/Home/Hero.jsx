import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { CenterFlexContainer, RouteButton } from "../Global";


import { ImgWrap } from "./Home.elements";
import herobg from "../../Images/hero-bg.png";

import { gsap } from "gsap/all";
import { useAuth } from "../../Contexts/AuthContext";

import mohtisham from "../../Images/mohtisham-logo.png";

import {
  Desc,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Logo,
  OverLay,
} from "./Home.elements";
import mainlogo from "../../Images/main-logo.png";

export const HeroContainer = styled(CenterFlexContainer)`
  position: relative;
  flex-direction: column;
  margin-top: 80px;
  padding: 80px auto 80px auto;
  color: #eee;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
  }
`;

export const SmallText = styled.small`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  color: #ccc;
`;

export const Sponsor = styled(CenterFlexContainer)`
  flex-direction: column;
  width: 100%;
`;

export const SLogo = styled.img`
  height: 180px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const SMobileLogo = styled.img`
  height: 120px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Hero = () => {
  const { currentUser } = useAuth();

  let col1 = useRef(null);
  let col2 = useRef(null);
  let fadeInRef = useRef(null);
  let btnRef = useRef(null);
  let mobileBtnRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      col1,
      {
        x: -2000,
        duration: 1,
        delay: 1,
      },
      {
        x: 0,
        duration: 1,
        delay: 1,
      }
    );

    gsap.fromTo(
      col2,
      { duration: 2, ease: "back", x: 1000, y: -450, delay: 1 },
      { duration: 2, ease: "back", x: 0, y: 0, delay: 1 }
    );
    gsap.fromTo(
      btnRef,
      { duration: 1, y: 1000, delay: 1 },
      { duration: 1, y: 0, delay: 1 }
    );
    gsap.fromTo(
      fadeInRef,
      { duration: 2, opacity: 0, delay: 2 },
      { duration: 2, opacity: 1, delay: 2 }
    );
    gsap.fromTo(
      mobileBtnRef,
      { duration: 2, opacity: 0, delay: 2 },
      { duration: 2, opacity: 1, delay: 2 }
    );
  }, []);
  return (
    <>
      <HeroContainer style={{ backgroundColor: "#0F1128" }}>
        <OverLay>
          <img style={{ objectFit: "cover" }} src={herobg} alt="" />
        </OverLay>

        <InfoWrapper>
          <Column1>
            <TextWrapper
              ref={(el) => {
                col1 = el;
              }}
            >
              <Heading>STEM - 2022</Heading>
              {/* <Heading2 style={{color:"#FFD700"}}>Prizes Worth upto 50K</Heading2> */}
              <Desc>
                STEM, Science Technology Engineering and Mathematics, is the
                prestigious event organised annually by of Anjuman Institute of
                Technology and Management, which engages the Pre-University
                students from various colleges around Bhatkal.
              </Desc>
              <SmallText>* College Id Cards are compulsory</SmallText>
            </TextWrapper>
            {currentUser ? (
              <RouteButton to="/stem/profile">My Profile</RouteButton>
            ) : (
              <RouteButton
                ref={(el) => {
                  btnRef = el;
                }}
                to="/stem/register"
              >
                Register
              </RouteButton>
            )}
            <Sponsor>
              <SLogo
                ref={(el) => {
                  fadeInRef = el;
                }}
                src={mohtisham}
              ></SLogo>
            </Sponsor>
          </Column1>
          <Column2>
            <ImgWrap
              ref={(el) => {
                col2 = el;
              }}
            >
              <Logo src={mainlogo} />
            </ImgWrap>

            <SMobileLogo
              ref={(el) => {
                mobileBtnRef = el;
              }}
              src={mohtisham}
            ></SMobileLogo>
          </Column2>
        </InfoWrapper>
      </HeroContainer>
    </>
  );
};

export default Hero;
