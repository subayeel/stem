import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import EventModal from "./EventModal";
import {
  EventCardContainer,
  Desc,
  ImgWrap,
  Img,
  CardBorder,
  CardContent,
} from "./Home.elements";
import { RouteButton } from "../Global";
function EventCard(props) {
  const [modalState, setModalState] = useState(false);

  function handleOnMouseMove(e) {
    for (const card of document.getElementsByClassName("event-card")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  }

  const eCardRef = useRef();
  function openModal() {
    setModalState(true);
  }

  function closeModal() {
    setModalState(false);
  }
  return (
    <>
      <EventModal
        key={props.eventId}
        eventId={props.eventId}
        isModalOpen={modalState}
        closeModal={closeModal}
      />

      <EventCardContainer
        onMouseMove={(e) => handleOnMouseMove(e)}
        ref={eCardRef}
        id={props.eventId}
        className="event-card"
        onClick={openModal}
      >
        <CardBorder />

        <CardContent>
          <ImgWrap>
            <Img styled={{ height: "100px" }} src={props.imageUrl} alt="" />
          </ImgWrap>
          {/* <Title>{props.title}</Title> */}
          <Desc
            style={{
              maxWidth: "400px",
              fontSize: "18px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            {props.desc}
          </Desc>
          <RouteButton>
            Learn More
            <FaArrowRight style={{ marginLeft: "4px" }} />
          </RouteButton>
        </CardContent>
      </EventCardContainer>
    </>
  );
}

export default EventCard;
