import React, { useRef } from 'react'

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Section3 from './Section3';
import Section2 from './Section2';

const Section1 = () => {

  gsap.registerPlugin(useGSAP);
  

  useGSAP(
    () => {
      gsap.to("#maincircle", { keyframes: [
        { rotation: 27, duration:  3 , delay:2 },
        { rotation: 99,  duration: 3 , delay:2 },
        { rotation: 171, duration: 3 , delay:2 },
        { rotation: 243, duration: 3 , delay:2 },
        { rotation: 315, duration: 3 , delay:2 },
      ],repeat:-1 ,repeatDelay:2 });

      gsap.to(".smallcirclefirst", {
        keyframes: {
          width: ["170px", "220px",  "220px", "170px"],
          height: ["170px", "220px",  "220px", "170px"],
        },
        stagger: 5,
        duration: 4,
        delay: 0,
        repeat:-1,
        repeatDelay:2
      });

      gsap.to(".heading1", {
        keyframes:{
          y:["250px" ,"0px" ,"0px" , "0px" , "-250px"],
        },
        stagger: 5,
        duration:5,
        repeat: -1,
      });
      gsap.to(".paras", {
        keyframes:{
          y:["120px" ,"10px", "10px" , "10px" , "-120px"],
        },
        stagger: 5,
        duration:5,
        repeat: -1,
      });

      gsap.to(".posterimage> img", {
        keyframes: [
          { opacity: 1, scale: 1, duration: 1,  },
          { opacity: 1, scale: 1, duration: 4,  },
          { opacity: 0, scale: 0.7, duration: 0, delay: 0 },
        ],
        stagger: 5,
        repeat: -1,
        repeatDelay: 1,
      });

      gsap.to("#section1", {
        y: "-100%",
        scrollTrigger: {
          trigger: "#section1",
          markers: true,
          start: "10px -30px",
          end: "-10px -200vh",
          scrub: 1,
          //  pin:true
        },
      });
    },
  );



  return (
    <div className='relative h-[210vh] '>
      <div id='section1' className=" w-full relative z-[20] h-screen flex items-center justify-center ">
        <div className=" w-[95%] h-[95%]  rounded-[55px]  flex relative overflow-hidden bg-gradient-to-r from-[#cad4ff] to-[#95BFFF]">
          <div
            id="maincircle"
            className="maincircle w-[35vw] h-[35vw] z-20 max-lg:w-[500px] max-lg:h-[500px] max-md:min-h-[500px] max-md:min-w-[500px]    rotate-[-45deg] absolute right-[-12vw] top-[-12vw] max-lg:right-[-20vw] max-lg:top-[-20vw] max-md:right-[-200px] max-md:top-[-200px]  border-[30px]  border-[#ff8a0496] rounded-full flex items-center justify-center text-white"
          >
            <div className="line w-full  h-[10px]  rotate-[0deg] absolute">
              <div className="smallcircle w-[170px] h-[170px] text-blue-500 rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ffffff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <BiMessageDetail className="text-[40px] " />
                <h1 className="font-extrabold text-[2vw]  max-md:text-[20px]">
                  SMS
                </h1>
              </div>
              <div
                style={{ background: "radial-gradient(#B9D6FF ,#b9d6ffa2)" }}
                className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"
              ></div>
            </div>
            <div className="line w-full  h-[10px]  rotate-[-72deg] absolute">
              <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#4781ff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <MdOutlineMessage className="text-[40px]" />
                <h1 className="font-extrabold text-[2vw] max-md:text-[20px]">
                  RCS
                </h1>
              </div>
              <div
                style={{ background: "radial-gradient(#B9D6FF ,#b9d6ffa2)" }}
                className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"
              ></div>
            </div>
            <div className="line w-full  h-[10px]  rotate-[-144deg] absolute">
              <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#29ae5e] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <FaWhatsapp className="text-[40px]" />
                <h1 className="font-extrabold text-[1.8vw] max-md:text-[20px]">
                  Whatsapp
                </h1>
              </div>
              <div
                style={{ background: "radial-gradient(#B9D6FF ,#b9d6ffa2)" }}
                className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"
              ></div>
            </div>
            <div className="line w-full  h-[10px]  rotate-[-216deg] absolute">
              <div className="smallcircle w-[170px] h-[170px]  rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ff8147] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <MdOutlineMail className="text-[40px]" />
                <h1 className="font-extrabold text-[2vw] max-md:text-[20px]">
                  Email
                </h1>
              </div>
              <div
                style={{ background: "radial-gradient(#B9D6FF ,#b9d6ffa2)" }}
                className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"
              ></div>
            </div>

            <div className="line w-full  h-[10px]  rotate-[-288deg]  absolute ">
              <div className="smallcircle w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#47cbff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <RiUserVoiceLine className="text-[40px]" />
                <h1 className="font-extrabold text-[2vw] max-md:text-[20px]">
                  Voice
                </h1>
              </div>
              <div
                style={{ background: "radial-gradient(#B9D6FF ,#b9d6ffa2)" }}
                className="smallcirclefirst z-[-1] w-[170px] h-[170px] rotate-[45deg] border-[0px] border-[#B9D6FF]    rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center"
              ></div>
            </div>
          </div>
          <div className="w-[60vw] h-[60vw] absolute z-[9] bottom-0 left-0 translate-x-[-30%] translate-y-[40%] bg-[#92AAFF] blur-[100px]  rounded-full "></div>
          <div className="w-[50%] h-screen pl-[6vw] relative  z-10 flex flex-col justify-center   gap-5">
            <div className="w-full h-[170px]  max-md:mt-[200px] ">
              <div className="relative  h-[170px] overflow-hidden   ">
                <h1 className="heading1  whitespace-nowrap  text-[40px]   font-bold leading-[56px] absolute translate-y-[250px]">
                  Scale your customer <br /> engagement with a <br /> reliable
                  SMS API
                </h1>
                <h1 className="heading1  whitespace-nowrap  text-[40px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Stand out in the <br /> messaging inbox with <br />
                  RCS Business Messaging
                </h1>
                <h1 className="heading1  whitespace-nowrap  text-[40px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Build stronger customer <br /> relationships with <br />
                  WhatsApp Business API
                </h1>
                <h1 className="heading1  whitespace-nowrap  text-[40px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Discover the Unlimited <br /> Potential of Emails and <br />{" "}
                  Hit the Inbox
                </h1>
                <h1 className="heading1  whitespace-nowrap  text-[40px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Automate outbound and <br /> support calls with <br /> Voice
                  AI
                </h1>
              </div>
            </div>

            <div className="relative h-[80px] w-full overflow-hidden">
              <h1 className="paras max-md:text-sm w-[80%] absolute ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
              <h1 className="paras max-md:text-sm w-[80%] absolute translate-y-[120px] ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
              <h1 className="paras max-md:text-sm w-[80%] absolute translate-y-[120px] ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
              <h1 className="paras max-md:text-sm w-[80%] absolute translate-y-[120px] ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
              <h1 className="paras max-md:text-sm w-[80%] absolute translate-y-[120px] ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
            </div>
            <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC]  rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
              <h1 className="text-white text-lg  font-bold whitespace-nowrap">
                Book Demo
              </h1>
            </div>
          </div>
          <div className="posterimage w-[40%] h-screen relative   flex items-end justify-center overflow-hidden ">
            <div className="  w-full h-[20px] absolute rounded-xl  bottom-0 bg-gradient-to-t from-[#95BFFF] to-transparent"></div>

            <img
              className=" h-[500px]  md:[@media(max-height:600px)]:h-[350px]  object-center  scale-[0.99] absolute opacity-0 "
              src="./images/sms_website.png"
              alt=""
            />
            <img
              className=" h-[500px]  md:[@media(max-height:600px)]:h-[350px]  object-center   scale-[0.99] absolute opacity-0  "
              src="./images/rcs_website.png"
              alt=""
            />
            <img
              className=" h-[500px]  md:[@media(max-height:600px)]:h-[350px]  object-center   scale-[0.99] absolute opacity-0  "
              src="./images/whatsapp_website.png"
              alt=""
            />
            <img
              className=" h-[500px]  md:[@media(max-height:600px)]:h-[350px]  object-center   scale-[0.99] absolute opacity-0  "
              src="./images/email_website.png"
              alt=""
            />
            <img
              className=" h-[500px]  md:[@media(max-height:600px)]:h-[350px]  object-center   scale-[0.99] absolute opacity-0  "
              src="./images/voice_website.png"
              alt=""
            />
          </div>
        </div>
      <Section2/>
      </div>
      <Section3/>
    </div>
  );
}

export default Section1