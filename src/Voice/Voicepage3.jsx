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
  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[0vw] ">
      <div className=" mt-[50px] max-md:px-[5vw] w-full">
        <h1 className="text-3xl font-['Epilogue'] text-center font-bold">
          2. What Can You Do With a Missed Call Number Service?{" "}
        </h1>
        <h1 className="text-center text-lg mt-[20px] ">
          You can publish your unique missed call number in print media,
          website, app and sms campaign
        </h1>
      </div>

      <div className="w-full h-fit flex justify-center mt-[50px]">
        <div className="w-[300px] max-md:w-[40vw] h-fit  ">
          {data.map((item, index) => {
            return (
              <div className="w-[300px] max-md:w-[40vw] h-[250px] flex justify-center items-center ">
                <img className="h-[200px]" src={item.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="w-[100px] max-md:w-[10vw] border-l-indigo-800 h-[1250px] flex justify-center">
          <div className="w-[5px] h-full bg-[#6C6C6C] rounded-full grid content-center gap-[220px]">
            { data.map((item , index)=>{
                return (
                  <div className="w-[30px]  h-[30px] translate-x-[-12px] translate-y-[-5px] bg-[#D5DBE3] border-[1px] border-[#4E6CDD] rounded-full"></div>
                );
            })}
          </div>
        </div>
        <div className="w-[300px] max-md:w-[40vw] h-fit  ">
          {data.map((item, index) => {
            return (
              <div className="w-[300px] max-md:w-[40vw] h-[250px] flex items-center">
                <h1 className="text-lg">{item.para}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Voicepage3