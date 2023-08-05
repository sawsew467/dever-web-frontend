import React from "react";
import arrowLeft from "@images/pages/blogs/arrowLeft.svg";
import arrowRight from "@images/pages/blogs/arrowRightNonColor.svg";
import Image from "next/image";
export interface pageProps {
  page: number;
}

function ChangePage({ page }: pageProps) {
  return (
    <div className="w-[376px] h-[40px] flex gap-[16px] justify-center items-center text-[16px] ">
      <div className="w-[40px] h-[40px] flex justify-center border border-solid border-1 rounded-[2px] ">
         <Image src={arrowLeft} alt="arrow"></Image>
      </div>
      <div className="w-[40px] h-[40px] px-[16px] py-[8px]  border border-solid border-1 rounded-[2px] ">
        1
      </div>
      <div className="w-[40px] h-[40px] px-[16px] py-[8px]  border border-solid border-1 rounded-[2px] ">
        2
      </div>
      <div className="w-[40px] h-[40px] px-[16px] py-[8px]  border border-solid border-1 rounded-[2px] ">
        3
      </div>
      <div className="w-[40px] h-[40px] px-[16px] py-[8px]  border border-solid border-1 rounded-[2px] ">
        4
      </div>
      <div className="w-[40px] h-[40px] px-[16px] py-[8px]  border border-solid border-1 rounded-[2px] ">
        5
      </div>
      <div className="w-[40px] h-[40px] flex justify-center border border-solid border-1 rounded-[2px] ">
         <Image src={arrowRight} alt="arrow"></Image>
      </div>
    </div>
  );
}

export default ChangePage;
