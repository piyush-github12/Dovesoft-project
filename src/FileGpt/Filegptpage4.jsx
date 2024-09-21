import React from 'react'

const Filegptpage4 = () => {

   let data = [
     {
       heading: "Enhanced Customer Experience",
       img: "./images/whatsappPageImages/lead.svg.svg",
       para: "Provide quick, accurate answers to customer questions, improving satisfaction and engagement by delivering the information they need instantly.",
     },
     {
       heading: "Reduced Workload for Teams",
       img: "./images/whatsappPageImages/resolution.svg.svg",
       para: "Automate repetitive inquiries and free up your support and sales teams to focus on more complex tasks that require a human touch.",
     },
     {
       heading: "Multi-Channel Support",
       img: "./images/whatsappPageImages/addmision.svg.svg",
       para: "Leverage the power of AI across multiple platforms, including your website chatbot and WhatsApp, providing a consistent and unified customer experience.",
     },
     {
       heading: "Scalable Solution",
       img: "./images/whatsappPageImages/onboarding.svg.svg",
       para: "Scale your support without scaling your costs. As your business grows, the AI bot can handle an increasing volume of queries without additional resources.",
     },
     {
       heading: "Cost-Effective",
       img: "./images/whatsappPageImages/reminders.svg.svg",
       para: "Reduce the need for extensive customer service staffing, cutting costs while maintaining high-quality support for your users.",
     },
     {
       heading: "Data-Driven Insights",
       img: "./images/whatsappPageImages/streports.svg.svg",
       para: "Gain insights into what your customers are asking the most, allowing you to update and refine your documents to better meet their needs.",
     },
   ];
  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px]">
      <h1 className="text-3xl font-['Epilogue'] text-center font-bold mb-[50px]">
        Benefits of File GPT
      </h1>
      <div className="w-full h-fit mt-[30px] relative grid justify-items-center gap-5 px-[3vw] max-lg:px-[0] grid-cols-2  ">
        {data.map((boxitems, boxindex) => {
          return (
            <div className="w-[35vw] max-lg:w-[40vw] border-[1.5px] rounded-2xl border-[#00000042]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black   ">
              <div className="w-[35px] h-[35px]   ">
                <img className="w-full h-full" src={boxitems.img} alt="" />
              </div>
              <div className="w-full h-full pl-[1.5vw]  ">
                <h1 className="text-xl mb-2 font-bold">
                  {boxitems.heading}
                </h1>
                <h1 className="text-lg ">{boxitems.para}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filegptpage4