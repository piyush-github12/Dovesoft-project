import { data } from 'autoprefixer';
import React from 'react'

const Voicepage2 = () => {

   let data = [
     {
       heading: "Voice Caller ID",
       image: "./images/Voiceimages/page2-1.svg",
       para: "You can use your mobile number as caller ID. You can also get a unique and customizable caller ID. Improve your presence and engagement rate.",
     },
     {
       heading: "Voice Campaign Summary and Reports",
       image: "./images/Voiceimages/page2-2.svg",
       para: "As soon as the call is completed, well update the report of each number. Track the performance of your voice campaign in real-time.",
     },
     {
       heading: "High Speed",
       image: "./images/Voiceimages/page2-3.svg",
       para: "10000 concurrent calls at once. It allows you to reach a large number of people just in seconds. Make your campaign effective and generate leads.",
     },
     {
       heading: "Speak to Live Agent",
       image: "./images/Voiceimages/page2-4.svg",
       para: "Your voice message gives the recipient an option of speaking to a live agent. It allows you to focus on callers who WANT to speak to you.",
     },
     {
       heading: "Press Key 1",
       image: "./images/Voiceimages/page2-5.svg",
       para: "Send a personalized message and prompts people to press #1 to show their interest. Receiver can press 1 and call will automatically be disconnected.",
     },
     {
       heading: "Rescheduled The Campaign",
       image: "./images/Voiceimages/page2-6.png",
       para: "You can resend your voice campaign to your contacts who didn’t answer, busy, failed, congestion, timeout ring and more. Choose the element and resend it.",
     },
     {
       heading: "Automate The Campaign",
       image: "./images/Voiceimages/page2-7.svg",
       para: "You want to send your campaign in the next morning. Just schedule your campaign on specific date and time and the automated system will send your campaign.",
     },
     {
       heading: "Import Contacts",
       image: "./images/Voiceimages/page2-8.svg",
       para: "Import all of your contact number in few seconds. The Smart system will filter all your contacts, remove duplicate and invalid numbers automatically.",
     },
   ];
  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] grid grid-cols-2 max-sm:grid-cols-1 mt-[50px] justify-items-center ">
      
        {data.map((item, index) => {
          return (
            <div className="w-[30vw] max-md:w-[100%]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black rounded-2xl  ">
              <div className="w-[50px] h-[50px] mb-[10px]  ">
                <img className="w-full h-full" src={item.image} alt="" />
              </div>
              <div className="w-full h-full pl-[1.5vw]  ">
                <h1 className="text-xl mb-2 font-bold">
                  {item.heading}
                </h1>
                <h1 className="text-base ">{item.para}</h1>
              </div>
            </div>
          );
        })}
      
    </div>
  );
}

export default Voicepage2