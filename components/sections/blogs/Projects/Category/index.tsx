import React from "react";
import Image from "next/image";
import { PostProps } from "../Slider";

interface catePros {
  category: PostProps["category"];
}

function Category({ category }: catePros) {
  return (
    <div className="flex gap-3">
      {category?.map((data, i) => (
        <div
          key={i}
          className="flex  justify-center items-center sm:text-[10px] lg:text-[14px] bg-primary text-white font-[400] sm:px-[4px] sm:py-[4px] md:px-[4px] md:py-[2px] lg:px-[8px] lg:py-[4px] w-fit h-fit "
        >
          {data}
        </div>
      ))}
    </div>
  );
}

export default Category;
