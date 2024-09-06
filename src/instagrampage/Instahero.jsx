import React from 'react'
import Navbar from "../components/Navbar"
import Bookdemobutton from '../components/Bookdemobutton';

const Instahero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar color="#9777E2" logincolor="#fff" logintextcolor="#000" />
      <div className="w-screen  min-h-[800px] pt-[150px] max-md:pt-[120px] px-[10vw] max-sm:px-[5vw] bg-gradient-to-r from-[#5B51D8] relative overflow-hidden to-[#833AB4] text-white flex max-md:block  pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  bottom-0 right-0 translate-x-[30%] translate-y-[20%] bg-[#F04C5B] blur-[100px]  rounded-full "></div>
        <div className="w-[55%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px]  font-['Epilogue']  leading-[52px] font-bold">
            Delight Your Customers With Instagram Inbox Solution
          </h1>
          <h1 className="text-lg">
            Build meaningful connections and boost customer engagement with your
            target audience using the Instagram inbox from ControlHippo.
          </h1>
          <div className="flex items-center gap-[20px]">
            <img
              className="w-[25px] h-[25px]"
              src="./images/instagram/check.svg"
              alt=""
            />
            <h1 className="text-lg">
              Elevate customer satisfaction with live customer support
            </h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img
              className="w-[25px] h-[25px]"
              src="./images/instagram/check.svg"
              alt=""
            />
            <h1 className="text-lg">
              Personalize interactions using pre-built response templates
            </h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img
              className="w-[25px] h-[25px]"
              src="./images/instagram/check.svg"
              alt=""
            />
            <h1 className="text-lg">
              Keep track of customer conversations from a single dashboard
            </h1>
          </div>
          <div className="flex items-center gap-[20px]">
            <img
              className="w-[25px] h-[25px]"
              src="./images/instagram/check.svg"
              alt=""
            />
            <h1 className="text-lg">
              Elevate customer satisfaction with live customer support
            </h1>
          </div>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[45%] h-[600px]  max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[500px] "
            src="./images/instagram/heropage.svg"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Instahero