import React from "react";

import { MainContainer, RouteButton } from "../Global";
import { Carousel } from "react-bootstrap";

import aitmbg from "../../Images/aitm-bg.png";

import { facilities } from "../../Data/facilities";

import {
  BooksIcon,
  SportsIcon,
  TeacherIcon,
  EduIcon,
  Card,
  IconContainer,
  Title,
  Desc,
  FacilitiesContainer,
 
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
} from "./Home.elements";

const Anjuman = () => {
  function createFacilityCard(props) {
    function getIcon(iconName) {
      if (iconName === "book") {
        return <BooksIcon />;
      } else if (iconName === "sports") {
        return <SportsIcon />;
      } else if (iconName === "teach") {
        return <TeacherIcon />;
      } else if (iconName === "edu") {
        return <EduIcon />;
      }
    }
    return (
      <Card key={props.key} id={props.key}>
        <IconContainer>{getIcon(props.icon)}</IconContainer>
        <Title>{props.title}</Title>
        <Desc style={{ maxWidth: "400px" }}>{props.desc}</Desc>
      </Card>
    );
  }

  return (
    <>
      <MainContainer
        style={{
          backgroundImage: `url(${aitmbg})`,
          backgroundPosition: "left bottom",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          fontFamily: "Roboto",
        }}
      >
        <InfoWrapper>
          <Column1>
            <TextWrapper>
              <Heading>Anjuman Institute of Technology and Management</Heading>
              <Desc>
                Anjuman Institute of Technology and Management, formerly known
                as Anjuman Engineering College, is the prestigious unit of
                Anjuman Hami-e-Muslimeen, which manages 16 institutions, and is
                recognized as one of the premier educational organizations in
                South India
              </Desc>
              <RouteButton to="/">Contact Us</RouteButton>
            </TextWrapper>
          </Column1>
          <Column2>
            <Carousel style={{ width: "100%" }}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/stem-c072c.appspot.com/o/principal.jpg?alt=media&token=4526c426-b2ef-44c3-ad80-ecbcd3b3c934"
                  alt="Principal"
                  style={{ objectFit: "cover" }}
                />
                <Carousel.Caption
                  style={{
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="principal-title">
                    <h3>Dr. Fazlur Rahman K</h3>
                    <p>
                      Principal and Head of Mechanical Engineering<br></br>
                      kfrahman@anjuman.edu.in
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/stem-c072c.appspot.com/o/placement2023.jpeg?alt=media&token=dec3c636-921e-4e9f-8633-ae3671498b97"
                  alt="Placement pic"
                />

                {/* <Carousel.Caption>
                  <h3>November 2022 - Placement</h3>
                  <p>
                    Total 8 students of AITM got placed in the month of
                    November.
                  </p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/stem-c072c.appspot.com/o/placement2.jpeg?alt=media&token=e808aac7-23bf-4a9e-a390-d775cc73724d"
                  alt="Placement November"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://firebasestorage.googleapis.com/v0/b/stem-c072c.appspot.com/o/placement3.jpeg?alt=media&token=cff62883-bbcc-40ad-886e-c15d8d5e2af1"
                  alt="Placement November"
                />
              </Carousel.Item>
            </Carousel>
          </Column2>
        </InfoWrapper>
      </MainContainer>
      <FacilitiesContainer>
        {facilities.map(createFacilityCard)}
      </FacilitiesContainer>
    </>
  );
};

export default Anjuman;
