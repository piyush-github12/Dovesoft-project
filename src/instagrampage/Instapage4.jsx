import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Instapage4 = () => {
    

    let questionanswer = [
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
      const [open, setopen] = useState(null);
      const answerRefs = useRef([]);

      useEffect(() => {
        answerRefs.current = answerRefs.current.slice(0, questionanswer.length);
      }, [questionanswer]);

      useEffect(() => {
        questionanswer.forEach((_, index) => {
          if (answerRefs.current[index]) {
            gsap.to(answerRefs.current[index], {
              height: open === index ? "auto" : 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        });
      }, [open, questionanswer]);
    return (
        <div className="w-screen h-hit  px-[5vw] pb-[20px]">
            <h1 className="text-3xl font-['Epilogue'] px-[10vw] max-sm:px-[5vw] text-center  font-bold mb-[20px] ">
                Frequently Asked Questions for Instagram Inbox
            </h1>
            <div className="w-full h-fit flex justify-center items-center  text-[#2A555A] ">
                <div className="w-[100%] h-fit rounded-2xl bg-[#e5f1ff] p-[5vw]  ">
                    {questionanswer.map((item, index) => (
                        <div key={index} className="h-fit w-full border-b-2 py-[20px] border-[#32323258]">
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
                                ref={el => answerRefs.current[index] = el}
                                className="text-base  w-[90%] overflow-hidden"
                                style={{ height: 0 }}
                            >
                                <div className="p-2">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Instapage4