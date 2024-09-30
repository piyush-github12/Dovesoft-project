import React from 'react'

const Aboutuspage3 = () => {

  let data = [
    {
      heading: "Mr. Rahul Bhanushali",
      img: "",
      post: "Managing Director",
    },
    {
      heading: "Pankaj Bhanushali",
      img: "",
      post: "Executive Director",
    },
    {
      heading: "Chirag Mewada",
      img: "",
      post: "Non-executive Director",
    },
    {
      heading: "Chandra Prakash Maurya",
      img: "",
      post: "Executive Director",
    },
    {
      heading: "Hirenkumar Shah",
      img: "",
      post: "Independent Director",
    },
    {
      heading: "Nupur Ranbir Chauhan",
      img: "",
      post: "Independent Director",
    },
  ];

  let data2 = [
    {
      heading: "Muktesh Narula",
      img: "",
      post: "Chef Executive Officer",
    },
    {
      heading: "Gaurav Karmawat",
      img: "",
      post: "Chief Financial Officer ",
    },
    {
      heading: "Archit Tundia",
      img: "",
      post: "Company Secretary ",
    },
  ];
  return (
    <div className="w-screen h-fit py-[50px] ">
      <h1 className='text-center text-3xl font-["Epilogue"]  font-bold mb-[50px]'>
        Board of Directors
      </h1>
      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-10 px-[5vw]">
        {data.map((item, index) => {
          return (
            <div className="w-[250px] h-[300px] bg-[#e6e6e6] rounded-3xl ">
              <div className="w-full h-[200px] flex items-center justify-center ">
                <img
                  className="w-[150px] h-[150px] rounded-full object-cover border-[8px] border-[#fff]"
                  src=""
                  alt=""
                />
              </div>
              <div className="w-full h-[100px] mt-[10px] ">
                <h1 className='text-base font-["Epilogue"] font-bold text-center'>
                  {item.heading}
                </h1>
                <h1 className='text-base font-["Epilogue"] text-center'>
                  {item.post}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className='text-center text-3xl font-["Epilogue"]  font-bold my-[50px]'>
        Key Managerial Personnel
      </h1>

      <div className="w-full h-fit grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center gap-10 px-[5vw]">
        {data2.map((item, index) => {
          return (
            <div className="w-[250px] h-[300px] bg-[#e6e6e6] rounded-3xl ">
              <div className="w-full h-[200px] flex items-center justify-center ">
                <img
                  className="w-[150px] h-[150px] rounded-full object-cover border-[8px] border-[#fff]"
                  src=""
                  alt=""
                />
              </div>
              <div className="w-full h-[100px] mt-[10px] ">
                <h1 className='text-base font-["Epilogue"] font-bold text-center'>
                  {item.heading}
                </h1>
                <h1 className='text-base font-["Epilogue"] text-center'>
                  {item.post}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Aboutuspage3