import React from 'react'
import { FaFileInvoice } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import pdf2015 from "/images/Certificates/9001-2015.pdf"
import pdf2013 from "/images/Certificates/27001-2013.pdf"

const Certificatepage2 = () => {

  const handlePdfDownload = (pdf) => (e) => {
    e.preventDefault();
    window.open(pdf, "_blank");
  };

  return (
    <>
      <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px]">
        <h1 className='text-4xl  text-center  font-["Epilogue"] font-semibold mb-[50px]'>
          1. ISO Certificates
        </h1>
        <div className=" grid grid-cols-3 max-md:grid-cols-1 gap-[40px]">
          <Link to="#" onClick={handlePdfDownload(pdf2015)}>
            <div className="group  h-[200px] relative py-[30px] px-[30px] bg-[#F0F2F8] rounded-lg">
              <div className="absolute w-[5px] h-[50px] left-0 top-[30px] bg-[#1871ED]"></div>
              <div className="w-[40px] h-[40px] bg-[#1871ED] flex items-center justify-center rounded-md mt-[5px] ">
                <FaFileInvoice className="text-white text-[30px]" />
              </div>
              <h1 className='text-2xl  font-["Epilogue"] font-semibold text-[#1871ED] mt-[20px]'>
                ISO
              </h1>
              <h1 className='text-2xl  font-["Epilogue"] font-semibold  '>
                9001:2015
              </h1>
              <div className="absolute right-0 top-[30px] h-[70%] w-[100px]">
                <img
                  className="opacity-50 group-hover:opacity-100 transition-all duration-200"
                  src="./images/Certificates/Pattern.svg"
                  alt=""
                />
              </div>
            </div>
          </Link>
          <Link to="#" onClick={handlePdfDownload(pdf2013)}>
            <div className="group  h-[200px] relative py-[30px] px-[30px] bg-[#F0F2F8] rounded-lg">
              <div className="absolute w-[5px] h-[50px] left-0 top-[30px] bg-[#1871ED]"></div>
              <div className="w-[40px] h-[40px] bg-[#1871ED] flex items-center justify-center rounded-md mt-[5px] ">
                <FaFileInvoice className="text-white text-[30px]" />
              </div>
              <h1 className='text-2xl  font-["Epilogue"] font-semibold text-[#1871ED] mt-[20px]'>
                ISO
              </h1>
              <h1 className='text-2xl  font-["Epilogue"] font-semibold  '>
                27001:2013
              </h1>
              <div className="absolute right-0 top-[30px] h-[70%] w-[100px]">
                <img
                  className="opacity-50 group-hover:opacity-100 transition-all duration-200"
                  src="./images/Certificates/Pattern.svg"
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] pt-[50px] pb-[100px]">
        <h1 className='text-4xl  text-center  font-["Epilogue"] font-semibold mb-[50px]'>
          2. Compliance Certifcates
        </h1>
        <div className=" grid grid-cols-3 max-md:grid-cols-1 justify-items-center gap-[40px]">
          <div> 
            <img src="./images/Certificates/certi-1.png" alt="" />
          </div>
          <div> 
            <img src="./images/Certificates/certi-2.png" alt="" />
          </div>
          <div> 
            <img src="./images/Certificates/certi-3.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificatepage2