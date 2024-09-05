import React from 'react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';
import Section6 from './Section6';

const Section5 = () => {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger); 

  // useGSAP(()=>{
    
  //   gsap.to(".textanimation", {
  //     scrollTrigger:{
  //       trigger:".section5",
  //       start:"top 80%"
  //     },
  //     keyframes: [
  //       { color: "#61a3ff", scale: "1.1", duration:2 },
  //       { color: "#fff", scale: "1",},
  //     ],
  //     duration:3,
  //     repeat: -1,
  //     stagger: 3,
  //     repeatDelay:0
  //   });

  //   gsap.to(".sec5heading", {
  //     scrollTrigger: {
  //       trigger: ".section5",
  //       start: "top 80%",
  //     },
  //     keyframes: [{ y: 0 }, { y: 0 }, { y: "-200%" }],
  //     stagger: 3,
  //     duration: 3,
  //     repeat: -1,
  //     repeatDelay: 0,
  //   });

  //   gsap.to(".imageani", {
  //     scrollTrigger: {
  //       trigger: ".section5",
  //       start: "top 80%",
  //     },
  //     keyframes: [
  //       { opacity: 1, x: "0", duration: 0.1 },
  //       { opacity: 1, x: "0" },
  //       { opacity: 0, x: "0", duration: 0.1 },
  //     ],
  //     stagger: 3,
  //     duration: 3,
  //     repeat: -1,
  //     repeatDelay: 0,
  //   });

  // })

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

  useGSAP(()=>{

    //  gsap.to("#section5", {
    //    y: "-120%",
    //    scrollTrigger: {
    //      trigger: "#section5",
    //     //  markers: true,
    //      start: "10px -100px ",
    //      end: "-100px -600vh ",
    //      scrub:2,
    //       // pin:true
    //    },
    //  });

  })
 
  return (
    <div className=" relative py-2 w-[100vw] min-h-[850px]  ">
      <div
        id="section5"
        className="section5 w-[100vw]  z-[10] px-[5vw] min-h-[800px] text-white flex justify-center items-center "
      >

        <div className="w-[100%] h-[95%] px-[5vw] max-sm:px-[0vw] relative rounded-[55px] bg-red-300 py-[100px] max-sm:py-[50px] ">
          <img className='absolute top-0 left-0 w-full h-full object-cover' src="./images/BlueBackground.png" alt="" />

          <h1 className="text-center text-3xl relative z-[9] max-md:text-2xl font-bold mb-10">
            Platform capabilities to make you a <br />{" "}
            <span className="text-[#61a3ff]">superhuman</span>
          </h1> 
          <div className="flex max-lg:flex-col relative z-[9]  w-full h-[60vh] max-sm:min-h-[500px] justify-between">
            <div className="max-md:text-[15px]   whitespace-nowrap max-lg:text-[15px] w-[25%] justify-center max-lg:w-full h-full max-lg:h-[15%]  text-xl flex flex-col max-sm:grid max-sm:grid-cols-3 max-sm:justify-items-center max-lg:flex-row gap-10 max-md:gap-5   border-r-[1px] max-lg:border-none border-[#cce1ff5e] ">
              <h1
                onClick={handalclick}
                id="h1"
                className=" textanimation cursor-pointer text-[#61a3ff]"
              >
                Live Agents
              </h1>
              <h1
                onClick={handalclick}
                id="h2"
                className=" textanimation cursor-pointer"
              >
                Integrations
              </h1>
              <h1
                onClick={handalclick}
                id="h3"
                className=" textanimation cursor-pointer"
              >
                Encrypted content
              </h1>
              <h1
                onClick={handalclick}
                id="h4"
                className=" textanimation cursor-pointer"
              >
                Auto-short URL
              </h1>
              <h1
                onClick={handalclick}
                id="h5"
                className=" textanimation cursor-pointer"
              >
                Smart Addons
              </h1>
              <h1
                onClick={handalclick}
                id="h6"
                className=" textanimation cursor-pointer"
              >
                File GPT
              </h1>
            </div>
            <div className="w-[70%]  flex max-lg:w-full max-lg:h-fit">
              <div className="w-[40%]  h-full  flex justify-center items-center relative p-2 overflow-hidden ">
                <div className="  w-full h-[20%] max-lg:hidden absolute rounded-xl z-10 bottom-0 bg-gradient-to-t from-[#021f43] to-transparent"></div>
                <img
                  id="h1image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] "
                  alt=""
                />
                <img
                  id="h2image"
                  src="./images/sms.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h3image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h4image"
                  src="./images/voice_website.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h5image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
                <img
                  id="h6image"
                  src="./images/Liveagent.png"
                  className="imageani object-cover w-full max-md:h-[40vw] absolute top-[50%] translate-y-[-50%] translate-x-[-100px] opacity-0"
                  alt=""
                />
              </div>
              <div className="w-[60%]  h-[60vh] max-lg:h-[500px] ">
                <div className="w-full h-[60vh] max-lg:h-[500px]  pl-[50px] max-md:pl-2 z-10 flex flex-col justify-center gap-5">
                  <div className="w-full h-full  flex flex-col justify-center    overflow-hidden relative ">
                    <h1
                      id="h1para"
                      className="sec5heading text-lg max-md:text-base  h-fit    absolute"
                    >
                      1 . Empower your employees to do more <br /><br />
                      2 . Improve agent efficiency by bringing all digital
                      conversations, context and support actions in single view.
                    </h1>
                    <h1
                      id="h2para"
                      className="sec5heading translate-y-[200px] opacity-0 text-lg max-md:text-base  h-fit     absolute"
                    >
                      1 . Seamless integrations with multiple e-commerce portals,
                      CRMs & more. Incorporate our cloud API capabilities into
                      your business workflow through our trusted integration
                      partners.
                    </h1>
                    <h1
                      id="h3para"
                      className="sec5heading translate-y-[200px] opacity-0 text-lg max-md:text-base  h-fit     absolute"
                    >
                      1 . This tool enables you to encrypt sensitive SMS contents
                      such as one-time passwords, and banking transaction
                      details. <br />
                      <br />
                      2 . This functionality is exclusively available through the
                      SMS API. <br />
                      <br />
                      3 . No one, not even our support staff, can decrypt the
                      contents of these encrypted SMS messages.
                    </h1>
                    <h1
                      id="h4para"
                      className="sec5heading translate-y-[200px] opacity-0 text-lg max-md:text-base  h-fit     absolute"
                    >
                      1 . The system can automatically identify URLs within SMS
                      content, whether they are from HTTP links or the user
                      interface. <br />
                      <br />2 . The application then converts this lengthy URL into
                      a shortened, unique URL specific to each mobile number.{" "}
                      <br />
                      <br />3 . When the user clicks on this shortened URL, the
                      application will track and record the timing, device
                      category (e.g. computer or mobile device), operating
                      system, and browser information.
                    </h1>
                    <h1
                      id="h5para"
                      className="sec5heading translate-y-[200px] opacity-0 text-lg max-md:text-base  h-fit     absolute"
                    >
                      1 . Construct feedback forms, quizzes, surveys, polls, and
                      lead capture forms. <br />
                      <br />
                      2 . Generate trackable short URLs for the smart add-ons, which
                      provide insights like timing, device category (e.g.
                      computer or mobile), operating system, and browser when
                      the URL is accessed. <br />
                      <br />
                      3 . Leverage these smart add-ons across other communication
                      channels such as SMS, WhatsApp, RCS, and Email using
                      generated short URLs.
                    </h1>
                    <h1
                      id="h6para"
                      className="sec5heading translate-y-[200px] opacity-0 text-lg max-md:text-base  h-fit     absolute"
                    >
                      1 . Upload a PDF file that showcases your services or
                      products. <br />
                      <br />
                      2 . Allow your customers to ask any questions related to your
                      business, and this tool will provide answers drawn from
                      the uploaded document. <br />
                      <br />
                      3 . You can also integrate this tool into your WhatsApp and
                      RCS chatbots.
                    </h1>
                  </div>
                  {/* <h1 className="max-lg:text-[2vw] text-lg">
                    Empower your marketing, product and support users
                    with pre-built bot templates and a visual editor
                    to go-live on any channel in minutes
                  </h1>
                  <div className="min-w-fit w-[160px] max-sm:w-[10vw] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
                    <h1 className="text-white text-lg max-sm:text-sm font-bold whitespace-nowrap">
                      Video View
                    </h1>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Section6 /> */}
    </div>
  );
}

export default Section5