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

    useGSAP(()=>{
      gsap.to("#section6", {
        y: "-100%",
        scrollTrigger: {
          trigger: "#section6",
          //  markers: true,
          start: "10px -100px ",
          end: "-200px -400vh ",
          scrub:2,
          //  pin:true
        },
      });

    })

    
  return (
    <div className="absolute top-[20vh] py-2  h-[100vh]  w-full max-sm:h-fit">
      <div
        id="section6"
        className="w-screen absolute z-[9]  h-[100vh] max-lg:h-fit max-sm:h-fit py-[100px] rounded-b-[55px] bg-[#fcfcfc] "
      >
        <h1 className="text-3xl max-md:text-2xl  text-center font-bold mb-2">
          <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
            Conversational automation for every industry
          </span>
        </h1>
        <h2 className="text-center text-sm max-md:text-xs  mb-10">
          We understand your business and can make every customer touchpoint{" "}
          <br />
          conversational across marketing, commerce, and support
        </h2>
        <div className="w-full h-fit  grid grid-cols-3 px-[13vw]  max-lg:px-[10vw] justify-items-center gap-4 max-lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[300px] h-[250px] max-sm:w-[40vw]   rounded-2xl"
            >
              <div className="w-full h-[100px]  p-2 flex items-end">
                <img className="w-[72]" src={`${item.image}`} alt="" />
              </div>
              <div className="w-full h-[150px] relative px-2">
                <h1 className="font-bold h-[50px] whitespace-nowrap max-sm:h-[40px]  text-2xl max-sm:text-xl ">
                  {item.heading}
                </h1>
                <p className="text-sm   max-sm:text-xs mb-2 max-md:w-[30vw] max-sm:w-[40vw]">
                  {item.para}
                </p>
                <div className="flex gap-2 absolute bottom-3 items-center text-[#1871ED] text-sm   hover:text-[15px] transition-all cursor-pointer">
                  <h1 className="">Explore {item.heading}</h1>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section7 />
    </div>
  );
}

export default Section6