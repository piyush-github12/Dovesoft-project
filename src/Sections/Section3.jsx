import React from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
        para: "Whether you want to upload a list of contacts or capture leads from a website form, with Sakari you can effortlessly create customized forms without any coding skills.",
      },
      {
        image: "marketing 1-1.png",
        heading: "Converstaions",
        para: "Forge connections and drive conversions like never before. Enhance your conversion rate with SMS, Voice, email, RCS, and WhatsApp, incorporating images, CTA actions, and more.",
      },
      {
        image: "marketing 1-2.png",
        heading: "Chatbots",
        para: "Verify users quickly and efficiently. Provide your users with a fast and simple OTP & 2FA process, supported by a failover solution. Enable OTP login via mobile number or email address.",
      },
      {
        image: "marketing 1-3.png",
        heading: "Failovers",
        para: "We Make sure your urgent messages never fail. Send Communications through secure channels. API automatically handles switch routes to make sure your message gets delivered successfully.",
      },
      {
        image: "marketing 1-4.png",
        heading: "Easy Interactions",
        para: "Cloud APIs are built keeping developers in mind. This helps Easy understanding and Implementing things with knowledge base API docs and 24X7 Support.",
      },
    ];

     gsap.registerPlugin(useGSAP);
     gsap.registerPlugin(ScrollTrigger); 

     useGSAP(()=>{



      gsap.to("#pinscroll" , {
        y:"-50%",
        scrollTrigger:{
          trigger:"#section3",
          start:"top top",
          pin:true,
          scrub:true,
        }
      })

      gsap.to("#fillline", {
        height: "100%",
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          // pin: true,
          scrub: true,
        },
      });
      gsap.to("#movercircle", {
        top: "calc(100%  - 25px)",
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          // pin: true,
          scrub: true,
        },
      });


     })


  return (
    <div id="section3" className="w-screen h-[100vh]  flex  px-14">
      <div className="h-full w-[55%]  max-sm:hidden ">
        <div className="w-full h-screen pl-[50px] max-lg:pl-[0vw] z-10 flex flex-col justify-center gap-5">
          <h1 className="text-[30px]  font-bold leading-[40px]">
            <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
              Harness over 10 years of
            </span>{" "}
            <br /> experience with the world’s <br /> most connected platform
          </h1>
          <h1>
            With industry-leading expertise, you can deliver superb customer{" "}
            <br />
            experience through our global network.
          </h1>
          <div className="w-fit h-[40px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC]  px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
            <h1 className="text-white whitespace-nowrap">Book Demo</h1>
          </div>
        </div>
      </div>
      <div className="h-full w-[10%] flex items-center justify-center  ">
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

      <div className="h-fit w-[55%] overflow-hidden py-[10vh] max-sm:w-[80%] ">
        <div id="pinscroll" className="">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-fit h-[220px] p-10 mb-[20px]  "
            >
              <img
                src={`./images/${item.image}`}
                className="h-[60px] mb-2 max-sm:h-[40px]"
                alt=""
              />
              <h1 className="font-bold mb-2 text-2xl ">{item.heading}</h1>
              <p className="w-[300px] text-xs mb-2 max-sm:text-[10px]">{item.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section3