import React from 'react'

const Instapage2 = () => {
  return (
    <div className="w-screen py-[50px]">
      <h1 className="text-3xl font-['Epilogue'] text-center leading-[52px] font-bold mb-[50px]">
        Monetize Your <span className='text-"#0029C7"'> Instagram Inbox </span> 
      </h1>
      <div className="grid grid-cols-3 w-screen px-[10vw] ">
        <div className="shadow-[0px_0px_20px_0px] shadow-[#00000083] rounded-xl w-[25vw] min-h-[250px] p-5">
          <img src="./images/instagram/page2-1.svg" alt="" />
          <h1 className="text-lg font-['Epilogue'] py-[10px] font-bold">
            Increase Your Brand Visibility
          </h1>
          <h1 className="text-lg">
            Build a reliable presence on Instagram, which has 2 million active
            users a month, and 44% use Instagram for shopping.
          </h1>
        </div>
        <div className="shadow-[0px_0px_20px_0px] shadow-[#00000083] rounded-xl w-[25vw] min-h-[250px] p-5">
          <img src="./images/instagram/page2-2.svg" alt="" />
          <h1 className="text-lg font-['Epilogue'] py-[10px] font-bold">
            Maximize Marketing Outcomes
          </h1>
          <h1 className="text-lg">
            Nurture leads, convert them, and win their loyalty with personalized
            messages, offers, and marketing deals.
          </h1>
        </div>
        <div className="shadow-[0px_0px_20px_0px] shadow-[#00000083] rounded-xl w-[25vw] min-h-[250px] p-5">
          <img src="./images/instagram/page2-3.svg" alt="" />
          <h1 className="text-lg font-['Epilogue'] py-[10px] font-bold">
            Enhance Customer Satisfaction
          </h1>
          <h1 className="text-lg">
            Respond quickly with personalized Instagram messages to customer
            queries and elevate your marketing outcomes.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Instapage2