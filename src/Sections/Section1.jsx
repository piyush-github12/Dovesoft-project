import React, { useRef, useEffect } from 'react'

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Section3 from './Section3';
import Section2 from './Section2';
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Section1 = () => {

  gsap.registerPlugin(useGSAP);
  

  useGSAP(
    () => {
      gsap.to("#maincircle", { keyframes: [
        { rotation: 27,  duration: 3 , delay:2 },
        { rotation: 99,  duration: 3 , delay:2 },
        { rotation: 171, duration: 3 , delay:2 },
        { rotation: 243, duration: 3 , delay:2 },
        { rotation: 315, duration: 3 , delay:2 },
      ],repeat:-1 ,repeatDelay:0 });

      gsap.to(".smallcirclefirst", {
        keyframes: {
          width: ["170px", "220px",  "220px", "170px"],
          height: ["170px", "220px",  "220px", "170px"],
        },
        stagger: 5,
        duration: 5,
        delay: 0,
        repeat:-1,
        repeatDelay:0,
      });

      gsap.to(".heading1", {
        keyframes: {
          y: ["250px", "0px", "0px", "0px", "-250px"],
        },
        stagger: 5,
        duration: 5,
        repeat: -1,
        repeatDelay: 0,
      });
      gsap.to(".heading2", {
        keyframes: {
          y: ["250px", "0px", "0px", "0px", "-400px"],
        },
        stagger: 5,
        duration: 5,
        repeat: -1,
        repeatDelay: 0,
      });
      gsap.to(".paras", {
        keyframes: {
          y: ["120px", "10px", "10px", "10px", "-120px"],
        },
        stagger: 5,
        duration: 5,
        repeat: -1,
        repeatDelay: 0,
      });

      gsap.to(".posterimage> img", {
        keyframes: [
          { opacity: 1, scale: 1, duration: 0,  },
          { opacity: 1, scale: 1, duration: 5,  },
          { opacity: 0, scale: 0.7, duration: 0, delay: 0 },
        ],
        stagger: 5,
        repeat: -1,
        repeatDelay: 0,
      });

      // gsap.to("#section1", {
      //   y: "-100vh",
      //   scrollTrigger: {
      //     trigger: "#section1",
      //     // markers: true,
      //     start: "10px -100px",
      //     end: "-200px -600vh",
      //     scrub: 2,
      //     //  pin:true
      //   },
      // });
    },
  );
 

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="relative h-fit ">
      <div
        id="section1"
        className=" w-full  relative z-[20] h-fit flex items-center justify-center "
      >
        <Navbar />
        <div className=" w-[95%] min-h-[100vh]  my-[10px]  rounded-[55px] px-[7vw] max-md:px-[3vw]  flex max-xl:flex-col relative overflow-hidden bg-gradient-to-r from-[#cad4ff93] to-[#95bfff]">
          <div className="absolute z-[-1] w-full h-full top-0 left-0 ">
            <video
              autoPlay
              loop
              muted
              className="w-full object-cover"
              src="./images/heropagevideo.mp4"
            ></video>
          </div>
          <div
            id="maincircle"
            className="maincircle w-[35vw] h-[35vw] z-20 max-xl:w-[500px] max-xl:h-[500px] max-md:min-h-[500px] max-md:min-w-[500px]    rotate-[-45deg] absolute right-[-12vw] top-[-12vw] max-xl:right-[-20vw] max-xl:top-[-20vw] max-md:right-[-200px] max-md:top-[-200px]  border-[30px]  border-[#ff8a0496] rounded-full flex items-center justify-center text-white"
          >
            <div className="line w-full  h-[10px]  rotate-[0deg] absolute">
              <div className="smallcircle w-[170px] h-[170px] text-blue-500 rotate-[45deg] border-[0px] border-[#B9D6FF] bg-[#ffffff] rounded-full absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center">
                <BiMessageDetail className="text-[48px] " />
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
                <h1 className="font-extrabold text-[1.5vw] max-md:text-[20px]">
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
          <div className="w-[40vw] h-[60vw] absolute z-[9] bottom-0 left-0 translate-x-[-30%] translate-y-[40%] bg-[#92aaff98] blur-[100px]  rounded-full "></div>
          <div className="w-[75vw] max-md:w-[100vw] h-screen max-xl:h-fit max-sm:h-fit max-md:mt-[300px] max-xl:mt-[400px]   relative  z-10 flex flex-col justify-center    gap-5">
            <div className=" min-w-full h-[170px]  max-md:mt-[10vh] max-sm:hidden ">
              <div className="relative  h-[170px]  overflow-hidden font-['Epilogue'] ">
                <h1 className="heading1 font-['Epilogue']    whitespace-nowrap max-md:whitespace-normal  text-[48px]  font-bold leading-[56px] absolute translate-y-[250px]">
                  Scale your customer <br /> engagement with a <br /> reliable
                  SMS API
                </h1>
                <h1 className="heading1 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[48px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Stand out in the <br /> messaging inbox with <br />
                  RCS Business Messaging
                </h1>
                <h1 className="heading1 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[48px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Build stronger customer <br /> relationships with <br />
                  WhatsApp Business API
                </h1>
                <h1 className="heading1 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[48px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Discover the Unlimited <br /> Potential of Emails and <br />{" "}
                  Hit the Inbox
                </h1>
                <h1 className="heading1 font-['Epilogue']    whitespace-nowrap max-md:whitespace-normal  text-[48px]    font-bold leading-[56px] absolute translate-y-[250px]">
                  Automate outbound <br /> and support calls <br /> with Voice
                  AI
                </h1>
              </div>
            </div>
            <div className=" min-w-full  h-[150px] heropageheightadjuster  max-md:mt-[10vh]  hidden max-sm:block">
              <div className="relative w-[90vw] h-[150px] heropageheightadjuster  overflow-hidden font-['Epilogue'] ">
                <h1 className="heading2 font-['Epilogue']    whitespace-nowrap max-md:whitespace-normal  text-[33px] t3xl font-bold leading-2xl absolute translate-y-[250px]">
                  Scale your customer <br /> engagement with a <br /> reliable
                  SMS API
                </h1>
                <h1 className="heading2 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[33px] t3xl   font-bold leading-2xl absolute translate-y-[250px]">
                  Stand out in the <br /> messaging inbox with <br />
                  RCS Business Messaging
                </h1>
                <h1 className="heading2 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[33px] t3xl   font-bold leading-2xl absolute translate-y-[250px]">
                  Build stronger customer <br /> relationships with <br />
                  WhatsApp Business API
                </h1>
                <h1 className="heading2 font-['Epilogue']     whitespace-nowrap max-md:whitespace-normal  text-[33px] t3xl   font-bold leading-2xl absolute translate-y-[250px]">
                  Discover the Unlimited <br /> Potential of Emails and <br />{" "}
                  Hit the Inbox
                </h1>
                <h1 className="heading2 font-['Epilogue']    whitespace-nowrap max-md:whitespace-normal  text-[33px] t3xl   font-bold leading-2xl absolute translate-y-[250px]">
                  Automate outbound <br /> and support calls <br /> with Voice
                  AI
                </h1>
              </div>
              <style jsx>{`
                @media (max-width: 400px) {
                  .heropageheightadjuster {
                    height: 210px;
                  }
                  .t3xl {
                    font-size: 30px;
                    line-height: 35px;
                  }
                }
              `}</style>
            </div>

            <div className="relative h-[100px] w-full max-sm:w-[90vw] overflow-hidden">
              <h1 className="paras font-semibold text-base max-md:text-sm w-[80%] max-sm:w-[100%] absolute ">
                Send and receive text messages without latency, with a superior
                network of direct carrier connections in over 160 countries
              </h1>
              <h1 className="paras font-semibold text-base max-md:text-sm w-[80%] max-sm:w-[100%] absolute translate-y-[120px] ">
                Engage customers across marketing, commerce, and support with
                rich media, branding, credible trust marks, and conversational
                journeys
              </h1>
              <h1 className="paras font-semibold text-base max-md:text-sm w-[80%] max-sm:w-[100%] absolute translate-y-[120px] ">
                Go beyond one-way messages. Interact with customers across their
                lifecycle
              </h1>
              <h1 className="paras font-semibold text-base max-md:text-sm w-[80%] max-sm:w-[100%] absolute translate-y-[120px] ">
                With all the features to help businesses achieve their marketing
                and sales goals in the most simplified manner.
              </h1>
              <h1 className="paras font-semibold text-base max-md:text-sm w-[80%] max-sm:w-[100%] absolute translate-y-[120px] ">
                Deflect callers to digital channels, boost agent productivity,
                and lower contact center costs with cloud-based Voice AI API
              </h1>
            </div>
            <Bookdemobutton clr="#0d72ff" textclr="#ffff" borderclr="#7AB1FC" />
          </div>
          <div className=" w-[60vw] max-xl:w-full h-screen max-xl:h-[400px] max-sm:h-[300px] relative  pb-[5vh] flex items-end  justify-start max-xl:justify-center max-sm:mt-[150px]  ">
            {/* <div className="  w-full h-[20px] absolute rounded-xl  bottom-0 bg-gradient-to-t from-[#95BFFF] to-transparent"></div> */}
            <div className="posterimage translate-x-[-50px] max-xl:translate-x-0 flex items-end justify-center w-[500px] h-full ">
              <img
                className=" h-[550px] max-xl:h-[350px] max-sm:-[300px]  object-cover  scale-[0.99] absolute opacity-0 "
                src="./images/sms_website.png"
                alt=""
              />
              <img
                className=" h-[550px] max-xl:h-[350px] max-sm:-[300px]  object-cover   scale-[0.99] absolute opacity-0  "
                src="./images/rcs_website.png"
                alt=""
              />
              <img
                className=" h-[550px] max-xl:h-[350px] max-sm:-[300px]  object-cover   scale-[0.99] absolute opacity-0  "
                src="./images/whatsapp_website.png"
                alt=""
              />
              <img
                className=" h-[550px] max-xl:h-[350px] max-sm:-[300px]  object-cover   scale-[0.99] absolute opacity-0  "
                src="./images/email_website.png"
                alt=""
              />
              <img
                className=" h-[550px] max-xl:h-[350px] max-sm:-[300px]  object-cover   scale-[0.99] absolute opacity-0  "
                src="./images/voice_website.png"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* <Section2 /> */}
      </div>
      {/* <Section3 /> */}
    </div>
  );
}

export default Section1