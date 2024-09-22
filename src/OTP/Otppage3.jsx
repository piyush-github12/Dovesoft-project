import React from 'react'

const Otppage3 = () => {
 let data = [
   {
     heading: "User Authentication",
     img: "./images/filegptimages/filegptpage3-1.svg",
     para: "Add an extra layer of security to your login processes with OTP-based two-factor authentication.",
   },
   {
     heading: "Transaction Verification",
     img: "./images/filegptimages/filegptpage3-2.svg",
     para: "Safeguard financial transactions by requiring users to validate their identity with an OTP before proceeding.",
   },
   {
     heading: "Password Reset",
     img: "./images/filegptimages/filegptpage3-3.svg",
     para: "Securely verify users during password reset processes to prevent unauthorized access.",
   },
 ];

 return (
   <div className="bg-[#021E43] w-screen h-fit py-[50px]">
     <h1 className='font-["Epilogue"] text-3xl text-center text-white font-[500]'>
       Use Cases
     </h1>
     <div className="bg-[#021E43] w-screen h-fit py-[50px]  px-[10vw] max-md:px-[5vw] flex max-md:block gap-[50px]">
       {data.map((item, index) => {
         return (
           <div className="w-[30vw] max-md:w-full max-md:mb-[50px] min-h-[250px] bg-white rounded-xl p-[20px]   ">
             <img className="w-[80px] mb-[10px]" src={item.img} alt="" />
             <h1 className='font-["Epilogue"] text-xl font-semibold mb-[20px]'>
               {item.heading}
             </h1>
             <h1 className="text-base">{item.para}</h1>
           </div>
         );
       })}
     </div>
   </div>
 );
}

export default Otppage3