import React from 'react'

const Otppage2 = () => {
  let data = [
    {
      heading: "Easy Integration",
      img: "./images/OTPimages/page2-1.svg",
      para: "Seamlessly integrate our OTP API into your web, mobile, or desktop applications with minimal code. Comprehensive documentation and sample code are available to speed up the integration process.",
    },
    {
      heading: "Multi-Channel OTP Delivery",
      img: "./images/OTPimages/page2-2.svg",
      para: "Deliver OTPs via multiple channels such as SMS, email, or in-app notifications, ensuring your users receive the codes promptly.",
    },
    {
      heading: "Configurable OTP Settings",
      img: "./images/OTPimages/page2-3.svg",
      para: "Customize OTP length, expiry time, and allowed retries to match your application’s security requirements.",
    },
    {
      heading: "High-Level Security",
      img: "./images/OTPimages/page2-4.svg",
      para: "OTPs are cryptographically secure, ensuring that each code is unique, unpredictable, and valid for only a limited time.",
    },
    {
      heading: "Rate Limiting",
      img: "./images/OTPimages/page2-5.svg",
      para: "Prevent abuse with built-in rate limiting, restricting the number of OTPs generated or validated within a specified timeframe.",
    },
    {
      heading: "Scalability",
      img: "./images/OTPimages/page2-6.svg",
      para: "Designed to handle thousands of OTP requests per second, our API scales effortlessly as your user base grows.",
    },
    {
      heading: "Real-Time Validation",
      img: "./images/OTPimages/page2-7.svg",
      para: "Instantly validate OTPs provided by users, ensuring a smooth and secure authentication process.",
    },
    {
      heading: "Detailed Analytics",
      img: "./images/OTPimages/page2-8.svg",
      para: "Track OTP generation, delivery, and validation with real-time analytics, helping you monitor the success rates and detect potential issues.",
    },
  ];

  return (
    <div className="w-screen h-fit  ">
      {data.map((item, index) => {
        return (
          <div className="w-screen min-h-[300px] px-[10vw] max-md:px-[5vw] py-[20px]  max-md:py-[20px]  max-md:mt-[20px] flex items-center justify-between gap-10 max-md:block">
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
            <div className="w-[50%] hidden px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-full h-[500px] max-md:h-fit max-md:mb-[20px]">
              <img
                className="h-[250px] max-md:h-[250px]"
                src={`${item.img}`}
                alt=""
              />
            </div>
            <div className="w-[50%]  max-md:w-full h-[250px] max-md:h-fit flex flex-col justify-center gap-5">
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

export default Otppage2