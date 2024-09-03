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
      <div className="w-screen h-[80vh] min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] text-white flex">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#92AAFF] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full relative z-[2] pt-[50px] pl-[10vw] flex flex-col justify-center">
          <h2 className="rounded-[50px] border-2 border-[#ffffff8d] text-lg w-fit px-[20px] ">
            OTP, Notification & Marketing
          </h2>
          <h1 className="text-6xl font-bold">Connect instantly with SMS</h1>
          <h1 className="text-lg">
            Boost engagement and ROI with SMS campaigns—over 90% of messages are
            read within three minutes. Connect directly with customers through
            personalized messages, updates, and special offers.
          </h1>
          <Bookdemobutton />
        </div>
        <div className="w-[50%] h-full flex items-end justify-center">
          <img className="w-[400px] " src="./images/SMS-hero.png" alt="" />
        </div>
      </div>
      <div className="text-[#021E43] mt-[50px] w-screen">
        <h1 className="text-3xl text-center font-bold">
          Send message with programmable SMS API
        </h1>
        <h1 className="text-center text-lg px-[15vw] mt-[30px]">
          Enable SMS API service in your application. With the omnichannel
          experience that SMS gateway API provides, we ensure that your messages
          are delivered to your customers smoothly and reliably.
        </h1>
      </div>
      <SMSsection3 />
      <SMSsection4 />
      <SMSsection5/>
      <SMSsection6/>
      <GoodIsolation/>
      <Section9/>
    </div>

   
  );
}

export default SMSpage