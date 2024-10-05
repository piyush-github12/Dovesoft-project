import React from 'react'

const Encrypage2 = () => {
  let data = [
    {
      heading: "Man-in-the-middle attacks",
      img: "./images/Encryimages/page2-1.webp",
      para: "This occurs when an attacker intercepts communication using a vulnerability, allowing them to read the conversation or even modify the message sent.",
    },
    {
      heading: "Unauthorized access",
      img: "./images/Encryimages/page2-2.png",
      para: "Unencrypted text messages can be read by mobile carriers, government authorities, and hackers. This means any sensitive information shared over text could be exposed.",
    },
    {
      heading: "The wrong recipient could read your message",
      img: "./images/Encryimages/page2-3.webp",
      para: "This occurs when an attacker intercepts communication using a vulnerability, allowing them to read the conversation or even modify the message sent.",
    },
    {
      heading: "Hackers could gain unauthorized access to accounts.",
      img: "./images/Encryimages/page2-4.webp",
      para: "Textline’s security analyst Daniel de Jesus recommends not using SMS for user authentication purposes, especially in industries dealing with highly-sensitive information, like banking accounts. That’s because SMS codes can be intercepted by malicious attackers to gain access to accounts. Instead, our security expert recommends authenticator applications like 1Password or Authy, to provide an extra layer of security.",
    },
  ];

  return (
    <div className="w-screen h-fit pt-[50px] ">
      {data.map((item, index) => {
        return (
          <div className="w-screen min-h-[250px] px-[10vw] max-md:px-[5vw] py-[20px]  flex items-center justify-between gap-10 max-md:flex-col">
            {index % 2 == 0 ? (
              ""
            ) : (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[20px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[20px]">
                <img
                  className="w-[250px] max-md:w-[300px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            )}
            <div className="w-[50%] hidden px-[50px] max-md:px-[30px] py-[20px] max-md:py-[10px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-[250px] h-[300px] max-md:h-fit max-md:mb-[0px]">
              <img
                className="w-[250px] max-md:w-[200px]"
                src={`${item.img}`}
                alt=""
              />
            </div>
            <div className="w-[50%]  max-md:w-full h-[300px] max-md:h-fit flex flex-col justify-center gap-5">
              <h1 className='font-["Epilogue"] text-2xl font-[500]'>
                {item.heading}
              </h1>
              <h1 className="w-[90%] text-base">{item.para}</h1>
            </div>

            {index % 2 == 0 ? (
              <div className="w-[40%] px-[50px] max-md:px-[30px] py-[20px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[20px]">
                <img
                  className="w-[250px] max-md:w-[300px]"
                  src={`${item.img}`}
                  alt=""
                />
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Encrypage2