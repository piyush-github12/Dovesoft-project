import React from 'react'
import Swiperjs from '../components/Swiperjs'

const Section7 = () => {
  return (
    <div className="w-screen h-fit">
      <h1 className="text-center text-3xl leading-[30px] font-bold mb-5">
        Check Out
        <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md ml-2 px-2">
          What customer is saying
        </span>{" "}
        <br />
        about us
      </h1>
      <Swiperjs />
    </div>
  );
}

export default Section7