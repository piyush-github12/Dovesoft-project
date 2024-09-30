import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { RiUserVoiceLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { BsFileEarmarkRichtext } from "react-icons/bs";
import { MdOutlineNoEncryption } from "react-icons/md";
import { PiPassword } from "react-icons/pi";
import { IoBuildOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { SiFuturelearn } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";











import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link, Route, Routes } from "react-router-dom";
import SMSPage from "../SMS page/SMSpage";

const Navbar = (params) => {
  gsap.registerPlugin(useGSAP);

  const [navon, setnavon] = useState(false);

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
          elemname: "voice",
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
          subnameimage: <IoBuildOutline />,
          subsubname: "Automation",
          elemname: "automation",
        },
        {
          subnameimage: <FaLink />,
          subsubname: "Short URL",
          elemname: "linkShortner",
        },
        {
          subnameimage: <BsFileEarmarkRichtext />,
          subsubname: "File Hosting",
          elemname: "filehosting",
        },
        {
          subnameimage: <MdOutlineNoEncryption />,
          subsubname: "Encrypt Content",
          elemname: "encryptedcontent",
        },
        {
          subnameimage: <PiPassword />,
          subsubname: "OTP Generator",
          elemname: "otp",
        },
        {
          subnameimage: <MdOutlineMail />,
          subsubname: "Smart Addons",
        },
        {
          subnameimage: <FaRegFile />,
          subsubname: "File GPT",
          elemname: "FileGPT",
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

  const componydata = [
    {
      mainname: "Company",
      subname: [
        {
          subnameimage: <IoHomeOutline />,
          subsubname: "About Us",
          elemname: "aboutus",
        },
        {
          subnameimage: <MdOutlineContactPhone />,
          subsubname: "Contact Us",
          elemname: "contactus",
        },

        {
          subnameimage: <SiFuturelearn />,
          subsubname: "Career",
          elemname: "",
        },
        {
          subnameimage: <IoIosPeople />,
          subsubname: "Team",
          elemname: "",
        },
      ],
    },
    {
      mainname: "More",
      subname: [
        {
          subnameimage: <MdEvent />,
          subsubname: "Events",
          elemname: "",
        },
        {
          subnameimage: <FaAward />,
          subsubname: "Awards and Recognition",
          elemname: "",
        },
        {
          subnameimage: <PiCertificateBold />,
          subsubname: "Certificate",
          elemname: "",
        },
      ],
    },
  ];

  const [dropdown, setdropdown] = useState(false);
  const elementRef = useRef(null);

  useGSAP(() => {
    if (dropdown) {
      gsap.to("#dropdown", {
        height: "auto",
      })
      gsap.to("#dropdowninter" ,{
        translateY :"0px",
        delay: 0.2,
        opacity:1,
      });
      gsap.to("#navrightboxes", {
        x: "0px",
        opacity: 1,
        stagger: 0.1,
      });
    } else {
      gsap.to("#dropdown", {
        height: "0px",
      })
      gsap.to("#dropdowninter", {
        translateY: "100px",
        delay: 0,
        opacity:0,
      }); 
      gsap.to("#navrightboxes", {
        x: "200px",
        opacity: 0,
      }); 
    
    }
  }, [dropdown]);


  const [companydropdown, setcompanydropdown] = useState(false); 
  useGSAP(() => {
    if (companydropdown) {
      gsap.to("#Companydropdown", {
        height: "auto",
      })
      gsap.to("#componydropdowninter" ,{
        translateY :"0px",
        delay: 0.2,
        opacity:1,
      });
      gsap.to("#componynavrightboxes", {
        x: "0px",
        opacity: 1,
        stagger: 0.1,
      });
    } else {
      gsap.to("#Companydropdown", {
        height: "0px",
      })
      gsap.to("#componydropdowninter", {
        translateY: "100px",
        delay: 0,
        opacity:0,
      }); 
      gsap.to("#componynavrightboxes", {
        x: "200px",
        opacity: 0,
      }); 
    }
  }, [companydropdown]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-[100vw] p-1 z-50 flex items-center justify-center transition-all duration-300 `}
    >
      <div
        style={
          params.color
            ? { backgroundColor: params.color }
            : { backgroundColor: "#021E43" }
        }
        className={`w-[90vw] ${
          isScrolled ? "h-[70px]" : "h-[100px]"
        } h-[100px] relative px-[2vw]    ${
          isScrolled ? "mt-[0px] max-md:mt-[0px]" : "mt-[20px] max-md:mt-[20px]"
        } text-white rounded-full flex items-center justify-between max-lg:justify-center  transition-all duration-300`}
      >
        <div className="w-[30%] font-bold flex text-base  items-center max-lg:hidden">
          <div
            onClick={() => {
              setdropdown(true);
              setcompanydropdown(false);
            }}
            className="w-[150px]  h-[50px] flex justify-center items-center gap-1 cursor-pointer"
          >
            <h1>Product</h1>
            <IoIosArrowDown className="mt-[2px] text-xl " />
          </div>
          <div
            onClick={() => {
              setcompanydropdown(true);
              setdropdown(false);
            }}
            className="w-[150px]  h-[50px] flex justify-center items-center gap-1 cursor-pointer "
          >
            <h1>Company</h1>
            <IoIosArrowDown className="mt-[2px] text-xl " />
          </div>
        </div>

        <div className=" h-full  ">
          <Link to="/">
            <img className="h-[120%]" src="./images/whitelogo.png" alt="" />
          </Link>
        </div>

        <div
          id="nn"
          className="w-[30%] flex justify-end max-lg:hidden items-center gap-10"
        >
          <div
            style={{
              backgroundColor: params.logincolor,
              color: params.logintextcolor,
            }}
            className={`min-w-fit w-[100px] ${
              isScrolled ? "h-[40px]" : "h-[50px]"
            }  border-2 border-[#fff] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
          >
            <h1 className=" text-base  font-bold whitespace-nowrap">Log-in</h1>
          </div>
        </div>

        <div
          onClick={() => setdropdown(true)}
          className="absolute right-[30px] h-[30px] w-[30px]  text-[30px] hidden max-lg:block"
        >
          <RiMenu3Line />
        </div>

        <div
          id="dropdown"
          ref={elementRef}
          onMouseLeave={() => setdropdown(false)}
          className={`absolute left-0 top-[0px] text-black flex max-lg:flex-col max-lg:items-center max-lg:gap-10  justify-center    px-[3vw]   w-full h-[0px] overflow-hidden bg-white ${
            isScrolled ? "rounded-[30px]" : " rounded-[50px]"
          }  `}
        >
          <div
            className={`w-[90vw] ${
              isScrolled ? "h-[70px] " : "h-[100px]"
            }  absolute top-0 z-[99] px-[2vw]    bg-[#ffffff] text-black rounded-full flex items-center justify-between max-lg:justify-center`}
          >
            <div className="w-[30%] font-bold flex text-base  items-center max-lg:hidden">
              <div
                onClick={() => {
                  setdropdown(true);
                  setcompanydropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer"
              >
                <h1>Product</h1>
                <IoIosArrowUp className="mt-[2px] text-xl  " />
              </div>
              <div
                onClick={() => {
                  setdropdown(false);
                  setcompanydropdown(true);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer "
              >
                <h1>Company</h1>
                <IoIosArrowDown className="mt-[2px] text-xl " />
              </div>
            </div>
            <Link to="/">
              <div
                className={`${
                  isScrolled ? "h-[70px]" : "h-[100px]"
                } flex items-center`}
              >
                <img
                  className={`${isScrolled ? "h-[60px]" : "h-[80px]"}`}
                  src="./images/blacklogo.png"
                  alt=""
                />
              </div>
            </Link>
            <div
              id="nn"
              className="w-[30%] flex justify-end max-lg:hidden items-center gap-10"
            >
              <div
                className={`min-w-fit w-[100px] ${
                  isScrolled ? "h-[40px]" : "h-[50px]"
                } border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
              >
                <h1 className="text-black text-base font-bold whitespace-nowrap">
                  Log-in
                </h1>
              </div>
            </div>

            <div
              onClick={() => setdropdown(false)}
              className="absolute right-[30px] h-[30px] w-[30px]  text-[30px] hidden max-lg:block"
            >
              <RiMenu3Line />
            </div>
          </div>

          <div
            id="dropdowninter"
            className={`w-full opacity-0 translate-y-[100px] flex max-lg:flex-col max-lg:items-center max-lg:gap-10 ${
              isScrolled ? "mt-[80px]" : "mt-[120px]"
            } mb-[30px] max-md:overflow-y-auto max-md:h-[80vh]`}
          >
            <div className="w-full hidden max-lg:flex  font-bold  text-base justify-center  items-center ">
              <div
                onClick={() => {
                  setdropdown(true);
                  setcompanydropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer"
              >
                <h1>Product</h1>
                <IoIosArrowUp className="mt-[2px] text-xl " />
              </div>
              <div
                onClick={() => {
                  setcompanydropdown(true);
                  setdropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer "
              >
                <h1>Company</h1>
                <IoIosArrowDown className="mt-[2px] text-xl " />
              </div>
            </div>
            <div className="w-[70%] max-lg:w-full  flex max-sm:grid  max-sm:grid-cols-1 max-sm:justify-items-center max-sm:gap-10">
              {navdata.map((item, index) => {
                return (
                  <div className="w-[33%]  h-fit max-sm:flex max-sm:flex-col max-sm:w-[250px]  ">
                    <h1 className="text-2xl max-sm:text-center font-bold">
                      {item.mainname}
                    </h1>

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
            <div className="w-[350px] max-sm:w-[300px]  overflow-hidden h-[400px] max-md:min-h-[400px] max-lg:w-[400px] flex flex-col pl-10 max-sm:pl-[0] justify-evenly  border-l-2 border-[#00000075] max-lg:border-none p-2">
              <Link
                to={`/Livechat`}
                id="navrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2"
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl "> Live Chat</h1>
                  <h2 className="text-xs ">
                    Multiple Agent can do live chat for these channels,
                    Whatsapp, Instagram, Facebook & RCS
                  </h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav1.png" alt="" />
                </div>
              </Link>
              <Link
                to={`/chatbot`}
                id="navrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 "
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl ">Chat Bot</h1>
                  <h2 className="text-xs ">Easey to build chat bots</h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav2.png" alt="" />
                </div>
              </Link>
              <Link
                to={`/integration`}
                id="navrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 "
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl "> integration</h1>
                  <h2 className="text-xs ">Explore Digital tools</h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav3.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="Companydropdown"
          ref={elementRef}
          onMouseLeave={() => setcompanydropdown(false)}
          className={`absolute left-0 top-[0px] text-black flex max-lg:flex-col max-lg:items-center max-lg:gap-10  justify-center    px-[3vw]   w-full h-[0px] overflow-hidden bg-white ${
            isScrolled ? "rounded-[30px]" : " rounded-[50px]"
          }  `}
        >
          <div
            className={`w-[90vw] ${
              isScrolled ? "h-[70px] " : "h-[100px]"
            }  absolute top-0 z-[99] px-[2vw]    bg-[#ffffff] text-black rounded-full flex items-center justify-between max-lg:justify-center`}
          >
            <div className="w-[30%] font-bold flex text-base  items-center max-lg:hidden">
              <div
                onClick={() => {
                  setdropdown(true);
                  setcompanydropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer"
              >
                <h1>Product</h1>
                <IoIosArrowDown className="mt-[2px] text-xl " />
              </div>
              <div
                onClick={() => {
                  setcompanydropdown(true);
                  setdropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer "
              >
                <h1>Company</h1>
                <IoIosArrowUp className="mt-[2px] text-xl " />
              </div>
            </div>
            <Link to="/">
              <div
                className={`${
                  isScrolled ? "h-[70px]" : "h-[100px]"
                } flex items-center`}
              >
                <img
                  className={`${isScrolled ? "h-[60px]" : "h-[80px]"}`}
                  src="./images/blacklogo.png"
                  alt=""
                />
              </div>
            </Link>
            <div
              id="nn"
              className="w-[30%] flex justify-end max-lg:hidden items-center gap-10"
            >
              <div
                className={`min-w-fit w-[100px] ${
                  isScrolled ? "h-[40px]" : "h-[50px]"
                } border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
              >
                <h1 className="text-black text-base font-bold whitespace-nowrap">
                  Log-in
                </h1>
              </div>
            </div>

            <div
              onClick={() => setdropdown(false)}
              className="absolute right-[30px] h-[30px] w-[30px]  text-[30px] hidden max-lg:block"
            >
              <RiMenu3Line />
            </div>
          </div>

          <div
            id="componydropdowninter"
            className={`w-full opacity-0 translate-y-[100px] flex max-lg:flex-col max-lg:items-center max-lg:gap-10 ${
              isScrolled ? "mt-[80px]" : "mt-[120px]"
            } mb-[30px] max-md:overflow-y-auto max-md:h-[80vh]`}
          >
            <div className="w-full hidden max-lg:flex  font-bold  text-base justify-center  items-center ">
              <div
                onClick={() => {
                  setdropdown(true);
                  setcompanydropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer"
              >
                <h1>Product</h1>
                <IoIosArrowDown className="mt-[2px] text-xl " />
              </div>
              <div
                onClick={() => {
                  setcompanydropdown(true);
                  setdropdown(false);
                }}
                className="w-[150px] h-[50px] flex justify-center items-center gap-1 cursor-pointer "
              >
                <h1>Company</h1>
                <IoIosArrowUp className="mt-[2px] text-xl  " />
              </div>
            </div>
            <div className="w-[70%] max-lg:w-full  flex max-sm:grid  max-sm:grid-cols-1 max-sm:justify-items-center max-sm:gap-10">
              {componydata.map((item, index) => {
                return (
                  <div className="w-[33%]  h-fit max-sm:flex max-sm:flex-col max-sm:w-[250px]  ">
                    <h1 className="text-2xl max-sm:text-center font-bold">
                      {item.mainname}
                    </h1>

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
            <div className="w-[350px] max-sm:w-[300px]  overflow-hidden h-[400px] max-md:min-h-[400px] max-lg:w-[400px] flex flex-col pl-10 max-sm:pl-[0] justify-evenly  border-l-2 border-[#00000075] max-lg:border-none p-2">
              <Link
                to={`/Livechat`}
                id="componynavrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2"
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl "> Live Chat</h1>
                  <h2 className="text-xs ">
                    Multiple Agent can do live chat for these channels,
                    Whatsapp, Instagram, Facebook & RCS
                  </h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav1.png" alt="" />
                </div>
              </Link>
              <Link
                to={`/chatbot`}
                id="componynavrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 "
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl ">Chat Bot</h1>
                  <h2 className="text-xs ">Easey to build chat bots</h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav2.png" alt="" />
                </div>
              </Link>
              <Link
                to={`/integration`}
                id="componynavrightboxes"
                className="h-[30%] opacity-0 translate-x-[200px] overflow-hidden w-full border-2 rounded-3xl border-[#61a3ff] bg-[#9ac4ff18] flex gap-2 "
              >
                <div className="w-[70%] flex flex-col justify-center pl-4 h-full">
                  <h1 className="font-bold text-xl "> integration</h1>
                  <h2 className="text-xs ">Explore Digital tools</h2>
                </div>
                <div className="w-[30%] flex justify-center items-center h-full">
                  <img className="w-full " src="./images/nav3.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
