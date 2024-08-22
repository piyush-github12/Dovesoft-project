import React from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

const Section5 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 

  useGSAP(()=>{
    
    gsap.to(".textanimation", {
      scrollTrigger:{
        trigger:".section5",
        start:"top 80%"
      },
      keyframes: [
        { color: "#61a3ff", scale: "1.1", duration:2 },
        { color: "#fff", scale: "1",},
      ],
      duration:3,
      repeat: -1,
      stagger: 3,
      repeatDelay:0
    });

    gsap.to(".sec5heading", {
      scrollTrigger: {
        trigger: ".section5",
        start: "top 80%",
      },
      keyframes: [{ y: 0 }, { y: 0 }, { y: "-200%" }],
      stagger: 3,
      duration: 3,
      repeat: -1,
      repeatDelay: 0,
    });

    gsap.to(".imageani", {
      scrollTrigger: {
        trigger: ".section5",
        start: "top 80%",
      },
      keyframes: [
        { opacity: 1, x: "0", duration: 0.1 },
        { opacity: 1, x: "0" },
        { opacity: 0, x: "0", duration: 0.1 },
      ],
      stagger: 3,
      duration: 3,
      repeat: -1,
      repeatDelay: 0,
    });

  })
  return (
    <div className="section5 w-full h-[100vh]  text-white flex justify-center items-center ">
      <div className="w-[95%] h-[95%] relative rounded-[55px] bg-[#021f43] py-[100px]">
        <div className='h-full w-full absolute'>
          <div ></div>
        </div>
        <h1 className="text-center text-3xl  font-bold mb-10">
          Platform capabilities to make you a <br />{" "}
          <span className="text-[#61a3ff]">superhuman</span>
        </h1>
        <div className="flex  w-full h-[60vh] justify-center">
          <div className="max-lg:w-[30%] max-md:text-[3vw] w-[20%] h-full text-xl flex flex-col gap-10 justify-center  border-r-[1px] border-[#cce1ff5e] ">
            <h1 className=" textanimation">Live Agents</h1>
            <h1 className=" textanimation">Integrations</h1>
            <h1 className=" textanimation">Encrypted content</h1>
            <h1 className=" textanimation">Auto-short URL</h1>
            <h1 className=" textanimation">Smart Addons</h1>
            <h1 className=" textanimation">File GPT</h1>
          </div>
          <div className="max-lg:hidden w-[30%] h-full relative p-2 overflow-hidden ">
            <div className="  w-full h-[20%] absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#021f43] to-transparent"></div>
            <img
              src="./images/Liveagent.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px]"
              alt=""
            />
            <img
              src="./images/sms.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px] opacity-0"
              alt=""
            />
            <img
              src="./images/Liveagent.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px] opacity-0"
              alt=""
            />
            <img
              src="./images/Liveagent.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px] opacity-0"
              alt=""
            />
            <img
              src="./images/Liveagent.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px] opacity-0"
              alt=""
            />
            <img
              src="./images/Liveagent.png"
              className="imageani object-cover h-full absolute bottom-0 translate-x-[-100px] opacity-0"
              alt=""
            />
          </div>
          <div className="max-lg:w-[50%] w-[35%] h-[60vh] ">
            <div className="w-full h-[60vh] pl-[50px] z-10 flex flex-col justify-center gap-5">
              <div className="w-full h-[100px]  max-md:h-[150px]  overflow-hidden relative ">
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] translate-y-[200%] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] translate-y-[200%] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] translate-y-[200%] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] translate-y-[200%] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
                <h1 className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] translate-y-[200%] absolute">
                  Craft custom conversational journeys with zero code
                </h1>
              </div>
              <h1 className="max-lg:text-[2vw]">
                Empower your marketing, product and support users
                with pre-built bot templates and a visual editor to go-live on
                any channel in minutes
              </h1>
              <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
                <h1 className="text-white text-lg  font-bold whitespace-nowrap">
                  Explore Bot Studio
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5