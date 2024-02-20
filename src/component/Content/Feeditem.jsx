import React from "react";
import { BookmarsIcon, CommunitiesIcon, LikeIcon, QuatationIcon, ReplyIcon, ShareIcon, ViewIcon } from "../../icon/Icon";

const Feeditem = () => {
  const contentData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/2a73ba41332353.57a1ce913ff49.jpg",
      username: "johndoe123",
      timestamp: "36s",
      content: {
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: "https://i.pinimg.com/236x/44/d1/dc/44d1dc00900f377a3be594e03381d773.jpg",
      },
    },
    {
      id: 2,
      name: "Alice Smith",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/799ee441332353.57a1ce913f973.jpg",
      username: "alicesmith456",
      timestamp: "21m",
      content: {
        article:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "image2.jpg",
      },
    },
    {
      id: 3,
      name: "Bob Johnson",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/937b3c41332353.57a1ce913f308.jpg",
      username: "bobjohnson789",
      timestamp: "42m",
      content: {
        article:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        img: "image3.jpg",
      },
    },
    {
      id: 4,
      name: "Eva Brown",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg",
      username: "evabrown101",
      timestamp: "4h",
      content: {
        article:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        img: "https://preview.redd.it/pgu1ea7h0nh91.jpg?width=640&crop=smart&auto=webp&s=d9d67b52cc80817d833db00f061e9dbb31996ea5",
      },
    },
    {
      id: 5,
      name: "Charlie Wilson",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/993a9141332353.57a1ce913ee47.jpg",
      username: "charliewilson202",
      timestamp: "9h",
      content: {
        article:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: "image5.jpg",
      },
    },
  ];

  return (
    <div>
      {contentData.map((item) => (
        <article
          key={item.id}
          className="flex space-x-3 border-b border-gray-dark px-4 py-3 cursor-pointer"
        >
          <img src={item.image} alt="" className="w-11 h-11 rounded-full" />
          <div className="flex-1">
            <div className="flex items-center text-sm">
              <h4 className="font-bold">{item.name}</h4>
              <span className="text-gray-siu">{item.username}</span>
              <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
              <span className="text-gray-siu">{item.timestamp}</span>
            </div>
            <p className="mt-2 text-gray-100 text-sm">{item.content.article}</p>
            {item.content.img && (
              <img
                src={item.content.img}
                alt=""
                className="my-2 rounded-xl max-h-96"
              />
            )}
            <div className="flex justify-between">
              <ul className="flex space-x-20">
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <ReplyIcon />
                    </div>
                  </div>
                  <span className=" group-hover:text-primary-dark">7</span>
                </li>
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <QuatationIcon />
                    </div>
                  </div>
                  <span className=" group-hover:text-primary-dark">7</span>
                </li>
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <LikeIcon />
                    </div>
                  </div>
                  <span className=" group-hover:text-primary-dark">7</span>
                </li>
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <ViewIcon />
                    </div>
                  </div>
                  <span className=" group-hover:text-primary-dark">7</span>
                </li>
              </ul>
              <ul className="flex">
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <CommunitiesIcon />
                    </div>
                  </div>
                </li>
                <li className="flex items-center space-x-0 text-gray-siu group">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full text-sm group-hover:text-primary-dark">
                    <div className="w-5 h-5">
                      <ShareIcon />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Feeditem;
