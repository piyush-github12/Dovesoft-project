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
          <div className="flex flex-col gap-4 text-base font-semibold">
            <div className="flex items-center gap-2">
              <MdEmail className="text-[25px] shrink-0" />
              <span>
                <span className="text-xl font-bold">Email :</span> support@dove-soft.com
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-[25px] shrink-0" />
              <span>
                <span className="text-xl font-bold">Phone :</span> +91 9376498182
              </span>
            </div>
            <div className="flex  w-[80%] max-md:w-full gap-2">
              <FaMapMarkerAlt className="text-[25px] shrink-0 " />
              <h1 className="text-base">
                <span className="text-xl font-bold">Address :</span> 1101,DLH Park Swami
                Vivekananda Rd, Rani Sati Nagar, Sunder Nagar, Goregaon West,
                Mumbai, Maharashtra 400062
              </h1>
            </div>
          </div>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[450px] max-md:h-fit max-md:w-full  flex items-center justify-center">
          <img
            className="w-[450px] max-md:w-[300px] "
            src="./images/voice.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contacthome