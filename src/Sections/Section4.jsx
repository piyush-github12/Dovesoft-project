import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Section5 from "./Section5";


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

     gsap.registerPlugin(useGSAP);
     gsap.registerPlugin(ScrollTrigger); 

     useGSAP(()=>{

      // gsap.to("#section4",{
      //   scrollTrigger:{
      //     trigger:"#section4",
      //     y:"-100vh",
      //   }
      // })

       gsap.to("#section4", {
         y: "-100%",
         scrollTrigger: {
           trigger: "#section4",
           markers: true,
           start: "10px -30px",
           end: "-10px -200vh",
           scrub: 1,
          //  pin:true
         },
       });

     })

  

  return (
    <div className="relative h-fit">
      <div
        id="section4"
        className="w-screen h-fit relative top-[0] z-10 py-[100px] bg-[#fff] rounded-b-[55px] "
      >
        <h1 className="text-3xl  text-center z-10 relative  font-bold mb-10">
          Leverage a single API to{" "}
          <span className="bg-gradient-to-r from-[#A8CCFF]  to-[#F4F9FF] rounded-md px-2">
            automate conversational engagement
          </span>{" "}
          <br />
          across various messaging channels
        </h1>
        <div className="w-full h-fit relative z-10 grid grid-cols-3 px-[13vw] gap-4 max-md:px-[0vw] justify-items-center   max-lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[300px] h-[350px]   max-sm:w-[40vw] max-sm:h-fit rounded-2xl overflow-hidden"
            >
              <div className="w-full h-[170px] bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] flex items-center justify-center">
                <img className="w-[140px]" src={`${item.image}`} alt="" />
              </div>
              <div className="w-full h-[180px]  px-2 py-2 relative">
                <h1 className="font-bold h-[70px]  text-2xl ">
                  {item.heading}
                </h1>
                <p className="text-sm  mb-2">{item.para}</p>
                <div className="flex absolute bottom-3 gap-2 items-center text-[#1871ED] text-sm  hover:text-[16px] transition-all cursor-pointer">
                  <h1>Explore {item.explor}</h1>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Section5 />
    </div>
  );
};

export default Section4;
