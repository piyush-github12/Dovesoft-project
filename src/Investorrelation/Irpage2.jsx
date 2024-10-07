import React, { useState } from "react";
import { Link } from "react-router-dom";

const Irpage2 = () => {
  const [clickedheading, setclickedheading] = useState(0);
  const [clickedinsideelement, setclickedinsideelement] = useState(0)


   const handlePdfDownload = (pdf) => (e) => {
     e.preventDefault();
     window.open(pdf, "_blank");
   };

  let data = [
    {
      mainheading: "Financilas",
      insidedata: [
        {
          heading: "Financial Results",
          right: () => {},
        },
        {
          heading: "Annual Reports",
          right: () => {
            return (
              <div>
                <h1 className="text-xl font-semibold">Standalone</h1>
                <Link
                  to="#"
                  onClick={handlePdfDownload(
                    "./images/investor/Annual_Report_2020-2021.pdf"
                  )}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Report 2020-2021
                </Link>{" "}
                <br />
                <Link
                  to="#"
                  onClick={handlePdfDownload(
                    "./images/investor/Annual_Report_2021-2022.pdf"
                  )}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Report 2021-2022
                </Link>
                <br />
                <Link
                  to="#"
                  onClick={handlePdfDownload(
                    "./images/investor/Annual_Report_2022-2023.pdf"
                  )}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Report 2022-2023
                </Link>{" "}
                <br />
                <h1 className="text-xl font-semibold mt-[10px]">
                  Consolidated
                </h1>
                <Link
                  to="#"
                  onClick={handlePdfDownload("./images/investor/CFS_2022.pdf")}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Report 2021-2022
                </Link>{" "}
                <br />
                <Link
                  to="#"
                  onClick={handlePdfDownload("./images/investor/CFS_2023.pdf")}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Report 2022-2023
                </Link>
                <br />
              </div>
            );
          },
        },
        {
          heading: "Annual Returns",
          right: () => {
            return (
              <div>
                <h1 className="text-xl font-semibold">Annual Returns</h1>
                <Link
                  to="#"
                  onClick={handlePdfDownload(
                    "./images/investor/Annual_Returns_2020-2021.pdf"
                  )}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Returns 2020-2021
                </Link>{" "}
                <br />
                <Link
                  to="#"
                  onClick={handlePdfDownload(
                    "./images/investor/An_Returns_2021-2022.pdf"
                  )}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Returns 2021-2022
                </Link>{" "}
                <br />
                <Link
                  to="#"
                  onClick={handlePdfDownload("")}
                  target="_blank"
                  className="text-base text-[#1871ED]"
                >
                  Annual Returns 2022-2023
                </Link>
              </div>
            );
          },
        },
      ],
    },
    {
      mainheading: "Board & Shareholders",
      insidedata: [
        {
          heading: "Board Meeting Notices",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "Outcome of Board Meeting",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "Newspaper Publication",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "Trading Window Closure",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "AGM/EGM Notices & Results",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "Postal Ballot Notices & Results",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
        {
          heading: "Notice of Book Closure/Record",
          right: () => {
            return <h1>Comming Soon</h1>;
          },
        },
      ],
    },
    {
      mainheading: "IR Contact",
      insidedata: [
        {
          heading: "Contact Information",
          right:  ()=>{
            return (
              <div>
                <h1>For shareholder-related queries, please contact</h1>
                <h1 className="font-semibold ">
                  Mr. Archit Tundia (Company Secretary)
                </h1>
                <br />
                <br />
                <h1 className="font-semibold">Dove Soft Limited,</h1>
                <h1>
                  1101,DLH Park Swami Vivekananda Rd, Rani Sati Nagar, Sunder
                  Nagar, Goregaon West, Mumbai, Maharashtra 400062{" "}
                  <span className="font-semibold">Mail ID: secretarial@dove-soft.com</span>
                </h1>
              </div>
            );
          },
        },
        {
          heading: "Shareholder Enquiry",
          right: [],
        },
      ],
    },
    {
      mainheading: "Policies",
      insidedata: [
        {
          heading: "Policies",
          right: ()=>{
            return (
              <div className="w-full h-fit">
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_1.pdf")
                  }
                >
                  1. Policy & Procedures for Inquiry in Case of Leak or
                  Suspected Leak of UPSI
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_2.pdf")
                  }
                >
                  2. Policy on Archival For Disclosure
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_3.pdf")
                  }
                >
                  3. Policy on Board Diversity
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_4.pdf")
                  }
                >
                  4. Policy on Code of Busienss Conduct and Ethics
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_5.pdf")
                  }
                >
                  5. Policy on Code of Fair Disclosure of Unpublished Price
                  Sensitive Information
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_6.pdf")
                  }
                >
                  6. Policy on Corporate Governance
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_7.pdf")
                  }
                >
                  7. Policy_on Dealing with Related Party Transactions
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_8.pdf")
                  }
                >
                  8. Policy on Determination of_Materiality_of_Events
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_9.pdf")
                  }
                >
                  9. Policy on Insider Trading
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_10.pdf")
                  }
                >
                  10. Policy on Materiality as Adopted by the Board of Directors
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_11.pdf")
                  }
                >
                  11. Policy on Nomination and Remuneration
                </Link> <br/>

                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_13.pdf")
                  }
                >
                  12. Policy on Preservation of Documents
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_14.pdf")
                  }
                >
                  13. Policy on Prevention of Sexual Harrasment
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_15.pdf")
                  }
                >
                  14. Policy on Terms and Conditions of Appointment of
                  Independent Directors
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_16.pdf")
                  }
                >
                  15. Policy on Vigil Mechanism & Whistle Blower
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_17.pdf")
                  }
                >
                  16. Polices Related to ESOP Scheme
                </Link> <br/>
                <Link className="text-[#1871ED]" 
                  to="#"
                  
                  onClick={
                    handlePdfDownload("./images/investor/Policy_12.pdf")
                  }
                >
                  17. Policy on Material Subsidiary
                </Link> <br/>
              </div>
            );
          },
        },
      ],
    },
  ];


  return (
    <div className="w-screen px-[5vw] max-md:px-[5vw] py-[50px]">
      <div className="w-full h-fit  flex rounded-xl border-[5px] border-[#1871ED]">
        <div className="w-[30%] h-auto border-r-[2px] border-[#1871ED] ">
          <h1 className="w-full h-[80px]  text-base flex items-center justify-center border-b-[2px] border-[#1871ED]"></h1>

          {data[clickedheading].insidedata.map((item, index) => {
            return (
              <h1
                onClick={() => setclickedinsideelement(index)}
                style={{ userSelect: "none" }}
                className={`w-full min-h-[80px] px-[20px] text-base font-semibold transition-all duration-200 flex items-center justify-center border-b-[2px] border-[#1871ED]  ${
                  clickedinsideelement === index
                    ? "bg-[#EFF6FF] text-[#1871ED] "
                    : ""
                }`}
              >
                {item.heading}
              </h1>
            );
          })}
        </div>
        
        <div className="w-[70%] h-full ">
          <div className="w-full h-[80px]  border-b-[2px] border-[#1871ED] font-bold flex justify-evenly relative z-[9] max-lg:overflow-x-auto max-lg:justify-start  custom-scrollbar2">
            <div className="flex   max-lg:min-w-max">
              {data.map((item, itemindex) => {
                return (
                  <h1
                    onClick={() => {
                      setclickedheading(itemindex);
                      setclickedinsideelement(0);
                    }}
                    style={{ userSelect: "none" }}
                    className={`px-[20px] py-[5px] h-[80px] flex items-center justify-center transition-all duration-200 rounded-md uppercase cursor-pointer whitespace-nowrap ${
                      clickedheading === itemindex
                        ? "text-[#1871ED]"
                        : "text-black"
                    } `}
                  >
                    {" "}
                    {item.mainheading}
                  </h1>
                );
              })}
            </div>
          </div>

          <div className="w-full h-full px-[30px] py-[20px]">
            {typeof data[clickedheading].insidedata[clickedinsideelement].right === "function"
              ? data[clickedheading].insidedata[clickedinsideelement].right()
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Irpage2;







  // {
  //   Array.isArray(
  //     data[clickedheading].insidedata[clickedinsideelement].right
  //   ) &&
  //     data[clickedheading].insidedata[clickedinsideelement].right.map(
  //       (rightitems, rightitemsindex) => {
  //         return (
  //           <div className="w-full h-fit" key={rightitemsindex}>
  //             {Array.isArray(rightitems.insideinsidedata1) &&
  //               rightitems.insideinsidedata1.map((item, index) => {
  //                 return (
  //                   <h1
  //                     className="text-xl font-semibold "
  //                     key={index}
  //                   >
  //                     {rightitems.insideinsideheading &&
  //                       rightitems.insideinsideheading}
  //                   </h1>
  //                 );
  //               })}
  //           </div>
  //         );
  //       }
  //     );
  // }