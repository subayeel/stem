import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import vidbg from "../../Videos/events-bg.mp4";
import mobilebg from "../../Images/bg-events.PNG"
import EventCard from "./EventCard";

import { CenterFlexContainer, Section } from "../Global";

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;

  min-height: 100%;
  min-width: 100%;
 
  /* @media screen and (max-width:768px){
    display: none;
    body{
      background:url(mobilebg)
    }
  } */
`;

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

export const EventContainer = styled.div`
  display: flex;
  max-width: 1140px;
  flex-wrap: wrap;
  padding:0 14px;
  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
    max-width: 700px;
    overflow: auto;
  }
  @media screen and (max-width: 568px) {
    flex-wrap: nowrap;
    max-width: 500px;
    overflow: auto;
  }
  @media screen and (max-width: 368px) {
    flex-wrap: nowrap;
    max-width: 250px;
    overflow: auto;
  }
`;
export const Heading2 = styled.h2`
  margin: 14px;
`;


const Events = () => {
  return (
    <>
      <Section>
        
          <VideoBg autoPlay muted loop>
            <source src={vidbg} type="video/mp4" />
          </VideoBg>
        

        <Content>
          <Heading2>Events</Heading2>
          <EventContainer>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </EventContainer>
        </Content>
      </Section>
    </>
  );
};

export default Events;
