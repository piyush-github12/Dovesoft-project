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
         y: "-120%",
         scrollTrigger: {
           trigger: "#section4",
          //  markers: true,
           start: "10px -100px",
           end: "-100px -600vh",
           scrub:2,
          //  ease:"linear"
          //  pin:true
         },
       });

     })

  

  return (
    <div className="relative h-[110vh] py-2  max-sm:mt-[400px]  ">
      <div
        id="section4"
        className="w-screen h-fit min-h-[110vh] relative  z-[11]  pb-10 bg-[#fff] rounded-b-[55px] "
      >
        <h1 className="text-3xl max-sm:text-2xl  text-center z-10 relative  font-bold mb-10">
          Leverage a single API to{" "}
          <span className="bg-gradient-to-r max-md:whitespace-nowrap from-[#A8CCFF]  to-[#F4F9FF] rounded-md px-2">
            automate conversational engagement
          </span>{" "}
          <br />
          across various messaging channels
        </h1>
        <div className="w-full h-fit relative z-10 grid grid-cols-3 px-[13vw] gap-4 max-xl:px-[0vw] justify-items-center   max-lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[300px] h-[380px]   max-sm:w-[40vw]   rounded-2xl overflow-hidden"
            >
              <div className="w-full h-[170px] bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] flex items-center justify-center">
                <img
                  className="w-[140px] max-sm:w-[100px]"
                  src={`${item.image}`}
                  alt=""
                />
              </div>
              <div className="w-full h-[210px]  px-2 py-2 relative">
                <h1 className="font-bold h-[70px] max-sm:h-[90px]  text-2xl max-sm:text-xl ">
                  {item.heading}
                </h1>
                <p className="text-sm max-sm:text-xs  mb-2">{item.para}</p>
                <div className="flex absolute bottom-3 gap-2 items-center text-[#1871ED] text-sm   hover:text-[16px] transition-all cursor-pointer">
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
