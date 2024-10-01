import React from 'react'
import { Link } from 'react-router-dom';

const Bookdemobutton = (params) => {

  return (
    <Link
      to="https://calendly.com/demo-lcfx/whatsapp-onboarding?month=2024-10"
      // target="_blank"
      style={{
        backgroundColor: params.clr,
        color: params.textclr,
        borderColor: params.borderclr,
      }}
      className={`min-w-fit w-[160px] h-[60px] mt-[20px]  px-5 rounded-md flex justify-center border-2 items-center gap-2 hover:scale-[1.2] transition-all cursor-pointer`}
    >
      <h1
        className={`text-base h-[60px] flex items-center font-bold whitespace-nowrap`}
      >
        Book Demo
      </h1>
    </Link>
  );
}

export default Bookdemobutton