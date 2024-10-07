import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Careershero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Join a Team That Redefines Possibilities
          </h1>
          <h1 className="text-base font-semibold">
            We’re not just building websites; we’re crafting solutions that
            leave a lasting impact. If you’re passionate, driven, and ready to
            be part of a team that’s shaping the future of digital experiences,
            we’d love to meet you. Come redefine possibilities with us!
          </h1>
          {/* <Bookdemobutton clr="#fff" textclr="#000" /> */}
        </div>
        <div className="w-[50%] h-[400px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[450px] max-md:w-[300px] "
            src="./images/careers/careershero.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Careershero