import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import SMSswiper from "./SMSswipe.jsx"

const Section4 = () => {
  


  return (
    <div className="relative min-h-[100vh] w-screen  pt-[5vh]  max-sm:pt-[10px] ">
      <div
        id="section4"
        className="w-screen  h-fit  relative  z-[11] pb-10 bg-[#fff] rounded-b-[55px] "
      >
        <h1 className="text-3xl font-['Epilogue']  max-sm:text-2xl  max-sm:px-[10px] text-center z-10 relative  font-bold mb-[20px]">
          Platform Features
        </h1>
        <h1 className="px-[15vw] max-md:px-[5vw] text-base text-center mb-10">
          Enable SMS API service in your application. With the omnichannel
          experience that SMS gateway API provides, we ensure that your messages
          are delivered to your customers smoothly and reliably.
        </h1>
        <SMSswiper />
      </div>
      {/* <Section5 /> */}
    </div>
  );
};

export default Section4;
