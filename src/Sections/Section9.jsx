import React from 'react'

const Section9 = () => {
  return (
    <div className=''>
      
      <div className=" absolute top-[40vh] z-[6]  ">
        <div className="w-full h-[800px]  max-md:h-[900px] flex max-md:flex-col bg-[#031e42] text-white px-[100px] py-[150px]   max-md:px-[5vw]">
          <div className="w-[30%] max-md:w-full h-full max-md:h-fit max-md:mb-10 ">
            <h1 className="font-bold text-3xl mb-10 max-md:mb-5">Dove Soft.</h1>
            <h2 className="text-sm ">
              Sakari, LLC <br /> 201 Spear Street, Suite 1100 <br /> San
              Francisco, CA 94105
            </h2>

            <div className="w-[200px] mt-10">
              {" "}
              <img src="./images/google.png" alt="" />
            </div>
            <div className="w-[200px] mt-10">
              {" "}
              <img src="./images/apple.png" alt="" />
            </div>
            <div className="w-full  flex gap-10 mt-10">
              <img src="./images/Vector.png" alt="" />
              <img src="./images/Vector-1.png" alt="" />
              <img src="./images/Vector-2.png" alt="" />
              <img src="./images/Vector-3.png" alt="" />
            </div>
          </div>
          <div className="w-[70%] max-md:w-full  h-full flex  gap-2 text-sm font-light">
            <div className="w-[25%] h-full ">
              <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Features</h1>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Intigrations
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Business Messaging
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                VOIP/Leading Texting
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Mobile App
              </h2>
            </div>
            <div className="w-[25%] h-full ">
              <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Learn</h1>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">Book Demo</h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                HubSpot Integration
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                SalesMsg vs Sakari
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Partner Program
              </h2>
            </div>
            <div className="w-[25%] h-full ">
              <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">
                Resources
              </h1>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">About Us</h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">blog</h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Knowledge Base
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">Careers</h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Developer Portal
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                SMS Lenght Circulator
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Case Study
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Contact Us
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                API Status
              </h2>
            </div>
            <div className="w-[25%] h-full ">
              <h1 className="font-bold text-xl mb-10 max-md:mb-5 ">Leagal</h1>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Privacy Policy
              </h2>
              <h2 className="mb-5 max-sm:mb-2 max-sm:text-[10px]">
                Terms of Service
              </h2>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] flex justify-center text-white text-center bg-[#031e42]">
          <div className="w-[90%] border-t-2 px-32 py-5 max-md:px-[20px] border-white ">
            <h2 className="text-sm  max-md:text-xs">
              Sakari is a 100% opt in service, to unsubscribe, text ‘STOP’ to
              the originating number. Msg & data rates may apply. Privacy of
              your data is important to us, please see our privacy policy to. To
              learn about our position on SPAM, please see our spam policy.
            </h2>
            <h2 className="text-sm max-md:text-xs mt-5">
              {" "}
              © 2024 Sakari, LLC All rights reserved. Privecy policy
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9