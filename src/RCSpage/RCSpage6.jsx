import React from 'react'

const RCSpage6 = () => {

    const data = [
      {
        image: "./images/RCSimages/Background.svg",
        heading: "Rich Media Support",
        para: "RCS messaging to deliver rich media content such as QR codes, attractive images, HD videos, and interactive elements directly to your customers' mobile phones.",
      },
      {
        image:  "./images/RCSimages/Background-1.svg",
        heading: "Branding Impression",
        para: "RCS messages are more representable because of the display picture and tagline to the profile in the header. It provides business branding, brand awareness, and chat format presentation.",
      },
      {
        image: "./images/RCSimages/Background-2.svg" ,
        heading: "Instant Response",
        para: "Add custom response buttons after your brand marketing message to asist customers to respond instantly or engage more actively in the conversation.",
      },
      {
        image:  "./images/RCSimages/Background-3.svg",
        heading: "Detailed Insights",
        para: "Receive instant notifications upon customer message opens and gauge the success of your message marketing campaign by actively tracking customer responses.",
      },
      {
        image:  "./images/RCSimages/Background-4.svg",
        heading: "Showcase E-Stores",
        para: "Create a gallery of images and broadcast it to the campaign audience, including clickable CTA links. This allows multiple images, enhancing the customer experience with detailed product information.",
      },
      {
        image:  "./images/RCSimages/Background-5.svg",
        heading: "Payment Link",
        para: "Makes payments easy on the same message. RCS messages allow the payment links to the same message as WhatsApp did. UPI and e-payment gateways are allowed",
      },
    ];


  return (
    <div className=" relative    min-h-fit   w-full max-sm:h-fit">
      <div
        id="section6"
        className="w-screen  py-[50px]  z-[9] min-h-fit  max-sm:h-fit  rounded-b-[55px]  "
      >
        <h1 className="text-3xl font-['Epilogue']  max-md:text-2xl  text-center font-bold mb-2">
          Why use RCS messaging?
        </h1>

        <div className="w-screen h-fit  grid grid-cols-3  px-[10vw] max-lg:px-[5vw]  gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[25vw]  min-h-[290px] max-lg:w-[40vw] max-md:w-[100%]  rounded-2xl"
            >
              <div className="w-full h-[100px]  p-2 flex justify-center items-end">
                <img className="w-[72]" src={`${item.image}`} alt="" />
              </div>
              <div className="w-full min-h-[190px] relative px-2 flex flex-col items-center justify-center">
                <h1 className="font-bold min-h-[50px]  text-center  text-2xl  ">
                  {item.heading}
                </h1>
                <p className="text-base text-center  max-sm:text-base mb-2  max-lg:w-[40vw] max-md:w-[100%]">
                  {item.para}
                </p>
                {/* <div className="flex gap-2 absolute bottom-5 items-center text-[#1871ED] text-base   hover:text-xl transition-all cursor-pointer">
                  <h1 className="">Explore {item.heading}</h1>
                  <FaLongArrowAltRight />
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Section7 /> */}
    </div>
  );
}

export default RCSpage6