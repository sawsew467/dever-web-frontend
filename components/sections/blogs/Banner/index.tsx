import React from "react";
import Image from "next/image";
import Background from "@pageImage/blogs/banner.png";
import Model from "@pageImage/blogs/model.png";
import "../../../../app/globals.css";

const Blogs = () => {
  return (
    <div className="w-screen h-screen relative">
      <Image
        src={Background}
        alt="background effect"
        className="absolute w-[100%] h-[100%] max-h-[588px]"
      ></Image>
      <div className="max-w-[1440px] w-[100%] mx-auto flex-row justify-between items-center px-[80px]">
        <div className="relative">
          <div className="absolute space-y-[20px] top-[209px] left-0  ">
            <div className="space-y-[12px]">
              <div className=" text-[32px] leading-[39px] text-black stroke-text font-black ">
                EXPLORE ABOUT
              </div>
              <div className="w-[100%] text-[40px] font-black leading-[48px] text-primary">
                DEVER PROJECT BLOG
              </div>
            </div>
            <div className="w-[548px] h-[96px] text-[20px] text-black leading-[24px] font-normal">
              Dive into the world of coding, problem-solving, and tech with
              like-minded peers. Whether you&apos;re a beginner or an
              experienced programmer. Join us and unlock the limitless potential
              of programming!
            </div>

            <div className="absolute top-[219px] ">
              <div className="absolute bg-white top-[16px] w-[167px] h-[51px] border-solid border-[3px] border-black "></div>
              <div className="absolute left-[-16px] text-white bg-primary w-[167px] h-[51px] py-[16px] px-[32px] flex items-center justify-center  ">
                View projects
              </div>
            </div>
          </div>
          <Image
            src={Model}
            alt="model dever blogs"
            className="absolute top-[120px] right-0 max-w-[50%] "
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
