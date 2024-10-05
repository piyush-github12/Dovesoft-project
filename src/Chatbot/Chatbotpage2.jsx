import React from 'react'

const Chatbotpage2 = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[600px] max-md:h-fit px-[10vw] py-[30px] flex max-md:block bg-[#fff]">
        <div className="w-[50%] max-md:w-full h-full max-md:h-fit  flex flex-col  justify-center max-md:items-center max-md:mb-[30px] ">
          <div className="w-[70%] max-md:w-full p-[20px] min-h-[200px] rounded-3xl bg-[#EAF9FF]">
            <h1 className='text-base font-["Epilogue"] font-semibold'>
              Stronger Customer relationship in real-time
            </h1>
            <h1 className="text-base">
              Have natural conversations withn your customers and ensure your
              barnd is always responsive attentive and customer - center
            </h1>
          </div>
          <div className="w-[70%] max-md:w-full p-[20px] min-h-[200px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold'>
              Nurture and convert effortlessly and 24/7
            </h1>
            <h1 className="text-base">
              Guide customers though the entire buying journey, encouraging
              larger purchases and customer loyality
            </h1>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center max-md:w-full h-full max-md:h-fit ">
          <img
            className="w-[500px] max-md:w-[300px]"
            src="./images/chatbotimages/chatbotpage2.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Chatbotpage2