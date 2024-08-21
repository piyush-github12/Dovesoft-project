import React from 'react'

const Section9 = () => {
  return (
    <div className="w-screen h-fit pb-[100px] text-white flex items-center justify-center">
      <div className="w-[80%] h-[300px]  shadow-2xl shadow-black rounded-l-full rounded-tr-full bg-[#031e42] py-10 flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl  text-center">
          Goodbye isolated interactions. <br />
          <span
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bg-gradient-to-r from-[#EACCFF] to-[#F0D0D9] "
          >
            Hello Dove Soft.
          </span>
        </h1>
        <h1 className="text-sm text-center ">
          Where every message meets its perfect match, right when it matters
          most.
        </h1>
        <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
          <h1 className="text-white text-lg  font-bold whitespace-nowrap">
            Book Demo
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section9