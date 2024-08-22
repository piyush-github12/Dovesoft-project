import React from 'react'

const Section8 = () => {
  return (
    <div className="w-screen h-fit  py-[100px]  ">
      <h1 className="text-center text-3xl font-bold mb-10">
        <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
          Why Choose Dove Soft
        </span>
      </h1>
      <div className="grid grid-cols-4  max-lg:grid-cols-2 gap-10 justify-items-center px-24  max-md:px-5">
        <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#FF9A0D] flex flex-col items-center  gap-2">
          <img className="w-[54px] " src="./images/image 19.png" alt="" />
          <h1 className="font-bold text-lg ">We Scale with You</h1>
          <h1 className="text-sm text-center">
            Regardless of one or million messages you send, our SMS
            infrastructure will ensure you that they deliver on time.
          </h1>
        </div>
        <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#3C3585] flex flex-col items-center  gap-2">
          <img className="w-[54px] " src="./images/image 19-1.png" alt="" />
          <h1 className="font-bold text-lg ">Secure</h1>
          <h1 className="text-sm text-center">
            We offer enterprise-grade security to customers in highly-regulated
            sectors.
          </h1>
        </div>
        <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#B22556] flex flex-col items-center  gap-2">
          <img className="w-[54px] " src="./images/image 19-2.png" alt="" />
          <h1 className="font-bold text-lg ">Enterprise-grade</h1>
          <h1 className="text-sm text-center">
            We connect your messaging flow directly over 220+ carriers in 200+
            countries for international delivery that is best in class.
          </h1>
        </div>
        <div className="w-[18vw]  min-h-fit max-lg:w-[30vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-[100%] rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#116B6B] flex flex-col items-center  gap-2">
          <img className="w-[54px] " src="./images/image 19-3.png" alt="" />
          <h1 className="font-bold text-lg ">Compliance & developers</h1>
          <h1 className="text-sm text-center">
            We align you with the support and developer team. We ensure that
            your dove soft experience is smooth and successful.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section8