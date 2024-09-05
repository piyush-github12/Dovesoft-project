import React, { useState } from 'react'

const WhatsappSolutions = () => {

    const [clcicked, setclcicked] = useState(0)

    let data = [
      {
        mainheading: "Education",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
        ],
      },
      {
        mainheading: "Marketing Agencies",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
        ],
      },
      {
        mainheading: "SALES TEAMS",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },

          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
        ],
      },
      {
        mainheading: "MARKETING TEAMS",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },

          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
        ],
      },
      {
        mainheading: "CUSTOMERS SUPPORT",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
        ],
      },
      {
        mainheading: "Ecommerce",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
        ],
      },
      {
        mainheading: "Healthcare",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/lead.svg.svg",
            boxheading: "Lead Management",
            boxpara:
              "Engage and attract new students, and integrate with your CRM to broadcast marketing messages on WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/resolution.svg.svg",
            boxheading: "Instant Problem Resolution",
            boxpara:
              "Provide quick answers with automated chatbot flows and escalate to support teams when human action is needed.",
          },
          {
            boximage: "./images/whatsappPageImages/addmision.svg.svg",
            boxheading: "Support For Admissions",
            boxpara:
              "Guide parents through your admissions process with chatbots that ensure students sign up correctly.",
          },
          {
            boximage: "./images/whatsappPageImages/onboarding.svg.svg",
            boxheading: "Onboarding Support",
            boxpara:
              "Provide instant information to assist students in completing your onboarding process easily.",
          },
          {
            boximage: "./images/whatsappPageImages/reminders.svg.svg",
            boxheading: "Timely Class Reminders",
            boxpara:
              "Message students directly on WhatsApp with automated reminders of timetables and classes.",
          },
          {
            boximage: "./images/whatsappPageImages/streports.svg.svg",
            boxheading: "Student Reports",
            boxpara:
              "Instantly deliver reports and exam results to students and parents with automated WhatsApp messages.",
          },
        ],
      },
    ];
    return (
      <div className="w-screen h-fit px-[5vw] max-sm:px-[2.5vw] py-10 text-white">
        <div className="w-full h-fit p-[5vw] max-sm:px-[2.5vw] bg-red-400 relative rounded-[55px] overflow-hidden">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="./images/whatsappPageImages/BackgroundGreen.png"
            alt=""
          />
          <h1 className="text-center text-3xl font-['Epilogue']  relative z-[9] max-md:text-2xl font-bold mb-10">
            Solutions for All
          </h1>

          <div className="w-full h-[50px] font-bold flex justify-evenly relative z-[9]">
            {data.map((item, index) => {
              return (
                <h1
                  onClick={() => setclcicked(index)}
                  className={`px-[20px] py-[5px] h-fit rounded-md uppercase cursor-pointer ${
                    clcicked === index
                      ? "bg-white text-black"
                      : "bg-transparent text-white"
                  } `}
                >
                  {" "}
                  {item.mainheading}
                </h1>
              );
            })}
          </div>

          <div className="w-full h-fit mt-[30px] relative grid justify-items-center gap-5  grid-cols-2  ">
            {data[clcicked].boxes.map((boxitems, boxindex) => {
              return (
                <div className="w-[30vw] max-lg:w-[40vw]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black rounded-2xl  ">
                  <div className="w-[35px] h-[35px]   ">
                    <img
                      className="w-full h-full"
                      src={boxitems.boximage}
                      alt=""
                    />
                  </div>
                  <div className="w-full h-full pl-[1.5vw]  ">
                    <h1 className="text-xl mb-2 font-bold">
                      {boxitems.boxheading}
                    </h1>
                    <h1 className="text-lg ">{boxitems.boxpara}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default WhatsappSolutions