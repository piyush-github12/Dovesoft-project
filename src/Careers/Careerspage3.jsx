import React from 'react'
import { Link } from 'react-router-dom';

const Careerspage3 = () => {


  let jobs = [
    {
      heading: "Technical Support Engineer ",
      positions: "1",
      location: "Gurugram, Haryana, India",
    },
    {
      heading: "Support Engineer ",
      positions: "1",
      location: "Gurugram, Haryana, India",
    },
    {
      heading: "Inside Sales Intern ",
      positions: "5",
      location: "Mumbai , India",
    },
    {
      heading: "Inside sales Engineer ",
      positions: "5",
      location: "Dubai",
    },
    {
      heading: "Software Engineer ",
      positions: "3",
      location: "Mumbai , India",
    },
  ];

  return (
    <div className="w-screen h-fit px-[10vw]  max-md:px-[5vw]">
      <h1 className="text-3xl font-['Epilogue']  max-md:text-2xl  text-center font-bold mb-[50px]">
        Find the job that matches your skills.
      </h1>

      <div className='w-full h-fit '>
        {jobs.map((item ,index)=>{
            return (
              <div className="mb-[20px]">
                <Link to="/contactus" className="text-xl font-['Epilogue']  max-md:text-lg  text-[#1871ED] font-bold ">
                  {item.heading}
                </Link>
                <h1 className="font-semibold">
                  Postions : 
                  <span className="font-normal"> {item.positions}</span>
                </h1>
                <h1 className="font-semibold">
                  Location : 
                  <span className="font-normal"> {item.location}</span>{" "}
                </h1>
              </div>
            );
        })}
      </div>
    </div> 
  );
}

export default Careerspage3