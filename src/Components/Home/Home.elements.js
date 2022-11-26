import styled from "styled-components";
import {
  FaSwatchbook,
  FaFootballBall,
  FaBookReader,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { CenterFlexContainer } from "../Global";
import { Link } from "react-router-dom";

export const Content = styled(CenterFlexContainer)`
  position: absolute;

  top: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

export const Heading2 = styled.h2`
  margin: 14px 0 7px 0;
`;

export const EventContainer = styled(CenterFlexContainer)`
  height: 100%;
  width: 100%;

  padding: 14px 0;
  flex-wrap: wrap;
`;

export const InfoWrapper = styled.div`
  display: flex;
  
  width:100%;
  flex-wrap:wrap;
  max-width: 1140px;
  padding: 14px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
`;

export const Column1 = styled(CenterFlexContainer)`
  flex: 45%;
  width: 100%;
  margin: 14px 28px;

  @media screen and (max-width: 768px) {
    flex: 90%;
    margin: 14px;
    
  }
`;
export const Column2 = styled.div`
  flex: 40%;
  width: 100%;

  margin: 14px 28px;
  border-radius: 12px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex: 90%;
    margin: 14px;

  }
`;

export const TextWrapper = styled.div``;

export const Desc = styled.p`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const FacilitiesContainer = styled(CenterFlexContainer)`
  height: 100%;
  padding: 14px 0;
  flex-wrap: wrap;
`;

export const Card = styled(CenterFlexContainer)`
  flex: 25%;
  height: 255px;
  max-width: 255px;
  line-height: 18px;
  margin: 14px;
  padding: 25px 14px;
  color: #fff;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in-out;

  background-color: ${(props) =>
    props.id % 2 === 0 ? "rgb(15,17,40)" : "rgb(254,97,2)"};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  @media screen and (max-width: 1140px) {
    flex: 50%;
    margin: 14px;
  }
  @media screen and (max-width: 768px) {
    flex: 100%;
    margin: 14px;
  }
`;

export const EventCard = styled(CenterFlexContainer)`
  flex: 45%;
  width: 50%;
  height: 500px;

  margin: 7px;
  padding: 25px;
  color: ${(props) => (props.id === 2 || props.id === 3 ? "#000" : "#eee")};
  background-color: ${(props) =>
    props.id === 2 || props.id === 3 ? "#fff" : "rgb(15,17,40)"};
  flex-direction: column;
  text-align: center;

  transition: 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    /* transform: scale(1.1); */
  }
  @media screen and (max-width: 1140px) {
    flex: 50%;
    margin: 7px;
    color: ${(props) => (props.id % 2 === 0 ? "#000" : "#eee")};
    background-color: ${(props) =>
      props.id % 2 === 0 ? "#fff" : "rgb(15,17,40)"};
  }
  @media screen and (max-width: 768px) {
    flex: 100%;
    height: 400px;

    margin: 7px;

    color: ${(props) => (props.id % 2 === 0 ? "#000" : "#eee")};
    background-color: ${(props) =>
      props.id % 2 === 0 ? "#fff" : "rgb(15,17,40)"};
  }
`;

export const IconContainer = styled(CenterFlexContainer)`
  color: #fff;
  height: 100px;
  width: 100px;
`;

//anjuman section

export const BooksIcon = styled(FaSwatchbook)`
  height: 36px;
  width: 36px;
`;
export const SportsIcon = styled(FaFootballBall)`
  height: 36px;
  width: 36px;
`;
export const TeacherIcon = styled(FaBookReader)`
  height: 36px;
  width: 36px;
`;
export const EduIcon = styled(FaChalkboardTeacher)`
  height: 36px;
  width: 36px;
`;

export const Title = styled.h4`
  font-weight: 700;
`;

export const ImgWrap = styled(CenterFlexContainer)`
  width: 100%;
  object-fit: contain;
`;

export const Img = styled.img`
  height: 100px;
  
  object-fit: contain;
`;

export const Logo = styled.img`
  width:100%;

  object-fit: contain;
  @media screen and (max-width: 768px) {
    height: 280px;
  }
`;
