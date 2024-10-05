import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";


const SMSsection5 = () => {

    let data = [
      {
        nm: "Setup SMS messages in minutes",
        para: "Unlock the power of SMS campaigns with our credit bundles. Enable SMS campaigns in just one click — no complex setup needed.",
      },
      {
        nm: "Create campaigns that resonate",
        para: "Craft the perfect text message to engage customers. Turn your SMS into MMS by adding an image .",
      },
      {
        nm: "Connect with your target audience",
        para: "Ensure your messages are always relevant by targeting the right audience through segments based on location, preferences, purchase history, and more..",
      },
      {
        nm: "Track campaign performance",
        para: "Enhance your marketing strategy by leveraging reports and statistics to understand what resonates with your audience. Keep a close eye on key campaign metrics like delivery and conversion rates.",
      },
    ];

    const [open, setopen] = useState(0)


  return (
    <div className="w-screen min-h-[800px] max-md:min-h-[900px]  px-[5vw] ">
      <div className="w-[100%] min-h-[800px] max-md:min-h-[900px] relative text-white rounded-[55px] overflow-hidden">
        <div className="relative  z-[9] top-0 left-0 pt-20 w-full h-full ">
          <h1 className="text-3xl font-['Epilogue']  text-center mb-20 font-bold">
            Build closer connections with SMS campaigns
          </h1>
          <div className="flex max-md:flex-col h-fit">
            <div className="h-full w-[55%] max-md:w-[100%] max-md:h-fit px-[5vw]  flex flex-col justify-center">
              {data.map((item, index) => {
                return (
                  <div
                    className={`w-full h-fit border-b-2 py-5 transition-all ease-linear duration-200 ${
                      open == index ? "border-[#96C2FF]" : "border-[#ffffffb0]"
                    }  `}
                  >
                    <h1
                      className={`text-xl font-['Epilogue']   font-bold flex justify-between items-center transition-all ease-linear duration-200  ${
                        open == index ? "text-[#96C2FF]" : "text-white"
                      }`}
                    >
                      {item.nm}
                      <IoIosArrowDown
                        onClick={() => {
                          index == open ? setopen(50) : setopen(index);
                        }}
                        className={`arrow cursor-pointer text-[40px] transition-all ease-linear duration-200 ${
                          open == index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </h1>
                    <h1
                      className={`text-base mt-2  overflow-hidden mb-2 transition-all ease-linear duration-200 ${
                        open == index ? "h-fit" : "h-0"
                      } `}
                    >
                      {item.para}
                    </h1>
                  </div>
                );
              })}
            </div>
            <div className=" h-[500px] max-md:h-fit max-md:py-[50px] w-[45%] max-md:w-[100%] flex  items-center max-md:justify-center">
              <img
                className="w-[90%] "
                src="./images/sms/SMS_campaigns.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 w-[100%] h-[100%] object-cover"
          src="./images/BlueBackground.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default SMSsection5