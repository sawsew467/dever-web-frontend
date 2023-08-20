import React, { useEffect, useState } from "react";
import Image from "next/image";
import projectImage from "@images/pages/activity/img.png";
import ViewMoreButton from "../../../ViewMoreButton";
import Category from "../../Category";
import { PostProps } from "..";

function SliderItem({
  category,
  postTime,
  title,
  description,
  currPage,
  handlePageChange,
}: PostProps) {
  const [descriptionLimit, setDescriptionLimit] = useState(80);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDescriptionLimit(130);
      } else if (window.innerWidth < 1024) {
        setDescriptionLimit(126);
      } else if (window.innerWidth < 1440) {
        setDescriptionLimit(150);
      } else {
        setDescriptionLimit(230);
      }
    };

    
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const truncatedDescription =
    description.length > descriptionLimit
      ? description.slice(0, descriptionLimit - 3) + "..."
      : description;

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchEndX - touchStartX;

    if (distance > 50) {
      handlePageChange(Math.max(currPage - 1, 1));
    } else if (distance < -50) {
      handlePageChange(Math.min(currPage + 1, 3));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currPage < 3) {
        handlePageChange(currPage + 1);
      } else {
        handlePageChange(1);
      }
    }, 5000); // change everry 5s 

    return () => clearInterval(interval);
  }, [currPage, handlePageChange]);

  return (
    <div
      className="w-[100%] flex-col sm:space-y-[12px] lg:space-y-[20px] xl:space-y-[24px]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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
              <div className="text-black sm:leading-[29px] xl:leading-[48px] sm:text-[24px] xl:text-[40px]">
                {title}
              </div>
              <div className=" text-black sm:leading-[15px] lg:leading-[24px] xl:leading-[30px] opacity-60 sm:text-[12px] lg:text-[16px] xl:text-[20px] ">
                {truncatedDescription}
              </div>
            </div>
          </div>
          <ViewMoreButton size="big" content={"View more"} />
        </div>
      </div>
      <div className=" flex  w-[100%] justify-center items-center sm:space-x-[26px] lg:space-x-[30px] ">
        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]  rounded-[100%] ${
            currPage === 1 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
          onClick={() => handlePageChange(1)}
        ></div>

        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]   rounded-[100%] ${
            currPage === 2 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
          onClick={() => handlePageChange(2)}
        ></div>

        <div
          className={`sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px]  rounded-[100%] ${
            currPage === 3 ? "bg-primary" : "bg-[#D9D9D9]"
          }`}
          onClick={() => handlePageChange(3)}
        ></div>
      </div>
    </div>
  );
}

export default SliderItem;
