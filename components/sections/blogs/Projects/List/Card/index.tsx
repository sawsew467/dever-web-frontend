import React from "react";
import Image, { StaticImageData } from "next/image";
import Category from "../../Category";
import { postPros } from "../../Slider";
import ViewMoreButton from "@/components/ViewMoreButton";
interface itemProps {
  category: postPros["category"];
  postTime: postPros["postTime"];
  tiltle: postPros["tiltle"];
  depcription: postPros["depcription"];
  pic : StaticImageData;
}

function Card({ category, postTime, tiltle, depcription, pic }: itemProps) {
  return (
    <div className="w-[31.5%] h-[570px] flex-col  ">
    <div className="w-[100%] h-[50%] border border-solid border-t-1 rounded-t-[6px]  border-b-0  ">
      <Image
        src={pic}
        className="w-[100%] h-[100%] rounded-t-[6px]  "
        alt="project image "
      ></Image>
    </div>
    <div className="w-[100%] h-[50%] px-[24px] py-[24px] border border-solid border-b-1 rounded-b-[6px]  flex flex-col justify-between ">
      <div className="space-y-[16px]">
        <div className="flex space-x-[16px] items-center">
          <Category category={category}></Category>
          <div className="text-black text-[14px]  ">{postTime}</div>
        </div>
        <div className="space-y-[8px] ">
          <div className="text-black text-[24px]">{tiltle}</div>
          <div className="text-black opacity-[60%] text-[16px]">
            {depcription}
          </div>
        </div>
      </div>
      <ViewMoreButton style={"border"} content={"View more"}/>
    </div>
  </div>
  );
}

export default Card;
