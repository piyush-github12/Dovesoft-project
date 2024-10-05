import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Chatbotheropage = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Unlock conversational commerce with bots on WhatsApp, SMS, and more
          </h1>
          <h1 className="text-base font-semibold">
            Drive conversions, nurture leads, and offer 24/7 product support
            with chatbots.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[450px] "
            src="./images/chatbotimages/homepage.webp"
            alt=""
          />
        </div>
      </div>
      <div className="mt-[50px] w-screen">
        <h1 className="text-3xl text-center font-bold">
          Turn chats into checkouts
        </h1>
        <h1 className="text-center text-base px-[15vw] max-md:px-[5vw] mt-[10px]">
          Leverage chatbots to work side-by-side with your team to engage
          directly with customers.
        </h1>
      </div>
    </div>
  );
}

export default Chatbotheropage