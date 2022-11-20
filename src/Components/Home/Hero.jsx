import React from "react";
import styled from "styled-components";
import { CenterFlexContainer, Section } from "../Global";
import Button from "./Button";
import bg from "../../Images/bgh.PNG";
import { useNavigate } from "react-router-dom";

export const HeroText = styled.h1`
  font-size: 56px;
  font-family: Marcellus SC;
  font-weight: 700;
  color: #fff;
`;
export const Desc = styled.p`
  margin: 0;
  font-size: 18px;
  color: #eee;
  max-width: 600px;
  text-align: center;
`;

export const ButtonContainer = styled(CenterFlexContainer)`
  margin: 14px 7px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HeroContainer = styled(CenterFlexContainer)`
  flex-direction: column;
  max-width: 1140px;
  margin-top: 80px;
`;

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <Section style={{ backgroundImage: `url(${bg})` }}>
        <HeroContainer>
          <HeroText>Stem- 2022</HeroText>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ex rem
            molestias, quidem repellat repudiandae est quasi doloremque
            assumenda sed!
          </Desc>
          <ButtonContainer>
            <Button
              link="/stem/register"
              text="Register"
            ></Button>
            <Button text="Events"></Button>
          </ButtonContainer>
        </HeroContainer>
      </Section>
    </>
  );
};

export default Hero;
