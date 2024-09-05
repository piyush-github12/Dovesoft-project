import React from 'react'

const RCSpage4 = () => {

    let data = [
      "Personalized Experience and impressive templates",
      "2-Way Communication as a chat",
      "Effective Promotional Campaigns that impress to click",
      "Cross-Selling Possibilities for relative products in segment",
      "In-app Browser for redirect attached links(Eliminates Landing Page)",
      "Higher Read Rate & customer Engagement time",
      "API Based Chatbot Integration",
      "Fallback as SMS for urgent situations",
    ];

  return (
    <div className="">
      <h1 className="text-3xl py-[50px] max-md:pb-0 font-['Epilogue'] text-center leading-[52px] font-bold">
        Features & Benefits of RCS Messaging
      </h1>
      <div className="w-full min-h-[600px] max-md:h-fit px-[10vw]  max-sm:px-[5vw] py-[30px] flex max-md:block bg-[#fff]">
        <div className="w-[50%] max-md:flex hidden max-md:mb-[30px] items-center justify-center max-md:w-full h-full max-md:h-fit ">
          <img
            className="w-[500px] max-md:w-[300px]"
            src="./images/RCSimages/page4.svg"
            alt=""
          />
        </div>
        <div className="w-[50%] max-md:w-full h-full max-md:h-fit border-[10px] rounded-sm p-2 border-[#F4F7FC] grid grid-cols-2 gap-2 ">
          {data.map((item, index) => {
            return (
              <div className="w-[100%] min-h-[100px] flex  justify-center px-4 py-2  bg-[#F4F7FC]">
                <h1 className="text-center">{item}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-[50%] flex max-md:hidden items-center justify-center max-md:w-full h-full max-md:h-fit ">
          <img
            className="w-[500px] max-md:w-[300px]"
            src="./images/RCSimages/page4.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default RCSpage4