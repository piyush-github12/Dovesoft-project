import React from 'react'

const Filehostingpage3 = () => {
 
    let data = [
      {
        heading: "Marketing Campaigns",
        img: "./images/filegptimages/filegptpage3-1.svg",
        para: "Share promotional materials, brochures, or videos via short URLs in emails and social media, and track engagement to measure campaign success.",
      },
      {
        heading: "Sales and Support",
        img: "./images/filegptimages/filegptpage3-2.svg",
        para: "Distribute product manuals, support documents, or pricing sheets to customers via a short link and monitor how often they access the content.",
      },
      {
        heading: "Internal Communications",
        img: "./images/filegptimages/filegptpage3-3.svg",
        para: "Share files internally within your team or organization with traceable short URLs, ensuring that everyone stays on the same page.",
      },
    ];

    return (
      <div className="bg-[#021E43] w-screen h-fit py-[50px]">
        <h1 className='font-["Epilogue"] text-3xl text-center text-white font-[500]'>
          Use Cases
        </h1>
        <div className="bg-[#021E43] w-screen h-fit py-[50px]  px-[10vw] max-md:px-[5vw] flex max-md:block gap-[50px]">
          {data.map((item, index) => {
            return (
              <div className="w-[30vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
                <img className="w-[80px] mb-[10px]" src={item.img} alt="" />
                <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
                  {item.heading}
                </h1>
                <h1 className="text-base">{item.para}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Filehostingpage3