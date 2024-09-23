import React from 'react'
import Bookdemobutton from '../components/Bookdemobutton';

const integrationpage3 = () => {
  return (
    <div className=" max-md:py-[50px]">
      <h1 className='text-3xl  text-center px-[5vw] font-["Epilogue"] font-semibold mb-[10px]'>
        Move beyond “Hi {'{first_name}'}”
      </h1>
      <h1 className="text-base text-center px-[5vw] ">
        Pull in data an update tools based on customer responses to enable a
        whole new world of interactions.
      </h1>

     

      <div className="w-screen h-fit px-[8vw] grid grid-cols-3 max-sm:grid-cols-1">
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px] ">
          <img
            className="w-full max-sm:w-[250px]  "
            src="./images/integrationimages/page3-1.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Welcome new subscribers
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px]">
            Share a promotion with new subscribers to incentivize marketing
            opt-ins.
          </h1>
        </div>
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-full max-sm:w-[250px]  "
            src="./images/integrationimages/page3-2.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Cart abandonment
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px]">
            Nudge customers to complete checkout with the pre-built abandoned
            cart flow.
          </h1>
        </div>
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-full max-sm:w-[250px]  "
            src="./images/integrationimages/page3-3.svg"
            alt=""
          />
          <h1 className="text-base px-[40px] max-md:px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Order tracking and delivery updates
          </h1>
          <h1 className="text-base px-[40px] max-md:px-[20px] mt-[10px]">
            Keep customers informed of the status of their orders with realtime
            notifications.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default integrationpage3