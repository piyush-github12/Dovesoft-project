import React from 'react'

const Voicepage5 = () => {
    let data = [
      {
        heading: "Call Logs",
        img: "./images/Voiceimages/page5-1.svg",
        para: "Call logs enable you to track all your call details and history and see how efficient your call center is.",
      },
      {
        heading: "Automatic Call Distribution",
        img: "./images/Voiceimages/page5-2.svg",
        para: "Distribute inbound calls to specific agent or department based customer data and IVR selection.",
      },
      {
        heading: "Bunch ID",
        img: "./images/Voiceimages/page5-3.svg",
        para: "Bunch Id allows you to give a label to your customers. You can identify a customer when he/she calls.",
      },
      {
        heading: "Inbound Call Blocking",
        img: "./images/Voiceimages/page5-4.svg",
        para: "Blacklist specific numbers of spammers and bots to save your time and energy. Shield your agents.",
      },
      {
        heading: "Powerful Dashboard",
        img: "./images/Voiceimages/page5-5.svg",
        para: "Here you can check all your call center statistics and call reports. You have all the control you desire.",
      },
      {
        heading: "Call Forwarding",
        img: "./images/Voiceimages/page5-6.svg",
        para: "Busy on another call? You can forward the calls to other agent’s number by using our modules.",
      },
      {
        heading: "Call Recording",
        img: "./images/Voiceimages/page5-7.svg",
        para: "Record live inbound or outbound calls. Stop or start live call recording. Listen your recordings anytime.",
      },
      {
        heading: "Call Monitoring",
        img: "./images/Voiceimages/page5-8.svg",
        para: "Monitor your agent’s live call to track customer service and understand your customer’s needs.",
      },
    ];
  return (
    <div className="py-[50px] ">
      <div className=" mt-[50px] px-[10vw] max-md:px-[5vw]  w-full">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          Manage Your IVR
        </h1>
        <h1 className="text-center text-lg mt-[20px] ">
          A Manageable cloud call center to control your calls and improve
          customer experience. Manage a large volume of inbound calls and
          generate more sales opportunities. Better agent engagement and faster
          resolution.
        </h1>
      </div>

      <div className='w-screen h-fit px-[10vw]  grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-[50px]  mt-[50px]'>
        {data.map((item ,index)=>{
            return (
              <div className="min-h-[150px]">
                <img className="h-[40px]" src={item.img} alt="" />
                <h1 className="text-lg font-['Epilogue'] mt-[10px] font-bold">
                  {item.heading}
                </h1>
                <h1 className="text-lg mt-[10px] ">
                    {item.para}
                </h1>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Voicepage5