import React from 'react'

const Emailpage3 = () => {
  return (
    <div className="bg-[#021E43] w-screen h-fit py-[50px]">
      <h1 className='font-["Epilogue"] text-3xl text-center text-white font-[500]'>
        Email deliverability you can count on
      </h1>
      <div className="bg-[#021E43] w-screen h-fit py-[50px]  px-[10vw] max-md:px-[5vw] flex max-md:block gap-[50px]">
        <div className="w-[30vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
          <img
            className="w-[80px] mb-[10px]"
            src="./images/emailimages/page3-1.svg"
            alt=""
          />
          <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
            24/7 support
          </h1>
          <h1>
            Our customer support team is available round the clock to answer
            questions in six different languages. Brevo’s free plan offers
            support by email while paid plans include further options for live
            chat and phone support.
          </h1>
        </div>
        <div className="w-[30vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
          <img
            className="w-[80px] mb-[10px]"
            src="./images/emailimages/page3-2.svg"
            alt=""
          />
          <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
            Automation
          </h1>
          <h1>
            Trigger custom email automation workflows based on email activity
            and website behavior. Ready-made email sequences and templates make
            set-up quick and intuitive. Never miss an opportunity to engage.
          </h1>
        </div>
        <div className="w-[30vw] max-md:w-full  min-h-[250px] bg-white rounded-xl p-[20px]   ">
          <img
            className="w-[80px] mb-[10px]"
            src="./images/emailimages/page3-3.svg"
            alt=""
          />
          <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
            Integrations
          </h1>
          <h1>
            Brevo’s email API, SMTP relay, and email plugins make it easy to
            send emails directly through third-party apps and websites. Enjoy
            custom-built plugins for WordPress, Shopify, WooCommerce, and many
            more.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Emailpage3