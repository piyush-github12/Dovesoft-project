import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";


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
          elemname:"sms"
        },
        {
          subnameimage: <FaWhatsapp />,
          subsubname: "Whatsapp",
          elemname:"whatsapp"
        },
        {
          subnameimage: <MdOutlineMessage />,
          subsubname: "RCS",
          elemname:"rcs"
        },
        {
          subnameimage: <RiUserVoiceLine />,
          subsubname: "Voice",
        },
        {
          subnameimage: <MdOutlineMail />,
          subsubname: "Email",
        },
      ],
    },
    {
      mainname: "Utility Tools",
      subname: [
        {
          subnameimage: <BiMessageDetail />,
          subsubname: "Automation",
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
      ],
    },
    {
      mainname: "Smart Products",
      subname: [
        {
          subnameimage: <BiMessageDetail />,
          subsubname: "OTP Free",
        },
        {
          subnameimage: <FaWhatsapp />,
          subsubname: "File GPT",
        },
      ],
    },
  ];

  const [dropdoun, setdropdoun] = useState(false)

  if(dropdoun){

      gsap.to("#dropdown" ,{
        height:"600px",
        paddingTop:"120px",
        paddingBottom:"20px"
    })
  }else{
    gsap.to("#dropdown", {
      height: "0px",
      paddingTop:"0",
      paddingBottom:"0"
    });

  }
  
  

  return (
    <div className="absolute top-0 w-[100vw]   p-1 z-50 flex items-center justify-center">
      <div
        style={
          params.color
            ? { backgroundColor: params.color }
            : { backgroundColor: "#021E43" }
        }
        className={`w-[90vw] h-[100px] relative px-[3vw]  mt-[3.5vh] text-white rounded-full flex items-center justify-between max-lg:justify-center`}
      >
        <div className="w-[20%]  flex text-lg justify-center items-center max-lg:hidden">
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
          {/* <div className="min-w-fit w-[160px] h-[50px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
            <h1 className="text-white text-lg  font-bold whitespace-nowrap">
              Book Demo
            </h1>
          </div> */}
          <div
            className={`min-w-fit w-[100px] h-[50px]  border-2 ${
              params.color == "#2B9C24"
                ? "bg-white border-none text-black"
                : "bg-transparent border-[#7AB1FC] text-white "
            }  px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
          >
            <h1 className=" text-lg  font-bold whitespace-nowrap">Log-in</h1>
          </div>
        </div>

        {/* <div
            onClick={navonclick}
            className="w-[30px] h-[30px]   hidden max-lg:block cursor-pointer"
          >
            <RiMenu3Line className="w-full h-full text-white " />
          </div>
          <div
            id="navpage"
            className=" w-[100vw] h-[100vh]  bg-[#021E43] hidden translate-x-[110%] fixed left-0 top-0  flex-col items-center justify-center gap-10"
          >
            <div className="py-[5vw] px-[5vw] absolute right-0 top-0 ">
              <RiMenu3Line
                onClick={navclickoff}
                className="w-[40px] h-[40px] text-white "
              />
            </div>

            <h5>Products</h5>
            <h5>Compony</h5>
            <h5>Book Demo</h5>
            <h5>Login</h5>
          </div> */}

        <div
          id="dropdown"
          onMouseLeave={() => setdropdoun(false)}
          className="absolute left-0 top-[0px] text-black flex justify-center    px-20   w-full h-[0px] overflow-hidden bg-white rounded-[50px] "
        >
          <div className="w-[90vw]  h-[100px] absolute top-0 z-[99] px-[3vw]    bg-[#ffffff] text-black rounded-full flex items-center justify-between max-lg:justify-center">
            <div className="w-[20%]  flex text-lg justify-center items-center max-lg:hidden">
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
              {/* <div className="min-w-fit w-[160px] h-[50px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
            <h1 className="text-white text-lg  font-bold whitespace-nowrap">
              Book Demo
            </h1>
          </div> */}
              <div className="min-w-fit w-[100px] h-[50px]  border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
                <h1 className="text-black text-lg  font-bold whitespace-nowrap">
                  Log-in
                </h1>
              </div>
            </div>
          </div>
          {navdata.map((item, index) => {
            return (
              <div className="w-[25%] h-full  ">
                <h1 className="text-2xl font-bold">{item.mainname}</h1>

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
          <div className="w-[40%] h-full  flex flex-col pl-10 justify-evenly  border-l-2 border-[#00000075] p-2">
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
