import React from "react";
import { ListContainer, Title, Dots } from "./Navbar.elements";

const ListItem = ({title,isActive}) => {
  return (
    <>
      <ListContainer>
        <Title isActive={isActive}>{title}</Title>
        <Dots>...</Dots>
      </ListContainer>
    </>
  );
};

export default ListItem;
