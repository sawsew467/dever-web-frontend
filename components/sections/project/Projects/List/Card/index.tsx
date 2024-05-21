import React from "react";
import Image, { StaticImageData } from "next/image";
import ViewMoreButton from "../../../ViewMoreButton";
import Link from "next/link";
import moment from "moment";

function Card({
  _id,
  category,
  postTime,
  tiltle,
  depcription,
  image,
  slug,
  time,
}: any) {
  return (
    <div className="relative md:w-[32.17%] lg:w-[31.92%] xl:w-[31.65%] sm:h-[450px] md:h-[310px] lg:h-[405.30px] xl:h-[570px] flex-col   border border-solid  rounded-t-[6px]  rounded-b-[6px] ">
      <Link className="" href="/posts/[slug]" as={`project/${slug}`}>
        <div className="w-[100%] sm:h-[66.66%] md:h-[50%] xl:h-[52.8%] ">
          <Image
            loading="lazy"
            src={image}
            width={500}
            height={500}
            className="w-[100%] h-[100%] rounded-t-[6px] object-cover"
            alt="project image "
          ></Image>
        </div>
        <div className="w-[100%] sm:h-[33.34%] md:h-[50%] xl:h-[47.5%] sm:px-[20px] md:px-[8px] lg:px-[12px] xl:px-[24px] sm:py-[20px] md:py-[8px] lg:py-[12px] xl:py-[24px]  flex flex-col justify-between ">
          <div className="space-y-[8px]">
            <div className="flex space-x-[8px] items-center justify-between ">
              <div className="text-black sm:text-[7px] lg:text-[10px]  ">
                {moment(new Date(postTime), "YYYYMMDD").fromNow()}
              </div>
            </div>
            <div className="space-y-[8px] sm:text-[12px] md:text-[8px] lg:text-[12px]">
              <div className="text-black sm:text-[16px] md:text-[12px] lg:text-[16px] xl:text-[24px] xl:leading-[29px] ">
                {tiltle}
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: depcription }}
                className="truncate whitespace-pre-line max-h-[40px] text-black opacity-[60%] sm:text-[12px] md:text-[8px] lg:text-[12px] xl:text-[16px] sm:leading-[15px] md:leading-[20px] "
              ></div>
              <div className="text-black opacity-[60%] sm:text-[12px] md:text-[8px] lg:text-[12px] xl:text-[16px] sm:leading-[15px] md:leading-[20px]">
                ...
              </div>
            </div>
          </div>

          {/* <Link href="/posts/[id]" as={`blogs/${_id}`}> */}
          {/* <Link href={`blogs/${_id}`}> */}
          <ViewMoreButton size="small" content={"View more"} />
          {/* </Link> */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
