import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Contacthome = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Contact us
          </h1>
          <div className="flex flex-col gap-4 text-base">
            <div className="flex items-center gap-2">
              <MdEmail className="h-5 w-5" />
              <span>
                <span className="font-semibold">Email :</span>{" "}
                contact@dovesoft.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="h-5 w-5" />
              <span>
                <span className="font-semibold">Phone :</span> +91 9876543210
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-5 w-5" />
              <span>
                <span className="font-semibold">Address :</span> 123 Tech Street,
                Mumbai, Maharashtra 400001, India
              </span>
            </div>
          </div>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[450px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[450px] max-md:w-[300px] "
            src="./images/contacthero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contacthome