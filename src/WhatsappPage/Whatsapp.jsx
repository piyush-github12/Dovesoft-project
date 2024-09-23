import React from 'react'
import Whatsappheropage from './Whatsappheropage'
import Navbar from '../components/Navbar'
import WhatsappFeatures from './WhatsappFeatures';
import WhatsappSolutions from './WhatsappSolutions';
import WhatsappConvertLeads from './WhatsappConvertLeads';
import GoodIsolation from '../components/GoodIsolation';
import Section9 from '../Sections/Section9';

const Whatsapp = () => {
  return (
    <div className="bg-white overflow-hidden relative">
      <Navbar color="#2B9C24" logincolor="#fff" logintextcolor="#2B9C24" />
      <Whatsappheropage />
      <WhatsappFeatures />
      <WhatsappSolutions />
      <WhatsappConvertLeads />
      <div
        className={`w-screen px-[10vw] pt-[50px] max-sm:px-[5vw] h-fit pb-[100px] relative z-[7] rounded-b-[55px] bg-white text-white flex items-center justify-center`}
      >
        <div className="w-[100%] h-[300px]   rounded-l-full max-md:rounded-l-[15vw] rounded-tr-full max-md:rounded-tr-[15vw] bg-[#29C853] py-10 flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-['Epilogue'] font-bold max-sm:text-2xl text-center">
            Goodbye isolated interactions. <br />
            <span className="text-white ">Hello Dove Soft.</span>
          </h1>
          <h1 className="text-base text-center ">
            Where every message meets its perfect match, right when it matters
            most.
          </h1>
          <div className="min-w-fit w-[160px] h-[60px] bg-white px-5 rounded-md flex justify-center items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer">
            <h1 className="text-[#29C853] text-base  font-bold whitespace-nowrap">
              Book Demo
            </h1>
          </div>
        </div>
      </div>
      <Section9 bg="#2B9C24" />
    </div>
  );
}

export default Whatsapp