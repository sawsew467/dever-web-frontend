import React from "react";
import Image from "next/image";
import Aroww from "@images/pages/blogs/arrowRight.svg";
interface viewMorePros {
  content: string;
  size: "small" | "big";
}

function ViewMoreButton({ content, size }: viewMorePros) {
  return (
    <div
      className={`w-auto hidden md:flex rounded-[6px] items-center space-x-[4px] border border-1 border-solid border-primary text-primary justify-center
  ${size === "big" ? " md:text-[12px] lg:text-[16px] md:w-[98px] lg:w-[129px] xl:w-[166px] md:px-[8px] lg:px-[12px]  md:py-[8px] lg:py-[8px]" : ""}
  ${
    size === "small"
      ? "md:text-[10px] lg:text-[12px] xl:text-[16px] xl:w-[166px] xl:h-[40px] xl:px-[32px] xl:py-[8px] lg:w-[118px] lg:h-[30px] lg:px-[18px] lg:py-[6px] md:w-[87px] md:h-[24px] md:px-[6px] md:py-[4px]"
      : ""
  }
  `}
    >
      <div className="">{content}</div>
      <Image src={Aroww} alt="arrow icon" />
    </div>
  );
}

export default ViewMoreButton;
