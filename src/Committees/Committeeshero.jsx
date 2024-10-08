import React from 'react'
import Navbar from '../components/Navbar';

const Committeeshero = () => {
  return (
    <div className="w-screen h-fit">
      <Navbar />
      <div className="w-screen  min-h-[300px] bg-gradient-to-tr from-[#072142] to-[#253164] px-[10vw]  max-md:px-[5vw] text-white  max-md:block pt-[200px] pb-[50px] max-md:pt-[200px] max-md:pb-[50px]">
        <h1 className='text-4xl  text-center  font-["Epilogue"] font-bold mb-[10px]'>
          Composition of Committees of Dove Soft LImited
        </h1>
      </div>
    </div>
  );
}

export default Committeeshero