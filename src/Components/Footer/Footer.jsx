import React from "react";
import aitm from "../../Images/aitm.png";

import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterLinkedInIcon,
  FooterYoutubeIcon,
  Row,
  TextWrap,
  Desc,
  ImgWrap,
  FooterContainer,
  FooterWrapper,
  Links,
  ExternalLink,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Row justify="space-between">
          <div className="m-4">
            <ExternalLink href="">Contact us </ExternalLink>
            <Links>|</Links> <ExternalLink href="">Forum</ExternalLink>
          </div>
          <div className="m-4">
            <a href="https://www.facebook.com/anjumanitm/">
              <FooterFacebookIcon />
            </a>
            <a href="https://www.instagram.com/anjumanitm/">
              <FooterInstagramIcon />
            </a>
            <a href="https://www.linkedin.com/school/anjumanitm/">
              <FooterLinkedInIcon />
            </a>
            <a href="https://www.youtube.com/c/AITMBhatkal">
              <FooterYoutubeIcon />
            </a>
          </div>
        </Row>
        <TextWrap>
          <Desc>
            STEM, Science Technology Engineering and Mathematics, is the
            prestigious event organised annually by of Anjuman Institute of
            Technology and Management, which engages the Pre-University students
            from various colleges around Bhatkal.
          </Desc>
        </TextWrap>
        <h4 style={{ color: "#CC5E2F" }}>Organised by:</h4>
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
