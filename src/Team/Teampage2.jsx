import React from "react";

const Teampage2 = () => {
  let data = [
    {
      heading: "Vikram Agrawal",
      img: "./images/Team/vikram.png",
      post: "Vice President - Sales",
    },
    {
      heading: "Harish Shetty",
      img: "./images/Team/harish.png",
      post: "South/North General Sales Manager",
    },
    {
      heading: "Sachin Niwate",
      img: "./images/Team/sachin.png",
      post: "East/West General Sales Manager",
    },
    {
      heading: "Vidhut Dave",
      img: "./images/Team/vd.png",
      post: "North Senior Sales Manager",
    },
    {
      heading: "Dharmesh Sharma",
      img: "./images/Team/dh.png",
      post: "West Senior Sales Manager",
    },
    {
      heading: "Alpesh Patel",
      img: "./images/Team/ap.png",
      post: "South/East Senior Sales Manager",
    },
  ];

  let international = [
    {
      heading: "Udit Naidu",
      img: "./images/Team/udit.png",
      post: "Director of Sales, Dubai",
    },
  ];

  let Accounts = [
    {
      heading: "Bhavesh Panchal",
      img: "./images/Team/bhavesh.png",
      post: "Finance Head",
    },
    {
      heading: "Shraddha Ghoble",
      img: "./images/Team/shraddha.png",
      post: "Account Manager",
    },
  ];
  return (
    <div className="w-screen h-fit py-[50px] ">
      <h1 className='text-center text-4xl font-["Epilogue"]  font-bold mb-[50px]'>
        Our Team
      </h1>

      <h1 className='text-center text-3xl font-["Epilogue"]  font-bold mb-[50px]'>
        Sales
      </h1>
      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-10 px-[5vw] mb-[50px]">
        {data.map((item, index) => {
          return (
            <div className="w-[250px] h-[250px] rounded-3xl  ">
              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-[#dfdfdf]  "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="w-full h-[100px] mt-[10px]">
                <h1 className='text-base font-["Epilogue"] font-bold text-center'>
                  {item.heading}
                </h1>
                <h1 className='text-base font-["Epilogue"] text-center'>
                  {item.post}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className='text-center text-3xl font-["Epilogue"]  font-bold my-[50px]'>
        International Business
      </h1>

      <div className="w-full h-fit grid grid-cols-1 justify-items-center gap-10 px-[5vw] mb-[50px]">
        {international.map((item, index) => {
          return (
            <div className="w-[250px] h-[250px]  rounded-3xl  ">
              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-[#dfdfdf]   "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="w-full h-[100px] mt-[10px] ">
                <h1 className='text-base font-["Epilogue"] font-bold text-center'>
                  {item.heading}
                </h1>
                <h1 className='text-base font-["Epilogue"] text-center'>
                  {item.post}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <h1 className='text-center text-3xl font-["Epilogue"]  font-bold my-[50px]'>
        Account Team
      </h1>

      <div className="w-full h-fit grid grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-10 px-[5vw]">
        {Accounts.map((item, index) => {
          return (
            <div className="w-[250px] h-[250px]  rounded-3xl  ">
              <div className="w-full h-[150px] flex items-center justify-center overflow-hidden">
                <img
                  className="w-[150px] h-[150px] rounded-full object-cover border-[5px] border-[#dfdfdf]  "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="w-full h-[100px] mt-[10px] ">
                <h1 className='text-base font-["Epilogue"] font-bold text-center'>
                  {item.heading}
                </h1>
                <h1 className='text-base font-["Epilogue"] text-center'>
                  {item.post}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teampage2;
