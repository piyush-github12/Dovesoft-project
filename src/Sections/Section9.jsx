import React from 'react'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";



const Section9 = ({bg}) => {
  return (
    <div className="  relative min-h-fit   z-[6] text-white  ">
      <div
        style={bg ? { backgroundColor: bg } : { backgroundColor: "#031e42" }}
        className="w-full h-fit flex  max-md:flex-col gap-[20px] py-[50px] text-base px-[10vw] max-sm:px-[5vw] "
      >
        <div className="w-[50%]   max-md:w-full max-md:h-fit min-h-[400px]  ">
          <img
            className="h-[150px] object-contain"
            src="./images/whitelogo.png"
            alt=""
          />
          <h1 className="w-[100%]  max-sm:w-[90%] font-semibold mb-[40px]">
            Dove Soft Limited
          </h1>
          <div className="w-full h-fit grid grid-cols-2 gap-[30px]">
            <div className="">
              <h1 className="font-semibold  mb-[10px]">Mumbai</h1>
              <h1>
                1101,DLH Park Swami Vivekananda Rd, Rani Sati Nagar, Sunder
                Nagar, Goregaon West, Mumbai, Maharashtra 400062
              </h1>
            </div>
            <div className="">
              <h1 className="font-semibold  mb-[10px]">Ahmedabad</h1>
              <h1>
                621, North Plaza, beside 4Dsquare mall, Motera Ahmedabad 380005
              </h1>
            </div>
            <div className="">
              <h1 className="font-semibold  mb-[10px]">Gurugram </h1>
              <h1>
                Unit No 108A, 1st floor, Suncity Success Tower, Sector 65, Golf
                Course Extension road, Gurugram, Haryana 122102
              </h1>
            </div>
            <div className="">
              <h1 className="font-semibold  mb-[10px]">Dubai</h1>
              <h1> 405, Zabeel Towers , shaikh zaid road , Dubai</h1>
            </div>
          </div>
        </div>

        <div className="w-[50%] max-md:w-full max-md:min-h-fit min-h-[400px] pt-[50px] flex flex-col items-center ">
          <div className="flex w-full px-[20px] max-lg:px-[0] h-[150px] max-md:h-[90px] justify-evenly  max-md:justify-between  items-center">
            <Link
              to="https://www.facebook.com/DoveSoftLtd/"
              className="text-[30px]"
            >
              <FaSquareFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/dovesoft_official/"
              className="text-[30px]"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://in.linkedin.com/company/dove-soft-ltd"
              className="text-[30px]"
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://www.youtube.com/@dovesoftltdofficial"
              className="text-[30px]"
            >
              <FaYoutube />
            </Link>
            <Link to="https://x.com/dovesoftltd" className="text-[30px]">
              <FaXTwitter />
            </Link>
            <Link
              to="https://in.pinterest.com/dovesoftbulksms/"
              className="text-[30px]"
            >
              <FaPinterest />
            </Link>
          </div>
          <div className="w-full h-fit flex justify-center gap-[3vw] ">
            <div className="w-fit max-md:w-[33%]  h-full ">
              <h1 className="text-lg font-bold">Product</h1>
              <Link to="/sms">
                <h1 className="text-base mt-[15px]">SMS</h1>
              </Link>
              <Link to="/whatsapp">
                <h1 className="text-base mt-[15px]">Whatsapp</h1>
              </Link>
              <Link to="/rcs">
                <h1 className="text-base mt-[15px]">RCS</h1>
              </Link>
              <Link to="/voice">
                <h1 className="text-base mt-[15px]">Voice</h1>
              </Link>
              <Link to="/email">
                <h1 className="text-base mt-[15px]">Email</h1>
              </Link>
              <Link to="/instagram">
                <h1 className="text-base mt-[15px]">Instagram</h1>
              </Link>
            </div>
            <div className="w-fit max-md:w-[33%]  h-full ">
              <h1 className="text-lg font-bold">Compony</h1>
              <Link to="/aboutus">
                <h1 className="text-base mt-[15px]">About Us</h1>
              </Link>
              <Link to="/contactus">
                <h1 className="text-base mt-[15px]">Contact Us</h1>
              </Link>
              <Link to="/career">
                <h1 className="text-base mt-[15px]">Career</h1>
              </Link>
              <Link to="/team">
                <h1 className="text-base mt-[15px]">Team</h1>
              </Link>
            </div>
            <div className="w-fit max-md:w-[33%]  h-full ">
              <h1 className="text-lg font-bold">Legal</h1>
              <Link to="">
                <h1 className="text-base mt-[15px]">Privacy Policy</h1>
              </Link>
              <Link to="">
                <h1 className="text-base mt-[15px]">Terms of Service</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        style={bg ? { backgroundColor: bg } : { backgroundColor: "#031e42" }}
        className="w-full px-[10vw] min-h-[10vh] flex justify-center  text-white text-center "
      >
        <div className="w-[100%] border-t-2 px-32 py-5 max-md:px-[10px] border-white ">
          <h2 className="text-base  max-sm:text-sm">
            Privacy of your data is important to us, please see our privacy
            policy
          </h2>
          <h2 className="text-sm max-lg::text-xs mt-5">
            {" "}
            © 2024 Dove Soft Limited, All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section9