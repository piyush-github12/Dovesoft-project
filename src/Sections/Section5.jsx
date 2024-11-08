import React from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import Section6 from './Section6';

const Section5 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 


  const handalclick = (e)=>{

    let rightelem = e.target.id + "para"
    let currentimage = e.target.id + "image"
    let currenttext = e.target.id 

    //  let tl = gsap.timeline()

    gsap.to(".sec5heading",{
      opacity:0,
      duration:0,
      y:"200px"
    })
    gsap.to(`#${rightelem}`,{
      opacity:1,
      y:0,
      // duration:1
    })

    gsap.to(".imageani" , {
      opacity:0,
      duration:0,
      x:"-100px"
    })
    gsap.to(`#${currentimage}` , {
      opacity:1,
      // duration:0,
      x:"0px"
    })
    gsap.to(".textanimation" , {
      color:"#fff",
      duration:0,
      scale:1
      
    })
    gsap.to(`#${currenttext}`, {
      color: "#61a3ff",
      scale:1.1
    });

    
  };
 
  return (
    <div className=" relative py-2 w-[100vw] min-h-[850px]  ">
      <div
        id="section5"
        className="section5 w-[100vw]  z-[10] px-[5vw] min-h-[800px] text-white flex justify-center items-center "
      >
        <div className="w-[100%] h-[95%] px-[5vw] max-sm:px-[0vw] relative rounded-[55px] overflow-hidden bg-red-300 py-[100px] max-sm:py-[50px] ">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="./images/BlueBackground.png"
            alt=""
          />

          <h1 className="text-center font-['Epilogue']  text-3xl relative z-[9] max-md:text-2xl font-bold mb-10">
            Platform capabilities to make you a <br />{" "}
            <span className="text-[#61a3ff]">superhuman</span>
          </h1>
          <div className="flex max-lg:flex-col relative z-[9]  w-full min-h-[60vh] max-sm:min-h-[500px] justify-between">
            <div className="max-md:text-[15px] whitespace-nowrap max-lg:text-[15px] w-[25%] max-lg:w-[90%] max-lg:ml-[20px] max-lg:pb-[20px] max-lg:px-[20px] text-xl flex justify-center max-lg:justify-normal flex-col max-lg:overflow-x-auto max-lg:overflow-y-hidden max-lg:custom-scrollbar2 max-lg:flex-row gap-10 border-r-[1px] max-lg:border-none border-[#cce1ff5e] select-none ">
              <h1
                onClick={handalclick}
                id="h1"
                className="textanimation select-none cursor-pointer text-[#61a3ff]"
              >
                Live Agents
              </h1>
              <h1
                onClick={handalclick}
                id="h2"
                className="textanimation select-none cursor-pointer "
              >
                Integrations
              </h1>
              <h1
                onClick={handalclick}
                id="h3"
                className="textanimation select-none cursor-pointer    "
              >
                Encrypted content
              </h1>
              <h1
                onClick={handalclick}
                id="h4"
                className="textanimation select-none cursor-pointer    "
              >
                Auto-short URL
              </h1>
              <h1
                onClick={handalclick}
                id="h5"
                className="textanimation select-none cursor-pointer  "
              >
                Smart Addons
              </h1>
              <h1
                onClick={handalclick}
                id="h6"
                className="textanimation select-none cursor-pointer"
              >
                File GPT
              </h1>
            </div>
            <div className="w-[70%]   flex max-lg:flex-col max-lg:items-center max-lg:w-full max-lg:h-fit">
              <div className="w-[40%] max-lg:w-[80%] h-full max-lg:h-[350px] max-lg:mt-[20px] flex justify-center items-center relative p-2 overflow-hidden ">
                <div className="  w-full h-[20%] max-lg:hidden absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#021f43] to-transparent"></div>
                <img
                  id="h1image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] "
                  alt=""
                />
                <img
                  id="h2image"
                  src="./images/sms.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h3image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h4image"
                  src="./images/voice_website.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h5image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h6image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-lg:h-[300px] max-lg:w-[250px] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
              </div>
              <div className="w-[60%] max-lg:w-[90%]  h-[60vh] max-lg:h-[300px] ">
                <div className="w-full h-[60vh] max-lg:h-[300px]  pl-[50px] max-md:pl-2 z-10 flex flex-col justify-center gap-5">
                  <div className="w-full h-full  flex flex-col justify-center    overflow-hidden relative ">
                    <h1
                      id="h1para"
                      className="sec5heading text-base max-md:text-base  h-fit    absolute"
                    >
                      1 . Empower your employees to do more <br />
                      <br />2 . Improve agent efficiency by bringing all digital
                      conversations, context and support actions in single view.
                    </h1>
                    <h1
                      id="h2para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-md:text-base  h-fit     absolute"
                    >
                      1 . Seamless integrations with multiple e-commerce
                      portals, CRMs & more. Incorporate our cloud API
                      capabilities into your business workflow through our
                      trusted integration partners.
                    </h1>
                    <h1
                      id="h3para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-md:text-base  h-fit     absolute"
                    >
                      1 . This tool enables you to encrypt sensitive SMS
                      contents such as one-time passwords, and banking
                      transaction details. <br />
                      <br />
                      2 . This functionality is exclusively available through
                      the SMS API. <br />
                      <br />3 . No one, not even our support staff, can decrypt
                      the contents of these encrypted SMS messages.
                    </h1>
                    <h1
                      id="h4para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-md:text-base  h-fit     absolute"
                    >
                      1 . The system can automatically identify URLs within SMS
                      content, whether they are from HTTP links or the user
                      interface. <br />
                      <br />2 . The application then converts this lengthy URL
                      into a shortened, unique URL specific to each mobile
                      number. <br />
                      <br />3 . When the user clicks on this shortened URL, the
                      application will track and record the timing, device
                      category (e.g. computer or mobile device), operating
                      system, and browser information.
                    </h1>
                    <h1
                      id="h5para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-md:text-base  h-fit     absolute"
                    >
                      1 . Construct feedback forms, quizzes, surveys, polls, and
                      lead capture forms. <br />
                      <br />
                      2 . Generate trackable short URLs for the smart add-ons,
                      which provide insights like timing, device category (e.g.
                      computer or mobile), operating system, and browser when
                      the URL is accessed. <br />
                      <br />3 . Leverage these smart add-ons across other
                      communication channels such as SMS, WhatsApp, RCS, and
                      Email using generated short URLs.
                    </h1>
                    <h1
                      id="h6para"
                      className="sec5heading translate-y-[200px] opacity-0 text-base max-md:text-base  h-fit     absolute"
                    >
                      1 . Upload a PDF file that showcases your services or
                      products. <br />
                      <br />
                      2 . Allow your customers to ask any questions related to
                      your business, and this tool will provide answers drawn
                      from the uploaded document. <br />
                      <br />3 . You can also integrate this tool into your
                      WhatsApp and RCS chatbots.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5