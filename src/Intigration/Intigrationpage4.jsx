import React from 'react'

const Intigrationpage4 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] ">
      <div className="w-full min-h-[800px]  p-[5vw] ">
        <h1 className='text-3xl  text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Connect your e-commerce store
        </h1>
        <h1 className="text-lg text-center ">
          Unlock a new level of personalization by integrating your ecommerce
          data, shaping not just the messages you send but also how and when
          your marketing journeys unfold.
        </h1>

        <div className="w-full h-fit py-[100px] flex items-center justify-center">
          <img
            className="w-[600px] max-md:w-[300px]"
            src="./images/intigrationimages/page4.png"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Customer data
            </h1>
            <h1 className="text-lg ">
              Harness historical and real-time ecommerce store customer data to
              fuel automated, personalized customer conversations.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Content personalization
            </h1>
            <h1 className="text-lg ">
              Use data to craft dynamic marketing campaigns with product
              personalized recommendations from your ecommerce store.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Order events
            </h1>
            <h1 className="text-lg ">
              Respond swiftly and automatically to ecommerce order events
              including completed purchases, cancelled orders, and completed
              payments.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intigrationpage4