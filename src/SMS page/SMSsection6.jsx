import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io';

const SMSsection6 = () => {

    let questionanswer = [
      {
        question: "What is an SMS API or messaging API or SMS gateway API?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "How does an SMS API work?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "What is SMS API integration?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "What are the benefits of SMS API integration?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "How can I start sending messages using SMS API?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "What is the cost of sending SMS through API?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question: "Do you offer a free SMS API?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
      {
        question:
          "What is fallback enabled SMS API? Or what is the solution if SMS fails?",
        answer:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aliquid explicabo cum accusamus saepe quis eum natus iste sequi. Hic.",
      },
    ];

    const [open, setopen] = useState(0);

  return (
    <div className="w-screen h-fit py-20 px-[5vw]">
      <h1 className="text-3xl font-['Epilogue']  text-center font-bold">
        Frequently Asked Questions
      </h1>
      <h1 className="px-[15vw] text-base text-center mb-10">
        All questions regarding your issues or queries you are facing or have
        with Dove soft limited
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
                      ? "h-[80px] max-lg:h-[80px] max-md:h-[100px]  max-sm:h-[150px] "
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

export default SMSsection6