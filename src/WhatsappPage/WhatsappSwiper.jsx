import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./SMSswiper.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function App() {
  let data = [
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "FREE WhatsApp Business API",
      para: [
        "Get Whatsapp Business API Approval in",
        <span className="font-bold"> 10 Minutes </span>,
        "(FREE with any plan)",
      ],
    },
    {
      image: "./images/whatsappPageImages/Brodcast.png",
      heading: "Broadcast Unlimited Campaigns",
      para: [
        "Broadcast Messages to ",
        <span className="font-bold"> Unlimited Users </span>,
        "every day",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Connect No Code A.I. Chatbots",
      para: [
        "Connect",
        <span className="font-bold"> No-Code Chatbots </span>,
        "from Google Dialogflow in a Single Click",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Multi-Agent Live Chat",
      para: [
        "Enable Multiple Human-Agent",
        <span className="font-bold"> Live Chat </span>,
        "Support on the same Whatsapp number",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Import and Export Contacts",
      para: [
        "Import",
        <span className="font-bold"> Opted-In Contacts </span>,
        "and Broadcast Messages seamlessly.",
      ],
    },
    {
      image: "./images/whatsappPageImages/Dots.png",
      heading: "Send Personalised Messages",
      para: [
        "User",
        <span className="font-bold"> User Attributes </span>,
        "effectively to send personalised campaigns ",
      ],
    },
  ];
  let data2 = [
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Connect Your APIs",
      para: [
        "Easily Connect with Shopify, Hubspot,Salesforce, WooCommerce, Zapier ,Payment Portals, CRMs & more",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Template Messages Approvals",
      para: [
        "Quick Fast Template Message Approval Process (10 minutes - 1hour) via Interactive Dashboard",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Chat CRM Included",
      para: [
        "Manage Contacts & Create segregated audience using various tags, attributes & more",
      ],
    },
    {
      image: "./images/whatsappPageImages/Dots.png",
      heading: "Send Retargeting Campaigns on Whatsapp",
      para: [
        <span className="font-bold"> Segregate </span>,
        " your Audiences Smartly and",
        <span className="font-bold"> Re-Brodcast </span>,
        "for Higher Conversions! ",
      ],
    },
    {
      image: "./images/whatsappPageImages/Dots.png",
      heading: "Schedule Broadcasts",
      para: [
        <span className="font-bold"> Schedule Broadcasts </span>,
        "upto 2 months ahead of time across varying timezones ",
      ],
    },
    {
      image: "./images/whatsappPageImages/Dots.png",
      heading: "Click-tracking",
      para: [
        <span className="font-bold"> Track users </span>,
        " clicking on your message's CTA buttons with this Pro Feature.  ",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Click-to-WhatsApp-Ads",
      para: [
        "Create & Run click-to-WhatsApp ads on Facebook/ Instagram via AiSensy & direct thousands of leads to your WhatsApp. ",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Agent Rules",
      para: [
        "Simplify chat distribution by assigning tags to agents & have them view only those chats that match the assigned tag. ",
      ],
    },
    {
      image: "./images/whatsappPageImages/Group.png",
      heading: "Ecomm+",
      para: ["Integrate your Shopify & WooCommerce stores easily with AiSensy & automate notifications for Order delivery, Abandoned Carts & more "],
    },
  ];

  

  return (
    <>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="SMSswiper">
          <div className="w-screen  h-fit relative  z-10 grid grid-cols-3  px-[10vw] max-sm:px-[5vw] gap-4  max-lg:grid-cols-2">
            {data.map((item) => (
              <div
                key={item.heading}
                className="w-[25vw]  h-[200px]  max-sm:h-[300px]  max-md:w-[40vw]   rounded-2xl overflow-hidden"
              >
                <div className=" h-[200px] text-left px-2 py-2 relative">
                  <div className="flex max-md:block gap-2 items-start ">
                    <img
                      className="w-[40px] h-[40px]"
                      src={item.image}
                      alt=""
                    />
                    <h1 className="font-bold min-h-[70px] max-sm:h-[100px]  text-2xl ">
                      {item.heading}
                    </h1>
                  </div>
                  <p className="text-lg max-sm:text-base  ">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="SMSswiper">
          <div className="w-screen h-fit relative  z-10 grid grid-cols-3  px-[10vw] max-sm:px-[5vw] gap-4  max-lg:grid-cols-2">
            {data2.map((item) => (
              <div
                key={item.heading}
                className="w-[25vw]  min-h-[200px]  max-sm:h-[300px]  max-md:w-[40vw]   rounded-2xl overflow-hidden"
              >
                <div className=" min-h-[200px] text-left px-2 py-2 relative">
                  <div className="flex max-md:block gap-2 items-start ">
                    <img
                      className="w-[40px] h-[40px]"
                      src={item.image}
                      alt=""
                    />
                    <h1 className="font-bold min-h-[70px] max-sm:h-[100px]  text-2xl ">
                      {item.heading}
                    </h1>
                  </div>
                  <p className="text-lg max-sm:text-base  ">{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
