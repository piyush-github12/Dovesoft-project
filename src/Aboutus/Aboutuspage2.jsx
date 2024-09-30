import React from 'react'

const Aboutuspage2 = () => {

    let data = [
      {
        heading: "Our Vision",
        img: "./images/Aboutus/page2-1.png",
        para: "To empower global businesses with innovative, reliable messaging solutions that foster meaningful customer connections through cutting-edge communication technology.",
      },
      {
        heading: "Our Mission",
        img: "./images/Aboutus/page2-2.png",
        para: "To deliver scalable and efficient communication platforms that enhance business outreach, customer engagement, and drive growth through continuous innovation.",
      },
    ];

 return (
   <div className="w-screen h-fit mt-[50px] ">
     {data.map((item, index) => {
       return (
         <div className="w-screen min-h-[300px] px-[10vw] max-md:px-[5vw] py-[20px]  max-md:py-[20px]  max-md:mt-[20px] flex items-center justify-between gap-10 max-md:block">
           {index % 2 == 0 ? (
             ""
           ) : (
             <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-[300px] max-md:h-[300px] max-md:my-[50px]">
               <img
                 className="w-[250px] object-cover max-md:w-[250px]"
                 src={`${item.img}`}
                 alt=""
               />
             </div>
           )}
           <div className="w-[50%] hidden px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl  items-center justify-center max-md:flex max-md:w-full h-[500px] max-md:h-fit max-md:mb-[20px]">
             <img
               className="w-[250px] object-cover max-md:w-[250px]"
               src={`${item.img}`}
               alt=""
             />
           </div>
           <div className="w-[50%]  max-md:w-full h-[250px] max-md:h-fit flex flex-col justify-center gap-5">
             <h1 className='font-["Epilogue"] text-2xl font-[500]'>
               {item.heading}
             </h1>
             <h1 className="w-[90%] text-base">{item.para}</h1>
           </div>

           {index % 2 == 0 ? (
             <div className="w-[40%] px-[50px] max-md:px-[30px] py-[30px] bg-[#EAF9FF] rounded-3xl flex items-center justify-center max-md:hidden  max-md:w-full h-fit max-md:h-fit max-md:my-[50px]">
               <img
                 className="w-[250px] object-cover max-md:w-[250px]"
                 src={`${item.img}`}
                 alt=""
               />
             </div>
           ) : (
             ""
           )}
         </div>
       );
     })}
   </div>
 );
}

export default Aboutuspage2