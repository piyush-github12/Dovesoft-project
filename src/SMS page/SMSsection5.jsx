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
        para: "Unlock the power of SMS campaigns with our credit bundles. Enable SMS campaigns in just one click — no complex setup needed.",
      },
      {
        nm: "Connect with your target audience",
        para: "Unlock the power of SMS campaigns with our credit bundles. Enable SMS campaigns in just one click — no complex setup needed.",
      },
      {
        nm: "Track campaign performance",
        para: "Unlock the power of SMS campaigns with our credit bundles. Enable SMS campaigns in just one click — no complex setup needed.",
      },
    ];

    const [open, setopen] = useState(0)


  return (
    <div className="w-screen h-[850px]  px-[5vw] ">
      <div className="w-[100%] h-full relative text-white rounded-[55px] overflow-hidden">
        <img
          className="absloute w-[100%] h-[100%] "
          src="./images/BlueBackground.png"
          alt=""
        />

        <div className="absolute top-0 pt-20 w-full h-full ">
          <h1 className="text-3xl text-center mb-20 font-bold">
            Build closer connections with SMS campaigns
          </h1>
          <div className="flex h-fit">
            <div className="h-full w-[60%] px-[5vw]  flex flex-col justify-center">

              {
                data.map((item, index)=>{
                  return (
                    <div
                      className={`w-full h-fit border-b-2 py-5 transition-all ease-linear duration-200 ${
                        open == index
                          ? "border-[#96C2FF]"
                          : "border-[#ffffffb0]"
                      }  `}
                    >
                      <h1
                        className={`text-3xl  font-bold flex justify-between items-center transition-all ease-linear duration-200  ${
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
                        className={`text-lg mt-5  overflow-hidden mb-5 transition-all ease-linear duration-200 ${
                          open == index ? "h-fit" : "h-0"
                        } `}
                      >
                        {item.para}
                      </h1>
                    </div>
                  );})
              }
            </div>
            <div className=" h-[600px]  w-[40%] flex  items-center ">
              <img
                className="w-[90%]"
                src="./images/SMSsection5image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SMSsection5