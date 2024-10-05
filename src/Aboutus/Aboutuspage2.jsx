import React from "react";

const Aboutuspage2 = () => {
  let data = [
    {
      heading: "Our Vision",
      para: "To empower global businesses with innovative, reliable messaging solutions that foster meaningful customer connections through cutting-edge communication technology.",
    },
    {
      heading: "Our Mission",
      para: "To deliver scalable and efficient communication platforms that enhance business outreach, customer engagement, and drive growth through continuous innovation.",
    },
  ];

  return (
    <div className="w-screen h-fit flex max-md:flex-col  py-[50px] px-[10vw] max-md:px-[5vw] ">
      <div className="w-[50%] max-md:w-full  h-[500px] max-md:h-fit  flex flex-col justify-between max-md:gap-[30px] py-[20px] max-md:mb-[50px]">
        {data.map((item, index) => {
          return (
            <div className="w-full h-[50%] ">
              <h1 className="font-['Epilogue'] font-semibold text-3xl mb-[10px] ">
                {item.heading}
              </h1>
              <h1 className="text-base w-[80%] max-md:w-full">{item.para}</h1>
            </div>
          );
        })}
      </div>
      <div className="w-[50%] max-md:w-full  h-[500px] max-md:h-fit flex flex-col items-center ">
        <img className="w-[70%] rounded-xl border-[2px] border-[#0000003b]" src="./images/Aboutus/rahul.png" alt="" />
        <h1 className="font-['Epilogue'] font-semibold text-3xl text-center my-[10px] ">
          Rahul Bhanushali
        </h1>
        <h1 className="text-base text-center w-[80%]">Managing Director</h1>
      </div>
    </div>
  );
};

export default Aboutuspage2;
