import React from 'react'
import Bookdemobutton from './Bookdemobutton';

const GoodIsolation = ({bg}) => {
  return (
    <div
      className={`w-screen px-[10vw] max-sm:px-[2vw]  h-fit pb-[100px] relative z-[7] rounded-b-[55px] bg-white text-white flex items-center justify-center`}
    >
      <div className="w-[100%] h-[350px]  shadow-lg shadow-[#000000b9] rounded-l-full max-md:rounded-l-[15vw] rounded-tr-full max-md:rounded-tr-[15vw]  bg-[rgb(3,30,66)] py-20 max-md:px-[2vw] flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-['Epilogue'] font-bold max-sm:text-2xl text-center">
          Goodbye isolated interactions. <br />
          <span
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="bg-[#61a3ff] "
          >
            Hello Dove Soft.
          </span>
        </h1>
        <h1 className="text-base text-center ">
          Where every message meets its perfect match, right when it matters
          most.
        </h1>
        {/* <div className="min-w-fit w-[160px] h-[60px] bg-gradient-to-r from-[#0d72ff] to-[#4893FC] border-2 border-[#7AB1FC] px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
          <h1 className="text-white text-base  font-bold whitespace-nowrap">
            Book Demo
          </h1>
        </div> */}
        <Bookdemobutton clr="#4893FC"  textclr="#fff" borderclr="transparent"/>
      </div>
    </div>
  );
}

export default GoodIsolation