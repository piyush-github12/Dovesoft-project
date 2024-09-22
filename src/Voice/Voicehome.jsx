import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Voicehome = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Voice solutions for your business
          </h1>
          <h1 className="text-lg">
            Voice solutions provide an easy way to rach your customers and
            create a more visible image for your business. It can help you to
            conrert a caller into a customers.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="h-[500px] max-md:h-[400px] "
            src="./images/OTPimages/hero.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" mt-[50px] px-[5vw] w-screen">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          1. Voice Broadcasting
        </h1>
        <h1 className="text-center text-lg mt-[20px] ">
          Voice Broadcasting is a technique of sending pre-recorded voice
          messages to your audience. Our interactive voice broadcasting platform
          is based on latest technology and is capable of handling huge traffic.
        </h1>
      </div>
    </div>
  );
}

export default Voicehome