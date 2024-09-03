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
      para: "Leverage quick, reliable and scalable SMS API to deliver SMS in 160 countries ",
      explor: "SMS",
    },
    {
      image:"./images/sec-4-2.png",
      heading: "Whatsapp Messaging API",
      para: "Leverage Whatsapp to connect, converse and care for customers",
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
      para: "Boost agent productivity and enhance CSAT with voice API ",
      explor: "Voice",
    },
    {
      image:"./images/sec-4-5.png",
      heading: "Email",
      para: "Execute transactional email for purchase confirmations or shipping updates",
      explor: "Email",
    },
    {
      image:"./images/sec-4-6.png",
      heading: "Instagram messaging API",
      para: "Engage with followers through Instagram Messaging API ",
      explor: "instagram",
    },
  ];

     gsap.registerPlugin(useGSAP);
     gsap.registerPlugin(ScrollTrigger); 

     useGSAP(()=>{

    

      //  gsap.to("#section4", {
      //    y: "-120%",
      //    scrollTrigger: {
      //      trigger: "#section4",
      //     //  markers: true,
      //      start: "10px -100px",
      //      end: "-100px -600vh",
      //      scrub:2,
      //     //  ease:"linear"
      //     //  pin:true
      //    },
      //  });

     })

  

  return (
    <div className="relative min-h-[100vh]  pt-[10vh]  max-sm:pt-[10px] ">
      <div
        id="section4"
        className="w-screen h-fit  relative  z-[11] pb-10 bg-[#fff] rounded-b-[55px] "
      >
        <h1 className="text-3xl max-sm:text-2xl  max-sm:px-[10px] text-center z-10 relative  font-bold mb-10">
          Leverage a single API to{" "}
          <span className="bg-gradient-to-r max-md:whitespace-nowrap max-sm:white from-[#A8CCFF]  to-[#F4F9FF] rounded-md px-2">
            automate conversational engagement
          </span>{" "}
          <br />
          across various messaging channels
        </h1>
        <div className="w-screen h-fit relative  z-10 grid grid-cols-3  px-[10vw] max-sm:px-[5vw] gap-4  max-lg:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[25vw]  h-[400px]  max-sm:h-[450px]  max-md:w-[40vw]   rounded-2xl overflow-hidden"
            >
              <div className=" h-[180px] w-full bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] flex items-center justify-center">
                <img
                  className="w-[140px] max-sm:w-[100px]"
                  src={`${item.image}`}
                  alt=""
                />
              </div>
              <div className=" h-[210px]  px-2 py-2 relative">
                <h1 className="font-bold h-[70px] max-sm:h-[90px]  text-2xl ">
                  {item.heading}
                </h1>
                <p className="text-lg max-sm:text-base  ">{item.para}</p>
                <div className="flex  gap-2 items-center text-[#1871ED] text-lg   hover:text-xl transition-all cursor-pointer">
                  <h1>Explore {item.explor}</h1>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Section5 /> */}
    </div>
  );
};

export default Section4;
