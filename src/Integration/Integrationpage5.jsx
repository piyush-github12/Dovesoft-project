import React from 'react'

const integrationpage5 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] text-white">
      <div className="w-full min-h-[800px] bg-[#021E43] p-[5vw] rounded-[25px]">
        <h1 className='text-3xl px-[5vw] max-md:px-[0] text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Enable conversational commerce experiences by integrating payments
        </h1>
        <h1 className="text-base px-[5vw] max-md:px-[0] text-center ">
          Bird provides prebuilt integrations ranging from the most popular
          e-commerce platforms, to CRMs, lead gen tools, payment providers, and
          many more.
        </h1>

        <div className="w-full h-fit py-[50px] flex items-center justify-center">
          <img
            className="w-[700px] max-md:w-[400px]"
            src="./images/integrationimages/page5.webp"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Checkouts and refunds
            </h1>
            <h1 className="text-base ">
              From creating and sending payment links, confirming payment
              statuses, to managing refunds, ensure a fluid transaction
              experience for both the business and the customer.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Coupons and promo codes
            </h1>
            <h1 className="text-base ">
              Foster customer relationships with natural two-way conversations
              on all channels.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Automatic deduplication
            </h1>
            <h1 className="text-base ">
              Keep track of invoice payments with triggers that inform when an
              invoice has been paid, when further user action is required and
              more.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default integrationpage5