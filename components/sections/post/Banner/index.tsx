import Image from "next/image";
import { itemProps } from "../../blogs/Projects/List/Card";
import projectImage from "@images/pages/activity/img.png";
import fb from "@images/pages/blogs/fb.svg";
import pin from "@images/pages/blogs/pinterest.svg";
import view from "@images/pages/blogs/view.svg";
import time from "@images/pages/blogs/time.svg";
import twi from "@images/pages/blogs/twi.svg";

import Category from "../../blogs/Projects/Category";
import Direction from "./Direction";

function Banner() {
  return (
    <div className="max-w-[1440px] w-full  mx-auto sm:px-[20px] md:px-[40px] xl:px-[80px] flex flex-col sm:space-y-[16px] lg:space-y-[36px] mt-[84px] sm:mb-[20px] lg:mb-[40px] xl:mb-[80px] ">
      <Direction currenPage="for number name"></Direction>
      <div className="relative w-[100%] sm:h-[360px] md:h-[600px] lg:h-[743px] ">
        <Image
          src={projectImage}
          alt=""
          className=" absolute w-[100%] h-[100%] rounded-[6px] "
        />
        <div className="absolute w-[100%] h-[100%] bg-black opacity-25 rounded-[6px] "></div>
        <div className="absolute w-[100%] h-[100%] sm:px-[20px] sm:py-[20px] lg:px-[40px] lg:py-[40px] ">
          <div className="absolute sm:w-[calc(100%-40px)] lg:w-[calc(100%-80px)]">
            <div className="flex gap-x-[20px] flex-wrap gap-y-[10px] ">
              <Category category="big"></Category>
              <Category category="big a"></Category>
              <Category category="big a b c"></Category>
              <Category category="big"></Category>
              <Category category="big a"></Category>
              <Category category="big a b c"></Category>
              <Category category="big"></Category>
            </div>
          </div>
          <div className="absolute sm:bottom-[20px] lg:bottom-[40px]">
            <div className="sm:space-y-[12px] lg:space-y-[16px]">
              <div className="text-white sm:text-[18px] md:text-[32px] lg:text-[38px] xl:text-[48px] font-[700] tracking-[0.5px] uppercase w-[80.25%] ">
                CREATE WED APP REACT JS NO HARD NO CODE
              </div>
              <div className="space-y-[8px]">
              <div className="text-white sm:text-[12px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-[400] tracking-[-0.9px]  w-[80.25%] ">
                  Using chat gpt to generate blog web app
                </div>
                <div className="text-white text-[16px] font-[400] lowercase tracking-[0.32px]  space-x-[10px] content-center flex ">
                  <div className="space-x-[4px] flex  content-center ">
                    <Image className="sm:hidden md:flex" src={time} alt="time"></Image>
                    <div className="sm:text-[8px] md:text-[16px]">2 minute ago</div>
                  </div>
                  <div className="w-[20px] h-[1px] bg-white my-[auto]  sm:hidden md:flex"></div>
                  <div className="space-x-[4px] flex  content-center sm:hidden md:flex">
                    <Image src={view} alt="time"></Image>
                    <div>20000 views</div>
                  </div>
                  <div className="w-[20px] h-[1px] bg-white my-[auto] sm:hidden md:flex"></div>
                  <div className="space-x-[4px] flex  content-center sm:hidden md:flex">
                    <div className="flex space-x-[10px] ">
                    <Image src={fb} alt="time"></Image>
                    <Image src={twi} alt="time"></Image>
                    <Image src={pin} alt="time"></Image>
                    </div>
                    <div>528 shares</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
