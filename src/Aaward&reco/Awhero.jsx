import React from 'react'
import Navbar from '../components/Navbar';
import Bookdemobutton from '../components/Bookdemobutton';

const Awhero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[400px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white flex max-md:block pt-[150px] pb-[50px] max-md:pt-[100px] max-md:pb-[50px]">
        <div className="w-[20vw] h-[20vw] absolute  top-0 left-0 translate-x-[-30%] translate-y-[-40%] bg-[#4F4B5A] blur-[100px]  rounded-full "></div>
        <div className="w-[50%] h-full max-md:h-fit max-md:w-full relative z-[2] pt-[50px]  flex flex-col justify-center gap-5">
          <h1 className="text-[48px] font-['Epilogue']  leading-[52px] font-bold">
            Awards & Recognition
          </h1>
          <h1 className="text-base font-semibold">
          Honoring Outstanding Contributions and Achievements
          Explore Our Recognitions and Awards
          </h1>
        </div>
        <div className="w-[50%] h-[400px] max-md:h-fit max-md:w-full  flex items-center justify-center"> 
          <img
            className="w-[500px] max-md:w-[300px] "
            src="./images/aw&reco/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Awhero