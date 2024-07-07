import React from 'react';

const Navbar = () => {
  return (
    <div className="flex h-screen items-center justify-center" style={{
      backgroundImage: 'url(https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-3840x2160-8324.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-black bg-opacity-90 rounded-lg shadow-lg">
        <h1 className='text-4xl font-bold mb-8 text-white'>Sign in</h1>
        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 rounded border border-gray-300" />
        <input type="password" placeholder="Password" className="w-full mb-4 px-4 py-2 rounded border border-gray-300" />
        <button className="w-full mb-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700">Sign In</button>
        <h2 className='text-xl text-white mb-2'>Don't have an account?</h2>
        <button className="w-full px-4 py-2 bg-green-900 text-white rounded hover:bg-green-700">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
