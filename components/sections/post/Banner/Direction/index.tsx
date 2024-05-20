import React from "react";
import Link from "next/link";
import arrowRight from "@images/pages/blogs/arrowRightNonColor.svg";
import Image from "next/image";
interface DirectPros {
  currenPage: string;
}

function Direction({ currenPage }: DirectPros) {
  return (
    <>
      <div className="text-[14px] font-[400] leading-normal flex flex-row  align-center opacity-70 ">
        <Link href={`/`}>
          <div>Home</div>
        </Link>
        <Image
          loading="lazy"
          className=""
          src={arrowRight}
          alt="right arrow"
        ></Image>
        <Link href={`/blogs`}>
          <div>Blogs</div>
        </Link>
        <Image
          loading="lazy"
          className=""
          src={arrowRight}
          alt="right arrow"
        ></Image>
        <div className="font-[700]">{currenPage}</div>
      </div>
    </>
  );
}

export default Direction;
