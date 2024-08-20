import React from 'react'

const Footer = () => {
  return (
    <div className="w-full h-screen flex max-md:flex-col bg-[#031e42] text-white px-[100px] py-[150px]  max-md:px-[5vw]">
      <div className="w-[30%] max-md:w-full h-full max-md:h-fit max-md:mb-10 ">
        <h1 className="font-bold text-3xl mb-10 max-md:mb-5">Dove Soft.</h1>
        <h2 className="text-sm ">
          Sakari, LLC <br /> 201 Spear Street, Suite 1100 <br /> San Francisco,
          CA 94105
        </h2>
      </div>
      <div className="w-[70%] max-md:w-full  h-full flex  gap-2 text-sm font-light">
        <div className="w-[25%] h-full ">
          <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Features</h1>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Intigrations</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Business Messaging</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>VOIP/Leading Texting</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Mobile App</h2>
        </div>
        <div className="w-[25%] h-full ">
          <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Learn</h1>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Book Demo</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>HubSpot Integration</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>SalesMsg vs Sakari</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Partner Program</h2>
        </div>
        <div className="w-[25%] h-full ">
          <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Resources</h1>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>About Us</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>blog</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Knowledge Base</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Careers</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Developer Portal</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>SMS Lenght Circulator</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Case Study</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Contact Us</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>API Status</h2>
        </div>
        <div className="w-[25%] h-full ">
          <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Leagal</h1>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Privacy Policy</h2>
          <h2 className='mb-5 max-sm:mb-2 max-sm:text-[10px]'>Terms of Service</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer