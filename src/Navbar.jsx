// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-0 opacity-90 fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              <img src="./PredictX.png" alt="PredictX" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-200 hover:text-white focus:outline-none">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 6h16a1 1 0 01.117 1.993L20 8H4a1 1 0 01-.117-1.993L4 6h16-16zm0 6h16a1 1 0 01.117 1.993L20 14H4a1 1 0 01-.117-1.993L4 12h16-16zm0 6h16a1 1 0 01.117 1.993L20 20H4a1 1 0 01-.117-1.993L4 18h16-16z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ul className={`hidden md:flex space-x-12  ${isOpen ? 'block' : 'hidden'}`} style={{ flex: 1, justifyContent: 'center' }}>
            <li>
              <Link to="/" className="text-gray-300 hover:bg-gray-700 px-12 py-6 block md:inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:bg-gray-700 px-12 py-6 block md:inline-block">
                History
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:bg-gray-700 px-12 py-6  block md:inline-block">
                Profile
              </Link>
            </li>
          </ul>
          <div className="ml-auto">
            <Link to="/signin" className="hidden md:block bg-blue-900 hover:bg-blue-700 text-white font-bold py-6 px-12">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
