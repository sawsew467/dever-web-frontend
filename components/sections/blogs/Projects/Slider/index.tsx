import React from "react";
import Image from "next/image";
import projectImage from "@images/pages/activity/img.png";
import Category from "../Category";
import ViewMoreButton from "@/components/ViewMoreButton";
export interface postPros {
  category: string;
  postTime: string;
  tiltle: string;
  depcription: string;
  page: number;
}

function Slider({ category, postTime, tiltle, depcription, page }: postPros) {
  return (
    <div className="w-[100%] flex-col space-y-[24px]">
      <div className="w-[100%] h-[500px] flex  ">
        <div
          className="w-[60%] h-[100%] box-border border border-solid border-y-1 rounded-l-[6px]"
          style={{ boxSizing: "border-box" }}
        >
          <Image
            src={projectImage}
            className="w-[100%] h-[100%] rounded-l-[6px] "
            alt="project image "
          ></Image>
        </div>
        <div className="w-[40%] h-[100%] px-[56px] py-[48px] border border-solid border-1 rounded-r-[6px] flex flex-col justify-between">
          <div className="space-y-[24px]">
            <div className="flex space-x-[16px] items-center">
              <Category category={category} />
              <div className="text-black text-[14px]">{postTime}</div>
            </div>
            <div className="space-y-[16px]">
              <div className="text-black text-[40px]">{tiltle}</div>
              <div className="text-black opacity-60 text-[16px]">
                {depcription}
              </div>
            </div>
          </div>
          <ViewMoreButton style="border" content="View more" />
        </div>
      </div>
      <div className=" flex  w-[100%] justify-center items-center space-x-[30px] ">
        <div
          className={`w-[20px] h-[20px] rounded-[100%] ${
            page === 1 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>

        <div
          className={`w-[20px] h-[20px] rounded-[100%] ${
            page === 2 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>

        <div
          className={`w-[20px] h-[20px] rounded-[100%] ${
            page === 3 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
