import React from 'react'

const Linkshortnerpage3 = () => {
 let data = [
   {
     heading: "Marketing Campaigns",
     img: "./images/filegptimages/filegptpage3-1.svg",
     para: "Share promotional materials, brochures, or videos via short URLs in emails and social media, and track engagement to measure campaign success.",
   },
   {
     heading: "Customer Support",
     img: "./images/filegptimages/filegptpage3-2.svg",
     para: "Provide quick access to FAQs, help articles, or feedback forms through short URLs in chat, SMS, or email, simplifying the support process for your customers.",
   },
   {
     heading: "Sales Outreach",
     img: "./images/filegptimages/filegptpage3-3.svg",
     para: "Use short URLs to share product pages, demos, or pricing information in sales communications, making your links more engaging and clickable.",
   },
   
 ];

 let data1 = [
   {
     heading: "Internal Communications",
     img: "./images/filegptimages/filegptpage3-1.svg",
     para: "Share internal resources, updates, or announcements within your organization with short, trackable links that are easy to manage.",
   },
   {
     heading: "Event Management",
     img: "./images/filegptimages/filegptpage3-2.svg",
     para: "Share event registration pages, schedules, or location maps using short URLs in invites, reminders, and follow-ups.",
   },
 ];

 return (
   <div className="bg-[#021E43] w-screen h-fit py-[50px]">
     <h1 className='font-["Epilogue"] text-3xl text-center text-white font-[500]'>
       Use Cases
     </h1>
     <div className="bg-[#021E43] w-screen h-fit py-[50px] max-md:pb-0  px-[10vw] max-md:px-[5vw] flex justify-center max-md:block gap-[50px]">
       {data.map((item, index) => {
         return (
           <div className="w-[25vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
             <img className="w-[80px] mb-[10px]" src={item.img} alt="" />
             <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
               {item.heading}
             </h1>
             <h1 className="text-base">{item.para}</h1>
           </div>
         );
       })}
     </div>
     <div className="bg-[#021E43] w-screen h-fit py-[50px] max-md:py-[0] px-[10vw] max-md:px-[5vw] flex justify-center max-md:block gap-[50px]">
       {data1.map((item, index) => {
         return (
           <div className="w-[25vw] max-md:w-full max-md:mb-[50px] min-h-[250px]  bg-white rounded-xl p-[20px]   ">
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

export default Linkshortnerpage3