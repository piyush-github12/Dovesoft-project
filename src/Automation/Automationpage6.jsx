import React from 'react'

const Automationpage6 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] text-white">
      <div className="w-full min-h-[800px] bg-[#021E43] p-[5vw] rounded-[25px]">
        <h1 className='text-3xl px-[5vw] max-md:px-[0] text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Create an automated ecosystem
        </h1>
        <h1 className="text-base px-[5vw] max-md:px-[0] text-center ">
          Unify your tools and platforms, and automate repetitive tasks.
        </h1>

        <div className="w-full h-fit py-[50px] flex items-center justify-center">
          <img
            className="w-[800px] max-md:w-[400px]"
            src="./images/automationimages/page6.png"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              E-commerce connectors
            </h1>
            <h1 className="text-base ">
              Link your ecommerce platform, enabling automations including
              abandoned cart recovery, streamlined order management, and
              tailored conversational shopping interactions..
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              AI connectors
            </h1>
            <h1 className="text-base ">
              Add intent, sentiment, and language recognition to your flows to
              route incoming messages and adapt automated responses.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Productivity connectors
            </h1>
            <h1 className="text-base ">
               Automate incident management, post real-time updates about new
              leads to Slack, and improve operational efficiency.
            </h1>
          </div>
        </div>
        <div className="w-full  h-fit flex justify-evenly  mt-[50px] max-md:mt-[10px] max-md:grid max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              CRM connectors
            </h1>
            <h1 className="text-base ">
              Manage pipelines with real-time updates, trigger automations based
              on CRM events, and use contact information to personalize your
              flows for your customers.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Payment connectors
            </h1>
            <h1 className="text-base ">
              Connect your payment apps, enabling automations including invoice
              management, coupon distribution, and transaction handling—from
              payment links to refunds.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automationpage6