import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Emailpage6 = () => {
 const [open, setopen] = useState(0);

 let questionanswer = [
   {
     question: "What is a bulk email campaign?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "Is sending bulk emails illegal?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question:
       "What’s the difference between bulk email and transactional email?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "How can I send bulk emails for free?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "How many subscribers can I store on Brevo?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "How do I create a mass email campaign?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "When is the best time to send bulk email?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question: "How much does bulk email cost?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
   {
     question:
       "Do you meet Gmail's bulk sender requirements (coming into force February 1, 2024)?quiries?",
     answer:
       " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
   },
 ];

 return (
   <div className="w-screen h-hit  px-[5vw] pb-[20px] py-[50px]">
     <h1 className="text-3xl font-['Epilogue'] px-[10vw] max-sm:px-[5vw] pb-[20px] text-center  font-bold mb-[20px] ">
       Frequently Asked Questions for Instagram Inbox
     </h1>

     <div className="w-full h-fit flex justify-center items-center  text-[#2A555A] ">
       <div className="w-[100%] h-fit rounded-2xl bg-[#e5f1ff] p-[5vw]  ">
         {questionanswer.map((item, index) => {
           return (
             <div className=" h-fit w-full border-b-2 py-[10px] border-[#32323258]">
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
               <h1
                 className={`text-base  mt-3 w-[90%] overflow-hidden  transition-all ease-linear duration-200 ${
                   open == index
                     ? "h-[80px] max-lg:h-[80px] max-md:h-[100px]  max-sm:h-auto "
                     : "h-0"
                 } `}
               >
                 {item.answer}
               </h1>
             </div>
           );
         })}
       </div>
     </div>
   </div>
 );
}

export default Emailpage6