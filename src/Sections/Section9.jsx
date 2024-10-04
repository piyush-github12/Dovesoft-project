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
        className="w-full h-fit flex  max-md:flex-col py-[50px] text-base px-[10vw] max-sm:px-[5vw] max-sm:pr-0"
      >
        <div className="w-[50%] max-md:w-full max-md:h-fit h-[400px]  ">
          <img
            className="h-[150px] object-contain"
            src="./images/whitelogo.png"
            alt=""
          />
          <h1>
            Dove Soft
            <br />
            201 Spear Street, Suite 1100 <br />
            San Francisco, CA 94105
          </h1>

          <div className="flex w-fit justify-between gap-5 mt-[50px] ">
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
        </div>
        <div className="w-[50%] max-md:w-full max-md:h-fit h-[400px] pt-[50px]  flex justify-end max-md:justify-normal ">
          <div className="w-[30%] h-full ">
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
          <div className="w-[30%] h-full ">
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
          <div className="w-[30%] h-full ">
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

      <div
        style={bg ? { backgroundColor: bg } : { backgroundColor: "#031e42" }}
        className="w-full px-[10vw] min-h-[20vh] flex justify-center  text-white text-center "
      >
        <div className="w-[100%] border-t-2 px-32 py-5 max-md:px-[10px] border-white ">
          <h2 className="text-base  max-sm:text-sm">
            Dove Soft is a 100% opt in service, to unsubscribe, text ‘STOP’ to
            the originating number. Msg & data rates may apply. Privacy of your
            data is important to us, please see our privacy policy to. To learn
            about our position on SPAM, please see our spam policy.
          </h2>
          <h2 className="text-sm max-lg::text-xs mt-5">
            {" "}
            © 2024 Dove Soft, All rights reserved. Privacy policy
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Section9