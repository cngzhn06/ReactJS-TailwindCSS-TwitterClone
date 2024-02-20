import React from "react";
import {
  EmojiIcon,
  GifIcon,
  ImageIcon,
  LocationIcon,
  PlanIcon,
  SurveyIcon,
} from "../../icon/Icon";

const TweetBox = () => {
  return (
    <div className="flex flex-col flex-1 mt-2   ">
      <textarea
        className="text-white w-full text-xl placeholder-gray-siu bg-custom-black outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's Happened"
      />
      <div className="flex items-center justify-between">
        <div className="flex -m-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <ImageIcon />
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <GifIcon />
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <SurveyIcon />
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <EmojiIcon />
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <PlanIcon />
            </div>
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer hover:bg-black">
            <div className="w-6 h-6 text-primary-dark">
              <LocationIcon />
            </div>
          </div>
        </div>
        <button className="bg-primary-dark text-white rounded-full px-4 py-2 font-medium">
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
