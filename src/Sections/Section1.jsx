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
          { y: 0, duration: 1, delay: 1 },
          { y: "-250px", duration: 1, delay: 1 },
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
    <div className=" w-screen h-screen flex relative overflow-hidden bg-gradient-to-r from-[#cad4ff] to-[#95BFFF]">
      <div
        id="maincircle"
        className="maincircle w-[40vw] h-[40vw] max-lg:w-[60vw] max-lg:h-[60vw] max-md:min-h-[500px] max-md:min-w-[500px]  rotate-[-45deg] absolute right-[-12vw] top-[-12vw] max-lg:right-[-20vw] max-lg:top-[-20vw] max-md:right-[-200px] max-md:top-[-200px]  border-[30px]  border-[#ff8a0496] rounded-full flex items-center justify-center text-white"
      >
        <div className="line w-full h-[10px]  rotate-[0deg] absolute">
          <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ff4747] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <BiMessageDetail className="text-[40px] " />
            <h1 className="font-extrabold text-[2vw] max-md:text-[20px]">
              SMS
            </h1>
          </div>
          <div className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#B9D6FF] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
        </div>
        <div className="line w-full h-[10px]  rotate-[72deg]  absolute ">
          <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#47cbff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <RiUserVoiceLine className="text-[40px]" />
            <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
              Voice
            </h1>
          </div>
          <div className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#B9D6FF] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
        </div>
        <div className="line w-full h-[10px]  rotate-[144deg] absolute">
          <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ff8147] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <MdOutlineMail className="text-[40px]" />
            <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
              Email
            </h1>
          </div>
          <div className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#B9D6FF] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
        </div>
        <div className="line w-full h-[10px]  rotate-[216deg] absolute">
          <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#29ae5e] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <FaWhatsapp className="text-[40px]" />
            <h1 className="font-extrabold text-[1.8vw] max-md:text-[20px]">
              Whatsapp
            </h1>
          </div>
          <div className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#B9D6FF] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
        </div>
        <div className="line w-full h-[10px]  rotate-[288deg] absolute">
          <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#4781ff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
            <MdOutlineMessage className="text-[40px]" />
            <h1 className="font-extrabold text-[2vw ] max-md:text-[20px]">
              RCS
            </h1>
          </div>
          <div className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#B9D6FF] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"></div>
        </div>
      </div>
      <div className="w-[60vw] h-[60vw] absolute bottom-0 left-0 translate-x-[-30%] translate-y-[40%] bg-[#92AAFF] blur-[100px]  rounded-full "></div>
      <div className="w-[50%] h-screen pl-[6vw]  z-10 flex flex-col justify-center   gap-5">
        <div className="relative w-full h-[230px]  max-md:h-[120px] max-md:mt-[200px] overflow-hidden ">
          <h1 className="heading1 h-[200px] max-md:h-[120px]  text-[3.5vw] max-md:text-[5vw] max-md:leading-[5vw]  font-bold leading-[4vw] absolute ">
            Effortlessly Simplified &  Powerful Multi-Channel 
            CPaaS Platform.
          </h1>
          <h1 className="heading1 h-[200px] max-md:h-[120px]  text-[3.5vw] max-md:text-[5vw] max-md:leading-[5vw]  font-bold leading-[4vw] absolute translate-y-[250px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            vitae!
          </h1>
          <h1 className="heading1 h-[200px] max-md:h-[120px]  text-[3.5vw] max-md:text-[5vw] max-md:leading-[5vw]  font-bold leading-[4vw] absolute translate-y-[250px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            vitae!
          </h1>
          <h1 className="heading1 h-[200px] max-md:h-[120px]  text-[3.5vw] max-md:text-[5vw] max-md:leading-[5vw]  font-bold leading-[4vw] absolute translate-y-[250px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            vitae!
          </h1>
          <h1 className="heading1 h-[200px] max-md:h-[120px]  text-[3.5vw] max-md:text-[5vw] max-md:leading-[5vw]  font-bold leading-[4vw] absolute translate-y-[250px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            vitae!
          </h1>
        </div>
        <h1 className="max-md:text-[2vw] w-[80%]">
          Cloud Communication APIs seamlessly integrate messaging, voice, email,
          WhatsApp, and Many more…
        </h1>
        <div className="w-fit h-[40px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC]  px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
          <h1 className="text-white whitespace-nowrap">Book Demo</h1>
        </div>
      </div>
      <div className="posterimage w-[50%] h-screen relative flex items-end justify-start overflow-hidden ">
        <div className="  w-full h-[20px] absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#95BFFF] to-transparent"></div>

        <img
          className="max-md:w-[250px] max-md:h-[250px] h-[30vw] w-[30vw]  object-cover scale-[0.99] absolute opacity-0 "
          src="./images/sms.png"
          alt=""
        />
        <img
          className="max-md:w-[250px] max-md:h-[250px] h-[30vw] w-[30vw]  object-cover scale-[0.99] absolute opacity-0  "
          src="./images/sms.png"
          alt=""
        />
        <img
          className="max-md:w-[250px] max-md:h-[250px] h-[30vw] w-[30vw]  object-cover scale-[0.99] absolute opacity-0  "
          src="./images/sms.png"
          alt=""
        />
        <img
          className="max-md:w-[250px] max-md:h-[250px] h-[30vw] w-[30vw]  object-cover scale-[0.99] absolute opacity-0  "
          src="./images/sms.png"
          alt=""
        />
        <img
          className="max-md:w-[250px] max-md:h-[250px] h-[30vw] w-[30vw]  object-cover scale-[0.99] absolute opacity-0  "
          src="./images/sms.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Section1