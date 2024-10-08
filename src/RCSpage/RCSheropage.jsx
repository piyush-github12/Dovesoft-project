import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const RCSheropage = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h2 className="rounded-[50px] border-2 border-[#ffffff8d] text-base font-semibold w-fit px-[20px] ">
            Rich Communication Service
          </h2>
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Use RCS message over conventional SMS
          </h1>
          <h1 className="text-base font-semibold">
            Enhance the messaging experience by sending rich chats, which go
            beyond traditional SMS. With feature-rich messaging, you can send
            multimedia images, videos, links, and much more.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[500px] "
            src="./images/RCSimages/hero.webp"
            alt=""
          />
        </div>
      </div>
      <div className="text-[#021E43] mt-[50px] w-screen">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          Engage Customers Over RCS Business Messaging
        </h1>
        <h1 className="text-center text-base px-[15vw] max-md:px-[5vw] mt-[30px]">
          RCS, or Rich Communication Service is a new version of messaging that
          follows a new universal standard protocol. These messages support the
          text with multimedia, chat, Read recipient, integration API and more.
          With outstanding performance over conventional SMS, it carries a
          branding impression and impressive chat formation. RCS business
          messaging helps customers engage in new better ways.
        </h1>
      </div>
    </div>
  );
}

export default RCSheropage