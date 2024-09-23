import React from 'react'

const Filegptpage2 = () => {


  let data = [
    {
      heading: "Effortless Document Upload",
      img: "./images/filegptimages/filegptpage2-1.svg",
      para: "Upload brochures, product guides, service manuals, FAQs, or any other informational documents in various formats, including PDF, Word, and more. Our system automatically processes and indexes the content for quick retrieval.",
    },
    {
      heading: "AI-Powered Answering",
      img: "./images/filegptimages/filegptpage2-2.svg",
      para: "Our advanced AI bot analyzes your uploaded documents, enabling it to respond to customer questions with relevant and precise information. The bot learns from your content, providing answers that are contextually accurate and helpful.",
    },
    {
      heading: "Seamless Chatbot Integration",
      img: "./images/filegptimages/filegptpage2-3.svg",
      para: "Integrate our AI answering system with your existing chatbots on your website or mobile app. Enhance your chatbot’s capabilities by equipping it with knowledge directly extracted from your uploaded materials.",
    },
    {
      heading: "WhatsApp Bot Compatibility",
      img: "./images/filegptimages/filegptpage2-2.svg",
      para: "Extend your AI bot’s reach to WhatsApp, allowing customers to get answers on their preferred messaging platform. Whether it's product queries or service information, your AI bot can handle it all on WhatsApp.",
    },
    {
      heading: "24/7 Availability",
      img: "./images/filegptimages/filegptpage2-3.svg",
      para: "Provide round-the-clock support without additional manpower. The AI bot operates continuously, ensuring customers get the information they need at any time of day or night.",
    },
  ];

  return (
    <div className="w-screen h-fit pt-[50px] ">

      {data.map((item , index)=>{
        return (
          <div className="w-screen min-h-[500px] px-[10vw] max-md:px-[5vw] py-[50px] max-md:py-[20px]  max-md:mt-[20px] flex items-center gap-10 max-md:block">
          
          
            {index % 2 == 0 ? (
              ""
            ) : (
              <div className="w-[500px] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[50px]">
                <img
                  className="w-[400px] max-md:w-[300px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            )}
            <div className="w-[500px] hidden px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-full h-[500px] max-md:h-fit max-md:mb-[50px]">
              <img
                className="w-[400px] max-md:w-[300px]"
                src={`${item.img}`}
                alt=""
              />
            </div>
            <div className="w-[50%]  max-md:w-full h-[500px] max-md:h-fit flex flex-col justify-center gap-5">
              <h1 className='font-["Epilogue"] text-2xl font-[500]'>
                {item.heading}
              </h1>
              <h1 className="w-[90%] text-base">{item.para}</h1>
            </div>

            {index % 2 == 0 ? (
              <div className="w-[500px] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[50px]">
                <img
                  className="w-[400px] max-md:w-[300px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      
    </div>
  );
}

export default Filegptpage2