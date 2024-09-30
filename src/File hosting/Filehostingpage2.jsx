import { useGSAP } from '@gsap/react';
import React from 'react'

const Filehostingpage2 = () => {
  let data = [
    {
      heading: "Quick File Uploads",
      img: "./images/filegptimages/page2-1.png",
      para: "Effortlessly upload files of various formats, including PDFs, images, videos, and more. Our intuitive interface ensures a seamless upload experience.",
    },
    {
      heading: "Short URL Generation",
      img: "./images/linkshortnerimages/linkshortnerpage2-3.png",
      para: "Instantly convert your uploaded files into concise, shareable URLs. These short links are perfect for whatsapp, RCS, SMS and email campaigns, social media posts, and more.",
    },
    {
      heading: "Multi-Channel Sharing",
      img: "./images/filehostingimages/page2-3.png",
      para: " Share the generated short URLs across all channels like SMS, Whatsapp, RCS, Email and manuy more. Simplify the way you distribute content and reach your audience wherever they are.",
    },
    {
      heading: "Traceable Reports",
      img: "./images/filehostingimages/page2-4.png",
      para: "Gain insights into how your short URLs are performing. Track clicks, location data, devices used, and more with real-time analytics, helping you understand user engagement and optimize your sharing strategy.",
    },
    {
      heading: "Custom URL Branding",
      img: "./images/filehostingimages/page2-5.png",
      para: "Personalize your short URLs with custom domain options, enhancing brand visibility and trust.",
    },
    {
      heading: "Expiration and Access Control",
      img: "./images/filehostingimages/page2-6.png",
      para: "Set expiration dates for short URLs or restrict access with password protection, ensuring your files remain secure and available for only as long as you need.",
    },
    {
      heading: "Secure File Hosting",
      img: "./images/filehostingimages/filehostingpage2-7.svg",
      para: "Uploaded files are securely hosted with encrypted connections, ensuring your data remains protected at all times..",
    },
  ];

  

  return (
    <div className="w-screen h-fit py-[50px] max-md:py-[20px]">
      {data.map((item, index) => {
        return (
          <div className="w-screen min-h-[300px] px-[10vw] max-md:px-[5vw] py-[20px] max-md:py-[20px]   flex items-center justify-between gap-10 max-md:block">
            {index % 2 == 0 ? (
              ""

            ) : (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[50px]">
                <img
                  className="h-[250px] max-md:h-[250px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            )}
            <div className="w-[40%] hidden px-[50px] max-md:px-[30px] py-[30px] max-md:py-[10px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-full h-[500px] max-md:h-fit max-md:mb-[20px]">
              <img
                className="h-[250px] max-md:h-[250px]"
                src={`${item.img}`}
                alt=""
              />
            </div>
            <div className="w-[50%]  max-md:w-full h-[250px] max-md:h-fit flex flex-col justify-center gap-5 max-md:gap-2">
              <h1 className='font-["Epilogue"] text-2xl font-[500]'>
                {item.heading}
              </h1>
              <h1 className="w-[90%] text-base">{item.para}</h1>
            </div>

            {index % 2 == 0 ? (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[50px]">
                <img
                  className="h-[250px] max-md:h-[250px]"
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

export default Filehostingpage2