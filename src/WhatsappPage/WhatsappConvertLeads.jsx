import React, { useState } from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const WhatsappConvertLeads = () => {

    const [selected, setselected] = useState(0)

  return (
    <div className="w-screen h-fit  ">
      <div className=" mt-[50px] w-screen">
        <h1 className="text-3xl font-['Epilogue']  text-center font-bold">
          Convert Leads to Customers <br /> via Smart Notifications
        </h1>
        <h1 className="text-center text-base px-[15vw] mt-[20px]">
          Whatsapp CTA button-based Notifications help you <br /> drive users to
          your Website and Boost Conversions
        </h1>
      </div>
      <div className="w-full py-[20px] mt-[20px] flex justify-evenly realtive z[2] px-[10vw] ">
        {[
          "Broadcast Messaging",
          "Live chat",
          "Smart Chatbots",
          "Automate notifications",
          "Track Analytics",
        ].map((item, index) => {
          return (
            <h1
              onClick={() => setselected(index)}
              className={`px-[20px] py-[5px]  h-fit font-bold rounded-md uppercase cursor-pointer ${
                selected == index
                  ? "bg-[#E4FEEC] text-black"
                  : "bg-transparent text-black"
              } `}
            >
              {item}
            </h1>
          );
        })}
      </div>
      <div className="w-screen min-h-[500px] max-md:h-fit flex max-md:block px-[10vw] pt-[50px]">
        <div className="w-[50%] max-md:w-full h-fit flex items-center justify-center">
          <img
            className="w-[400px] "
            src="./images/whatsappPageImages/convertleads.svg"
            alt=""
          />
        </div>

        <div className="w-[50%] max-md:w-full h-fit pb-[50px] max-md:h-fit max-md:pt-[50px] relative z-[2]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  w-[80%] leading-[52px] font-bold">
            45-60% Abandoned Cart Recovery
          </h1>
          <h1 className="w-[90%] text-base">
            Send an Automated Notification to all the users dropping off after
            adding products to your cart.
            <br />
            <br />
            Integrations available with Shopify, WooCommerce, Magento, Opencart,
            CRMs, Custom Ecommerce & more 
          </h1>
          <Bookdemobutton
            clr="transparent"
            textclr="#29C853"
            borderclr="#29C853"
          />
        </div>
      </div>
    </div>
  );
}

export default WhatsappConvertLeads