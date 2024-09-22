import React from 'react'

const Voicepage4 = () => {
  let data = [
    {
      heading: "Voicemail",
      image: "./images/Voiceimages/page4-1.svg",
      para: "Record your own greeting or upload an audio. You can also customize voicemail by using TTS feature.",
    },
    {
      heading: "Click to Call",
      image: "./images/Voiceimages/page4-2.svg",
      para: "Place calls directly from your dashboard with just one-click. Connect with your customers at the right time.",
    },
    {
      heading: "Audio Conferencing",
      image: "./images/Voiceimages/page4-3.svg",
      para: "Instantly organize audio conferencing calls at any time. Collaborate with your team and customers on the go.",
    },
    {
      heading: "Empower Workforce",
      image: "./images/Voiceimages/page4-4.svg",
      para: "Empower your agents with cloud telephony suite features. Increase efficiency by automating manual tasks.",
    },
    {
      heading: "Live IVR",
      image: "./images/Voiceimages/page4-5.svg",
      para: "Smart user-friendly IVR platform allows you to build your IVR in real-time. Create positive aroma among customers",
    },
    {
      heading: "Customize Call Flow",
      image: "./images/Voiceimages/page4-6.svg",
      para: "Now customize your ideal call flow and create multi-level IVR with our powerful modules. Personalize the calling.",
    },
    {
      heading: "Skills-based Routing",
      image: "./images/Voiceimages/page4-7.svg",
      para: "Route the call to your most qualified agent that meet caller needs to ensure the first call resolution.",
    },
    {
      heading: "Auto Dialer",
      image: "./images/Voiceimages/page4-8.svg",
      para: "Automate your dialing process to increase your agent productivity. Maximize outbound call volume.",
    },
  ];
  return (
    <div className="py-[50px]">
      <div className=" mt-[50px] px-[10vw] max-md:px-[5vw]  w-full">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          3. IVR
        </h1>
        <h1 className="text-center text-lg mt-[20px] ">
          Dove Soft delivers the full-featured, unique, business-ready, and
          customized cloud call center to cut your business cost and improve
          customer experience. Everything you need in a single cloud solution.
        </h1>
      </div>

      <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] grid grid-cols-2 max-sm:grid-cols-1 mt-[50px] justify-items-center ">
        {data.map((item, index) => {
          return (
            <div className="w-[30vw] max-md:w-[100%]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black rounded-2xl  ">
              <div className="w-[50px] h-[50px]  max-md:mb-[10px] ">
                <img className="w-full h-full" src={item.image} alt="" />
              </div>
              <div className="w-full h-full  pl-[1.5vw]  ">
                <h1 className="text-xl mb-2 font-bold">{item.heading}</h1>
                <h1 className="text-lg ">{item.para}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Voicepage4