import React from "react";
import Hero from "./Hero";
import One9 from "../AboutUs/One9";
import { MainContainer, MainWrapper, Section } from "../Global";
import Events from "../Events/Events";

const Home = () => {
  return (
    <>
      <Hero />

      <Events />
      <One9/>
    </>
  );
};

export default Home;
