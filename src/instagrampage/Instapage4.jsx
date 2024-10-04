import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import { IoIosArrowDown } from 'react-icons/io';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Instapage4 = () => {
    

    let questionanswer = [
      {
        question:
          "How does Dovesoft ensure compliance with Instagram's guidelines for automated messaging?",
        answer:
          " At Dovesoft, we ensure compliance by adhering strictly to Instagram's policies, constantly updating our tool to align with any changes and verifying all messaging functionalities against Instagram's guidelines.",
      },
      {
        question:
          "What level of customization is possible with automated Instagram messages using Dovesoft?",
        answer:
          "Dovesoft provides extensive customization, allowing personalized responses, brand-aligned templates, and tailored messaging content to match individual brand tones and styles on Instagram.",
      },
      {
        question:
          "Does Dovesoft's Instagram Messaging API support quick replies for instant responses?",
        answer:
          "Yes, Dovesoft's Instagram Messaging API fully supports quick replies– enabling instant responses for efficient engagement.",
      },
      {
        question:
          "How does Dovesoft's tool manage high volumes of Instagram automated messages efficiently?",
        answer:
          "Dovesoft employs efficient algorithms and innovative features within its tool to handle high volumes of Instagram messages, enabling our platform to efficiently manage any volume, no matter how large it is.",
      },
      {
        question:
          "Can I personalize the pre-set response templates to align with my brand's tone and style?",
        answer:
          "Indeed! Dovesoft allows complete personalization of pre-set response templates, ensuring they reflect your brand's voice and resonate with your audience on Instagram.",
      },
      {
        question:
          "How does Dovesoft ensure the security and privacy of customer data?",
        answer:
          "Dovesoft employs robust encryption methods, strict access controls, and regular security audits to safeguard customer data.",
      },
      {
        question:
          "Does the unified dashboard allow integration with other customer support or CRM platforms?",
        answer:
          "Yes, Dovesoft's unified dashboard seamlessly integrates with various customer support and CRM platforms, including HubSpot, Pipedrive, Zoho, and Slack.",
      },
      {
        question:
          "Are there limitations on the number of messages or conversations that can be managed through Dovesoft's tool?",
        answer:
          "While Dovesoft doesn't impose strict limitations, its scalability is designed to handle large volumes of messages and conversations effectively.",
      },
      {
        question:
          "How easy is it to set up and train teams to use Dovesoft's tools for efficient handling of inquiries?",
        answer: "The Dovesoft tool is incredibly easy to set up. Additionally, it features an intuitive UI and easy navigation, making it accessible for users of varying technical expertise.",
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