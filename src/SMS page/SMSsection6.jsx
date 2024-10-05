import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { IoIosArrowDown } from "react-icons/io";
import { list } from "postcss";

const SMSsection6 = () => {
  let questionanswer = [
    {
      question: "What is an SMS API or messaging API or SMS gateway API?",
      answer: [
        "An SMS API is a programmable code that enables your website, application, mobile app, CRM etc to easily send and receive text messages. It establishes the sending and receiving link between the SMS gateway and integrated application, whereas SMS gateway has a direct connectivity flow with the operator's end. SMS messaging APIs allow you to automate the process of sending SMS messages from your own platform.",
        <br />,
        <br />,
        "You can compose with our API in PHP, C#, Javascript, Java, Python or just in any other language. By integrating API, a business can send alerts and notifications to customers even after business hours.",
      ],
    },
    {
      question: "How does an SMS API work?",
      answer:
        "An SMS messaging API entrench the text messaging capabilities of an integrated source i.e website, app, software etc. by forming a bond with an SMS gateway. An HTTP SMS API triggers its functionality on occurrence of an internal code action hit. Through SMS APIs, telecommunications carriers can connect to the app resource without the need to rely on an interceder platform or software. Sending SMS messages manually becomes old fashioned after integrating an SMS API. SMS messages can be sent automatically using API protocols, saving you time and money.",
    },
    {
      question: "What is SMS API integration?",
      answer:
        "An SMS API integration is connecting the SMS gateway interface code into the application infrastructure code to flow the automated sending and receiving of messages on occurrence of an event. The SMS API integration is done using a HTTP rest API or the SMPP connectivity. The API code should match the functional programming language like PHP, .net, Java, Python, ruby, Javascript, etc. Managing the SMS API integration requires the expertise of a software developer or programmer.",
    },
    {
      question: "What are the benefits of SMS API integration?",
      answer: [
        "Your current application or software can be enhanced with text messaging capabilities using an SMS API. Few more highlights to cover the benefits are:",
        <br />,
        <br />,
        <span className="font-bold">
          Direct request connection to operator.
        </span>,
        <br />,
        <ul className="ml-[50px] max-sm:ml-[20px] list-disc">
          <li>Direct request connection to operator.</li>
          <li>Complete SMS Chanel Automation setup.</li>
          <li>SMS API is secure.</li>
          <li>
            Software or applications can send SMS irrespective of human
            resource.
          </li>
          <li>Real time reporting as Delivery, failure and latency.</li>
        </ul>,
      ],
    },
    {
      question: "How can I start sending messages using SMS API?",
      answer: [
        "Dovesoft will help you organize and manage your SMS API setup if you want to send messages worldwide. SMS gateways can be used in a variety of ways, including transactional alerts and OTP messages across the globe. We offer you a multichannel messaging API that supports SMS, Voice and Email on a single platform and fully assisted with detailed documentation and developer friendly code instructions. Choose precisely which channels you want to use as well you can use all channels on a single API integration.",
        <br />,
        <br />,
        "Just Sign up to us! Rest our team will handle, to fulfill the best messaging service.",
      ],
    },
    {
      question: "What is the cost of sending SMS through API?",
      answer:
        "There is no difference in sending a text message through SMS API and conventional messaging. The pricing depends upon the package and service you purchase. To know more about detailed SMS pricing, Contact our sales team for volume-based discounts.",
    },
    {
      question: "Do you offer a free SMS API?",
      answer:
        "Yes, you can avail the free multichannel API for sending the SMS, Voice and Email in an automated manner. But you need to buy the SMS credit. We offer the 1K SMS with no cost in a free trial plan. Avail it now!!",
    },
    {
      question:
        "What is fallback enabled SMS API? Or what is the solution if SMS fails?",
      answer:
        "As fallback is a sending feature that uses the multi channels simultaneously i.e SMS, Voice & Email. Dovesoft’s API is fallback-enabled that drives the messaging information on the associated channels. Know more on fallback. Fallback-enabled sending is highly recommended in case of SMS OTPs or urgent time based messaging. For instance, if the SMS OTP fails/delays, an automated voice call passes the same one time password digits utilizing builtin text to speech tool.",
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
    <div className="w-screen h-fit py-20 px-[5vw]">
      <h1 className="text-3xl font-['Epilogue']  text-center font-bold">
        Frequently Asked Questions
      </h1>
      <h1 className="px-[15vw] text-base text-center mb-10">
        All questions regarding your issues or queries you are facing or have
        with Dove soft limited
      </h1>
      <div className="w-full h-fit flex justify-center items-center  text-[#2A555A] ">
        <div className="w-[100%] h-fit rounded-2xl bg-[#e5f1ff] p-[5vw] ">
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
};

export default SMSsection6;
