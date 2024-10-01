import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SMSswiper.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function App() {
  let data = [
    {
      image: "./images/sms/firstbox1.svg",
      heading: "Protocol",
      para: "SMPP, HTTP, HTTPs, XML, JSON and Proprietary API's",
    },
    {
      image: "./images/sms/firstbox2.svg",
      heading: "Unicode Support",
      para: "Unicode and Flash SMS",
    },
    {
      image: "./images/sms/firstbox3.svg",
      heading: "Black Listing",
      para: "MSISDN & keyword in SMS text",
    },
    {
      image: "./images/sms/firstbox4.svg",
      heading: "Security Complaint",
      para: "Data encryption in rest and in motion",
    },
    {
      image: "./images/sms/firstbox5.svg",
      heading: "API Format",
      para: "Robust RESTful, Multi format API HTTPs, XML, JSON",
    },
    {
      image: "./images/sms/firstbox6.svg",
      heading: "Short URL",
      para: "Auto short URL from any source like SMPP, HTTP and UI",
    },
  ];
  let data2 = [
    {
      image: "./images/sms/secondbox1.svg",
      heading: "Smart Addons",
      para: "Run surveys, feedback, quiz, contact form, offer code camapigns",
    },
    {
      image: "./images/sms/secondbox2.svg",
      heading: "Tracable report",
      para: "When a user clicks on a link in a short URL or a smart addon, the application can trace the device information",
    },
    {
      image: "./images/sms/secondbox3.svg",
      heading: "Encode Content",
      para: "Automatically encode the message contents for sensitive information, so that no one, not even our support staff, can view this content.",
    },
    {
      image: "./images/sms/secondbox4.svg",
      heading: "Clean Infrmative Reports",
      para: `Delivery Timing Report: This report outlines the number of SMS messages that were delivered within specific time frames - 5 seconds, 15 seconds, 30 seconds, and over 30 seconds. Separate Undelivered SMS Report: Additionally, there is a separate report that groups undelivered SMS messages, categorizing them by the reason for non-delivery.`,
    },
    {
      image: "./images/sms/secondbox5.svg",
      heading: "OTP Generator & Validation API",
      para: "We have an API that generates an OTP (One-Time Password) and sends it to the user's mobile number. We also have a separate API that is used to validate the delivered OTP.",
    },
    {
      image: "./images/sms/secondbox6.svg",
      heading: "Easiest DLT Templates Management",
      para: "Export template file from the DLT portal and then import it into our application. That's all there is to it.",
    },
  ];

     gsap.registerPlugin(useGSAP);
     gsap.registerPlugin(ScrollTrigger); 

     useGSAP(() => {


       gsap.from(".smsswiperboxes", {
         x: -200,
         duration: 0.4,
         opacity: 0,
         stagger: 0.05,
         ease: "power2.out",
         scrollTrigger: {
           trigger: ".smsswiperboxes",
           start: "top 70%",
           end: "top top",
           toggleActions: "play none none reverse",
         },
       });

       const animateSlidefirst = () => {
         gsap.from(".smsswiperboxes", {
           x: -200,
           duration: 0.4,
           opacity: 0,
           stagger: 0.05,
           ease: "power2.out",
           scrollTrigger: {
             trigger: ".smsswiperboxes",
             start: "top 70%",
             end: "top 0",
             toggleActions: "play none none reverse",
           },
         });
       };

       const animateSlide = () => {
         gsap.from(".smsswiperboxes2", {
           x: -200,
           duration: 0.4,
           opacity: 0,
           stagger: 0.05,
           ease: "power2.out",
           scrollTrigger: {
             trigger: ".smsswiperboxes2",
             start: "top 70%",
             end: "top 0",
             toggleActions: "play none none reverse",
           },
         });
       };

       // Add event listener to Swiper navigation buttons
       const swiperInstance = document.querySelector('.swiper').swiper;
       swiperInstance.on('slideNextTransitionStart', animateSlide);
       swiperInstance.on('slidePrevTransitionStart', animateSlidefirst);

     });


 const FeatureCard = ({ image, heading, para }) => {
    
   const [isExpanded, setIsExpanded] = useState(false);

   const handleToggleExpand = () => {
     setIsExpanded(!isExpanded);
   };

   const sefalse = ()=>{
    setIsExpanded(false)
   }


   return (
     <div className=" smsswiperboxes2 w-[25vw] h-fit  max-md:w-[40vw] rounded-2xl overflow-hidden">
       <div className="h-[180px]  w-full bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] flex items-center justify-center">
         <img className="w-[140px] max-sm:w-[100px]" src={`${image}`} alt="" />
       </div>
       <div onMouseLeave={sefalse} className="min-h-[180px] text-left px-2 py-2 relative ">
         <h1 className="font-bold font-['Epilogue'] min-h-[40px]  text-2xl">
           {heading}
         </h1>
         <p className="text-base max-sm:text-base  ">
           {isExpanded ? para : `${para.substring(0, 80)}...`}
         {para.length > 80 && (
           <button
             className="text-blue-500 font-[500] cursor-pointer"
             onClick={handleToggleExpand}
           >
             {isExpanded ? "Read Less" : "Read More"}
           </button>
         )}
         </p>
       </div>
     </div>
   );
 };


  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide className="SMSswiper ">
          <div className="w-screen h-fit relative  z-10 grid grid-cols-3  px-[10vw] max-sm:px-[5vw] gap-4  max-lg:grid-cols-2">
            {data.map((item) => (
              <div
                key={item.heading}
                className= "smsswiperboxes w-[25vw]  h-fit  max-sm:h-[450px]  max-md:w-[40vw]   rounded-2xl overflow-hidden"
              >
                <div className=" h-[180px] w-full bg-gradient-to-b from-[#96C2FF] to-[#E4F0FF] flex items-center justify-center">
                  <img
                    className="w-[140px] max-sm:w-[100px]"
                    src={`${item.image}`}
                    alt=""
                  />
                </div>
                <div className=" min-h-[180px] text-left px-2 py-2 relative">
                  <h1 className="font-bold font-['Epilogue']  min-h-[40px]  text-2xl ">
                    {item.heading}
                  </h1>
                  <p className="text-base max-sm:text-base  ">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="SMSswiper">
          <div className="w-screen h-fit relative z-10 grid grid-cols-3 px-[10vw] max-sm:px-[5vw] gap-4 max-lg:grid-cols-2 ">
            {data2.map((item) => (
              <FeatureCard key={item.heading} {...item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
