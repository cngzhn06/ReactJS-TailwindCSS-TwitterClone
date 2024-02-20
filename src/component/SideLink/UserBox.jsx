import React from "react";

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-black cursor-pointer py-4 px-2 rounded-full transform transition-colors duration-300">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQGaqLKDl7ZJ5w/profile-displayphoto-shrink_800_800/0/1697842911973?e=2147483647&v=beta&t=m82ku9ftttxjk9DXpb54elyOLQdnm6qGdwQC0AQkj3Y"
        alt="Profil Resmi"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-bold text-sm">Cengizhan Çalışkan</span>
        <span className="text-xs text-gray-siu">@zignechan</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-white rounded-full"/>
        <div className="w-1 h-1 bg-white rounded-full"/>
        <div className="w-1 h-1 bg-white rounded-full"/>
      </div>
    </div>
  );
};

export default UserBox;
