import { CenterFlexContainer, MainWrapper } from "../Global";
import styled from "styled-components";
import {
  FaYoutubeSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  max-width: 100%;
  padding: 14px 0;

  background-color: #0f1128;
`;

export const FooterWrapper = styled(MainWrapper)`
  flex-direction: column;
  margin: auto;
  max-width: 1140px;

  min-height: 0;
`;

export const FooterYoutubeIcon = styled(FaYoutubeSquare)`
  height: 20px;
  margin: 0 0 0 20px;
  width: 20px;
  color: white;
  &:hover {
    cursor: pointer;
    transition: 0.25s;
    color: #cc5e2f;
  }
  @media screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;
export const FooterLinkedInIcon = styled(FaLinkedin)`
  height: 20px;
  width: 20px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;
    color: #cc5e2f;

    transition: 0.25s;
  }
  @media screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;
export const FooterInstagramIcon = styled(FaInstagramSquare)`
  height: 20px;
  width: 20px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;
    color: #cc5e2f;

    transition: 0.25s;
  }
  @media screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;
export const FooterFacebookIcon = styled(FaFacebookSquare)`
  height: 20px;
  width: 20px;
  margin: 0 0 0 20px;
  color: white;
  &:hover {
    cursor: pointer;
    color: #cc5e2f;

    transition: 0.25s;
  }

  @media screen and (max-width: 768px) {
    height: 32px;
    width: 32px;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 16px 0;
  }
`;

export const Column = styled.div`
  display: flex;
  margin: 5px 0;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export const TextWrap = styled.div`
  margin: 0 7px;
  display: flex;
`;

export const ImgWrap = styled(CenterFlexContainer)`
  height: 80px;
`;
export const Desc = styled.p`
  margin: 14px 0;
  max-width: 400px;
  line-height: 16px;
  text-align: center;
  color: #ececec;
  font-family: Thedus Light;
`;

export const Links = styled(Link)`
  color: #ececec;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: #ececec;
  text-decoration: none;
  &:hover {
    color: #cc5e2f;
  }
`;
