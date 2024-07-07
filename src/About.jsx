import React, { useState } from 'react';

const About = () => {
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="min-h-screen relative prediction-container">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-3840x2160-8324.png')", filter: "brightness(50%)" }}></div>
     
      <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-200px' }}>
        <div className="text-center text-white prediction-content">
          <h1 className="text-4xl font-bold mb-8">History of the Optimized data</h1>
          <div className="w-64 mx-auto mb-4">
            <div className="flex">
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-l-md focus:outline-none border border-blue-700 text-black" 
                placeholder="Enter the date"
                value={date}
                onChange={handleDateChange}
              />
              <button className="bg-blue-900 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
                Search
              </button>
            </div>
          </div>
          <table className="mx-auto mb-8">
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
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
