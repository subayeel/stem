import React from "react";
import Hero from "./Hero";
import Anjuman from "./Anjuman";
import MenuButton from "../Navbar/MenuButton";
import Events from "./Events";

const Home = () => {
  return (
    <>
      <Hero />
      <Events/>
      <Anjuman />
    </>
  );
};

export default Home;
