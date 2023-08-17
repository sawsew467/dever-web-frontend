import React from "react";
import Image from "next/image";
import projectImage from "@images/pages/activity/img.png";
import ViewMoreButton from "../../ViewMoreButton"
import Category from "../Category";
export interface postPros {
  category: string;
  postTime: string;
  tiltle: string;
  depcription: string;
  page: number;
}

function Slider({ category, postTime, tiltle, depcription, page }: postPros) {
  return (
    <div className="w-[100%] flex-col sm:space-y-[12px] lg:space-y-[20px] xl:space-y-[24px]   ">
      <div className="w-[100%] sm:h-[440px] md:h-[254px] lg:h-[355px] xl:h-[500px] flex sm:flex-col md:flex-row  border border-solid border-1 rounded-r-[6px] rounded-l-[6px]">
        <div
          className="w-[100%] md:w-[60%] sm:h-[59.66%] md:h-[100%] "
          style={{ boxSizing: "border-box" }}
        >
          <Image
            src={projectImage}
            className="w-[100%] h-[100%] rounded-l-[6px] "
            alt="project image "
          ></Image>
        </div>
        <div className="w-[100%] md:w-[40%] sm:h-[40.34%] md:h-[100%] sm:px-[20px] sm:py-[20px] md:px-[24px] md:py-[20px] lg:px-[44px] lg:py-[34px] xl:px-[56px] xl:py-[48px]  flex flex-col justify-between">
          <div className="sm:space-y-[16px] md:space-y-[20px] lg:space-y-[24px]">
            <div className="flex space-x-[16px] items-center">
              <Category category={category} />
              <div className="text-black sm:text-[12px] lg:text-[14px]">
                {postTime}
              </div>
            </div>
            <div className="sm:space-y-[12px] md:space-y-[16px] lg:space-y-[20px]">
              <div className="text-black sm:text-[24px] xl:text-[40px]">
                {tiltle}
              </div>
              <div className="text-black opacity-60 sm:text-[12px] lg:text-[16px]">
                {depcription}
              </div>
            </div>
          </div>
          <ViewMoreButton size="big" content={"View more"}/>
        </div>
      </div>
      <div className=" flex  w-[100%] justify-center items-center sm:space-x-[26px] lg:space-x-[30px] ">
        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]  rounded-[100%] ${
            page === 1 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>

        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]   rounded-[100%] ${
            page === 2 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>

        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]  rounded-[100%] ${
            page === 3 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
