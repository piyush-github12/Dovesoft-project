import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);

  const [navon, setnavon] = useState(false)
 
  const navonclick = ()=>{
    setnavon(true)

    if(navon == true){
      console.log("true")
      let navpage = document.querySelector("#navpage")
      navpage.style.transform = "translate(0 ,0)"
      navpage.style.display = "flex"
    }
  }
  const navclickoff = ()=>{
    setnavon(false)

    if(navon == true){}
    else{
      let navpage = document.querySelector("#navpage");
      navpage.style.transform = "translate(-110% ,0)";
      navpage.style.display = "hidden";
    }
  }

  return (
    <div className="absolute top-0 w-screen  p-1 z-50 flex items-center justify-center">
      <div className="w-[90vw] h-[100px] px-[3vw]  mt-[3.5vh]  bg-[#021E43] text-white rounded-full flex items-center">
        <div className="w-[50%]  ">
          <h1 className="text-2xl font-bold text-white whitespace-nowrap">
            Dove Soft Limited.
          </h1>
        </div>
        <div className="w-[50%] flex justify-end items-center font-bold gap-10 text-sm">
          <div className="w-[50%] flex text-lg justify-center items-center max-lg:hidden">
            <div className="w-[50%] h-[50px] flex justify-center items-center gap-2">
              <h1>Product</h1>
              <IoIosArrowDown className="mt-[5px]" />
            </div>
            <div className="w-[50%] h-[50px] flex justify-center items-center gap-2 ">
              <h1>Compony</h1>
              <IoIosArrowDown className="mt-[5px]" />
            </div>
          </div>

          <div className="w-[50%] px-10  flex justify-center max-md:hidden items-center gap-10">
            <div className="min-w-fit w-[160px] h-[50px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
              <h1 className="text-white text-lg  font-bold whitespace-nowrap">
                Book Demo
              </h1>
            </div>
            <div className="min-w-fit w-[160px] h-[50px]  border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
              <h1 className="text-white text-lg  font-bold whitespace-nowrap">
                Log-in
              </h1>
            </div>
          </div>

          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
