import React from "react";
import Image from "next/image";
import Aroww from "@images/pages/blogs/arrowRight.svg"
interface viewMorePros {
  content: string;
  style: "color" | "border";
}

function ViewMoreButton({ content, style }: viewMorePros) {
  return (
    <div
      className={`w-[166px]  h-[40px] px-[32px]  py-[8px] rounded-[6px] flex  items-center  space-x-[4px]
      ${style === "color" ? "bg-primary" : ""}
      ${style === "border" ? "border border-1 border-solid border-primary" : ""}
      ${style === "border" ? "text-primary" : "text-white"}
      `}
    >
        <div className="text-[16px]">{content}</div>
        <Image src={Aroww} alt="arrow icon"></Image>
    </div>
  );
}

export default ViewMoreButton;
