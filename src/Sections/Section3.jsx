import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Section4 from "./Section4";
import Bookdemobutton from "../components/Bookdemobutton";

const Section3 = () => {
  const data = [
    {
      image: "authentication.png",
      heading: "Authentication",
      para: "Verify users quickly and efficiently. Provide your users with a fast and simple OTP & 2FA process, supported by a failover solution. Enable OTP login via mobile number or email address.",
    },
    {
      image: "marketing 1.png",
      heading: "Campaings",
      para: "Whether you want to upload a list of contacts or capture leads from a website form, with Dove Soft you can effortlessly create customized forms without any coding skills.",
    },
    {
      image: "marketing 1-1.png",
      heading: "Converstaions",
      para: "Forge connections and drive conversions like never before. Enhance your conversion rate with SMS, Voice, email, RCS, and WhatsApp, incorporating images, CTA actions, and more.",
    },
  ];

  const data1 = [
    {
      image: "image.png",
      heading: "Chatbots",
      para: "Verify users quickly and efficiently. Provide your users with a fast and simple OTP & 2FA process, supported by a failover solution. Enable OTP login via mobile number or email address.",
    },
    {
      image: "image-1.png",
      heading: "Failovers",
      para: "We Make sure your urgent messages never fail. Send Communications through secure channels. API automatically handles switch routes to make sure your message gets delivered successfully.",
    },
    {
      image: "image-2.png",
      heading: "Easy Interactions",
      para: "Cloud APIs are built keeping developers in mind. This helps Easy understanding and Implementing things with knowledge base API docs and 24X7 Support.",
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
  }, {  dependencies: [window.screen.height] });

  return (
    <div
      id="section3"
      className="w-[100vw] h-[100vh] py-2 bg-[#fff]  z-10  mt-10 max-sm:h-[100vh] max-sm:mt-[300px]  max-sm:flex-col  flex max-sm:gap-[20px] px-[10vw] max-lg:px-[5vw]"
    >
      <div className="h-full w-[35%]  max-sm:absolute max-sm:top-[-400px] max-sm:h-[400px] max-sm:pt-[50px] max-sm:px-[2vw] max-sm:w-full  ">
        <div className="w-full h-screen max-sm:h-[400px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center   max-lg:pl-[0vw] z-10 flex flex-col justify-center gap-5">
          <h1 className="text-3xl font-['Epilogue']  max-sm:text-2xl max-sm:text-center font-bold leading-[40px]">
            <span className="bg-gradient-to-r max-sm:whitespace-nowrap whitespace-nowrap max-xl:whitespace-normal from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
              Harness over 10 years of
            </span>{" "}
            <br /> experience with the world’s most connected platform
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
        className="w-[65%] max-sm:w-[100%] overflow-hidden  max-sm:h-[100vh] flex justify-start gap-[5vw] max-lg:px-[5vw] max-sm:pl-2 max-sm:gap-2 "
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

        <div className="h-fit w-[90%] max-sm:w-[85%]  ">
          <div
            id="pinscroll"
            className=" flex flex-col  justify-center  min-h-[100vh] "
          >
            {data.map((item) => (
              <div
                key={item.heading}
                // style={
                //   item.heading == "Authentication" ? { marginTop: "100px" } : {}
                // }
                className="w-full h-[33vh] max-lg:h-[350px]   flex flex-col justify-center   "
              >
                <img
                  src={`./images/${item.image}`}
                  className="h-[50px] w-[50px] mb-2 "
                  alt=""
                />
                <h1 className="font-bold font-['Epilogue']  mb-2 text-2xl ">
                  {item.heading}
                </h1>
                <p className="w-[100%] max-sm:w-[300px] text-base  mb-2 ">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
          <div
            id="pinscroll"
            className="flex flex-col  justify-center  min-h-[100vh]  "
          >
            {data1.map((item) => (
              <div
                key={item.heading}
                className="w-full h-[33vh] max-lg:h-[350px]   flex flex-col justify-center   "
              >
                <img
                  src={`./images/${item.image}`}
                  className="h-[50px] w-[50px] mb-2 "
                  alt=""
                />
                <h1 className="font-bold font-['Epilogue']  mb-2 text-2xl ">
                  {item.heading}
                </h1>
                <p className="w-[100%] max-sm:w-[300px] text-base  mb-2 ">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
