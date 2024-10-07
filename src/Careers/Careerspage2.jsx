import React from 'react'

const Careerspage2 = () => {
 
    const data = [
      {
        image: "./images/careers/page2-1.png",
        heading: "#LikeAFriend",
        para: "For our customers.",
      },
      {
        image: "./images/careers/page2-2.png",
        heading: "OOO",
        para: "Outcome over Output.",
      },
      {
        image: "./images/careers/page2-3.png ",
        heading: "Company first",
        para: "The chicken is involved but company is first.",
      },
      {
        image: "./images/careers/page2-4.png",
        heading: "#Stay True",
        para: "We live for the trust. We are for the long haul.",
      },
      {
        image: "./images/careers/page2-5.png",
        heading: "It’s a team sport",
        para: "#We are not playing chess.",
      },
      {
        image: "./images/careers/page2-6.png",
        heading: "Be Responsive",
        para: "",
      },
    ];


  return (
    <div className=" relative    min-h-fit   w-full max-sm:h-fit">
      <div
        id="section6"
        className="w-screen  py-[50px]  z-[9] min-h-fit  max-sm:h-fit  rounded-b-[55px]  "
      >
        <h1 className="text-3xl font-['Epilogue']  max-md:text-2xl  text-center font-bold mb-2">
          Dove Soft Values Built with people at its core
        </h1>

        <div className="w-screen h-fit  grid grid-cols-3 pt-[50px]  px-[10vw] max-lg:px-[5vw]  gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
          {data.map((item) => (
            <div
              key={item.heading}
              className="w-[25vw]  min-h-[250px] max-lg:w-[40vw] max-md:w-[100%]  rounded-2xl"
            >
              <div className="w-full h-[100px]  p-2 flex justify-center items-end">
                <img
                  className="w-[50px] "
                  src={`${item.image}`}
                  alt=""
                />
              </div>
              <div className="w-full min-h-[100px] relative px-2 flex flex-col items-center justify-center">
                <h1 className="font-bold min-h-[50px]  text-center  text-2xl  ">
                  {item.heading}
                </h1>
                <p className="text-base text-center  max-sm:text-base mb-2  max-lg:w-[40vw] max-md:w-[100%]">
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careerspage2