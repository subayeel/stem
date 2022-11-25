import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

import { events } from "../../Data/events";
import {RoundedButton,} from "../Global";
import {
  EventCard,
  Title,
  Desc,
  EventContainer,
  
  ImgWrap,
  Img,
} from "./Home.elements";

const Events = () => {
  let imgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(imgRef, { duration: 2, x: 100 }, { duration: 2, x: 0 });
  }, []);
  function createFacilityCard(props) {
    function getIcon(iconName) {
      if (iconName == "book") {
        return "<BooksIcon />";
      } else if (iconName == "sports") {
        return "<SportsIcon />";
      } else if (iconName == "teach") {
        return "<TeacherIcon />";
      } else if (iconName == "edu") {
        return "<EduIcon />";
      }
    }
    return (
      <EventCard id={props.eventId}>
        <ImgWrap
          ref={(el) => {
            imgRef = el;
          }}
        >
          <Img styled={{ height: "100px" }} src={props.imageUrl} alt="" />
        </ImgWrap>
        {/* <Title>{props.title}</Title> */}
        <Desc style={{ maxWidth: "400px" }}>{props.desc}</Desc>
        <RoundedButton id="">
          Learn More
          <FaArrowRight style={{ marginLeft: "4px" }} />
        </RoundedButton>
      </EventCard>
    );
  }
  return (
    <>
      <EventContainer>{events.map(createFacilityCard)}</EventContainer>
    </>
  );
};

export default Events;
