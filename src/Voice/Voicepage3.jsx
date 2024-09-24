import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

const Voicepage3 = () => {

    let data = [
      {
        img: "./images/Voiceimages/page3-1.svg",
        para: "A person gives a missed call on this number",
      },
      {
        img: "./images/Voiceimages/page3-2.svg",
        para: "Number has been added on your database in real-time",
      },
      {
        img: "./images/Voiceimages/page3-3.svg",
        para: "Callers will receive a SMS on mobile number with thank you message",
      },
      {
        img: "./images/Voiceimages/page3-4.svg",
        para: "You’ll get real-time misscall notification on your registered email",
      },
      {
        img: "./images/Voiceimages/page3-5.svg",
        para: "Now you or your agent can call back to this number and take the conversation further",
      },
    ];
 
    useGSAP(()=>{
      const elements = document.querySelectorAll(".vl1");
      elements.forEach((element)=>{
          gsap.from(element,{
              x: -200,
              opacity: 0,
              duration: 0.5,
              scrollTrigger: {
                  trigger: element,
                  start: "top 90%", 
                  end: "top 50%",
                  scrub:true,
              },
          });
      });
      const elementsright = document.querySelectorAll(".vl2");
      elementsright.forEach((element)=>{
          gsap.from(element,{
              x: 200,
              opacity: 0,
              duration: 0.5,
              scrollTrigger: {
                  trigger: element,
                  start: "top 90%", 
                  end: "top 50%",
                  scrub:true,
              },
          });
      });

  gsap.to('.voiceline', {
    top:0,
    scrollTrigger: {
      trigger: ".voicelinemain",
      start: "top 70%",
      end: "60% -50%",
      scrub: true,
      markers: true,
      onUpdate: (self) => {
        const voicelineBottom = document.querySelector('.voiceline').getBoundingClientRect().bottom;
        const vl3Elements = document.querySelectorAll('.vl3');
        vl3Elements.forEach((element) => {
          const vl3Top = element.getBoundingClientRect().top;
          if (voicelineBottom >= vl3Top) {
            gsap.to(element, { backgroundColor: "#021E43", duration: 0.2 });
          } else {
            gsap.to(element, { backgroundColor: "#D5DBE3", duration: 0.2 });
          }
        });
      }
    }
  });

    })

  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[0vw] ">
      <div className=" mt-[50px] max-md:px-[5vw] w-full">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          2. What Can You Do With a Missed Call Number Service?{" "}
        </h1>
        <h1 className="text-center text-base mt-[20px] ">
          You can publish your unique missed call number in print media,
          website, app and sms campaign
        </h1>
      </div>

      <div className="w-full h-fit flex justify-center mt-[50px]">
        <div className=" w-[300px] max-md:w-[40vw] h-fit  ">
          {data.map((item, index) => {
            return (
              <div className="vl1 w-[300px] max-md:w-[40vw] h-[250px] flex justify-center items-center ">
                <img className="h-[200px]" src={item.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="voicelinemain w-[100px] max-md:w-[10vw] border-l-indigo-800 h-[1250px] flex justify-center overflow-hidden">
          <div className="w-[5px] h-full bg-[#6c6c6c92] relative   rounded-full grid content-center gap-[220px]">
            <div className="voiceline w-[5px] h-full absolute rounded-full top-[-100%]  bg-[#021E43]"></div>
            {data.map((item, index) => {
              return (
                <div className="vl3 w-[30px]  h-[30px] translate-x-[-12px] translate-y-[-5px] bg-[#6c6c6c92] border-[1px] border-[#6c6c6c92] rounded-full"></div>
              );
            })}
          </div>
        </div>
        <div className="vl2 w-[300px] max-md:w-[40vw] h-fit  ">
          {data.map((item, index) => {
            return (
              <div className="vl2 w-[300px] max-md:w-[40vw] h-[250px] flex items-center">
                <h1 className="text-base">{item.para}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Voicepage3