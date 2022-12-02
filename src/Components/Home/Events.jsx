import React from "react";

import { events } from "../../Data/events";
import EventCard from "./EventCard";

import { EventContainer } from "./Home.elements";

const Events = () => {
  function createEventCard(props, index) {
    return (
      <EventCard
        key={props.key}
        eventId={props.eventId}
        title={props.title}
        desc={props.desc}
        imageUrl={props.imageUrl}
        route={props.route}
        eventImgUrl={props.eventImgUrl}
        eventDesc={props.eventDesc}
        eventRules={props.eventRules}
      ></EventCard>
    );
  }

  return (
    <>
      <EventContainer>{events.map(createEventCard)}</EventContainer>
    </>
  );
};

export default Events;
