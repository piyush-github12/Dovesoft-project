import React from 'react'
import Navbar from '../components/Navbar'
import SMSsection3 from "./SMSsection3.jsx"
import SMSsection4 from "./SMSsection4.jsx"
import SMSsection5 from "./SMSsection5.jsx"
import Bookdemobutton from '../components/Bookdemobutton.jsx'
import SMSsection6 from './SMSsection6.jsx'
import GoodIsolation from '../components/GoodIsolation.jsx'
import Section9 from '../Sections/Section9.jsx'

const SMSpage = () => {

  
  return (
    <div className="bg-[#fff] overflow-hidden relative">
      <Navbar />
      <div className="w-screen min-h-[650px] bg-gradient-to-tr from-[#072142] to-[#253164] text-white flex max-md:flex-col max-md:gap-20">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:w-full max-md:h-fit relative z-[2]  pb-[20px] pt-[200px]  max-md:pt-[150px] pl-[10vw] max-md:px-[5vw] flex flex-col  gap-5">
          <h2 className="rounded-[50px] border-2 border-[#ffffff8d] text-base w-fit px-[20px] whitespace-nowrap ">
            OTP, Notification & Marketing
          </h2>
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Connect instantly with SMS
          </h1>
          <h1 className="text-base">
            Boost engagement and ROI with SMS campaigns—over 90% of messages are
            read within three minutes. Connect directly with customers through
            personalized messages, updates, and special offers.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%]  min-h-[650px] max-md:w-full max-md:min-h-fit pt-2 flex items-end justify-center">
          <img
            className="w-[400px] max-sm:w-[80vw]  "
            src="./images/SMS-hero.png"
            alt=""
          />
        </div>
      </div>
      <div className="text-[#021E43] mt-[50px] px-[10vw] max-md:px-[5vw] w-screen">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          Send message with programmable SMS API
        </h1>
        <h1 className="text-center text-base px-[15vw] max-md:px-[0] mt-[30px]">
          Enable SMS API service in your application. With the omnichannel
          experience that SMS gateway API provides, we ensure that your messages
          are delivered to your customers smoothly and reliably.
        </h1>
      </div>
      <SMSsection3 />
      <SMSsection4 />
      <SMSsection5 />
      <SMSsection6 />
      <GoodIsolation />
      <Section9 />
    </div>
  );
}

export default SMSpage