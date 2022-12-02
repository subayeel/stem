import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CenterFlexContainer, CloseIcon } from "../Global";
import { events } from "../../Data/events";

export const ModalContainer = styled(CenterFlexContainer)`
  display: ${(props) => (props.state ? "flex" : "none")};
  transition: all 0.2s ease-in;

  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  transform: scale(1.1);
  transition: all 0.2s ease-in;
  border-radius: 10px;
  color: #eee;
  display: grid;
  gap: 1rem;
  background-color: rgba(23, 23, 23);
  grid-template-areas:
    "heading heading"
    "summary desc";

  grid-template-rows: 80px 1fr;
  grid-template-columns: 40% 1fr;

  @media screen and (max-width: 768px) {
    grid-template-rows: 80px 1fr 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "heading"
      "summary"
      "desc";
    overflow: auto;
  }
`;

export const ModalHeader = styled(CenterFlexContainer)`
  border-bottom: 1px solid #808080;
  padding: 14px 24px;
  justify-content: space-between;
  grid-area: heading;
`;

export const ModalBody = styled(CenterFlexContainer)`
  width: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
`;

export const ModalSummary = styled(CenterFlexContainer)`
  height: 100%;

  flex-direction: column;
  justify-content: start;
  align-items: start;
  grid-area: summary;
  padding: 7px 24px;

  & > p li,
  ul {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 14px;
  }
`;
export const ModalDesc = styled(CenterFlexContainer)`
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  grid-area: desc;
  padding: 7px;
  overflow: auto;
  font-family: Thedus Light;

  & > p,
  li,
  ul {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    overflow: visible;
  }
`;

export const EvenImgWrap = styled(CenterFlexContainer)`
  width: 100%;
  object-fit: cover;
  margin: 7px 0px;
`;

export const EventImg = styled.img`
  height: 220px;
  width: 100%;
`;

export const Tagline = styled.p`
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 2px;
  font-size: 18px;
  margin-top: 7px;
`;
function EventModal({ eventId, isModalOpen, closeModal }) {
  const [curEvent, setCurEvent] = useState({
    eventId: "",
    title: "",
    desc: "",

    imageUrl: "",
    route: "",
    eventImgUrl: "",

    eventDesc: "",
    eventRules: "",
    round1: [],
    round2: [],
    round3: [],
    coordinators: [],
    staffCoordinators: [],
  });

  useEffect(() => {
    const currentEvent = events.filter((newVal) => {
      return newVal.eventId === eventId;
    });
    setCurEvent(currentEvent[0]);
  }, [isModalOpen]);
  return (
    <ModalContainer key={eventId} onClick={closeModal} state={isModalOpen}>
      <ModalContent>
        <ModalHeader>
          <h1 style={{ margin: "0" }}>{curEvent.title}</h1>
          <div>
            <CloseIcon onClick={() => closeModal()} />
          </div>
        </ModalHeader>

        <ModalSummary>
          <EvenImgWrap>
            <EventImg src={curEvent.eventImgUrl} alt="Event Image" />
          </EvenImgWrap>
          <Tagline>{curEvent.desc}</Tagline>
        </ModalSummary>
        <ModalDesc>
          <h2>Event Rules</h2>
          <p>{curEvent.eventRules}</p>
          <h4>Round:1</h4>
          <ul>
            {curEvent.round1.map((rule, index) => {
              return <li key={index}>{rule}</li>;
            })}
          </ul>
          <h4>Round:2</h4>
          <ul>
            {curEvent.round2.map((rule, index) => {
              return <li key={index}>{rule}</li>;
            })}
          </ul>
          <h4>Round:3</h4>
          <ul>
            {curEvent.round3.map((rule, index) => {
              return <li key={index}>{rule}</li>;
            })}
          </ul>
          Student Coordinators
          <p>
            {curEvent.coordinators.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </p>
          Staff Coordinators
          <p>
            {curEvent.staffCoordinators.map((val, index) => {
              return <li key={index}>{val}</li>;
            })}
          </p>
        </ModalDesc>
      </ModalContent>
    </ModalContainer>
  );
}

export default EventModal;
