import React from "react";
import { ListContainer, Title, Dots } from "./Navbar.elements";
import { useNavigate } from "react-router-dom";

const ListItem = ({ clickRoute, title, isActive }) => {
  const navigate = useNavigate();
  return (
    <>
      <ListContainer
        onClick={() => {
          navigate(clickRoute);
        }}
      >
        <Title isActive={isActive}>{title}</Title>
        <Dots>...</Dots>
      </ListContainer>
    </>
  );
};

export default ListItem;
