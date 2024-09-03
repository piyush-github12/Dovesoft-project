import React from 'react'

const Bookdemobutton = ({blue , white} ) => {
  return (
    <div
      className={`min-w-fit w-[160px] h-[60px] mt-[20px] ${
        blue
          ? " bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] text-white"
          : "bg-white text-black "
      } px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
    >
      <h1 className=" text-lg h-[60px] flex items-center font-bold whitespace-nowrap">
        Book Demo
      </h1>
    </div>
  );
}

export default Bookdemobutton