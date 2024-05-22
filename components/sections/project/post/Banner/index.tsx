import Image from "next/image";
import time from "@images/pages/blogs/time.svg";
import Direction from "./Direction";
import moment from "moment";

function Banner({ _id, image, tiltle, slug, postTime }: any) {
  return (
    <div className="max-w-[1440px] w-full  mx-auto sm:px-[20px] md:px-[40px] xl:px-[80px] flex flex-col sm:space-y-[16px] lg:space-y-[36px] mt-[84px] sm:mb-[20px] lg:mb-[40px] xl:mb-[80px] ">
      <Direction currenPage={slug} />
      <div className="relative w-[100%] sm:h-[360px] md:h-[600px] lg:h-[743px] ">
        <Image
          loading="lazy"
          src={image}
          alt=""
          width={900}
          height={900}
          className="absolute w-[100%] h-[100%] rounded-[6px] object-cover"
        />
        <div className="absolute w-[100%] h-[100%] bg-black opacity-25 rounded-[6px] "></div>
        <div className="absolute w-[100%] h-[100%] sm:px-[20px] sm:py-[20px] lg:px-[40px] lg:py-[40px] ">
          <div className="absolute sm:w-[calc(100%-40px)] lg:w-[calc(100%-80px)]"></div>
          <div className="absolute sm:bottom-[20px] lg:bottom-[40px]">
            <div className="sm:space-y-[12px] lg:space-y-[16px]">
              <div className="text-white sm:text-[18px] md:text-[32px] lg:text-[38px] xl:text-[48px] font-[700] tracking-[0.5px] uppercase w-[80.25%] ">
                {tiltle}
              </div>
              <div className="space-y-[8px]">
                <div className="text-white text-[16px] font-[400] lowercase tracking-[0.32px]  space-x-[10px] content-center flex ">
                  <div className="space-x-[4px] flex  content-center ">
                    <Image
                      loading="lazy"
                      className="sm:hidden md:flex"
                      src={time}
                      alt="time"
                    ></Image>
                    <div className="sm:text-[8px] md:text-[16px]">
                      {moment(postTime, "YYYYMMDD").fromNow()}
                    </div>
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
