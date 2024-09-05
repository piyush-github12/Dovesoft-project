import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const WhatsappConvertLeads = () => {
  return (
    <div className="w-screen h-fit  ">
      <div className=" mt-[50px] w-screen">
        <h1 className="text-3xl font-['Epilogue']  text-center font-bold">
          Convert Leads to Customers <br /> via Smart Notifications
        </h1>
        <h1 className="text-center text-lg px-[15vw] mt-[20px]">
          Whatsapp CTA button-based Notifications help you <br /> drive users to
          your Website and Boost Conversions
        </h1>
      </div>
      <div className="w-screen h-[500px] max-md:h-fit flex max-md:block px-[10vw] pt-[100px]">
        <div className="w-[50%] max-md:w-full h-fit">
          <img
            className="w-[400px] "
            src="./images/whatsappPageImages/convertleads.svg"
            alt=""
          />
        </div>
        <div className="w-[50%] max-md:w-full h-full max-md:h-fit max-md:pt-[50px] relative z-[2]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  w-[80%] leading-[52px] font-bold">
            45-60% Abandoned Cart Recovery
          </h1>
          <h1 className="w-[90%] text-lg">
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