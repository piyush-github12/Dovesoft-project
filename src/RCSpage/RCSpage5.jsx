import React from 'react'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

const RCSpage5 = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger); 
    const handalclick = (e) => {
      let rightelem = e.target.id + "para";
      let currentimage = e.target.id + "image";
      let currenttext = e.target.id;

      //  let tl = gsap.timeline()

      gsap.to(".sec5heading", {
        opacity: 0,
        duration: 0,
        y: "200px",
      });
      gsap.to(`#${rightelem}`, {
        opacity: 1,
        y: 0,
        // duration:1
      });

      gsap.to(".imageani", {
        opacity: 0,
        delay:0,
        duration: 0,
        x: "-100px",
      });
      gsap.to(`#${currentimage}`, {
        opacity: 1,
        // duration:0,
        x: "0px",
      });
      gsap.to(".textanimation", {
        color: "#fff",
        duration: 0,
        scale: 1,
      });
      gsap.to(`#${currenttext}`, {
        color: "#61a3ff",
        scale: 1.1,
      });
    };
  return (
    <div className=" relative py-2 w-[100vw] min-h-[850px]  ">
      <div
        id="section5"
        className="section5 w-[100vw]  z-[10] px-[5vw] max-lg:px-[2.5vw] min-h-[800px] text-white flex justify-center items-center "
      >
        <div className="w-[100%] h-[95%] px-[5vw] max-sm:px-[0vw] relative rounded-[55px] overflow-hidden bg-red-300 py-[100px] max-sm:py-[50px] ">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="./images/BlueBackground.png"
            alt=""
          />

          <h1 className="text-center font-['Epilogue']  text-3xl relative z-[9] max-lg:text-2xl font-bold mb-10">
            <span className="text-[#61a3ff]"> RCS </span>
            for every industry
          </h1>
          <div className="flex relative z-[9]  w-full h-[60vh] max-lg:h-fit  justify-between">
            <div className=" w-[25%] max-lg:w-[40%] justify-center max-lg:pl-[5vw] h-full max-lg:h-fit  text-xl flex flex-col gap-10   border-r-[1px]  border-[#cce1ff5e] ">
              <h1
                onClick={handalclick}
                id="h1"
                className=" textanimation font-bold cursor-pointer text-[#61a3ff]"
              >
                Retail
              </h1>
              <h1
                onClick={handalclick}
                id="h2"
                className=" textanimation font-bold cursor-pointer"
              >
                BFSI
              </h1>
              <h1
                onClick={handalclick}
                id="h3"
                className=" textanimation font-bold cursor-pointer"
              >
                Travel & Hospitality
              </h1>
              <h1
                onClick={handalclick}
                id="h4"
                className=" textanimation font-bold cursor-pointer"
              >
                Telecom
              </h1>
              <h1
                onClick={handalclick}
                id="h5"
                className=" textanimation font-bold cursor-pointer"
              >
                Healthcare
              </h1>
            </div>
            <div className="w-[75%]  max-lg:w-[60%] max-lg:h-[350px] flex justify-center items-center ">
              <div className="w-[50vw] max-lg:w-full  h-full  flex justify-center items-center relative p-2 overflow-hidden ">
                <div className="  w-[50vw] h-[20%] max-lg:hidden absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#021f43] to-transparent"></div>
                <img
                  id="h1image"
                  src="./images/RCSimages/retail.webp"
                  className="imageani object-cover w-[400px] max-lg:w-[300px] max-sm:w-[200px]  absolute top-[50%] translate-y-[-50%] "
                  alt=""
                />
                <img
                  id="h2image"
                  src=".//images/RCSimages/bfsi.webp"
                  className="imageani object-cover w-[400px] max-lg:w-[300px] max-sm:w-[200px]  absolute top-[50%] translate-y-[-50%]  opacity-0"
                  alt=""
                />
                <img
                  id="h3image"
                  src="./images/RCSimages/travel.webp"
                  className="imageani object-cover w-[400px] max-lg:w-[300px] max-sm:w-[200px]  absolute top-[50%] translate-y-[-50%]  opacity-0"
                  alt=""
                />
                <img
                  id="h4image"
                  src=".//images/RCSimages/telecom.webp"
                  className="imageani object-cover w-[400px] max-lg:w-[300px] max-sm:w-[200px]  absolute top-[50%] translate-y-[-50%]  opacity-0"
                  alt=""
                />
                <img
                  id="h5image"
                  src="./images/RCSimages/healthcare.webp"
                  className="imageani object-cover w-[400px] max-lg:w-[300px] max-sm:w-[200px]  absolute top-[50%] translate-y-[-50%]  opacity-0"
                  alt=""
                />
              </div>
              <div className="w-[50%] max-lg:hidden  h-[60vh] max-lg:h-[500px]  ">
                <div className="w-full h-[60vh] max-lg:h-[500px]   max-lg:pl-2 z-10 flex flex-col justify-center gap-5">
                  <div className="w-full h-full  flex flex-col justify-center    overflow-hidden relative ">
                    <h1
                      id="h1para"
                      className="sec5heading text-base max-lg:text-base  h-fit    absolute"
                    >
                      <span className="font-bold  text-2xl font-['Epilogue'] ">
                        RCS for Retail
                      </span>{" "}
                      <br />
                      <br />
                      Send your marketing campaign on RCS platform to launch new
                      products, showcase carousals, post-purchase followups,
                      order tracking, etc. all within one interface
                    </h1>
                    <h1
                      id="h2para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                    >
                      <span className="font-bold  text-2xl font-['Epilogue'] ">
                        RCS for Banking, Financial Services And Insurance
                      </span>{" "}
                      <br />
                      <br />
                      Offer comprehensive banking services over RCS messaging,
                      including upselling and cross-selling financial products,
                      sending notification and updates, OTPs, and facilitating
                      the collection of EMIs and payments.
                    </h1>
                    <h1
                      id="h3para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                    >
                      <span className="font-bold  text-2xl font-['Epilogue'] ">
                        RCS for Tour Travel and Hospitality
                      </span>{" "}
                      <br />
                      <br />
                      Sends travel packages with images. Keep customers informed
                      with travel updates, booking details, and last-minute
                      necessities such as boarding passes. Streamline
                      reservations with a virtual concierge and offer
                      around-the-clock travel recommendations for a seamless
                      travel experience.
                    </h1>
                    <h1
                      id="h4para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                    >
                      <span className="font-bold  text-2xl font-['Epilogue'] ">
                        RCS for Telecom
                      </span>{" "}
                      <br />
                      <br />
                      Send promotional offers, payment reminders, recharge
                      transactions through chat, and offer real-time customer
                      support using both virtual assistance and live agents.
                    </h1>
                    <h1
                      id="h5para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                    >
                      <span className="font-bold  text-2xl font-['Epilogue'] ">
                        RCS for Healthcare, Hospitals, and Laboratories.
                      </span>{" "}
                      <br />
                      <br />
                      Hospital has a lot to do with messaging. Easy updates to
                      patients for appointments, send reminders, test reports,
                      patient history and video educational guidance for
                      treatments.
                    </h1>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] max-lg:block hidden  h-[400px]   ">
            <div className="w-full h-[400px]   max-lg:pl-2 z-10 flex flex-col justify-center gap-5">
              <div className="w-full h-full  flex flex-col justify-center    overflow-hidden relative ">
                <h1
                  id="h1para"
                  className="sec5heading px-[2.5vw] text-base max-lg:text-base  h-fit    absolute"
                >
                  <span className="font-bold  text-2xl font-['Epilogue'] ">
                    RCS for Retail
                  </span>{" "}
                  <br />
                  <br />
                  Send your marketing campaign on RCS platform to launch new
                  products, showcase carousals, post-purchase followups, order
                  tracking, etc. all within one interface
                </h1>
                <h1
                  id="h2para"
                  className="sec5heading px-[2.5vw] translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                >
                  1 . Seamless integrations with multiple e-commerce portals,
                  CRMs & more. Incorporate our cloud API capabilities into your
                  business workflow through our trusted integration partners.
                </h1>
                <h1
                  id="h3para"
                  className="sec5heading px-[2.5vw] translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                >
                  1 . This tool enables you to encrypt sensitive SMS contents
                  such as one-time passwords, and banking transaction details.{" "}
                  <br />
                  <br />
                  2 . This functionality is exclusively available through the
                  SMS API. <br />
                  <br />3 . No one, not even our support staff, can decrypt the
                  contents of these encrypted SMS messages.
                </h1>
                <h1
                  id="h4para"
                  className="sec5heading px-[2.5vw] translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                >
                  1 . The system can automatically identify URLs within SMS
                  content, whether they are from HTTP links or the user
                  interface. <br />
                  <br />2 . The application then converts this lengthy URL into
                  a shortened, unique URL specific to each mobile number. <br />
                  <br />3 . When the user clicks on this shortened URL, the
                  application will track and record the timing, device category
                  (e.g. computer or mobile device), operating system, and
                  browser information.
                </h1>
                <h1
                  id="h5para"
                  className="sec5heading px-[2.5vw] translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                >
                  1 . Construct feedback forms, quizzes, surveys, polls, and
                  lead capture forms. <br />
                  <br />
                  2 . Generate trackable short URLs for the smart add-ons, which
                  provide insights like timing, device category (e.g. computer
                  or mobile), operating system, and browser when the URL is
                  accessed. <br />
                  <br />3 . Leverage these smart add-ons across other
                  communication channels such as SMS, WhatsApp, RCS, and Email
                  using generated short URLs.
                </h1>
                <h1
                  id="h6para"
                  className="sec5heading px-[2.5vw] translate-y-[200px] opacity-0 text-base max-lg:text-base  h-fit     absolute"
                >
                  1 . Upload a PDF file that showcases your services or
                  products. <br />
                  <br />
                  2 . Allow your customers to ask any questions related to your
                  business, and this tool will provide answers drawn from the
                  uploaded document. <br />
                  <br />3 . You can also integrate this tool into your WhatsApp
                  and RCS chatbots.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RCSpage5