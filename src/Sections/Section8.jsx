import React from 'react'
import Section9 from './Section9';
import Footer from './Footer';


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Section8 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // gsap.to("#section8", {
    //   y: "-100%",
    //   scrollTrigger: {
    //     trigger: "#section8",
    //     //  markers: true,
    //     start: "10px -100px ",
    //     end: "-200px -800vh ",
    //     scrub: 2,
    //     //  pin:true
    //   },
    // });
  });

  return (
    <div className="w-[100vw] h-[100vh] relative    bg-[#fff] ">
      <div id="section8" className="w-full h-[100vh]  z-[7]">
        <div className="w-screen h-fit z-[7] relative bg-white pb-[100px]  ">
          <h1 className="text-center text-3xl max-sm:text-2xl font-bold mb-10">
            <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
              Why Choose Dove Soft
            </span>
          </h1>
          <div className="grid grid-cols-4  max-lg:grid-cols-2 gap-10 justify-items-center px-24  max-md:px-5">
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#FF9A0D] flex flex-col items-center  gap-2">
              <img className="w-[54px] " src="./images/image 19.png" alt="" />
              <h1 className="font-bold text-lg ">We Scale with You</h1>
              <h1 className="text-sm max-sm:text-xs text-center">
                Regardless of one or million messages you send, our SMS
                infrastructure will ensure you that they deliver on time.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#3C3585] flex flex-col items-center  gap-2">
              <img className="w-[54px] " src="./images/image 19-1.png" alt="" />
              <h1 className="font-bold text-lg ">Secure</h1>
              <h1 className="text-sm max-sm:text-xs text-center">
                We offer enterprise-grade security to customers in
                highly-regulated sectors.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#B22556] flex flex-col items-center  gap-2">
              <img className="w-[54px] " src="./images/image 19-2.png" alt="" />
              <h1 className="font-bold text-lg ">Enterprise-grade</h1>
              <h1 className="text-sm max-sm:text-xs text-center">
                We connect your messaging flow directly over 220+ carriers in
                200+ countries for international delivery that is best in class.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#116B6B] flex flex-col items-center  gap-2">
              <img className="w-[54px] " src="./images/image 19-3.png" alt="" />
              <h1 className="font-bold text-lg ">Compliance & developers</h1>
              <h1 className="text-sm max-sm:text-xs text-center">
                We align you with the support and developer team. We ensure that
                your dove soft experience is smooth and successful.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-screen h-fit pb-[100px] relative z-[7] bg-white rounded-b-[55px] text-white flex items-center justify-center">
          <div className="w-[80%] h-[300px]  shadow-lg shadow-[#000000b9] rounded-l-full max-md:rounded-l-[15vw] rounded-tr-full max-md:rounded-tr-[15vw]  bg-[#031e42] py-10 flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl max-sm:text-2xl text-center">
              Goodbye isolated interactions. <br />
              <span
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="bg-[#61a3ff] "
              >
                Hello Dove Soft.
              </span>
            </h1>
            <h1 className="text-sm text-center ">
              Where every message meets its perfect match, right when it matters
              most.
            </h1>
            <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
              <h1 className="text-white text-lg  font-bold whitespace-nowrap">
                Book Demo
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* <Section9 /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Section8