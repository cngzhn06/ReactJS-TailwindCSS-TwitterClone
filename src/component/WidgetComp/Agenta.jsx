import React from "react";

const Agenta = ({ agendaData }) => {
  return (
    <div className="space-y-4">
      {agendaData.map((item, index) => (
        <div key={index} className="flex justify-between hover:bg-black px-3">
          <div className="pt-3 flex flex-col cursor-pointer">
            <span className="text-gray-siu font-semibold text-xs">
              {item.subject}
            </span>
            <span className="font-bold">{item.name}</span>
            <span className="text-gray-siu font-semibold text-xs">
              {item.posts_num} B posts
            </span>
          </div>
          <div className="items-center"> ... </div>
        </div>
      ))}
    </div>
  );
};

export default Agenta;
