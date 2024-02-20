import React from "react";
import HeaderCon from "./Content/HeaderCon";
import TweetBox from "./Content/TweetBox";
import Divider from "./Content/Divider";
import FeedList from "./Content/FeedList";

const Content = () => {
  return (
    <div className="flex-1 border-gray-dark border-r border-l">
      <div className="sticky top-0 ">
        <HeaderCon />
      </div>
      <div className="flex space-x-4 px-3 py-4 ">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQGaqLKDl7ZJ5w/profile-displayphoto-shrink_800_800/0/1697842911973?e=2147483647&v=beta&t=m82ku9ftttxjk9DXpb54elyOLQdnm6qGdwQC0AQkj3Y"
          alt="Profil Resmi"
          className="w-11 h-11 rounded-full"
        />
          <TweetBox/>
      </div>
      <Divider/>
      <FeedList/> 
    </div>
  );
};

export default Content;
