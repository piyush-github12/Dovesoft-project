import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Emailpage6 = () => {
 const [open, setopen] = useState(null);
 const answerRefs = useRef([]);

 let questionanswer = [
   {
     question: "What is a bulk email campaign?",
     answer:
       "A bulk email is a promotional email campaign or email newsletter typically sent to a large number of contacts (customers, subscribers, leads, etc.) with the goal of driving sales, increasing customer loyalty, or communicating important information.",
   },
   {
     question: "Is sending bulk emails illegal?",
     answer: [
       "In many parts of the world (including the US) it’s illegal to send unsolicited bulk email. To legally send bulk emails and respect anti-spam laws like the CAN-SPAM act, your email contacts need to be 100% opt-in. This means they’ve given explicit consent to receive emails from you via an email signup form or other subscription method. Never use purchased lists.",
       <br />,
       "On top of that, the email content should always match the purpose stated on the signup form and contacts must have the option to unsubscribe at any time. ",
     ],
   },
   {
     question:
       "What’s the difference between bulk email and transactional email?",
     answer:
       "A bulk email is scheduled to be sent to a list of contacts at a specific time and usually contains a promotional message. Transactional emails are personalized one-to-one messages triggered by a transaction or individual user activity. These are sent in real-time over an SMTP relay or dedicated transactional email service. Examples include order confirmation emails, shipping notifications, and password resets.",
   },
   {
     question: "How can I send bulk emails for free?",
     answer:
       "Many email service providers offer free pricing plans. You can send up to 300 emails per day on Dovesoft’s free plan. You don’t need a credit card to sign up and you can cancel your account at any time.",
   },
   {
     question: "How many subscribers can I store on Dovesoft?",
     answer:
       "You can store 100,000 subscribers on the free plan. At Dovesoft, pricing works a bit differently than other bulk email mailers. Our affordable pricing model is based on the number of emails you want to send.",
   },
   {
     question: "How do I create a mass email campaign?",
     answer: [
       "The first step is to establish the goal of your mass email campaign: who's going to receive the email and what specific action do you want them to carry out? Once you have a clear objective, the next step is to plan and write your email copy and email subject line. Finally, design the email using Dovesoft’s drag-and-drop editor (or code the email from scratch with our HTML editor).",
       <br />,
       "Email marketing tools have plenty of other functionalities to make for more advanced campaigns. The best way to know which features your business needs is to try out different email marketing tools and see what works best for you.",
     ],
   },
   {
     question: "When is the best time to send bulk email?",
     answer: [
       " It depends on the type of business. Our studies have revealed Tuesday and Wednesday as the best days, and either 9:00 – 10:00 in the morning or around 2:00 in the afternoon as the best times. Of course, the only way to really know what works best for your audience is to experiment. ",
       <br />,
       "Dovesoft’s Premium plan offers a Send Time Optimization functionality, which uses machine learning to send emails at the best time for each individual recipient. Well worth checking out if you’re a high volume sender with subscribers in different time zones.",
     ],
   },
   {
     question: "How much does bulk email cost?",
     answer:
       "It depends on how many emails you need to send. Our free plan offers 300 emails a day. Paid plans start at $9 for 5,000 emails a month — very affordable pricing for the advanced features included. See all our pricing plans here.",
   },
   {
     question:
       "Do you meet Gmail's bulk sender requirements (coming into force February 1, 2024)?quiries?",
     answer: [
      "Dovesoft does!",
      <br />,
"Gmail is introducing stricter rules for bulk sender over 5,000 emails a day. To help you land your messages in the inbox, Dovesoft already makes the sender authentication process (SPF, DKIM, DMARC) as easy as possible. It streamlines DNS records settings and has rigorous internal anti-spam policies to help you keep below 0.3.% spam rate reports. Dovesoft also automatically inserts an unsubscribe link header in messages so you don't have to worry about it. And finally, Dovesoft offers double opt-in to help you email only willing contacts who are unlikely to mark you as spam.",
     ],
   },
 ];

 useEffect(() => {
   answerRefs.current = answerRefs.current.slice(0, questionanswer.length);
 }, [questionanswer]);

 useEffect(() => {
   questionanswer.forEach((_, index) => {
     if (answerRefs.current[index]) {
       gsap.to(answerRefs.current[index], {
         height: open === index ? 'auto' : 0,
         duration: 0.3,
         ease: 'power2.inOut',
       });
     }
   });
 }, [open, questionanswer]);

 return (
   <div className="w-screen h-hit  px-[5vw] pb-[20px] py-[50px]">
     <h1 className="text-3xl font-['Epilogue'] px-[10vw] max-sm:px-[5vw] pb-[20px] text-center  font-bold mb-[20px] ">
       Frequently Asked Questions for Instagram Inbox
     </h1>

     <div className="w-full h-fit flex justify-center items-center  text-[#2A555A] ">
       <div className="w-[100%] h-fit rounded-2xl bg-[#e5f1ff] p-[5vw]  ">
         {questionanswer.map((item, index) => (
           <div
             key={index}
             className="h-fit w-full border-b-2 py-[20px] border-[#32323258]"
           >
             <div className="flex justify-between items-start w-[100%]  min-h-[40px]">
               <h1
                 className={`text-xl font-semibold w-[90%] min-h-[40px] transition-all ease-linear duration-200 `}
               >
                 {item.question}
               </h1>
               <div className=" h-[25px] w-[25px]  relative   ">
                 <IoIosArrowDown
                   onClick={() => {
                     index == open ? setopen(50) : setopen(index);
                   }}
                   className={`arrow cursor-pointer text-[30px] h-[40px] w-[40px] p-[8px] flex justify-center items-center transition-all ease-linear duration-200 rounded-full  bg-[#2a555a46] text-[#2A555A]  ${
                     open == index ? "rotate-180" : "rotate-0"
                   }`}
                 />
               </div>
             </div>
             <div
               ref={(el) => (answerRefs.current[index] = el)}
               className="text-base  w-[90%] overflow-hidden"
               style={{ height: 0 }}
             >
               <div className="p-2">{item.answer}</div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}

export default Emailpage6