import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Widget from "./Widget";

const Container = () => {
  return (
    <div className="flex min-h-screen mx-auto w-1265">
      <Sidebar />
      <Content />
      <Widget />
    </div>
  );
};

export default Container;
