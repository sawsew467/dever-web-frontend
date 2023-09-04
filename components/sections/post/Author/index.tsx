import React from "react";
import Image from "next/image";
import avatar from "@images/pages/blogs/background.jpeg";
import lin from "@images/pages/blogs/linkedin 1.svg";
import insta from "@images/pages/blogs/instagram.svg";
import twi from "@images/pages/blogs/twitter 1.svg";
import rating from "@images/pages/blogs/rating.svg";
function Author() {
  return (
    <div>
      <div className="max-w-[1440px] w-full  sm:px-[20px] md:px-[40px] xl:px-[80px] flex justify-between mx-auto sm:mb-[20px] lg:mb-[40px] xl:mb-[80px]">
        <div className="space-y-[20px]">
          <div className="sm:px-[10px] lg:px-[20px] border-l-8 border-highlight sm:text-[28px] lg:text-[36px] font-[700] leading-[48px] ">
            Author
          </div>
          <div className="sm:w-[100%] lg:w-[718px] sm:space-x-[20px] md:space-x-[75px] flex content-center justify-center flex-row ">
            <Image
              src={avatar}
              alt=""
              className="w-[27.86%] rounded-[125px] my-auto sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] overflow-hidden "
            ></Image>
            <div className=" md:w-[61.7%] space-y-[8px] text-left ">
              <div>
                <div className=" font-[700] sm:text-[28px] md:text-[32px] lg:text-[42px] leading-[51px] ">
                  Vo Huy Hoang
                </div>
                <div className="font-[400] text-[16px] opacity-[50%] ">
                  @hoangvh238.dev
                </div>
              </div>
              <div className="font-[400] text-[16px] leading-[19px] sm:hidden md:block">
                Ipsum adipisicing culpa est nisi consequat ex amet magna culpa
                veniam tempor irure ea. Reprehenderit labore do tempor eiusmod
                in consectetur ex sunt id mollit commodo ipsum deserunt quis.
              </div>
              <div className=" justify-between sm:hidden md:flex">
                <div className="font-[400] text-[16px] ">K17DN</div>
                <div className="flex space-x-[15px]">
                  <Image src={lin} alt=""></Image>
                  <Image src={insta} alt=""></Image>
                  <Image src={twi} alt=""></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-col justify-between sm:hidden lg:flex">
          <div></div>
          <div className="flex lg:justify-end xl:justify-between">
          <Image src={rating} alt="" className=" lg:h-[32px] xl:h-[48px] lg:w-[70%] xl:w-[100%]"></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
