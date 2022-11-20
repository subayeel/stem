import React from "react";
import aitm from "../../Images/aitm.png";

import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterTwitterIcon,
  FooterYoutubeIcon,
  Row,
  TextWrap,
  Desc,
  ImgWrap,
  FooterContainer,
  FooterWrapper,
  Links,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row justify="space-between">
          <div className="m-4">
            <Links to="/">Contact us </Links>
            <Links>|</Links> <Links to="/">Forum</Links>
          </div>
          <div className="m-4">
            <FooterFacebookIcon />
            <FooterInstagramIcon />
            <FooterTwitterIcon />
            <FooterYoutubeIcon />
          </div>
        </Row>
        <TextWrap>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
            accusamus illo ea earum distinctio sint ullam illum harum porro
            perferendis!
          </Desc>
        </TextWrap>
        <h4>Organised by:</h4>
        <ImgWrap>
          <img height="80px" src={aitm} />
        </ImgWrap>
        <TextWrap>
          <Desc>
            Anjuman Institute of Technology and Management, <br></br>Bhatkal -
            581320
          </Desc>
        </TextWrap>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
