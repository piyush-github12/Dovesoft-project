import React from 'react'

const Linksshotnerpage4 = () => {
  let data = [
    {
      heading: "Improved User Experience",
      img: "./images/whatsappPageImages/lead.svg.svg",
      para: "Short URLs are easier to read, share, and remember, providing a smoother experience for your audience.",
    },
    {
      heading: "Enhanced Brand Visibility",
      img: "./images/whatsappPageImages/resolution.svg.svg",
      para: "Custom short URLs help reinforce your brand and build trust with your audience, making your communications more professional.",
    },
    {
      heading: "Simplified Sharing",
      img: "./images/whatsappPageImages/addmision.svg.svg",
      para: "Easily distribute links across any channel, including character-limited platforms like Twitter, without worrying about long, complex URLs.",
    },
    {
      heading: "Actionable Insights",
      img: "./images/whatsappPageImages/onboarding.svg.svg",
      para: "Gain valuable insights into how your audience interacts with your links, allowing you to fine-tune your strategies and improve engagement.",
    },
    {
      heading: "Increased Click-Through Rates",
      img: "./images/whatsappPageImages/reminders.svg.svg",
      para: "Short and branded URLs are more likely to be clicked, leading to higher engagement and better conversion rates.",
    },
    {
      heading: "Security and Control",
      img: "./images/whatsappPageImages/streports.svg.svg",
      para: "Manage your links with expiration dates and access restrictions, ensuring that your content is shared securely and only with the intended audience.",
    },
  ];
  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px]">
      <h1 className="text-3xl font-['Epilogue'] text-center font-bold mb-[50px]">
        Benefits of Link Shortner
      </h1>
      <div className="w-full h-fit mt-[30px] relative grid justify-items-center gap-5 px-[3vw] max-lg:px-[0] grid-cols-2  ">
        {data.map((boxitems, boxindex) => {
          return (
            <div className="w-[35vw] max-lg:w-[40vw] border-[1.5px] rounded-2xl border-[#00000042]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black   ">
              <div className="w-[35px] h-[35px]   ">
                <img className="w-full h-full" src={boxitems.img} alt="" />
              </div>
              <div className="w-full h-full pl-[1.5vw]  ">
                <h1 className="text-xl mb-2 font-bold">{boxitems.heading}</h1>
                <h1 className="text-base ">{boxitems.para}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Linksshotnerpage4