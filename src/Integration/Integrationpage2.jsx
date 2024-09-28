import React from 'react'

const integrationpage2 = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full min-h-[500px]  max-md:h-fit px-[10vw] py-[30px] flex max-md:block bg-[#fff]">
        <div className="w-[40%] max-md:w-full h-full max-md:h-fit  flex flex-col  justify-center max-md:items-center max-md:mb-[30px] ">
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Integrate
            </h1>
            <h1 className="text-base">
              Synchronize and centralize data from all your tools with minimal
              effort.
            </h1>
          </div>
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Unify Customer data
            </h1>
            <h1 className="text-base">
              A Comprehensive customer view across all actions from sign-up to
              purchase
            </h1>
          </div>
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Trigger custom workflows
            </h1>
            <h1 className="text-base">
              Automate workflows powered by real-time data
            </h1>
          </div>
        </div>
        <div className="w-[60%] flex items-center justify-center max-md:w-full h-[400px] max-md:h-fit ">
          <img
            className="w-[600px] max-md:w-[400px]"
            src="./images/integrationimages/page2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default integrationpage2