import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
        
          <Link to="/" className="flex items-center">
            <img src="./PredictX.png" alt="PredictX Logo" className="h-10 w-auto mr-3" />
            <span className="text-white font-bold text-xl">PredictX</span>
          </Link>
          

          <ul className={`hidden md:flex justify-center items-center space-x-10 flex-grow ${isOpen ? 'block' : 'hidden'}`}>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out">
                History
                </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out">
                Profile
              </Link>
            </li>
          </ul>

          
          <div className="ml-auto hidden md:block">
            <Link to="/signin" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Sign in
            </Link>
          </div>

         
          <button onClick={toggleMenu} className="text-gray-200 hover:text-white focus:outline-none md:hidden">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
