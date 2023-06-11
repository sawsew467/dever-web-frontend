import React from "react";
import Image from "next/image";
import Background from "../../assets/images/pages/blogs/banner.png";
import Cricle from "../../assets/images/pages/blogs/cricle.svg";
import Human from "../../assets/images/pages/blogs/human.svg";
import Button from "@/components/Button";
const Blogs = () => {
  return (
    <div className="w-screen h-[2000px] relative">
      <Image
        src={Background}
        alt="background effect"
        className="absolute w-[100%] max-h-[720px]"
      ></Image>
      <div className="bg-[#F1F6FA] border-[2px] border border-solid border-gray-200 absolute w-screen h-[1000px] top-[431px] opacity-50 "></div>
      <div className="max-w-[1440px] mx-auto  flex-row justify-between items-center">
        <div className="relative">
            <div className=" bg-[#F7F9FB] absolute h-[720px] w-[13%] max-h-[720px]  opacity-50 right-[-14.8%] top-0"></div>
            <Image
                src={Cricle}
                alt="big cricle"
                className=" absolute w-[434px] h-[720px] opacity-50 right-[-3%] top-0 "
            ></Image>
          <div className="px-[80px]">
            <div className="relative w-full top-[164px]">
              <div className="absolute w-[351px] h-[230px]  space-y-[30px]">
                <div className="w-[100%] text-[40px] font-semibold leading-[48px] text-primary">
                  DEVER PROJECT BLOG
                </div>
                <div className="text-[24px] leading-[29px] font-normal text-gray-800 text-opacity-50">
                  WE WANT TO INSPIRE PEOPLE
                </div>
                <Button></Button>
              </div>

              <Image
                  src={Human}
                  alt="dever model"
                  className=" absolute right-0 w-[382px] h-[342px]"
                ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
