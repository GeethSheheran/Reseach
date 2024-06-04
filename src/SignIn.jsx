import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  return (
    <div className="flex h-screen bg-black">
      <div className="w-1/2 flex items-center justify-center bg-cover rotating-image" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/008/822/064/small_2x/3d-design-bitcoin-cryptocurrency-white-background-free-png.png)', backgroundPosition: 'center', backgroundSize: '50%' , backgroundRepeat: 'no-repeat'  }}>
       
      </div>

      <div className="w-1/2 flex items-center justify-center ">
        <nav className="text-center">
          <div className="max-w-xs">
            <h1 className='text-4xl font-bold mb-8 text-white mx-auto'>Sign in</h1>
            <input type="email" placeholder="Email" className="w-full mb-2 px-4 py-2 rounded border border-gray-300" />
            <input type="password" placeholder="Password" className="w-full mb-2 px-4 py-2 rounded border border-gray-300" />
            <button className="w-full px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700">Sign In</button>
          </div>
          <h1 className='text-xl text-white mx-auto mt-10' >If you haven't account</h1>
          <button className="w-full mt-4 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700">Sign Up</button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
