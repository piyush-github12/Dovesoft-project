import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const Automationpage3 = () => {
  return (
    <div className=" max-md:py-[50px]">
      <h1 className='text-3xl  text-center px-[5vw] font-["Epilogue"] font-semibold mb-[10px]'>
        Create flexible flows that drive customer engagement
      </h1>

      <div className="w-screen h-fit px-[8vw] grid grid-cols-3 max-md:grid-cols-1">
        <div className="w-[30vw] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center min-h-[300px] p-[20px] ">
          <img
            className="w-[300px] max-md:w-[250px]  "
            src="./images/automationimages/page3-1.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Recover abandoned carts
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px] max-md:text-center">
            Nudge your customers to complete the purchase of items they added in
            their cart and improve your conversion rates.
          </h1>
        </div>
        <div className="w-[30vw] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center   min-h-[300px] p-[20px]">
          <img
            className="w-[300px] max-md:w-[250px]  "
            src="./images/automationimages/page3-2.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Real-time lead alerts
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px] max-md:text-center">
            Ping your sales team on Slack whenever a new lead comes in, ensuring
            a faster response time and better informed sales follow ups.
          </h1>
        </div>
        <div className="w-[30vw] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center  min-h-[300px] p-[20px]">
          <img
            className="w-[300px] max-md:w-[250px]  "
            src="./images/automationimages/page3-3.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Post-purchase retention
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px] max-md:text-center">
            Follow up after a purchase with messages and offers to retain your
            customers longer and boost lifecycle value.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Automationpage3