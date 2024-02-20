import React from "react";
import Search from "./WidgetComp/Search";
import Agenta from "./WidgetComp/Agenta";
import Suggestion from "./WidgetComp/Suggestion";

const Widget = () => {
  const agendaData = [
    {
      id: 1,
      subject: "İş dünyası ve finans",
      name: "$STRK",
      posts_num: 100,
    },
    {
      id: 2,
      subject: "Spor",
      name: "ICARDI",
      posts_num: 4400,
    },
    {
      id: 3,
      subject: "Haberler",
      name: "SON DAKİKA",
      posts_num: 40,
    },
    {
      id: 4,
      subject: "Ankaragücü",
      name: "EMRE BELÖZOĞLU",
      posts_num: 70,
    },
    {
      id: 5,
      subject: "Türkiye tarihi gündem",
      name: "#BAHAR",
      posts_num: 100,
    },
    {
      id: 6,
      subject: "Futbol",
      name: "MESUT ÖZİL",
      posts_num: 100,
    },
  ];

  const suggestionData = [
    {
      id: 1,
      photo:
        "https://thumbs.dreamstime.com/b/handsome-guy-being-bored-talking-stranger-random-staff-yawning-cover-opened-mouth-fist-squinting-tired-standing-fatigue-178777560.jpg",
      name: "Zack",
      username: "@0xZack",
    },
    {
      id: 2,
      photo:
        "https://thumbs.dreamstime.com/b/handsome-guy-being-bored-talking-stranger-random-staff-yawning-cover-opened-mouth-fist-squinting-tired-standing-fatigue-178777560.jpg",
      name: "Zack",
      username: "@0xZack",
    },
  ];

  return (
    <div className="w-80 ">
      <div>
        <Search />
      </div>
      <div className="mt-5 bg-gray-dark text-white m-3 p-3 rounded-xl">
        <h2 className="font-bold text-xl px-3">Trends for you</h2>
        <Agenta agendaData={agendaData} />
      </div>
      <div className="mt-5 bg-gray-dark text-white m-3 p-3 rounded-xl">
        <h2 className="font-bold text-xl px-3">Who to fallow</h2>
        <Suggestion suggestionData={suggestionData} />
      </div>
      <div className="text-gray-siu px-7 text-sm">
        <div className="text-gray-siu">
          <span className="cursor-pointer hover:underline">About</span>{" "}
          <span className="cursor-pointer hover:underline">Help Center</span>{" "}
          <span className="cursor-pointer hover:underline">Terms</span>{" "}
          <span className="cursor-pointer hover:underline">Brand</span>
          <br />
          <span className="cursor-pointer hover:underline">
            Privacy policy
          </span>{" "}
          <span className="cursor-pointer hover:underline">Cookies</span>{" "}
          <span className="cursor-pointer hover:underline">Apps</span>{" "}
          <span className="cursor-pointer hover:underline">Developers</span>
          <br />
          <span className="cursor-pointer hover:underline">Blog</span>{" "}
          <span className="cursor-pointer hover:underline">Status</span>{" "}
          <span className="cursor-pointer hover:underline">Jobs</span>{" "}
          <span className="cursor-pointer hover:underline">Businesses</span>
        </div>
      </div>
    </div>
  );
};

export default Widget;
