import React from "react";

const Suggestion = ({ suggestionData }) => {
  return (
    <div>
      {suggestionData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between hover:bg-black px-3 cursor-pointer"
        >
          <div className="pt-3 flex flex-row cursor-pointer justify-center items-center">
            <img src={item.photo} className="w-10 h-10 rounded-full" />
            <div className="flex flex-col pl-2">
              <span className="items-center">{item.name}</span>
              <span className="text-gray-siu">{item.username}</span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="bg-slate-200 p-2 rounded-full text-sm font-bold text-black">
              Takip et
            </span>
          </div>
        </div>
      ))}

      <div className="mt-6  cursor-pointer w-full h-full rounded-full">
        <span className="text-primary-dark">Show more</span>
      </div>
    </div>
  );
};

export default Suggestion;
