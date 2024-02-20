import React, { useState } from "react";
import {
  HomeIcon,
  ExploreIcon,
  NotifacitionsIcon,
  MessagesIcon,
  ListIcon,
  BookmarsIcon,
  CommunitiesIcon,
  VerifiedIcon,
  ProfileIcon,
  MoreIcon,
} from "../icon/Icon.jsx"
import SideLink from "./SideLink/SideLink";
import UserBox from "./SideLink/UserBox.jsx";

const sideLinks = [
  { id: 1, icon: HomeIcon, name: "Home" },
  { id: 2, icon: ExploreIcon, name: "Explore" },
  { id: 3, icon: NotifacitionsIcon, name: "Notifications" },
  { id: 4, icon: MessagesIcon, name: "Messages" },
  { id: 5, icon: ListIcon, name: "List" },
  { id: 6, icon: BookmarsIcon, name: "Bookmarks" },
  { id: 7, icon: CommunitiesIcon, name: "Communities" },
  { id: 8, icon: VerifiedIcon, name: "Verified" },
  { id: 9, icon: ProfileIcon, name: "Profile" },
  { id: 10, icon:MoreIcon, name: "More" },
];
const Sidebar = () => {

  const handleMenuItem = (name) => {
    setActive(name)
  }
  return (
    <div className="flex h-screen sticky top-0 flex-col justify-between w-72 px-6">
      <div>
        <div className="flex items-center justify-center w-12 h-12 hover:bg-black rounded-full cursor-pointer mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png"
            alt="Twitter logo"
            className="w-7 h-7"
          />
        </div>
        <nav className="text-white">
          <ul className="">
            {sideLinks.map(({ name, icon}) => (
              <SideLink key={name} name={name} Icon={icon}  />
            ))}
          </ul>
        </nav>
        <button className="w-full mt-8 bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-6 transform transition-colors duration-200">
          Gönder
        </button>
      </div>
      
      <div className="text-white"><UserBox/></div>
    </div>
  );
};

export default Sidebar;
