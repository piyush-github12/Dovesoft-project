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
            boximage: "./images/whatsappPageImages/so2-1.svg",
            boxheading: "Forget Email and SMS!",
            boxpara:
              "WhatsApp is now a primary channel, so attract and nurture with high impact campaigns that support strong calls to action.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-2.svg",
            boxheading: "Engage and Nurture",
            boxpara:
              "Acquire, nurture and upsell using powerful chatbots and APIs, commerce integrations and customer intelligence.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-3.svg",
            boxheading: "Integrate your CRM",
            boxpara:
              "Drive campaigns by integrating your favorite CRM - think of it as enterprise marketing management for WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-4.svg",
            boxheading: "Personalized Promotions",
            boxpara:
              "Design and message with personalized offers at scale to maximize engagement across your CRM data.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-5.svg",
            boxheading: "Intelligent Auto-Response",
            boxpara:
              "Auto-respond intelligently by designing chatbots built to follow logical workflows and the ability to escalate to sales teams.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-6.svg",
            boxheading: "Add to your Agency Stack",
            boxpara:
              "Native and custom integrations for your existing tools,CRMs, Google Sheets, and anything else in your software stack.",
          },
        ],
      },
      {
        mainheading: "SALES TEAMS",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/so3-1.svg",
            boxheading: "WhatsApp Chat",
            boxpara:
              "Add a WhatsApp chat button on your website, Facebook and Instagram ads to invite queries from highly qualified leads.",
          },
          {
            boximage: "./images/whatsappPageImages/so3-2.svg",
            boxheading: "Automated Chatbots",
            boxpara:
              "Start automated conversations right after signup with Wati’s easy to build chatbots that can be built using a drag-and-drop interface.",
          },

          {
            boximage: "./images/whatsappPageImages/so3-3.svg",
            boxheading: "Build Relationships Fast",
            boxpara:
              "Instantaneous conversations with customers help build relationships fast, preventing lead leakage and lost sales.",
          },
          {
            boximage: "./images/whatsappPageImages/so3-4.svg",
            boxheading: "Route Qualified Leads",
            boxpara:
              "Qualify and route your leads to the right place to ensure they are handled by the most appropriate team members.",
          },
          {
            boximage: "./images/whatsappPageImages/so3-5.svg",
            boxheading: "Personalized Promotions",
            boxpara:
              "Design and message with personalized offers at scale to maximize engagement across your CRM data.",
          },
          {
            boximage: "./images/whatsappPageImages/so3-6.svg",
            boxheading: "Integrate Your Tools",
            boxpara:
              "Native and custom integrations for your favorite tools, CRMs, helpdesks, and anything else in your software stack.",
          },
        ],
      },
      {
        mainheading: "MARKETING TEAMS",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/so4-1.svg",
            boxheading: "Instant Lead engagement",
            boxpara:
              "Start conversations with leads as soon as they sign up by responding with automated chatbots.",
          },
          {
            boximage: "./images/whatsappPageImages/so4-2.svg",
            boxheading: "Keep Leads in the Funnel",
            boxpara:
              "Maintain a conversation and prevent lead leakage that happens when follow up by sales teams is delayed.",
          },
          {
            boximage: "./images/whatsappPageImages/so4-3.svg",
            boxheading: "Personalized Promotions",
            boxpara:
              "Design and message with personalized offers at scale to maximize engagement across your CRM data.",
          },

          {
            boximage: "./images/whatsappPageImages/so2-4.svg",
            boxheading: "Re-engage Prospects",
            boxpara:
              "Use personalization to message and re-engage with prospects after initial conversations have gone silent.",
          },
          {
            boximage: "./images/whatsappPageImages/so4-5.svg",
            boxheading: "Alert to Abandoned Carts",
            boxpara:
              "Alert and reconnect to customers with personalized offers for items in abandoned carts on your website.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-2.svg",
            boxheading: "Integrate Your Tools",
            boxpara:
              "Native and custom integration for your favorite tools such as CRM, helpdesk, and anything else in your software stack.",
          },
        ],
      },
      {
        mainheading: "CUSTOMERS SUPPORT",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/so5-1.svg",
            boxheading: "Instant Access",
            boxpara:
              "Deal with customer queries that require instant responses and collect all the right information to solve customer problems 24x7 through WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/so5-2.svg",
            boxheading: "Chatbot Support",
            boxpara:
              "Automate support using Wati’s no-code drag and drop chatbot builder to create simple flows that answer common queries and escalate to your support team when needed.",
          },
          {
            boximage: "./images/whatsappPageImages/so5-3.svg",
            boxheading: "Quality Management",
            boxpara:
              "Drive the quality management process that helps improve your support function by collecting timely feedback from customers after every interaction.",
          },
          {
            boximage: "./images/whatsappPageImages/so5-4.svg",
            boxheading: "Timely Updates",
            boxpara:
              "Send timely WhatsApp updates to let customers know their queries, appointments or orders are all being taken care off.",
          },
          {
            boximage: "./images/whatsappPageImages/so2-2.svg",
            boxheading: "Integrate Support",
            boxpara:
              "Integrate Wati with your CRM and Helpdesk, or Google Sheets, to ensure that you don’t lose the context of conversations.",
          },
          {
            boximage: "./images/whatsappPageImages/so5-6.svg",
            boxheading: "Scale Support",
            boxpara:
              "Wati automation enables you to scale your support through WhatsApp as you grow, without having to invest more in your support team.",
          },
        ],
      },
      {
        mainheading: "Ecommerce",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/so6-1.svg",
            boxheading: "Share Your Catalog",
            boxpara:
              "Use WhatsApp to showcase your products and keep your customers updated with the latest stock information.",
          },
          {
            boximage: "./images/whatsappPageImages/so6-2.svg",
            boxheading: "Fast Response to Offers",
            boxpara:
              "Invite fast responses to your sales promotions as over 90% of WhatsApp messages are opened within 3 minutes.",
          },
          {
            boximage: "./images/whatsappPageImages/so6-3.svg",
            boxheading: "Confirmation & Support",
            boxpara:
              "Send automated order confirmation and billing updates, and automate responses for support with non-code chatbots.",
          },
          {
            boximage: "./images/whatsappPageImages/so6-4.svg",
            boxheading: "Personalized Promotions",
            boxpara:
              "Send targeted WhatsApp campaigns with personalized promotions based on customer purchase patterns or seasons.",
          },
          {
            boximage: "./images/whatsappPageImages/so6-5.svg",
            boxheading: "Loyalty Program Updates",
            boxpara:
              "Enroll customers in your loyalty programs and update them on points schemes and personalized special offers.",
          },
          {
            boximage: "./images/whatsappPageImages/so6-6.svg",
            boxheading: "In Stock & New Products",
            boxpara:
              "Immediately alert customers when items are back in stock, and promote new products, upsell and cross sell.",
          },
        ],
      },
      {
        mainheading: "Healthcare",
        boxes: [
          {
            boximage: "./images/whatsappPageImages/so7-1.svg",
            boxheading: "Appointment Automation",
            boxpara:
              "Automate with Wati’s drag-and-drop chatbot builder to provide self-service convenience that lets customers book via WhatsApp.",
          },
          {
            boximage: "./images/whatsappPageImages/so7-2.svg",
            boxheading: "Appointment Reminders",
            boxpara:
              "Use Wati to avoid missed appointments by sending timely automated WhatsApp reminders to your customers, service users or patients.",
          },
          {
            boximage: "./images/whatsappPageImages/so7-3.svg",
            boxheading: "Confirmation & Support",
            boxpara:
              "Send your customers, service users or patients automated reminders to collect samples and reports from your clinic or hospital.",
          },
          {
            boximage: "./images/whatsappPageImages/so7-4.svg",
            boxheading: "Consultation Follow Up",
            boxpara:
              "Use Wati to provide healthcare with a more personal touch by sending post-consultation follow up WhatsApp messages to check in on your patients.",
          },
          {
            boximage: "./images/whatsappPageImages/so7-5.svg",
            boxheading: "Automated Support",
            boxpara:
              "Creating a Wati chatbot for WhatsApp allows you to support your service users or patients 24/7, even when live support is not available.",
          },
          {
            boximage: "./images/whatsappPageImages/so7-6.svg",
            boxheading: "Privacy Guaranteed",
            boxpara:
              "Provide more confidence in your services by using WhatsApp’s secure messaging technology to protect your healthcare communications.",
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

          <div className="w-full h-[50px] font-bold flex justify-evenly relative z-[9] max-lg:overflow-x-auto max-lg:justify-start  custom-scrollbar2">
            <div className="flex max-lg:min-w-max">
              {data.map((item, index) => {
                return (
                  <h1
                    onClick={() => setclcicked(index)}
                    style={{ userSelect: "none" }}
                    className={`px-[20px] py-[5px] h-fit rounded-md uppercase cursor-pointer whitespace-nowrap ${
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
          </div>

          <div className="w-full h-fit mt-[30px] relative grid justify-items-center gap-5  grid-cols-2  max-sm:grid-cols-1 ">
            {data[clcicked].boxes.map((boxitems, boxindex) => {
              return (
                <div  className="w-[30vw] max-sm:w-full max-lg:w-[40vw]  min-h-[150px] px-[15px] py-[20px] flex max-sm:block bg-white text-black rounded-2xl  ">
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
                    <h1 className="text-base ">{boxitems.boxpara}</h1>
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