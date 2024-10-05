import React from 'react'

const integrationpage6 = () => {
  return (
    <div className="py-[50px]">
      <h1 className='text-3xl  text-center px-[5vw] font-["Epilogue"] font-semibold mb-[10px]'>
        Make your campaigns smarter by leveraging the latest AI models
      </h1>
      <h1 className="text-base text-center px-[5vw] ">
        Synchronize your pipelines, automate based on CRM triggers, and manage
        contacts in real-time for personalized, efficient customer interactions.
      </h1>

      <div className="w-screen h-fit px-[8vw] py-[50px] grid grid-cols-3 max-sm:grid-cols-1 justify-items-center">
        <div className="w-[25vw] max-sm:w-full min-h-[300px] p-[20px] ">
          <img
            className="w-[100px] max-sm:w-[80px] "
            src="./images/integrationimages/page6-1.webp"
            alt=""
          />
          <h1 className="text-base  font-semibold mt-[10px] font-['Epilogue']">
            Smart audience building
          </h1>
          <h1 className="text-base  mt-[10px]">
            Create segmentations faster. Simply install your AI connector and
            build hyper-targeted audiences with a simple plaintext prompt.
          </h1>
        </div>
        <div className="w-[25vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-[100px] max-sm:w-[80px] "
            src="./images/integrationimages/page6-2.webp"
            alt=""
          />
          <h1 className="text-base  font-semibold mt-[10px] font-['Epilogue']">
            AI-built message templates
          </h1>
          <h1 className="text-base  mt-[10px]">
            Describe the message you want to send, the image you want to use,
            and the action you want recipients to take, and let AI do the work.
          </h1>
        </div>
        <div className="w-[25vw] max-sm:w-full min-h-[300px] p-[20px]">
          <img
            className="w-[100px] max-sm:w-[80px] "
            src="./images/integrationimages/page6-3.webp"
            alt=""
          />
          <h1 className="text-base  font-semibold mt-[10px] font-['Epilogue']">
            Content moderation
          </h1>
          <h1 className="text-base  mt-[10px]">
            Use AI to automatically detect and flag content that might breach
            content rules, keeping your communications compliant.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default integrationpage6