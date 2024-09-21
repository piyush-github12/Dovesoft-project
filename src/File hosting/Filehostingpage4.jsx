import React from 'react'

const Filehostingpage4 = () => {
    const timelineItems = [
      { number: "01", color: "bg-blue-500" },
      { number: "02", color: "bg-blue-500" },
      { number: "03", color: "bg-red-500" },
    ];

  return (
    <div className="w-screen text-black pt-[50px] ">
      <h1 className='font-["Epilogue"] text-3xl px-[10vw] max-md:px-[5vw] pt-[50px] text-center  font-[500]'>
        How It Works
      </h1>
      <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] py-[50px] flex ">
        <div className="w-[40%] h-fit bg-red-500">
          <div className="w-full h-[300px] bg-blue-500"></div>
          <div className="w-full h-[300px] bg-teal-500"></div>
          <div className="w-full h-[300px] "></div>
        </div>
        <div className="w-[20%] h-[900px] ">
          <div className="flex flex-col items-center h-screen">
            <div className="w-0.5 h-full bg-gray-200 relative">
              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full ${item.color} flex justify-center items-center text-white font-bold text-sm`}
                  style={{ top: `${(index + 1) * 25}%` }}
                >
                  {item.number}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[40%] h-fit bg-purple-500"></div>
      </div>
    </div>
  );

}


export default Filehostingpage4