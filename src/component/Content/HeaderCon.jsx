import React from "react";
import { EngineIcon } from "../../icon/Icon";

const HeaderCon = () => {
  return (
    <div>
      <header className="flex items-center justify-between mr-4 mt-4 text-white border-b border-gray-dark">
        <div className="flex flex-row pl-2 w-11/12 justify-between">
          <div className="px-24 p-1 hover:bg-black cursor-pointer font-bold">
            <span className="">Sana Özel</span>
          </div>
          <div className="px-24 p-1 hover:bg-black cursor-pointer font-bold">
            <span className="flex justify-end">Takip edilenler</span>
          </div>
        </div>
        <div className="w-10 h-10 hover:bg-black rounded-full p-2 cursor-pointer">
          <EngineIcon />
        </div>
      </header>
    </div>
  );
};

export default HeaderCon;
