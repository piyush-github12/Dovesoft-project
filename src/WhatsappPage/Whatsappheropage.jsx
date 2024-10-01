import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const Whatsappheropage = () => {
  return (
    <div className="w-screen h-fit  ">
      <div className="w-screen min-h-[600px] px-[10vw] max-md:px-[5vw] text-white bg-gradient-to-tr from-[#3AB52E] to-[#0BB92B] pt-[200px] max-sm:pt-[150px] pb-[2vh] flex max-md:block ">
        <div className="w-[50%] max-md:w-full h-full max-md:h-fit relative z-[2] flex flex-col  gap-5">
          <h2 className="rounded-[50px] border-2 border-[#ffffff8d] text-base font-semibold w-fit px-[20px] ">
            Whatsapp API
          </h2>
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Your Complete <br /> WhatsApp <br /> Engagement Platform
          </h1>
          <h1 className="w-[90%] text-base font-semibold">
            Boost engagement and ROI with SMS campaigns—over 90% of messages are
            read within three minutes. Connect directly with customers through
            personalized messages, updates, and special offers.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="h-[550px] max-md:h-fit max-md:py-[50px]  w-[50%] max-md:w-full flex items-center  ">
          <img src="./images/whatsappPageImages/hero.png" alt="" />
        </div>
      </div>
      <div className="w-screen px-[10vw] min-h-[600px] py-[20px] flex max-md:block">
        <div className="w-[50%] max-md:w-full h-full max-md:h-fit relative z-[2] pt-[50px] flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  w-[80%] leading-[52px] font-bold">
            Import, Broadcast & Track
          </h1>
          <h1 className="w-[90%] text-base">
            Simply Import Broadcast Messages to thousands of your opted-in users
            in a single click using Smart Campaign Manager and Dovesoft CRM. 🎉
            <br />
            <br />
            Track the results in Real-time for each campaign.
          </h1>
          <Bookdemobutton clr="#3AB52E" textclr="#fff" />
        </div>
        <div className="h-[550px] max-md:h-fit max-md:py-[50px]  w-[50%] max-md:w-full flex items-center justify-center ">
          <img src="./images/whatsappPageImages/page2image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Whatsappheropage