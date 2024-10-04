import React from 'react'
import { BsBarChart } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbUserUp } from "react-icons/tb";


const RCSpage2 = () => {
  return (
    <div className="w-full h-fit px-[10vw] max-md:px-[2vw] py-[50px]">
      <div className="flex justify-center gap-14 max-md:gap-0 w-full h-fit ">
        <div className="flex flex-col items-center  h-[150px]">
          <BsBarChart  className='text-[#2177F0] text-[30px] h-[50px]'/>
          <h1 className='text-center'>115% campaign revenue growth</h1>
        </div>
        <div className="flex flex-col items-center  h-[150px]">
            <HiOutlineSpeakerphone className='text-[#2177F0] text-[40px] h-[50px]'/>
          <h1 className='text-center'>130% higher CTR</h1>
        </div>
        <div className="flex flex-col items-center  h-[150px]">
            <TbUserUp className='text-[#2177F0] text-[30px] h-[50px]'/>
          <h1 className='text-center'>115% campaign revenue growth</h1>
        </div>
      </div>
      <div className='w-full h-fit flex justify-center pt-[20px]'>
            <img className='h-[450px] max-sm:w-[100%] max-sm:h-auto' src="./images/RCSimages/page2.webp" alt="" />
      </div>
    </div>
  );
}

export default RCSpage2