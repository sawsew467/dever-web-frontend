import React from "react";
import Image, { StaticImageData } from "next/image";
import Category from "../../Category";
import { PostProps } from "../../Slider";
import ViewMoreButton from "../../../ViewMoreButton";
import Link from "next/link";

export interface itemProps {
  _id: PostProps["_id"];
  category: PostProps["category"];
  postTime: PostProps["postTime"];
  tiltle: PostProps["title"];
  depcription: PostProps["desc"];
  pic: StaticImageData;
}

function Card({
  _id,
  category,
  postTime,
  tiltle,
  depcription,
  pic,
}: itemProps) {
  return (
    <div className=" md:w-[32.17%] lg:w-[31.92%] xl:w-[31.65%] sm:h-[450px] md:h-[310px] lg:h-[405.30px] xl:h-[570px] flex-col   border border-solid  rounded-t-[6px]  rounded-b-[6px] ">
      {/* <div className="sm:contents md:hidden relative w-[100%] h-[100%] ">
      <Link className="absolute w-[92%] h-[63%] " href="/posts/[id]" as={`blogs/${_id}`}>
        </Link>
      </div> */}
      <div className="w-[100%] sm:h-[66.66%] md:h-[50%] xl:h-[52.8%] ">
        <Image
          loading="lazy"
          src={pic}
          className="w-[100%] h-[100%] rounded-t-[6px] object-cover"
          alt="project image "
        ></Image>
      </div>
      <div className="w-[100%] sm:h-[33.34%] md:h-[50%] xl:h-[47.5%] sm:px-[20px] md:px-[8px] lg:px-[12px] xl:px-[24px] sm:py-[20px] md:py-[8px] lg:py-[12px] xl:py-[24px]  flex flex-col justify-between ">
        <div className="space-y-[16px]">
          <div className="flex space-x-[16px] items-center justify-between ">
            <Category category={category}></Category>
            <div className="text-black sm:text-[8px] lg:text-[14px]  ">
              {postTime}
            </div>
          </div>
          <div className="space-y-[8px] sm:text-[12px] md:text-[8px] lg:text-[12px]">
            <div className="text-black sm:text-[16px] md:text-[12px] lg:text-[16px] xl:text-[24px] xl:leading-[29px] ">
              {tiltle}
            </div>
            <div className="text-black opacity-[60%] sm:text-[12px] md:text-[8px] lg:text-[12px] xl:text-[16px] sm:leading-[15px] md:leading-[20px] ">
              {depcription}
            </div>
          </div>
        </div>

        {/* <Link href="/posts/[id]" as={`blogs/${_id}`}> */}
        {/* <Link href={`blogs/${_id}`}> */}
        <ViewMoreButton size="small" content={"View more"} />
        {/* </Link> */}
      </div>
    </div>
  );
}

export default Card;
