import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ 
        backgroundImage: "url('https://bitcoinist.com/wp-content/uploads/2019/07/13-July-1-e1562961609201.jpg?fit=1920%2C1200')",
        filter: "brightness(50%) blur(4px)"
      }}></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-8 text-white mx-auto" style={{ maxWidth: '75%' }}>Portfolio Optimization System for Stock Market and Cryptocurrency Market by Predicting Behavior</h1>
        <h2 className="text-xl mb-8 text-white">Enter number of dates that you want to Predict best stocks and cryptocurrency to buy</h2>
        <form className="flex items-center justify-center">
          <input type="text" className="px-8 py-2 rounded-l-md focus:outline-none border border-blue-700 text-black" placeholder="No. of Prediction Dates" />
          <select className="px-8 py-2 border border-blue-700 text-black">
            <option value="stocks">Stock1</option>
            <option value="crypto">Stock2</option>
          </select>
          <select className="px-8 py-2 border border-blue-700 text-black">
            <option value="best">Cryptocurrency1</option>
            <option value="worst">Cryptocurrency2</option>
          </select>
          <Link to="/prediction">
            <button className="bg-blue-900 hover:bg-blue-700 px-4 py-2 rounded-r-md">
              Predict Data
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Home;
