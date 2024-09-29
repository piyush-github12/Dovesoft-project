import React from 'react'

const Linkshortnerpage2 = () => {
  let data = [
    {
      heading: "Instant URL Shortening",
      img: "./images/linkshortnerimages/linkshortnerpage2-1.svg",
      para: "Quickly convert long links into short, easy-to-share URLs. No more messy links—just clean, concise URLs that look professional and are easy to distribute.",
    },
    {
      heading: "Multi-Channel Sharing",
      img: "./images/filegptimages/filegptpage2-2.svg",
      para: "Use your short URLs across various communication channels, including emails, social media, SMS, and chat applications, ensuring your audience can access your content no matter where they are.",
    },
    {
      heading: "Customizable Links",
      img: "./images/filehostingimages/filehostingpage2-2.svg",
      para: "Customize your short URLs with branded domain options, making your links more recognizable and building trust with your audience.",
    },
    {
      heading: "Real-Time Analytics",
      img: "./images/linkshortnerimages/linkshortnerpage2-4.svg",
      para: "Track the performance of your short URLs with detailed analytics, including click-through rates, geographic data, and device information. Understand your audience’s behavior and optimize your campaigns accordingly.",
    },
    {
      heading: "Expiration and Access Control",
      img: "./images/linkshortnerimages/linkshortnerpage2-5.svg",
      para: "Set expiration dates for your short URLs or protect them with passwords to control who can access your links and for how long.",
    },
  ];

  return (
    <div className="w-screen h-fit py-[20px] ">
      {data.map((item, index) => {
        return (
          <div className="w-screen min-h-[300px] px-[10vw] max-md:px-[5vw] py-[20px] max-md:py-[20px]  flex items-center justify-between gap-10 max-md:block">
            {index % 2 == 0 ? (
              ""
            ) : (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full  max-md:h-fit max-md:my-[20px]">
                <img
                  className="h-[250px] max-md:w-[250px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            )}
            <div className="w-[40%] hidden px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-full  max-md:h-fit max-md:mb-[20px]">
              <img
                className="h-[250px] max-md:h-[2h0px]"
                src={`${item.img}`}
                alt=""
              />
            </div>
            <div className="w-[50%]  max-md:w-full h-[300px] max-md:h-fit flex flex-col justify-center gap-5">
              <h1 className='font-["Epilogue"] text-2xl font-[500]'>
                {item.heading}
              </h1>
              <h1 className="w-[90%] text-base">{item.para}</h1>
            </div>

            {index % 2 == 0 ? (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full  max-md:h-fit max-md:my-[20px]">
                <img
                  className="h-[250px] max-md:h-[2h0px]"
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

export default Linkshortnerpage2