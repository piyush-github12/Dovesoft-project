import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';
import Navbar from '../components/Navbar';

const Emailhero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[500px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Powerful & affordable:{" "}
            <span className="text-[#96C2FF]">the best mass</span> email service
          </h1>
          <h1 className="text-base">
            Whether you’re a beginner marketer, small business, a global brand,
            a blogger, or a non-profit organization, you can send mass
            emails that boost sales and build better customer relationships.
          </h1>
          <Bookdemobutton clr="#fff" textclr="#000" />
        </div>
        <div className="w-[50%] h-[500px] max-md:h-fit max-md:w-full max-md:mt-[30px]  flex items-center justify-center">
          <img
            className="w-[450px] max-md:w-[300px] "
            src="./images/emailimages/emailhero.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" mt-[50px] px-[10vw] max-md:px-[5vw] mb-[50px] w-screen">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          Built for best email marketing results
        </h1>
        <h1 className="text-center mt-[20px] ">
          ISPs like Gmail and Outlook simply aren’t designed for mass email
          sends. When sending bulk email campaigns or large volumes of
          transactional emails, you need a dedicated email marketing software
          like Brevo. As a bulk email sender, we take care of all your email
          sending needs and offer the best possible deliverability to land your
          emails in the inbox.
        </h1>
      </div>
    </div>
  );
}

export default Emailhero