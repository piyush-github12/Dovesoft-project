import React from 'react'

const Chatbotpage4 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] text-white">
      <div className="w-full min-h-[800px] bg-[#021E43] p-[5vw] rounded-[25px]">
        <h1 className='text-3xl  text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Scaleable, reliable conversational automation
        </h1>
        <h1 className="text-base text-center ">
          Harness the full power of conversational marketing: data-driven,
          personalized, and designed for maximum engagement.
        </h1>

        <div className="w-full h-fit py-[100px] flex items-center justify-center">
          <img
            className="w-[600px] max-md:w-[300px]"
            src="./images/chatbotimages/page4.webp"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Omnichannel support
            </h1>
            <h1 className="text-base ">
              Quickly deploy chatbots across multiple channels, including
              WhatsApp, SMS, and Facebook Messenger.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Two-way conversations
            </h1>
            <h1 className="text-base ">
              Foster customer relationships with natural two-way conversations
              on all channels.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Insights and reporting
            </h1>
            <h1 className="text-base ">
              Get a holistic view of chatbot interactions, engagement rates, and
              conversions across every channel to refine and optimize your
              strategy.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbotpage4