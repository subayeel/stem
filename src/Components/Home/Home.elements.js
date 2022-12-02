import styled from "styled-components";
import {
  FaSwatchbook,
  FaFootballBall,
  FaBookReader,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { CenterFlexContainer } from "../Global";


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
  position: relative;
  padding: 14px 0;
  flex-wrap: wrap;
  background-color: #eee;

  &:hover > div > div {
    opacity: 1;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "name carousel";
  width: 100%;
  flex-wrap: wrap;
  max-width: 1140px;
  padding: 14px 0;
  place-content: center;
  
  z-index: 3;
  @media screen and (max-width: 768px) {
    grid-template-areas:
      "name"
      "carousel";
    grid-template-columns: 1fr;
    overflow:hidden;
  }
`;

export const Heading = styled.h1`
  text-transform: uppercase;
`;

export const Column1 = styled(CenterFlexContainer)`
  width: 100%;
  margin: 28px 0;
  grid-area: name;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin: 7px;
  }
`;
export const Column2 = styled.div`
  width: 100%;
  grid-area: carousel;
  margin: 14px 28px;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    margin: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 14px 0 0;
`;

export const Desc = styled.p`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
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

export const EventCardContainer = styled(CenterFlexContainer)`
  flex: 45%;
  width: 50%;
  height: 500px;
  position: relative;
  border-radius: 10px;

  margin: 7px;
  color: #eee;
  background-color: rgba(26, 50, 84);
  flex-direction: column;
  text-align: center;

  transition: 0.2s ease-in-out;
  &:hover::before {
    opacity: 1;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    content: "";
    border-radius: 10px;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0px;
    opacity: 0;
    transition: opacity 500ms;
  }
  &:hover {
    cursor: pointer;
    /* transform: scale(1.1); */
  }
  @media screen and (max-width: 1140px) {
    flex: 50%;
    margin: 7px;
    color: #eee;
  }
  @media screen and (max-width: 768px) {
    flex: 100%;
    height: 400px;

    margin: 7px;

    color: #eee;
    background-color: rgb(15, 17, 40);
  }
`;

export const CardContent = styled(CenterFlexContainer)`
  height: calc(100% - 4px);
  width: calc(100% - 8px);
  flex-direction: column;
  position: relative;
  margin: 4px;
  z-index: 2;
  background-color: rgb(15, 17, 40);
  border-radius: inherit;
  pointer-events: none;
`;

export const CardBorder = styled.div`
  background: radial-gradient(
    400px circle at var(--mouse-x) var(--mouse-y),
    rgba(207, 95, 45, 1),
    transparent 40%
  );
  content: "";
  border-radius: 10px;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0px;
  opacity: 0;
  transition: opacity 500ms;

  &:hover {
    opacity: 1;
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
  width: 100%;

  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: 280px;
  }
`;
export const OverLay = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  > img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    > img {
      height: 108vh;
    }
  }
`;
