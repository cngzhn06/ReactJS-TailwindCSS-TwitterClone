import React from "react";

const SideLink = ({ name, Icon }) => {

  return (
    <li className="group cursor-pointer">
      <a href={name.toLowerCase()} className="pointer-events-none">
        <div className="inline-block">
          <div className="flex py-3 px-2 group-hover:bg-black rounded-full">
            <div className="w-7 h-7">
              <Icon />
            </div>
            <span className={`ml-4 font-normal`}>{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
