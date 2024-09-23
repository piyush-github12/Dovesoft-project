import React from 'react'

const Automationpage2 = () => {
  return (
    <div className="w-full h-fit">
      <div className="w-full min-h-[600px]  max-md:h-fit px-[10vw] py-[30px] flex max-md:block bg-[#fff]">
        <div className="w-[40%] max-md:w-full h-full max-md:h-fit  flex flex-col  justify-center max-md:items-center max-md:mb-[30px] ">
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl bg-[#EAF9FF]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Simplify marketing tasks
            </h1>
            <h1 className="text-base">
              Automate your marketing and customer service tasks with our
              intuitive visual builder.
            </h1>
          </div>
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Personalize at scale
            </h1>
            <h1 className="text-base">
              Customize your marketing to feul personal for each customer.
            </h1>
          </div>
          <div className="w-[90%] max-md:w-full p-[20px] min-h-[150px] rounded-3xl ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Reduced marketing costs
            </h1>
            <h1 className="text-base">
              Save on the typically high cost of building and maintaining.
            </h1>
          </div>
        </div>
        <div className="w-[60%] flex items-center justify-center max-md:w-full h-[500px] max-md:h-fit ">
          <img
            className="w-[600px] max-md:w-[400px]"
            src="./images/automationimages/page2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Automationpage2