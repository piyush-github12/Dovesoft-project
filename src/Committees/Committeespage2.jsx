import React from 'react';

const Committeespage2 = () => {
  return (
    <div className="w-screen h-fit px-[10vw] max-md:px-[5vw] pt-[50px] pb-[100px]  overflow-x-auto">
      <h1 className='text-3xl  text-center  font-["Epilogue"] font-bold mb-[50px]'>
        Mandatory Committees under Companies Act, 2013
      </h1>

      <table className="min-w-full bg-white border border-gray-300 hidden md:table">
        <thead>
          <tr className="bg-gray-200 uppercase text-lg leading-normal">
            <th className="py-3 px-6 text-left">Sr No.</th>
            <th className="py-3 px-6 text-left">Name of the Committee</th>
            <th className="py-3 px-6 text-left">Members</th>
            {/* <th className="py-3 px-6 text-left">Category</th> */}
          </tr>
        </thead>
        <tbody className="text-base  font-light">
          <tr className="border-[2px] border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">Audit Committee</td>
            <td className="py-3 px-6">
              <span className="font-semibold"> Hirenkumar Rasiklal Shah</span>{" "}
              (Chairperson of Meeting) (Independent Director)
              <br /> <br />
              <span className="font-semibold">Nupur Ranbir Chauhan</span>{" "}
              (Independent Director)
              <br /> <br />
              <span className="font-semibold"> Chirag Mukesh Mewada </span>{" "}
              (Non-Executive Director)
            </td>
          </tr>
          <tr className="border-[2px] border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">2</td>
            <td className="py-3 px-6">Nomination & Remuneration Committee</td>
            <td className="py-3 px-6">
              <span className="font-semibold"> Hirenkumar Rasiklal Shah</span>{" "}
              (Chairperson of Meeting) (Independent Director)
              <br /> <br />
              <span className="font-semibold">Nupur Ranbir Chauhan</span>{" "}
              (Independent Director)
              <br /> <br />
              <span className="font-semibold"> Chirag Mukesh Mewada </span>{" "}
              (Non-Executive Director)
            </td>
          </tr>
          <tr className="border-[2px] border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">3</td>
            <td className="py-3 px-6">Stakeholder Relationship Committee</td>

            <td className="py-3 px-6">
              <span className="font-semibold"> Hirenkumar Rasiklal Shah</span>{" "}
              (Chairperson of Meeting) (Independent Director)
              <br /> <br />
              <span className="font-semibold">Nupur Ranbir Chauhan</span>{" "}
              (Independent Director)
              <br /> <br />
              <span className="font-semibold"> Chirag Mukesh Mewada </span>{" "}
              (Non-Executive Director)
            </td>
          </tr>
        </tbody>
      </table>
      <div className="md:hidden">
        {/* Responsive card layout for mobile and tablet */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="font-bold">1. Audit Committee</h3>
          <p>
            <strong>Members:</strong> <br />{" "}
            <strong>Hirenkumar Rasiklal Shah </strong> (Chairperson of Meeting)
            (Indipendent Director), <br />
            <strong> Nupur Ranbir Chauhan </strong> (Indipendent Director),
            <br />
            <strong>Chirag Mukesh Mewada </strong> (Non-Executive Director)<br />
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="font-bold">2. Nomination & Remuneration Committee</h3>
           <p>
            <strong>Members:</strong> <br />{" "}
            <strong>Hirenkumar Rasiklal Shah </strong> (Chairperson of Meeting)
            (Indipendent Director), <br />
            <strong> Nupur Ranbir Chauhan </strong> (Indipendent Director),
            <br />
            <strong>Chirag Mukesh Mewada </strong> (Non-Executive Director)<br />
          </p>
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-4 mb-4">
          <h3 className="font-bold">3. Stakeholder Relationship Committee</h3>
           <p>
            <strong>Members:</strong> <br />{" "}
            <strong>Hirenkumar Rasiklal Shah </strong> (Chairperson of Meeting)
            (Indipendent Director), <br />
            <strong> Nupur Ranbir Chauhan </strong> (Indipendent Director),
            <br />
            <strong>Chirag Mukesh Mewada </strong> (Non-Executive Director)<br />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Committeespage2;