import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import Section7 from './Section7';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Section6 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 


    const data = [
      {
        image: "./images/bubble-chat 1.png",
        heading: "BFSI",
        para: "Make online finance easy with AI and 150+ pre-built journeys that automate routine customer interactions",
      },
      {
        image: "./images/bubble-chat 1-1.png",
        heading: "Retail",
        para: "Deliver expert guidance anytime, anywhere, and sell more with a personalised shopping experience",
      },
      {
        image: "./images/bubble-chat 2.png",
        heading: "Food & Beverage",
        para: "Receive orders and payments directly, manage home delivery and marketing",
      },
      {
        image: "./images/bubble-chat 1-2.png",
        heading: "Education",
        para: "Enhance student experience from onboarding to learning with AI chatbots and voice bots",
      },
      {
        image: "./images/bubble-chat 1-3.png",
        heading: "Healthcare",
        para: "Transform patient-doctor engagement with chatbots on messaging channels",
      },
      {
        image: "./images/bubble-chat 2-1.png",
        heading: "Travel",
        para: "Improve booking, travel and guest experience with chatbots on messaging channels",
      },
    ];

     gsap.registerPlugin(useGSAP);
     gsap.registerPlugin(ScrollTrigger);

     useGSAP(() => {
       gsap.from(".section6-box", {
         x: -200,
         duration: 0.4,
         opacity: 0,
         stagger: 0.05,
         ease: "power2.out",
         scrollTrigger: {
           trigger: ".section6-box",
           start: "top 70%",
           end: "bottom 0%",
           toggleActions: "play none none reverse",
         },
       });
     });

    
  return (
    <div className=" relative    min-h-fit   w-full max-sm:h-fit">
      <div
        id="section6"
        className="w-screen  pt-[10vh] max-sm:pt-[5vh] z-[9] min-h-fit  max-sm:h-fit  rounded-b-[55px]  "
      >
        <h1 className="text-3xl font-['Epilogue']  max-md:text-2xl px-[5vw]  text-center font-bold mb-2">
          <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
            Conversational automation for every industry
          </span>
        </h1>
        <h2 className="text-center text-base max-sm:text-base  px-[5vw] mb-10">
          We understand your business and can make every customer touchpoint{" "}
          <br />
          conversational across marketing, commerce, and support
        </h2>
        <div className=" w-screen h-fit  grid grid-cols-3  px-[10vw] max-md:px-[5vw] max-lg:justify-items-center  gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {data.map((item) => (
            <div
              key={item.heading}
              className="section6-box w-[25vw]  h-[290px] max-sm:h-fit max-sm:w-[100%]  rounded-2xl"
            >
              <div className="w-full h-[100px]  p-2 flex  items-end max-sm:justify-center">
                <img className="w-[72]" src={`${item.image}`} alt="" />
              </div>
              <div className="w-full h-[190px] max-sm:h-fit relative px-2">
                <h1 className="font-bold min-h-[50px]  max-sm:min-h-[40px] max-sm:text-center  text-2xl  ">
                  {item.heading}
                </h1>
                <p className="text-base   max-sm:text-base mb-2 max-md:w-[30vw]  max-sm:text-center max-sm:w-full">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section6