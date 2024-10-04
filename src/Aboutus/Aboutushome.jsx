import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Aboutushome = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            About us
          </h1>
          <h1 className="text-base font-semibold">
            Dove Soft, established in Mumbai in 2011, provides integrated cloud
            communication solutions for SMS, Voice, and Email. Offering services
            through API/SMPP, their solutions easily integrate into
            applications. Dove Soft develops both ready-to-use and customized
            communication applications, addressing common business needs while
            tailoring solutions for specific requirements.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[500px] max-md:w-[300px] "
            src="./images/whitelogo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutushome