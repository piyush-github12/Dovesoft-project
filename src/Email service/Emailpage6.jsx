import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6';

const Emailpage6 = () => {
 const [open, setopen] = useState(0);

 let questionanswwer = [
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
   <div className="w-screen h-hit  px-[5vw] pb-[20px] py-[100px]">
     <h1 className="text-3xl font-['Epilogue'] px-[10vw] max-sm:px-[5vw] text-center  font-bold mb-[20px] ">
       Frequently Asked Questions for Instagram Inbox
     </h1>

     <div className="w-full h-fit rounded-2xl  ">
       {questionanswwer.map((item, index) => {
         return (
           <div className=" h-fit w-full border-b-2 py-[20px] px-[5vw]  bg-[#fff]  mt-[30px] shadow-[0px_0px_20px_0px] shadow-[#00000030] rounded-xl border-[#32323258]">
             <div className="flex justify-between items-start w-[100%]  min-h-[40px]">
               <h1
                 className={`text-xl font-semibold w-[90%] min-h-[40px] transition-all ease-linear duration-200 `}
               >
                 {item.question}
               </h1>
               <div className=" h-[25px] w-[25px]  relative   ">
                 {open != index ? (
                   <FaPlus
                     onClick={() => {
                       index == open ? setopen(50) : setopen(index);
                     }}
                     className={`arrow cursor-pointer text-[15px]   h-full w-full absolute top-0 left-o   rounded-full`}
                   />
                 ) : (
                   <FaMinus
                     onClick={() => {
                       index == open ? setopen(50) : setopen(index);
                     }}
                     className={` cursor-pointer text-[15px]   h-full w-full absolute top-0 left-o `}
                   />
                 )}
               </div>
             </div>
             <h1
               className={`text-lg  mt-3 w-[90%] overflow-hidden  transition-all ease-linear duration-200 ${
                 open == index
                   ? "h-[100px] max-lg:h-[120px] max-md:h-[150px] max-sm:h-[200px] "
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
 );
}

export default Emailpage6