import React from 'react';

const Contact = () => {
  const user = {
    name: "Geeth Sheheran",
    country: "Sri Lanka",
    idNumber: "982413664V",
    email: "geeth@ceriture.com",
    telephone: "+94 76 219 6201",
    profileImage: "https://media.licdn.com/dms/image/D5603AQHVnSbIpDIXCQ/profile-displayphoto-shrink_800_800/0/1692204502812?e=2147483647&v=beta&t=qMr1zeo8tDI81dTad7A2FQMFlfag8PDPkGX3I2F3xcA" 
  };

  const handleLogout = () => {
    console.log("Logged out");
  };

  const handleEdit = () => {
    console.log("Edit profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-3840x2160-8324.png')", filter: "brightness(50%) " }}></div>
     
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white w-3/4 mx-auto p-8 rounded-lg" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        
          <h1 className="text-4xl font-bold mb-8 text-center">User Profile</h1>
          <img src={user.profileImage} alt="Profile" className="h-32 w-32 rounded-full border-2 border-white mx-auto mb-4" />
          
          <div className="text-left mb-4" style={{ margin: "0 10%" }}>
            <p className="text-xl font-bold">{user.name}</p>
            <p>{user.country}</p>
            <p>ID: {user.idNumber}</p>
            <p>Email: {user.email}</p>
            <p>Telephone: {user.telephone}</p>
          </div>
         
          <div className="text-right">
            <button onClick={handleLogout} className="bg-red-900 hover:bg-red-700 px-4 py-2 rounded-md mr-4">Logout</button>
            <button onClick={handleEdit} className="bg-blue-900 hover:bg-blue-700 px-4 py-2 rounded-md">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
