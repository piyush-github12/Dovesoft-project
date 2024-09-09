import React from 'react'
import Section9 from './Section9';
import Footer from './Footer';


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import GoodIsolation from '../components/GoodIsolation';

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
    <div className="w-[100vw] min-h-[100vh] relative  pt-10  bg-[#fff] ">
      <div id="section8" className="w-full min-h-[100vh]  z-[7]">
        <div className="w-screen px-[10vw] max-sm:px-[0]  h-fit z-[7] relative bg-white pb-[100px]  ">
          <h1 className="text-center font-['Epilogue']  text-3xl max-sm:text-2xl font-bold mb-10">
            <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
              Why Choose Dove Soft
            </span>
          </h1>
          <div className="grid grid-cols-4  max-lg:grid-cols-2 gap-10 justify-items-center   max-md:px-5">
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[45vw] max-sm:h-[100%] rounded-tl-[30px] p-5 max-sm:p-1 rounded-br-[30px] border-2  border-[#FF9A0D] flex flex-col items-center  gap-2">
              <img className="w-[64px] " src="./images/image 19.png" alt="" />
              <h1 className="font-bold text-center font-['Epilogue'] max-sm:text-xl text-2xl ">We Scale with You</h1>
              <h1 className="text-lg max-sm:text-base text-center">
                Regardless of one or million messages you send, our SMS
                infrastructure will ensure you that they deliver on time.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[45vw] max-sm:h-[100%] rounded-tl-[30px] p-5 max-sm:p-1 rounded-br-[30px] border-2  border-[#3C3585] flex flex-col items-center  gap-2">
              <img className="w-[64px] " src="./images/image 19-1.png" alt="" />
              <h1 className="font-bold text-center font-['Epilogue'] max-sm:text-xl text-2xl ">Secure</h1>
              <h1 className="text-lg max-sm:text-base text-center">
                We offer enterprise-grade security to customers in
                highly-regulated sectors.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[45vw] max-sm:h-[100%] rounded-tl-[30px] p-5 max-sm:p-1 rounded-br-[30px] border-2  border-[#B22556] flex flex-col items-center  gap-2">
              <img className="w-[64px] " src="./images/image 19-2.png" alt="" />
              <h1 className="font-bold text-center font-['Epilogue'] max-sm:text-xl text-2xl ">Enterprise-grade</h1>
              <h1 className="text-lg max-sm:text-base text-center">
                We connect your messaging flow directly over 220+ carriers in
                200+ countries for international delivery that is best in class.
              </h1>
            </div>
            <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[45vw] max-sm:h-[100%] rounded-tl-[30px] p-5 max-sm:p-1 rounded-br-[30px] border-2  border-[#116B6B] flex flex-col items-center  gap-2">
              <img className="w-[64px] " src="./images/image 19-3.png" alt="" />
              <h1 className="font-bold text-center font-['Epilogue'] max-sm:text-xl text-2xl ">Compliance & developers</h1>
              <h1 className="text-lg max-sm:text-base text-center">
                We align you with the support and developer team. We ensure that
                your dove soft experience is smooth and successful.
              </h1>
            </div>
          </div>
        </div>
        <GoodIsolation />
      </div>

      {/* <Section9 /> */}
      {/* <Footer/> */}
    </div>
  );
}

export default Section8