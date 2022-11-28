import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

import { events } from "../../Data/events";
import { RouteButton } from "../Global";
import {
  EventCard,
  Title,
  Desc,
  EventContainer,
  ImgWrap,
  Img,
} from "./Home.elements";

const Events = () => {
  function handleOnMouseMove(e) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  const eCardRef = useRef();

  function createFacilityCard(props) {
    return (
      <EventCard
        onMouseMove={(e) => handleOnMouseMove(e)}
        ref={eCardRef}
        id={props.eventId}
      >
        <ImgWrap>
          <Img styled={{ height: "100px" }} src={props.imageUrl} alt="" />
        </ImgWrap>
        {/* <Title>{props.title}</Title> */}
        <Desc style={{ maxWidth: "400px" ,fontSize:"18px", fontWeight:"600" , letterSpacing:"2px"}}>{props.desc}</Desc>
        {/* <RouteButton>
          Learn More
          <FaArrowRight style={{ marginLeft: "4px" }} />
        </RouteButton> */}
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
