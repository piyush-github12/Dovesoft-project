import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";



import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, Route, Routes } from "react-router-dom";
import SMSPage from "../SMS page/SMSpage";

const Navbar = (params) => {
  gsap.registerPlugin(useGSAP);

  const [navon, setnavon] = useState(false)

  
 
  // const navonclick = ()=>{
  //   setnavon(true)

  //   if(navon == true){
  //     let navpage = document.querySelector("#navpage")
  //     navpage.style.transform = "translate(0 ,0)"
  //     navpage.style.display = "flex"
  //   }
  // }
  // const navclickoff = ()=>{
  //   setnavon(false)

  //   if(navon == true){}
  //   else{
  //     let navpage = document.querySelector("#navpage");
  //     navpage.style.transform = "translate(-110% ,0)";
  //     navpage.style.display = "hidden";
  //   }
  // }

  const navdata = [
    {
      mainname: "Channels",
      subname: [
        {
          subnameimage: <BiMessageDetail />,
          subsubname: "SMS",
          elemname: "sms",
        },
        {
          subnameimage: <FaWhatsapp />,
          subsubname: "Whatsapp",
          elemname: "whatsapp",
        },
        {
          subnameimage: <MdOutlineMessage />,
          subsubname: "RCS",
          elemname: "rcs",
        },
        {
          subnameimage: <RiUserVoiceLine />,
          subsubname: "Voice",
          elemname: "",
        },
        {
          subnameimage: <MdOutlineMail />,
          subsubname: "Email",
          elemname: "email",
        },
        {
          subnameimage: <FaInstagram />,
          subsubname: "Instagram`",
          elemname: "instagram",
        },
      ],
    },
    {
      mainname: "Utility Tools",
      subname: [
        {
          subnameimage: <BiMessageDetail />,
          subsubname: "Automation",
          elemname: "automation",
        },
        {
          subnameimage: <FaWhatsapp />,
          subsubname: "Short UR:",
        },
        {
          subnameimage: <MdOutlineMessage />,
          subsubname: "File Hosting",
        },
        {
          subnameimage: <RiUserVoiceLine />,
          subsubname: "Encrypt Content",
        },
        {
          subnameimage: <MdOutlineMail />,
          subsubname: "OTP Generator",
        },
        {
          subnameimage: <MdOutlineMail />,
          subsubname: "Smart Addons",
        },
        {
          subnameimage: <FaWhatsapp />,
          subsubname: "File GPT",
        },
      ],
    },
    {
      mainname: "Smart Products",
      subname: [
        {
          subnameimage: <BiMessageDetail />,
          subsubname: "OTP Free",
        },
      ],
    },
  ];

  
  
  const [dropdoun, setdropdoun] = useState(false)
  const elementRef = useRef(null);

  useGSAP(()=>{
     if (dropdoun) {
       gsap.to("#dropdown", {
         height: "fit-content",
         paddingTop: "120px",
         paddingBottom: "20px",
       });
    } else {
      gsap.to("#dropdown", {
        height: "0px",
        paddingTop: "0",
        paddingBottom: "0",
      });
    }
  },[dropdoun ]);
  
  

  return (
    <div  className="absolute top-0 w-[100vw]   p-1 z-50 flex items-center justify-center">
      <div
        style={
          params.color
            ? { backgroundColor: params.color }
            : { backgroundColor: "#021E43" }
        }
        className={`w-[90vw] h-[100px] relative px-[3vw]  mt-[20px] max-md:mt-[20px] text-white rounded-full flex items-center justify-between max-lg:justify-center`}
      >
        <div className="w-[20%] font-bold flex text-lg justify-center items-center max-lg:hidden">
          <div
            onMouseEnter={() => setdropdoun(true)}
            onMouseLeave={() => setdropdoun(false)}
            className="w-[50%] h-[50px] flex justify-center items-center gap-2 cursor-pointer"
          >
            <h1>Product</h1>
            <IoIosArrowDown className="mt-[5px]" />
          </div>
          <div className="w-[50%] h-[50px] flex justify-center items-center gap-2 cursor-pointer ">
            <h1>Compony</h1>
            <IoIosArrowDown className="mt-[5px]" />
          </div>
        </div>

        <div className=" h-full  ">
          <Link to="/">
            <img className="h-[120%]" src="./images/whitelogo.png" alt="" />
          </Link>
        </div>

        <div
          id="nn"
          className="w-[20%] flex justify-end max-lg:hidden items-center gap-10"
        >
          <div
            style={{
              backgroundColor: params.logincolor,
              color: params.logintextcolor,
            }}
            className={`min-w-fit w-[100px] h-[50px]  border-2 border-[#fff] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
          >
            <h1 className=" text-lg  font-bold whitespace-nowrap">Log-in</h1>
          </div>
        </div>

        <div
          onClick={() => setdropdoun(true)}
          // onMouseLeave={() => setdropdoun(false)}
          className="absolute right-[30px] h-[30px] w-[30px]  text-[30px] hidden max-lg:block"
        >
          <RiMenu3Line />
        </div>

        <div
          id="dropdown"
          ref={elementRef}
          onMouseLeave={() => setdropdoun(false)}
          className="absolute left-0 top-[0px] text-black flex max-lg:flex-col max-lg:items-center max-lg:gap-10  justify-center    px-[3vw]   w-full h-[0px] overflow-hidden bg-white rounded-[50px] "
        >
          <div className="w-[90vw]  h-[100px] absolute top-0 z-[99] px-[3vw]    bg-[#ffffff] text-black rounded-full flex items-center justify-between max-lg:justify-center">
            <div className="w-[20%] font-bold flex text-lg justify-center items-center max-lg:hidden">
              <div
                onMouseEnter={() => setdropdoun(true)}
                className="w-[50%] h-[50px] flex justify-center items-center gap-2 cursor-pointer"
              >
                <h1>Product</h1>
                <IoIosArrowDown className="mt-[5px]" />
              </div>
              <div className="w-[50%] h-[50px] flex justify-center items-center gap-2 cursor-pointer ">
                <h1>Compony</h1>
                <IoIosArrowDown className="mt-[5px]" />
              </div>
            </div>
            <Link to="/">
              <div className=" h-[100px] flex items-center  ">
                <img
                  className="h-[80px]  "
                  src="./images/blacklogo.png"
                  alt=""
                />
              </div>
            </Link>

            <div
              id="nn"
              className="w-[20%] flex justify-end max-lg:hidden items-center gap-10"
            >
              <div className="min-w-fit w-[100px] h-[50px]  border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
                <h1 className="text-black text-lg  font-bold whitespace-nowrap">
                  Log-in
                </h1>
              </div>
            </div>

            <div
              onClick={() => setdropdoun(false)}
              // onMouseLeave={() => setdropdoun(false)}
              className="absolute right-[30px] h-[30px] w-[30px]  text-[30px] hidden max-lg:block"
            >
              <RiMenu3Line />
            </div>
          </div>

          <div className="w-[70%] max-lg:w-full  flex max-sm:grid  max-sm:grid-cols-1 max-sm:justify-items-center max-sm:gap-10">


          {navdata.map((item, index) => {
            return (
              <div className="w-[33%]  h-fit max-sm:flex max-sm:flex-col max-sm:w-[250px]  ">
                <h1 className="text-2xl max-sm:text-center font-bold">{item.mainname}</h1>

                {item.subname.map((subitem, i) => {
                  return (
                    <div className="flex items-center cursor-pointer  mt-5  gap-2">
                      <div className="w-[30px] flex items-center justify-center h-[30px] text-[#61a3ff] text-[25px]">
                        {subitem.subnameimage}
                      </div>

                      <Link
                        to={`/${subitem.elemname ? subitem.elemname : ""}`}
                        className="text-xl  "
                      >
                        {subitem.subsubname}
                      </Link>
                    </div>
                  );
                })}
              </div>
            );
          })}
          </div>
          <div className="w-[350px]  h-[400px] max-lg:w-[400px] flex flex-col pl-10 justify-evenly  border-l-2 border-[#00000075] max-lg:border-none p-2">
            <div className="h-[30%] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2">
              <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                <h1 className="font-bold text-xl "> Live Chat</h1>
                <h2 className="text-xs ">
                  Multiple Agent can do live chat for these channels, Whatsapp,
                  Instagram, Facebook & RCS
                </h2>
              </div>
              <div className="w-[30%] flex justify-center items-center h-full">
                <img className="w-full " src="./images/nav1.png" alt="" />
              </div>
            </div>
            <div className="h-[30%] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 ">
              <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                <h1 className="font-bold text-xl ">Chat Bot</h1>
                <h2 className="text-xs ">Easey to build chat bots</h2>
              </div>
              <div className="w-[30%] flex justify-center items-center h-full">
                <img className="w-full " src="./images/nav2.png" alt="" />
              </div>
            </div>
            <div className="h-[30%] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 ">
              <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                <h1 className="font-bold text-xl "> integration</h1>
                <h2 className="text-xs ">Explore Digital tools</h2>
              </div>
              <div className="w-[30%] flex justify-center items-center h-full">
                <img className="w-full " src="./images/nav3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
