import React from "react";
import Instahero from "./instahero";
import Instapage2 from "./Instapage2";
import Instapage3 from "./Instapage3";
import Section8 from "../Sections/Section8";
import Section9 from "../Sections/Section9";
import Instapage4 from "./Instapage4";

const Instagram = () => {
  return (
    <div className="bg-white relative overflow-hidden ">
      <Instahero />
      <Instapage2 />
      <Instapage3 />
      <Instapage4 />
      <Section8 />
      <Section9 />
    </div>
  );
};

export default Instagram;
