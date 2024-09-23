import React from 'react'

const Chatbotpage3 = () => {
  return (
    <div className="py-[50px]">
      <h1 className='text-3xl  text-center font-["Epilogue"] font-semibold mb-[10px]'>
        Create rich two-way interactions
      </h1>
      <h1 className="text-base text-center ">
        Turn notifications into conversations with chatbots that pull in context
        from customer profiles and external tools.
      </h1>

      <div className="w-screen h-fit px-[8vw] grid grid-cols-3 max-sm:grid-cols-1">
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px] ">
          <img
            className="w-full max-sm:w-[250px] "
            src="./images/chatbotimages/page3-1.svg"
            alt=""
          />
          <h1 className="text-base px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Recommend products
          </h1>
          <h1 className="text-base px-[20px] mt-[10px]">
            Provide tailored shopping suggestions based on customer behavior.
          </h1>
        </div>
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-full max-sm:w-[250px] "
            src="./images/chatbotimages/page3-2.svg"
            alt=""
          />
          <h1 className="text-base px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            Lead qualification
          </h1>
          <h1 className="text-base px-[20px] mt-[10px]">
            Segment customers when they interact with your chatbot, so your
            sales team can focus on high-value prospects..
          </h1>
        </div>
        <div className="w-[30vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-full max-sm:w-[250px] "
            src="./images/chatbotimages/page3-3.svg"
            alt=""
          />
          <h1 className="text-base px-[20px] font-semibold mt-[20px] font-['Epilogue']">
            FAQ bots
          </h1>
          <h1 className="text-base px-[20px] mt-[10px]">
            Stop spending time answering repetitive questions by training and
            deploying FAQ chatbots.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Chatbotpage3