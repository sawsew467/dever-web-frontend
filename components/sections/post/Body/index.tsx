import React from "react";
import Content from "./Content";
import Function from "./Function";

function Body() {
  return (
    <div className="max-w-[1440px] w-full  mx-auto sm:px-[20px] md:px-[40px] xl:px-[80px] flex justify-between sm:flex-col-reverse lg:flex-row mb-[80px]">
      <div className="sm:w-[100%] lg:w-[80%] xl:w-[75.3%] h-[2715px] ">
        <Content></Content>
      </div>

      <div className="lg:w-[8%] xl:w-[12.9%]">
        <Function></Function>
      </div>
    </div>
  );
}

export default Body;
