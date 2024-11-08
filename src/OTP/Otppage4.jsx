import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Otppage4 = () => {
  useGSAP(() => {
    const elements = document.querySelectorAll(".fhi1");
    elements.forEach((element) => {
      gsap.from(element, {
        x: -200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "top 0",
          toggleActions: "play none none reverse",
        },
      });
    });

    const rightelement = document.querySelectorAll(".fhi2");
    rightelement.forEach((element) => {
      gsap.from(element, {
        x: 200,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "top 60%",
          end: "top 0",
          toggleActions: "play none none reverse",
        },
      });
    });
    const center = document.querySelectorAll(".fhcenter");
    center.forEach((element) => {
      gsap.from(element, {
        scale: 0,
        borderWidth: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element,
          start: "-200px 60%",
          end: "top 0",
          toggleActions: "play none none reverse",
        },
      });
    });
  });
  return (
    <div className="w-screen text-black pt-[50px] ">
      <h1 className='font-["Epilogue"] text-3xl px-[10vw] max-md:px-[5vw] pt-[50px] text-center  font-[500]'>
        How It Works
      </h1>
      <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px] flex ">
        <div className="w-[40%] h-fit ">
          <div className="fhi1 w-full h-[300px] flex flex-col justify-center ">
            <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
              OTP Generation
            </h1>
            <h1 className="text-base">
              Our API generates a unique OTP and delivers it via your chosen
              communication channel.
            </h1>
          </div>
          <div className="fhi1 w-full h-[300px]  flex items-center justify-center ">
            <img
              className="h-full"
              src="./images/OTPimages/page4-2.svg"
              alt=""
            />
          </div>
          <div className="fhi1 w-full h-[300px] flex flex-col justify-center ">
            <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
              User Input
            </h1>
            <h1 className="text-base">
              The user enters the received OTP into your application.
            </h1>
          </div>
        </div>
        <div className="w-[20%] h-[900px]  flex justify-center">
          <div className="w-[5px] text-white bg-[#C4CBD3] h-[900px] rounded-[50px] relative flex flex-col justify-evenly gap-[100px]">
            <div className="absolute w-[30px] h-[30px] bg-[#C4CBD3] rounded-full top-0 translate-x-[-12px] translate-y-[-15px] "></div>
            <div className="absolute w-[30px] h-[30px] bg-[#C4CBD3] rounded-full bottom-0 translate-x-[-12px] translate-y-[15px] "></div>

            <div className="fhcenter w-[70px] h-[70px] bg-[#00AAE8] rounded-full translate-x-[-32px] flex justify-center items-center border-[8px] border-[#D2F2FF]">
              <h1 className="font-bold text-2xl">01</h1>
            </div>
            <div className="fhcenter w-[70px] h-[70px] bg-[#1871ED] rounded-full translate-x-[-32px] flex justify-center items-center border-[8px] border-[#D2E5FF]">
              <h1 className="font-bold text-2xl">02</h1>
            </div>
            <div className="fhcenter w-[70px] h-[70px] bg-[#FF725C] rounded-full translate-x-[-32px] flex justify-center items-center border-[8px] border-[#FFD6CF]">
              <h1 className="font-bold text-2xl">03</h1>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-fit ">
          <div className="fhi2 w-full h-[300px]  flex items-center justify-center ">
            <img
              className="h-full"
              src="./images/OTPimages/page4-1.svg"
              alt=""
            />
          </div>
          <div className="fhi2 w-full h-[300px] flex flex-col justify-center ">
            <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
              OTP Validation
            </h1>
            <h1 className="text-base">
              The entered OTP is validated against the one generated, confirming
              the user’s identity.
            </h1>
          </div>
          <div className="fhi2 w-full h-[300px]  flex items-center justify-center ">
            <img
              className="h-full"
              src="./images/OTPimages/page4-3.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otppage4;
