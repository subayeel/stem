import React from "react";
import styled from "styled-components";
import { CenterFlexContainer } from "../Global";

export const StyledCard = styled(CenterFlexContainer)`
  position: relative;
  height: 250px;
  min-width: 250px  ;
  transition: 0.5s ease-in-out;
  background-color: #fff;
  margin: 14px;

  flex: 40%;

  &:hover {
    cursor: pointer;
    > div {
      opacity: 1;
    }
    > p {
      display: block;

      transform: scale(1.1);
    }
  }
`;

export const BgOverlay = styled.div`
  position: absolute;
  transition: all 0.4s ease-in-out 0s;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const HoverText = styled.p`
  display: none;
  transition: all 0.4s ease-in-out 0s;

  margin: 0;
  font-size: 22px;
  color: #fff;
  z-index: 2;
`;

const EventCard = ({}) => {
  return (
    <>
      <StyledCard>
        <BgOverlay></BgOverlay>
        <HoverText>Apple</HoverText>
      </StyledCard>
    </>
  );
};

export default EventCard;
