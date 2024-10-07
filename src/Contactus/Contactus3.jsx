import React from 'react'

const Contactus3 = () => {
  return (
    <>
      <h1 className="text-4xl font-['Epilogue'] text-center font-bold my-[50px]">
        Our Offices
      </h1>
      <div className="w-screen h-fit grid grid-cols-3 gap-[30px]  px-[10vw] max-md:px-[5vw] ">
        <div className="group min-h-[300px]  p-[20px] bg-[#f9f8f8] rounded-lg">
          <div className="w-full h-[150px]   flex items-center justify-center">
            <img
              className="h-[90%] grayscale group-hover:grayscale-0 "
              src="./images/locations/mumbai.png"
              alt=""
            />
          </div>
          <h1 className="font-['Epilogue'] text-lg font-bold  text-center ">
            Mumbai
          </h1>
          <h1 className=" text-base text-center">
            1101,DLH Park Swami Vivekananda Rd, Rani Sati Nagar, Sunder Nagar,
            Goregaon West, Mumbai, Maharashtra 400062
          </h1>
        </div>
        <div className="group min-h-[300px]  p-[20px] bg-[#f9f8f8] rounded-lg">
          <div className="w-full h-[150px]   flex items-center justify-center">
            <img
              className="h-[90%] grayscale group-hover:grayscale-0 "
              src="./images/locations/ahmedabad.png"
              alt=""
            />
          </div>
          <h1 className="font-['Epilogue'] text-lg font-bold  text-center ">
            Ahmedabad
          </h1>
          <h1 className=" text-base text-center">
            621, North Plaza, beside 4Dsquare mall, Motera Ahmedabad 380005
          </h1>
        </div>
        <div className="group min-h-[300px]  p-[20px] bg-[#f9f8f8] rounded-lg">
          <div className="w-full h-[150px]   flex items-center justify-center">
            <img
              className="h-[90%] grayscale group-hover:grayscale-0 "
              src="./images/locations/delhi.png"
              alt=""
            />
          </div>
          <h1 className="font-['Epilogue'] text-lg font-bold  text-center ">
            Gurugram
          </h1>
          <h1 className=" text-base text-center">
            Unit No 108A, 1st floor, Suncity Success Tower, Sector 65, Golf
            Course Extension road, Gurugram, Haryana 122102
          </h1>
        </div>
        <div className="group min-h-[300px]  p-[20px] bg-[#f9f8f8] rounded-lg">
          <div className="w-full h-[150px]   flex items-center justify-center">
            <img
              className="h-[90%] grayscale group-hover:grayscale-0 "
              src="./images/locations/dubai.png"
              alt=""
            />
          </div>
          <h1 className="font-['Epilogue'] text-lg font-bold  text-center ">
            Dubai
          </h1>
          <h1 className=" text-base text-center">
            405, Zabeel Towers , shaikh zaid road , Dubai
          </h1>
        </div>
      </div>
    </>
  );
}

export default Contactus3