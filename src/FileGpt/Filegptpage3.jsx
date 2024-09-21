import React from 'react'

const Filegptpage3 = () => {


    let data = [
      {
        heading: "Sales Assistance",
        img: "./images/filegptimages/filegptpage3-1.svg",
        para: "Support your sales team by providing instant answers to customer inquiries about product features, pricing, and specifications through the AI bot",
      },
      {
        heading: "Customer Support",
        img: "./images/filegptimages/filegptpage3-2.svg",
        para: "Provide quick access to FAQs, help articles, or feedback forms through short URLs in chat, SMS, or email, simplifying the support process for your customers.",
      },
      {
        heading: "Internal Knowledge Sharing",
        img: "./images/filegptimages/filegptpage3-3.svg",
        para: "Enable employees to quickly find information from company handbooks, guidelines, or training materials, helping them resolve queries efficiently without searching through lengthy documents.",
      },
    ];

  return (
    <div className="bg-[#021E43] w-screen h-fit py-[50px]">
      <h1 className='font-["Epilogue"] text-3xl text-center text-white font-[500]'>
        Use Cases
      </h1>
      <div className="bg-[#021E43] w-screen h-fit py-[50px]  px-[10vw] max-md:px-[5vw] flex max-md:block gap-[50px]">
       {data.map((item ,index)=>{
        return (
          <div className="w-[30vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
            <img
              className="w-[80px] mb-[10px]"
              src={item.img}
              alt=""
            />
            <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
              {item.heading}
            </h1>
            <h1 className='text-base'>
             {item.para}
            </h1>
          </div>
        )
       })}
      </div>
    </div>
  );
}

export default Filegptpage3