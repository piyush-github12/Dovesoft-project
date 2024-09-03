import React from 'react'
import Swiperjs from '../components/Swiperjs'
import Section8 from './Section8';


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Section7 = () => {

  
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 
  useGSAP(() => {
    // gsap.to("#section7", {
    //   y: "-100%",
    //   scrollTrigger: {
    //     trigger: "#section7",
    //     //  markers: true,
    //     start: "10px -100px ",
    //     end: "-100px -600vh ",
    //     scrub: 2,
    //     //  pin:true
    //   },
    // });
  });

  return (
    <div className="min-h-fit py-[10vh] max-sm:py-[5vh] w-screen relative ">
      <div
        id="section7"
        className="w-screen relative  py-2 z-[8] min-h-fit  rounded-b-[55px]"
      >
        <h1 className="text-center text-3xl max-sm:text-2xl leading-[30px] font-bold mb-5">
          Check Out
          <span className="bg-gradient-to-r from-[#A8CCFF] max-sm:whitespace-nowrap to-[#F4F9FF] rounded-md ml-2 px-2">
          What customer is saying
          </span>{" "}
          <br />
          about us
        </h1>
        <Swiperjs />
      </div>
      {/* <Section8 /> */}
    </div>
  );
}

export default Section7