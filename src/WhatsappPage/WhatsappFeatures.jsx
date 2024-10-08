import React from 'react'
import WhatsappSwiper from "./WhatsappSwiper"


const WhatsappFeatures = () => {
    
  return (
    <div>
      <div className="text-[#000] w-screen">
        <h1 className="text-3xl font-['Epilogue'] px-[5vw] text-center font-bold">
          Powerful Features that you <br /> Need
        </h1>
        <h1 className="text-center text-base px-[15vw] mt-[20px]">
          All Plans of Dovesoft are Inclusive of these features
        </h1>
      </div>
      <WhatsappSwiper />
    </div>
  );
}

export default WhatsappFeatures