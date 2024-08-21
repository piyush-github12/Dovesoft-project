import React, { useRef } from 'react'

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Section1 = () => {

  gsap.registerPlugin(useGSAP);
  

  useGSAP(
    () => {
      gsap.to("#maincircle", { keyframes: [
        { rotation: -45,  duration: 1 , delay:1 },
        { rotation: -117, duration: 1 , delay:1 },
        { rotation: -189, duration: 1 , delay:1 },
        { rotation: -261, duration: 1 , delay:1 },
        { rotation: -333, duration: 1 , delay:1 },
      ],repeat:-1 ,repeatDelay:2 });

      gsap.to(".smallcirclefirst", {
        keyframes: {
          width: ["170px", "220px", "220px", "170px"],
          height: ["170px", "220px", "220px", "170px"],
        },
        stagger: 2,
        duration: 2,
        delay: 1.5,
        repeat:-1,
        repeatDelay:2
      });

      gsap.to(".heading1", {
        stagger: 2,
        keyframes: [
          { y: 0, opacity:1,  duration: 1, delay: 1 },
          { y: "-250px", opacity: 0, duration: 1, delay: 1 },
        ],
        repeat: -1,
      });
      gsap.to(".posterimage> img", {
        keyframes: [
          { opacity: 1, scale: 1, duration: 1, delay: 1 },
          { opacity: 0, scale: 0.7, duration: 0, delay: 1 },
        ],
        stagger: 2,
        repeat: -1,
        repeatDelay: 1,
      });
    },
  );

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" w-[95%] h-[95%]  rounded-[55px]  flex relative overflow-hidden bg-gradient-to-r from-[#cad4ff] to-[#95BFFF]">
        <div
          id="maincircle"
          className="maincircle w-[35vw] h-[35vw] z-20 max-lg:w-[60vw] max-lg:h-[60vw] max-md:min-h-[500px] max-md:min-w-[500px]  rotate-[-45deg] absolute right-[-12vw] top-[-12vw] max-lg:right-[-20vw] max-lg:top-[-20vw] max-md:right-[-200px] max-md:top-[-200px]  border-[30px]  border-[#ff8a0496] rounded-full flex items-center justify-center text-white"
        >
          <div className="line w-full h-[10px]  rotate-[0deg] absolute">
            <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[red] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
              <BiMessageDetail className="text-[40px] " />
              <h1 className="font-extrabold text-[2vw] max-md:text-[20px]">
                SMS
              </h1>
            </div>
            <div style={{background :"radial-gradient(#B9D6FF ,#b9d6ffa2)"}} className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
          </div>
          <div className="line w-full h-[10px]  rotate-[72deg]  absolute ">
            <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#47cbff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
              <RiUserVoiceLine className="text-[40px]" />
              <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
                Voice
              </h1>
            </div>
            <div style={{background :"radial-gradient(#B9D6FF ,#b9d6ffa2)"}} className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
          </div>
          <div className="line w-full h-[10px]  rotate-[144deg] absolute">
            <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ff8147] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
              <MdOutlineMail className="text-[40px]" />
              <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
                Email
              </h1>
            </div>
            <div style={{background :"radial-gradient(#B9D6FF ,#b9d6ffa2)"}} className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
          </div>
          <div className="line w-full h-[10px]  rotate-[216deg] absolute">
            <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#29ae5e] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
              <FaWhatsapp className="text-[40px]" />
              <h1 className="font-extrabold text-[1.8vw] max-md:text-[20px]">
                Whatsapp
              </h1>
            </div>
            <div style={{background :"radial-gradient(#B9D6FF ,#b9d6ffa2)"}} className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
          </div>
          <div className="line w-full h-[10px]  rotate-[288deg] absolute">
            <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#4781ff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
              <MdOutlineMessage className="text-[40px]" />
              <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
                RCS
              </h1>
            </div>
            <div style={{background :"radial-gradient(#B9D6FF ,#b9d6ffa2)"}} className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
          </div>
        </div>
        <div className="w-[60vw] h-[60vw] absolute z-[9] bottom-0 left-0 translate-x-[-30%] translate-y-[40%] bg-[#92AAFF] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-screen pl-[6vw] relative  z-10 flex flex-col justify-center   gap-5">
          <div className="w-full h-[170px]  max-md:mt-[200px] ">
            <div className="relative  h-[170px] overflow-hidden   ">
              <h1 className="heading1  whitespace-nowrap  text-[40px]   font-bold leading-[56px] absolute ">
                Effortlessly Simplified <br /> & Powerful Multi-Channel <br />{" "}
                Platform.
              </h1>
              <h1 className="heading1  whitespace-nowrap  text-[40px] opacity-0   font-bold leading-[56px] absolute translate-y-[250px]">
                Lorem ipsum dolor sit <br /> amet consectetur, <br />{" "}
                adipisicing elit.
              </h1>
              <h1 className="heading1  whitespace-nowrap  text-[40px] opacity-0   font-bold leading-[56px] absolute translate-y-[250px]">
                Lorem ipsum dolor sit <br /> amet consectetur, <br />{" "}
                adipisicing elit.
              </h1>
              <h1 className="heading1  whitespace-nowrap  text-[40px] opacity-0   font-bold leading-[56px] absolute translate-y-[250px]">
                Lorem ipsum dolor sit <br /> amet consectetur, <br />{" "}
                adipisicing elit.
              </h1>
              <h1 className="heading1  whitespace-nowrap  text-[40px] opacity-0   font-bold leading-[56px] absolute translate-y-[250px]">
                Lorem ipsum dolor sit <br /> amet consectetur, <br />{" "}
                adipisicing elit.
              </h1>
            </div>
          </div>
          <h1 className="max-md:text-sm w-[80%]">
            Cloud Communication APIs seamlessly integrate messaging, voice,
            email, WhatsApp, and Many more…
          </h1>
          <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC]  rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
            <h1 className="text-white text-lg  font-bold whitespace-nowrap">Book Demo</h1>
          </div>
        </div>
        <div className="posterimage w-[50%] h-screen relative   flex items-end justify-start overflow-hidden ">
          <div className="  w-full h-[20px] absolute rounded-xl  bottom-0 bg-gradient-to-t from-[#95BFFF] to-transparent"></div>

          <img
            className="max-md:w-[250px] max-md:h-[250px] h-[400px] w-[400px] object-cover scale-[0.99] absolute opacity-0 "
            src="./images/sms.png"
            alt=""
          />
          <img
            className="max-md:w-[250px] max-md:h-[250px] h-[400px] w-[400px]  object-cover scale-[0.99] absolute opacity-0  "
            src="./images/sms.png"
            alt=""
          />
          <img
            className="max-md:w-[250px] max-md:h-[250px] h-[400px] w-[400px]  object-cover scale-[0.99] absolute opacity-0  "
            src="./images/sms.png"
            alt=""
          />
          <img
            className="max-md:w-[250px] max-md:h-[250px] h-[400px] w-[400px]  object-cover scale-[0.99] absolute opacity-0  "
            src="./images/sms.png"
            alt=""
          />
          <img
            className="max-md:w-[250px] max-md:h-[250px] h-[400px] w-[400px]  object-cover scale-[0.99] absolute opacity-0  "
            src="./images/sms.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Section1