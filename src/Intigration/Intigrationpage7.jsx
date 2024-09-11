import React from 'react'

const Intigrationpage7 = () => {
  return (
    <div className="w-screen h-fit px-[5vw] mb-[50px] text-white">
      <div className="w-full min-h-[800px] bg-[#021E43] p-[5vw] rounded-[25px]">
        <h1 className='text-3xl px-[5vw] text-center font-["Epilogue"] font-semibold mb-[10px]'>
          Seamlessly connect your CRM
        </h1>
        <h1 className="text-lg px-[5vw] max-md:px-[0] text-center ">
          Synchronize your pipelines, automate based on CRM triggers, and manage
          contacts in real-time for personalized, efficient customer
          interactions.-
        </h1>

        <div className="w-full h-fit py-[50px] flex items-center justify-center">
          <img
            className="w-[700px] max-md:w-[400px]"
            src="./images/intigrationimages/page7.svg"
            alt=""
          />
        </div>
        <div className="w-full  h-fit grid grid-cols-3 max-md:grid-cols-1 justify-items-center">
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px] ">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Pipeline management
            </h1>
            <h1 className="text-lg ">
              Add, edit, and delete deals in your existing CRMs with ease,
              keeping your pipeline up-to-date with any changes that happen in
              Bird.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              CRM automation
            </h1>
            <h1 className="text-lg ">
              Run automations at every stage of the customer pipeline when
              contacts, leads, and deals are updated in your CRM.
            </h1>
          </div>
          <div className="h-fit w-[20vw] max-md:w-full max-md:mb-[40px]">
            <h1 className='text-lg font-["Epilogue"] font-semibold mb-[10px]'>
              Contact management
            </h1>
            <h1 className="text-lg ">
              Whether a contact is created, updated, archived, or deleted, be on
              top of every change to offer personalized customer interactions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intigrationpage7