import React from 'react'

const Section8 = () => {
  return (
    <div className="w-screen h-fit  py-[100px]  ">
      <h1 className="text-center text-[30px] max-md:text-[5vw] font-bold mb-10">
        <span className="bg-gradient-to-r from-[#A8CCFF] to-[#F4F9FF] rounded-md px-2">
          Why Choose Dove Soft
        </span>
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 gap-10 justify-items-center px-10">
        <div className="w-[20vw] h-[200px] max-lg:w-[40vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-fit rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#FF9A0D] flex flex-col items-center  gap-2">
          <img className="w-[50px] " src="./images/image 19.png" alt="" />
          <h1 className="font-bold ">We Scale with You</h1>
          <h1 className="text-xs text-center">
            Regardless of one or million messages you send, our SMS
            infrastructure will ensure you that they deliver on time.
          </h1>
        </div>
        <div className="w-[20vw] h-[200px] max-lg:w-[40vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-fit rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#3C3585] flex flex-col items-center  gap-2">
          <img className="w-[50px] " src="./images/image 19-1.png" alt="" />
          <h1 className="font-bold ">Secure</h1>
          <h1 className="text-xs text-center">
            We offer enterprise-grade security to customers in highly-regulated
            sectors.
          </h1>
        </div>
        <div className="w-[20vw] h-[200px] max-lg:w-[40vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-fit rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#B22556] flex flex-col items-center  gap-2">
          <img className="w-[50px] " src="./images/image 19-2.png" alt="" />
          <h1 className="font-bold ">Enterprise-grade</h1>
          <h1 className="text-xs text-center">
            We connect your messaging flow directly over 220+ carriers in 200+
            countries for international delivery that is best in class.
          </h1>
        </div>
        <div className="w-[20vw] h-[200px] max-lg:w-[40vw] max-lg:h-fit   max-sm:w-[40vw] max-sm:h-fit rounded-tl-[30px] p-5 rounded-br-[30px] border-2  border-[#116B6B] flex flex-col items-center  gap-2">
          <img className="w-[50px] " src="./images/image 19-3.png" alt="" />
          <h1 className="font-bold ">Compliance & developers</h1>
          <h1 className="text-xs text-center">
            We align you with the support and developer team. We ensure that
            your dove soft experience is smooth and successful.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section8