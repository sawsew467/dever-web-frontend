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
    <div className="max-w-[1440px] w-full  mx-auto md:px-[40px] xl:px-[80px] flex flex-col space-y-[36px] mt-[20px] mb-[80px] ">
      <Direction currenPage="for number name"></Direction>
      <div className="relative w-[1280px] h-[620px]">
        <Image
          src={projectImage}
          alt=""
          className=" absolute w-[100%] h-[100%] rounded-[6px] "
        />
        <div className="absolute w-[100%] h-[100%] bg-black opacity-25 rounded-[6px] "></div>
        <div className="absolute w-[100%] h-[100%] px-[40px] py-[40px] ">
          <div className="absolute">
            <div className="flex flex-row space-x-[10px]">
              <Category category="big"></Category>
              <Category category="big a"></Category>
              <Category category="big a b c"></Category>
            </div>
          </div>
          <div className="absolute bottom-[40px]">
            <div className="space-y-[16px]">
              <div className="text-white text-[48px] font-[400] tracking-[0.5px] uppercase w-[930px] ">
                CREATE WED APP REACT JS NO HARD NO CODE
              </div>
              <div className="space-y-[8px]">
                <div className="text-white text-[36px] font-[400] tracking-[-0.9px]  w-[930px] ">
                  Using chat gpt to generate blog web app
                </div>
                <div className="text-white text-[16px] font-[400] lowercase tracking-[0.32px] flex space-x-[10px] content-center ">
                  <div className="space-x-[4px] flex  content-center ">
                    <Image src={time} alt="time"></Image>
                    <div>2 minute ago</div>
                  </div>
                  <div className="w-[20px] h-[1px] bg-white my-[auto] "></div>
                  <div className="space-x-[4px] flex  content-center ">
                    <Image src={view} alt="time"></Image>
                    <div>20000 views</div>
                  </div>
                  <div className="w-[20px] h-[1px] bg-white my-[auto] "></div>
                  <div className="space-x-[4px] flex  content-center ">
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
