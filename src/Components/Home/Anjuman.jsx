import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Section, MainContainer, RouteButton } from "../Global";
import { Carousel } from "react-bootstrap";
import Events from "./Events";

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
  Content,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
} from "./Home.elements";

const Anjuman = () => {
  let titleRef = useRef(null);
  let iconRef = useRef(null);
  let descRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(iconRef, { x: 1000, duration: 5 }, { x: 0, duration: 5 });
  }, []);

  function createFacilityCard(props) {
    function getIcon(iconName) {
      if (iconName == "book") {
        return <BooksIcon />;
      } else if (iconName == "sports") {
        return <SportsIcon />;
      } else if (iconName == "teach") {
        return <TeacherIcon />;
      } else if (iconName == "edu") {
        return <EduIcon />;
      }
    }
    return (
      <Card id={props.key}>
        <IconContainer
          ref={(el) => {
            iconRef = el;
          }}
        >
          {getIcon(props.icon)}
        </IconContainer>
        <Title
          ref={(el) => {
            titleRef = el;
          }}
        >
          {props.title}
        </Title>
        <Desc
          ref={(el) => {
            descRef = el;
          }}
          style={{ maxWidth: "400px" }}
        >
          {props.desc}
        </Desc>
      </Card>
    );
  }

  return (
    <>
      <Events />

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
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.aitm.edu.in/wp-content/uploads/2019/07/career-guidance-pu.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.aitm.edu.in/wp-content/uploads/2019/07/career-guidance-pu.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.aitm.edu.in/wp-content/uploads/2019/07/career-guidance-pu.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
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
