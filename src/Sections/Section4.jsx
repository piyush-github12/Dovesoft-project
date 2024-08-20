import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";


const Section4 = () => {

  let data = [
    {
      image:"./images/sec-4-1.png",
      heading: "SMS",
      para: "Make online finance easy with AI and 150+pre-built journeys that automate routine customer interactions",
      explor: "SMS",
    },
    {
      image:"./images/sec-4-2.png",
      heading: "Whatsapp Messaging API",
      para: "Leverage WhatsApp to connect, converse and care for customers",
      explor: "Whatsapp",
    },
    {
      image:"./images/sec-4-3.png",
      heading: "Rich Comunication Service",
      para: "Enable interactive mobile experiences between enterprises and customers with RCS",
      explor: "RCS",
    },
    {
      image:"./images/sec-4-4.png",
      heading: "Voice",
      para: "Enhance student experience from onboarding to learning with AI chatbots and voice bots",
      explor: "Voice",
    },
    {
      image:"./images/sec-4-5.png",
      heading: "Email",
      para: "Transform patient-doctor engagement with chatbots on messaging channels",
      explor: "Email",
    },
    {
      image:"./images/sec-4-6.png",
      heading: "Instagram messaging API",
      para: "Improve booking, travel and guest experience with chatbots on messaging channels",
      explor: "instagram",
    },
  ];



  return (
    <div className="w-screen h-fit py-[100px] max-md:py-[150px]  max-lg:px-[10vw]">
      <h1 className="text-[30px] max-md:text-[3vw] text-center  font-bold mb-10">
        Leverage a single API to{" "}
        <span className="bg-gradient-to-r from-[#A8CCFF]  to-[#F4F9FF] rounded-md px-2">
          automate conversational engagement
        </span>{" "}
        <br />
        across various messaging channels
      </h1>
      <div className="w-full h-fit  grid grid-cols-3 justify-items-center gap-4 max-lg:grid-cols-2">
        {data.map((item) => (
          <div
            key={item.heading}
            className="w-[250px] h-[300px] max-sm:w-[40vw] max-sm:h-fit rounded-2xl overflow-hidden"
          >
            <div className="w-full h-[50%] bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] mb-2 flex items-center justify-center">
              <img className="w-[100px]" src={`${item.image}`} alt="" />
            </div>
            <div className="w-full h-[50%] px-2">
              <h1 className="font-bold mb-6">{item.heading}</h1>
              <p className="text-sm max-sm:text-[2.5vw] max-sm:leading-[2.5vw] mb-2">
                {item.para}
              </p>
              <div className="flex gap-2 items-center text-[#1871ED] text-xs  hover:text-sm transition-all cursor-pointer">
                <h1 className=" ">Explore {item.explor}</h1>
                <FaLongArrowAltRight  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;
