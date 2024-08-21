import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";


const Section6 = () => {
    const data = [
      {
        image: "./images/bubble-chat 1.png",
        heading: "BFSI",
        para: "Make online finance easy with AI and 150+ pre-built journeys that automate routine customer interactions",
      },
      {
        image: "./images/bubble-chat 1-1.png",
        heading: "Retail",
        para: "Deliver expert guidance anytime, anywhere, and sell more with a personalised shopping experience",
      },
      {
        image: "./images/bubble-chat 1-2.png",
        heading: "Food & Beverage",
        para: "Receive orders and payments directly, manage home delivery and marketing",
      },
      {
        image: "./images/bubble-chat 1-3.png",
        heading: "Education",
        para: "Enhance student experience from onboarding to learning with AI chatbots and voice bots",
      },
      {
        image: "./images/bubble-chat 2.png",
        heading: "Healthcare",
        para: "Transform patient-doctor engagement with chatbots on messaging channels",
      },
      {
        image: "./images/bubble-chat 2-1.png",
        heading: "Travel",
        para: "Improve booking, travel and guest experience with chatbots on messaging channels",
      },
    ];
  return (
    <div className="w-screen h-fit py-[100px] px-[100px] max-lg:px-[10vw]">
      <h1 className="text-3xl text-center font-bold mb-2">
        <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
          Conversational automation for every industry
        </span>
      </h1>
      <h2 className="text-center text-sm  mb-10">
        We understand your business and can make every customer touchpoint{" "}
        <br />
        conversational across marketing, commerce, and support
      </h2>
      <div className="w-full h-fit  grid grid-cols-3 justify-items-center gap-4 max-lg:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.heading}
            className="w-[300px] h-[250px]  max-sm:w-[40vw] max-sm:h-fit  rounded-2xl"
          >
            <div className="w-full h-[40%]  p-2 flex items-end">
              <img className="w-[72]" src={`${item.image}`} alt="" />
            </div>
            <div className="w-full h-[60%] px-2">
              <h1 className="font-bold text-xl mb-2">{item.heading}</h1>
              <p className="text-sm mb-2 max-md:w-[30vw] max-sm:w-[40vw]">{item.para}</p>
              <div className="flex gap-2 items-center text-[#1871ED] text-xs   hover:text-sm transition-all cursor-pointer">
                <h1 className="">Explore {item.heading}</h1>
                <FaLongArrowAltRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section6