import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';
import Navbar from '../components/Navbar';

const Automationhero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            No-code marketing automation
          </h1>
          <h1 className="text-lg">
            Automate every customer interaction to maximize ROI from your
            marketing efforts, and boost conversion rates. Minimize setup and
            maintenance time, and reallocate resources to high-impact tasks with
            the help of AI and seamless integrations.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[450px] max-md:w-[300px] "
            src="./images/automationimages/hero.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" mt-[50px] px-[5vw] mb-[50px] w-screen">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          Unlock new use cases across all of your <br />
          <span className="text-[#0029C7]">channels and teams</span>
        </h1>
      </div>
    </div>
  );
}

export default Automationhero