import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Bookdemobutton from "../components/Bookdemobutton";

const Section3 = () => {
  const data = [
    {
      image: "authentication.png",
      heading: "Two-Factor Authentication(2FA)",
      para: `Secure your App or Web Application with our simple & ready to configure 2FA APIs. Easily integrate 2FA into your application with an SMS API that utilizes voice and SMS messaging to ensure the security of your customers.`,
    },
    {
      image: "marketing 1.png",
      heading: "Alerts & Notifications",
      para: "Integrate sms API messaging to Reduce no-shows by sending automated alert SMSs. Update customers in real-time and provide them with reminders and alerts in a timely, secure, and reliable way that they can trust.",
    },
    {
      image: "marketing 1-1.png",
      heading: "Send SMS OTP",
      para: "Experience simplified SMS API platform, designed to deliver OTP instantly in no time, with enhanced security and speed. Send SMS OTP to verify and restrict Fraud Logins. An enhanced API for OTP failure solution with Fallback.",
    },
  ];

  const data1 = [
    {
      image: "image.png",
      heading: "Transactional SMS",
      para: "Give messaging capabilities to your crm to Send SMS messaging. Use SMS API to trigger every transaction detail on billing to your customers timely and helpful payment reminders.",
    },
    {
      image: "image-1.png",
      heading: "SMS to Email/Voice",
      para: "Integrate SMS messaging API into email/voice service so users and agents can communicate seamlessly in the channel they prefer. You can use all channel parallely or simultaneously.",
    },
    {
      image: "image-2.png",
      heading: "Custom-made",
      para: "Businesses follow different branches and requirement scenarios. We are all ears to listen to your requirements. We will offer you a simplified and flexible SMS API that fulfills your messaging needs. Like hotels.",
    },
  ];

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);


    useGSAP(() => {
      let screenheight = window.screen.height;
      let pinheight = document.querySelector("#pinscroll").offsetHeight;

      let slideheight = "";

      if (pinheight > screenheight) {
        slideheight = 1100 + (pinheight - screenheight);
      } else {
        slideheight = pinheight;
      }

      gsap.to("#pinscroll", {
        y: -slideheight,
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          pin: true,
          scrub: true,
        },
      });

      gsap.to("#fillline", {
        height: "100%",
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          scrub: true,
        },
      });
      gsap.to("#movercircle", {
        top: "calc(100%  - 25px)",
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          scrub: true,
        },
      });
    }, []);



  

  return (
    <div
      id="section3"
      className="w-screen  h-[100vh] py-2    z-10  mt-10 max-sm:h-[100vh] max-sm:mt-[350px]  max-sm:flex-col  flex max-sm:gap-[20px] gap-[5vw] px-[10vw] max-lg:px-[5vw] "
    >
      <div className="h-full w-[35%]  max-sm:absolute max-sm:top-[-350px] max-sm:h-[300px] max-sm:pt-10  max-sm:w-[90%]  ">
        <div className="w-full h-screen max-sm:h-[300px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center   max-lg:pl-[0vw] z-10 flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-['Epilogue']  max-sm:text-2xl font-bold leading-[40px] max-sm:text-center">
            <span className="bg-gradient-to-r  max-sm:whitespace-nowrap from-[#A8CCFF] whitespace-nowrap max-xl:whitespace-normal to-[#F4F9FF] rounded-md px-2">
              Use Dove Soft’s SMS API to
            </span>{" "}
            <br /> Automate Your Texts
          </h1>
          <h1 className="text-base max-sm:text-base max-sm:text-center">
            With industry-leading expertise, you can deliver superb customer
            experience through our global network.
          </h1>
          <Bookdemobutton clr="#0d72ff" textclr="#ffff" borderclr="#7AB1FC" />
        </div>
      </div>

      <div
        id="dualipa"
        className="w-[65%]  max-sm:w-[100%]  max-sm:h-[100vh] flex justify-start gap-[5vw]  max-sm:gap-5 "
      >
        <div className="h-[100vh] w-[10%] max-sm:w-[15%] flex items-center justify-center  ">
          <div className="line h-[70%] relative w-[2px] bg-[#b5daff] ">
            <div className="circlesonline w-[30px] h-[30px] rounded-full absolute top-[-15px] left-[-15px] bg-[#1989f9]"></div>
            <div className="circlesonline w-[30px] h-[30px] rounded-full absolute top-[50%] left-[-15px] bg-[#1989f9]"></div>
            <div className="circlesonline w-[30px] h-[30px] rounded-full absolute bottom-[-15px] left-[-15px] bg-[#1989f9]"></div>
            <div
              id="movercircle"
              className="circlesonline w-[50px] h-[50px] rounded-full absolute top-[-25px] left-[-25px] bg-[#1989f955] flex items-center justify-center"
            >
              <div className="circlesonline w-[30px] h-[30px] rounded-full   bg-[#1989f9]"></div>
            </div>
            <div
              id="fillline"
              className=" absolute top-[0] left-[-3px] h-[0%] w-[6px] rounded-md bg-[#1989f9]"
            ></div>
          </div>
        </div>

        <div className="h-fit w-[90%] max-sm:w-[85%]  mt-[50px] ">
          <div
            id="pinscroll"
            className=" flex flex-col  justify-center   min-h-[100vh] "
          >
            {data.map((item) => (
              <div
                key={item.heading}
                className="w-full h-[33vh] max-lg:h-[320px] flex max-sm:flex-col justify-center gap-5 items-start    "
              >
                <img
                  src={`./images/${item.image}`}
                  className="h-[50px] w-[50px] mb-2 "
                  alt=""
                />
                <div className="flex flex-col justify-center ">
                  <h1 className="font-bold mb-2 text-2xl ">{item.heading}</h1>
                  <p className="w-[100%]  text-base  mb-2 ">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            id="pinscroll"
            className=" flex flex-col  justify-center   min-h-[100vh]   "
          >
            {data1.map((item) => (
              <div
                key={item.heading}
                id={item.heading == "Easy Interactions" && "last"}
                className="w-full h-[33vh] max-lg:h-[320px] flex max-sm:flex-col justify-center  gap-5 items-start    "
              >
                <img
                  src={`./images/${item.image}`}
                  className="h-[50px] w-[50px] mb-2 "
                  alt=""
                />
                <div className="flex flex-col justify-center ">
                  <h1 className="font-bold mb-2 text-2xl ">{item.heading}</h1>
                  <p className="w-[90%]  text-base  mb-2 ">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
