import React, { useState } from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const WhatsappConvertLeads = () => {

    const [selected, setselected] = useState(0)


    let data = [
      {
        topic: "Abandoned Cart Recovery",
        heading: "45-60% Abandoned Cart Recovery",
        description: [
          `Send an Automated Notification to all the users dropping off after adding products to your cart.`,
          <br />,
          <br />,
          `Integrations available with Shopify, WooCommerce, Magento, Opencart, CRMs, Custom Ecommerce & more `,
        ],
        image: "./images/whatsappPageImages/convertleads.svg",
      },
      {
        topic: "Application drop-offs",
        heading: "Bring them Back to Complete Application",
        description: [
          `Send timely notifications to users dropping off from your course application forms. `,
          <br />,
          <br />,
          `Send necessary course details with Smart CTA buttons & boost signups upto 3X!`,
        ],
        image: "./images/whatsappPageImages/convertlead2.webp",
      },
      {
        topic: "Reminder",
        heading: "Send Payment Reminders & Updates",
        description: [
          `Send Payment reminders, Event updates and drive users to your payment portals and events instantly!`,
        ],
        image: "./images/whatsappPageImages/convertlead3.webp",
      },
      {
        topic: "Product details",
        heading: "Send Product Details with Smart Buttons",
        description: [
          "Share Details of your Products, Services & Courses to your Leads, Drive Instant Interest and Conversions via Clickable Buttons. ",
          <br />,
          <br />,
          "Send Images, Videos & Docs to thousands of leads in one go!",
        ],
        image: "./images/whatsappPageImages/convertlead4.webp",
      },
      {
        topic: "Feedback + offer",
        heading: "Drive Re-orders via [Feedback + Offer] Strategy",
        description: [
          "Request Feedback from your existing customers using Quick Reply Notifications. As they click on any feedback your Whatsapp Chatbot sends them an EXCLUSIVE Limited Period Offer! ",
          <br />,
          <br />,
          "Boost your Re-Orders in No time using this strategy!",
        ],
        image: "./images/whatsappPageImages/convertlead5.webp",
      },
    ];

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
      <div className="w-full py-[20px] px-[5vw] mt-[20px] relative z-[2] overflow-hidden">
        <div className="flex whitespace-nowrap py-[10px] px-[5vw] overflow-x-auto custom-scrollbar">
          {data.map((item, index) => {
            return (
              <h1
                onClick={() => setselected(index)}
                style={{ userSelect: "none" }}
                className={`px-[20px] py-[5px] h-fit font-bold rounded-md uppercase cursor-pointer mx-2 ${
                  selected == index
                    ? "bg-[#E4FEEC] text-black"
                    : "bg-transparent text-black"
                } `}
              >
                {item.topic}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="w-screen min-h-[500px] max-md:h-fit flex max-md:block px-[10vw] pt-[50px]">
        <div className="w-[50%] max-md:w-full h-fit flex items-center justify-center">
          <img
            className="w-[400px] "
            src={data[selected].image}
            alt=""
          />
        </div>

        <div className="w-[50%] max-md:w-full h-fit pb-[50px] max-md:h-fit max-md:pt-[50px] relative z-[2]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  w-[80%] max-md:w-full leading-[52px] font-bold">
           {data[selected].heading}
          </h1>
          <h1 className="w-[90%] max-md:w-full text-base">
            {data[selected].description}
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