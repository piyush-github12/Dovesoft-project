import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";



const Instapage4 = () => {
    const [open, setopen] = useState(0);

     let questionanswwer = [
       {
         question:
           "How does ControlHippo ensure compliance with Instagram's guidelines for automated messaging?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "What level of customization is possible with automated Instagram messages using ControlHippo?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "Does ControlHippo's Instagram Messaging API support quick replies for instant responses?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "How does ControlHippo's tool manage high volumes of Instagram automated messages efficiently?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "Can I personalize the pre-set response templates to align with my brand's tone and style?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "How does ControlHippo ensure the security and privacy of customer data?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "Does the unified dashboard allow integration with other customer support or CRM platforms?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "Are there limitations on the number of messages or conversations that can be managed through ControlHippo's tool?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
       {
         question:
           "How easy is it to set up and train teams to use ControlHippo's tools for efficient handling of inquiries?",
         answer:
           " At ControlHippo, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
       },
     ];

  return (
    <div className="w-screen h-hit  px-[5vw] pb-[20px]">
      <h1 className="text-3xl font-['Epilogue'] px-[10vw] max-sm:px-[5vw] text-center  font-bold mb-[20px] ">
        Frequently Asked Questions for Instagram Inbox
      </h1>

      <div className="w-full h-fit rounded-2xl  ">
        {questionanswwer.map((item, index) => {
          return (
            <div className=" h-fit w-full border-b-2 py-[20px] px-[5vw]  bg-[#fff]  mt-[30px] shadow-[0px_0px_20px_0px] shadow-[#0000004d] rounded-xl border-[#32323258]">
              <div className="flex justify-between items-start w-[100%]  min-h-[40px]">
                <h1
                  className={`text-xl w-[90%] min-h-[40px] transition-all ease-linear duration-200 `}
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
                  open == index ? "h-[100px] max-lg:h-[120px] max-md:h-[150px] max-sm:h-[200px] " : "h-0"
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

export default Instapage4