import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const Encrypage3 = () => {
  return (
    <div className=" w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px] bg-[#021E43] text-white flex flex-col items-center">
      <h1 className='font-["Epilogue"] text-3xl text-center  font-[500]'>
        Make messaging more secure with DoveSoft
      </h1>
      <h1 className="text-center text-lg mt-[20px]  ">
        Dovesoft is the most secure business texting platform on the market. We
        lock down all data on our platform to protect sensitive business
        information. With access to features like data encryption, team
        training, and multi-factor authentication, you can improve the security
        of business texting. Plus, with our patented messaging consent feature,
        you can ensure you remain compliant with TCPA and data protection laws.
      </h1>
      <Bookdemobutton clr="#fff" textclr="#000" />
    </div>
  );
}

export default Encrypage3