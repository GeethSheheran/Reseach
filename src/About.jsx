import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background image with blur effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://assets.finbold.com/uploads/2022/12/Two-key-price-resistance-levels-Bitcoin-must-break-to-start-a-relief-rally.jpg')",filter: "brightness(50%) blur(4px)" }}></div>
      </div>
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-8">History of the Optimized data</h1>
          {/* Search bar */}
          <div className="w-64 mx-auto mb-4">
            <div className="flex">
              <input type="text" className="w-full px-4 py-2 rounded-l-md focus:outline-none border border-blue-700 text-black" placeholder="Enter the date" />
              <button className="bg-blue-900 hover:bg-blue-900 px-4 py-2 rounded-r-md text-white">
                Search
              </button>
            </div>
          </div>
          {/* Table */}
          <table className="mx-auto mb-8 ">
            <thead>
              <tr>
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">No of Dates</th>
                <th className="px-4 py-2">Portfolio Optimization Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">01</td>
                <td className="border px-4 py-2">Jan 24, 2024</td>
                <td className="border px-4 py-2">05</td>
                <td className="border px-4 py-2">BTC - 51%, ACC - 20%, DDC - 29%, KLM - 10%</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
