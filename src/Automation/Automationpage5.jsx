import React from 'react'

const Automationpage5 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] ">
      <div className="w-full min-h-[800px]  p-[5vw] ">
        <h1 className='text-3xl  text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Automation made simple
        </h1>
        <h1 className="text-base text-center ">
          Turn complex processes into straightforward, visual flows, without
          writing a single line of code..
        </h1>

        <div className="w-full h-fit py-[100px] flex items-center justify-center">
          <img
            className="w-[700px] max-md:w-[500px]"
            src="./images/automationimages/page5.svg"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Template library
            </h1>
            <h1 className="text-base ">
              Get started with our library of pre-built, customizable flow
              templates.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Drag-and-drop builder
            </h1>
            <h1 className="text-base ">
              Visualize your automation and understand how customers will move
              through the flow with our intuitive editor.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Real-time monitoring
            </h1>
            <h1 className="text-base ">
              See a simple overview of your flow’s performance over time,
              including how many runs have been successful, and spot issues
              quickly.
            </h1>
          </div>
        </div>
        <div className="w-full  h-fit mt-[50px] max-md:mt-[10px] grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              AI flow creator
            </h1>
            <h1 className="text-base ">
              Use a few sentences to describe what you’d like your flow to do,
              and we’ll build it for you.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Detailed logs
            </h1>
            <h1 className="text-base ">
              Dive into individual flow runs to learn more about individual flow
              runs, spot errors, and debug quickly.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-base font-["Epilogue"] font-semibold mb-[10px]'>
              Versioning
            </h1>
            <h1 className="text-base ">
              Never overwrite a version of your flow, and rollback to a previous
              version at any time.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automationpage5