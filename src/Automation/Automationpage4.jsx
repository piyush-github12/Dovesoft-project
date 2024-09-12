import React from 'react'

const Automationpage4 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] mt-[50px] text-white">
      <div className="w-full min-h-[800px] bg-[#021E43] p-[5vw] rounded-[25px]">
        <h1 className='text-3xl px-[5vw] max-md:px-[0] text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Create flexible automations that drive customer engagement
        </h1>
        <h1 className="text-lg px-[5vw] max-md:px-[0] text-center ">
          Mix and match triggers and actions to build automations that react to
          customer behavior in real-time.
        </h1>

        <div className="w-full h-fit py-[50px] flex items-center justify-center">
          <img
            className="w-[700px] max-md:w-[400px]"
            src="./images/automationimages/page5.svg"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Dynamic triggers
            </h1>
            <h1 className="text-lg ">
              Use events such as new message received, abandoned carts or new
              sign-ups to trigger and run automated workflows.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Diverse actions
            </h1>
            <h1 className="text-lg ">
              Perform tasks in Bird or in external connectors, including
              updating your CRM, routing conversations in Inbox, and managing
              payments.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Conditional logic
            </h1>
            <h1 className="text-lg ">
              Build powerful, complex automations that can handle multiple tasks
              at once and adapt to customer behavior.
            </h1>
          </div>
        </div>
        <div className="w-full  h-fit grid grid-cols-3 mt-[50px] max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Automated messages
            </h1>
            <h1 className="text-lg ">
              Build everything from simple auto-responders to complex chatbots
              with automated messaging, and deploy across popular messaging
              channels.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Scheduling
            </h1>
            <h1 className="text-lg ">
              Run flows at a specific date and time, or build in delays to make
              the automation wait for a response, or send timely follow-up
              messages.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Webhooks
            </h1>
            <h1 className="text-lg ">
              Use webhooks as triggers to run flows when data is received in
              Bird, and send requests to URLs without writing any code.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automationpage4