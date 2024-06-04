import React from 'react';

const Cover = ({ imageUrl, title }) => {
  return (
    <div  className="relative h-screen">
      <img src={"https://images.unsplash.com/photo-1639746292626-690a884030b5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Cover" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-9xl font-bold text-center">MAIN HEADER</h1>
      </div>
    </div>
  );
};

export default Cover;
