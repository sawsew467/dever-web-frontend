import React from "react";
import Content from "./Content";
import Function from "./Function";

function Body() {
  return (
    <div className="max-w-[1440px] w-full  mx-auto md:px-[40px] xl:px-[80px] flex justify-between  mb-[80px]">
      <div className="w-[1024px] h-[2715px] ">
        <Content></Content>
      </div>

      <div className="w-[126px] h-[1330px]">
        <Function></Function>
      </div>
    </div>
  );
}

export default Body;
