import React from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import Section6 from './Section6';

const Section5 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 

  // useGSAP(()=>{
    
  //   gsap.to(".textanimation", {
  //     scrollTrigger:{
  //       trigger:".section5",
  //       start:"top 80%"
  //     },
  //     keyframes: [
  //       { color: "#61a3ff", scale: "1.1", duration:2 },
  //       { color: "#fff", scale: "1",},
  //     ],
  //     duration:3,
  //     repeat: -1,
  //     stagger: 3,
  //     repeatDelay:0
  //   });

  //   gsap.to(".sec5heading", {
  //     scrollTrigger: {
  //       trigger: ".section5",
  //       start: "top 80%",
  //     },
  //     keyframes: [{ y: 0 }, { y: 0 }, { y: "-200%" }],
  //     stagger: 3,
  //     duration: 3,
  //     repeat: -1,
  //     repeatDelay: 0,
  //   });

  //   gsap.to(".imageani", {
  //     scrollTrigger: {
  //       trigger: ".section5",
  //       start: "top 80%",
  //     },
  //     keyframes: [
  //       { opacity: 1, x: "0", duration: 0.1 },
  //       { opacity: 1, x: "0" },
  //       { opacity: 0, x: "0", duration: 0.1 },
  //     ],
  //     stagger: 3,
  //     duration: 3,
  //     repeat: -1,
  //     repeatDelay: 0,
  //   });

  // })

  const handalclick = (e)=>{

    let rightelem = e.target.id + "para"
    let currentimage = e.target.id + "image"
    let currenttext = e.target.id 

    //  let tl = gsap.timeline()

    gsap.to(".sec5heading",{
      opacity:0,
      duration:0,
      y:"200px"
    })
    gsap.to(`#${rightelem}`,{
      opacity:1,
      y:0,
      // duration:1
    })

    gsap.to(".imageani" , {
      opacity:0,
      duration:0,
      x:"-100px"
    })
    gsap.to(`#${currentimage}` , {
      opacity:1,
      // duration:0,
      x:"0px"
    })
    gsap.to(".textanimation" , {
      color:"#fff",
      duration:0,
      scale:1
      
    })
    gsap.to(`#${currenttext}`, {
      color: "#61a3ff",
      scale:1.1
    });

    
  };

  useGSAP(()=>{

    //  gsap.to("#section5", {
    //    y: "-120%",
    //    scrollTrigger: {
    //      trigger: "#section5",
    //     //  markers: true,
    //      start: "10px -100px ",
    //      end: "-100px -600vh ",
    //      scrub:2,
    //       // pin:true
    //    },
    //  });

  })
 
  return (
    <div className=" relative py-2 w-[100vw] h-[100vh]  ">
      <div
        id="section5"
        className="section5 w-[100vw]  z-[10] h-[100vh] min-h-[700px] text-white flex justify-center items-center "
      >
        <div className="w-[95%] h-[95%] px-[8vw] relative rounded-[55px] bg-[#021f43] py-[100px] ">
          <h1 className="text-center text-3xl max-md:text-2xl font-bold mb-10">
            Platform capabilities to make you a <br />{" "}
            <span className="text-[#61a3ff]">superhuman</span>
          </h1>
          <div className="flex max-lg:flex-col  w-full h-[60vh] justify-between">
            <div className="max-md:text-[12px]   whitespace-nowrap max-lg:text-[15px] w-[25%] justify-center max-lg:w-full h-full max-lg:h-[15%]  text-xl flex flex-col max-sm:grid max-sm:grid-cols-3 max-sm:justify-items-center max-lg:flex-row gap-10 max-md:gap-5   border-r-[1px] border-[#cce1ff5e] ">
              <h1
                onClick={handalclick}
                id="h1"
                className=" textanimation cursor-pointer text-[#61a3ff]"
              >
                Live Agents
              </h1>
              <h1
                onClick={handalclick}
                id="h2"
                className=" textanimation cursor-pointer"
              >
                Integrations
              </h1>
              <h1
                onClick={handalclick}
                id="h3"
                className=" textanimation cursor-pointer"
              >
                Encrypted content
              </h1>
              <h1
                onClick={handalclick}
                id="h4"
                className=" textanimation cursor-pointer"
              >
                Auto-short URL
              </h1>
              <h1
                onClick={handalclick}
                id="h5"
                className=" textanimation cursor-pointer"
              >
                Smart Addons
              </h1>
              <h1
                onClick={handalclick}
                id="h6"
                className=" textanimation cursor-pointer"
              >
                File GPT
              </h1>
            </div>
            <div className="w-[70%]  flex max-lg:w-full max-lg:h-[85%]">
              <div className="w-[40%]  h-full  flex justify-center items-center relative p-2 overflow-hidden ">
                <div className="  w-full h-[20%] max-lg:hidden absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#021f43] to-transparent"></div>
                <img
                  id="h1image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] "
                  alt=""
                />
                <img
                  id="h2image"
                  src="./images/sms.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h3image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h4image"
                  src="./images/voice_website.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h5image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h6image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[50vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
              </div>
              <div className="w-[60%]  h-[60vh] ">
                <div className="w-full h-[60vh] pl-[50px] max-md:pl-2 z-10 flex flex-col justify-center gap-5">
                  <div className="w-full h-[100px]  max-md:h-[100px]   overflow-hidden relative ">
                    <h1
                      id="h1para"
                      className="sec5heading text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px] absolute"
                    >
                      Empower your employees to do more
                    </h1>
                    <h1
                      id="h2para"
                      className="sec5heading translate-y-[200px] opacity-0 text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px]  absolute"
                    >
                      craft custom conversational journeys with zero code
                    </h1>
                    <h1
                      id="h3para"
                      className="sec5heading translate-y-[200px] opacity-0 text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px]  absolute"
                    >
                      raft custom conversational journeys with zero code
                    </h1>
                    <h1
                      id="h4para"
                      className="sec5heading translate-y-[200px] opacity-0 text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px]  absolute"
                    >
                      Craft custom conversational journeys with zero code
                    </h1>
                    <h1
                      id="h5para"
                      className="sec5heading translate-y-[200px] opacity-0 text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px]  absolute"
                    >
                      Craft custom conversational journeys with zero code
                    </h1>
                    <h1
                      id="h6para"
                      className="sec5heading translate-y-[200px] opacity-0 text-2xl max-md:text-[5vw] max-md:leading-[5vw] h-[100px]  font-bold leading-[40px]  absolute"
                    >
                      Craft custom conversational journeys with zero code
                    </h1>
                  </div>
                  <h1 className="max-lg:text-[2vw] text-lg">
                    Empower your marketing, product and support users
                    with pre-built bot templates and a visual editor
                    to go-live on any channel in minutes
                  </h1>
                  <div className="min-w-fit w-[160px] max-sm:w-[10vw] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
                    <h1 className="text-white text-lg max-sm:text-sm font-bold whitespace-nowrap">
                      Video View
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Section6 /> */}
    </div>
  );
}

export default Section5