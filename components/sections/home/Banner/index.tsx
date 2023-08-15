/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import Image from "next/image";

import image1 from "@pageImage/home/banner/Group1.png";
import image2 from "@pageImage/home/banner/Group2.png";
import image3 from "@pageImage/home/banner/Group3.png";
import image4 from "@pageImage/home/banner/Group4.png";
import retangle1 from "@pageImage/home/banner/svg/Rectangle 7.svg";
import retangle2 from "@pageImage/home/banner/svg/Rectangle 8.svg";
import retangle3 from "@pageImage/home/banner/svg/Rectangle 9.svg";
import retangle4 from "@pageImage/home/banner/svg/Rectangle 10.svg";
import retangle5 from "@pageImage/home/banner/svg/Rectangle 11.svg";
import retangle6 from "@pageImage/home/banner/svg/Rectangle 12.svg";
import retangle7 from "@pageImage/home/banner/svg/Rectangle 13.svg";

function Banner() {
  return (
    <>
      <section className=" h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] flex justify-center items-center ">
        <div className="max-w-[1440px] w-[100%] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] h-[100%] flex justify-center items-center">
          <div className="w-[310px] lg:w-[724px] xl:w-[724px] h-fit flex flex-col justify-center items-center xl:translate-y-[-40px] lg:translate-y-[-37px] md:translate-y-[32px] translate-y-[28px]">
            <h1
              className={`stroke-black relative text-[#0098FF] text-[32px] xl:text-[40px] flex justify-center items-center font-[700] after:content-[' '] after:w-[120px] after:h-[5px] after:bg-[red] after:absolute after:top-[50px] xl:after:top-[54px] xl:leading-[48px] leading-[40px]`}
            >
              FU-DEVER
            </h1>
            <h2
              className={`text-[#0098FF] text-[24px] xl:text-[32px] mt-[24px] font-[700] leading-[39px] `}
            >
              WORK HARD - PLAY HARD
            </h2>
            <p className="text-center text-[#22181C] font-[400] w-[310px] lg:w-[724px] xl:w-[724px] text-[16px] lg:text-[20px] xl:text-[20px] leading-[18px] lg:leading-[23px] xl:leading-[23px] mt-[12px]">
              Dive into the world of coding, problem-solving, and tech with like-minded peers. Whether you're a beginner or an experienced programmer. Join us and unlock the limitless potential of programming!
            </p>
            <button className="px-[24px] xl:px-[32px] py-[12px] xl:py-[16px] bg-[#0098FF] flex justify-center items-center mt-[20px]">
              <p className="font-[400] text-[12px] xl:text-[16px] text-white leading-[19px]">
                Send Your CV
              </p>
            </button>
          </div>
        </div>

        <div className="max-w-[1440px] w-[100%]  h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] hidden md:block lg:block xl:block absolute z-[-1]">
          <div className="w-[240px] h-[258px] lg:w-[285px] lg:h-[307px] xl:w-[303px] xl:h-[326px] absolute bottom-[40px]">
            <Image src={image1} alt="person" />
          </div>
          <div className="w-[200px] h-[190px] lg:w-[307px] lg:h-[310px] xl:w-[345px] xl:h-[330px] absolute right-[20px] md:right-[40px] lg:right-[40px] xl:right-[80px] bottom-[61px] lg:bottom-[44px] xl:bottom-[80px]">
            <Image src={image3} alt="person"/>
          </div>
          <div className="w-[100px] h-[134px] xl:w-[119px] xl:h-[172px] absolute right-[120px] lg:right-[180px] xl:right-[328px] top-[116px] lg:top-[147px] xl:top-[132px]">
            <Image src={image4} alt="person" />
          </div>
          <div className="w-[84px] h-[118px] xl:w-[115px] xl:h-[166px] absolute xl:left-[256px] top-[96px] lg:top-[142px] xl:top-[120px] lg:left-[180px] left-[120px]">
            <Image src={image2} alt="person" />
          </div>
        </div>

        <div className="max-w-[1440px] w-[100%] m-auto  h-[421px] md:h-[573px] lg:h-[708px] xl:h-[810px] absolute z-[-2] overflow-hidden">
          <div className="absolute lg:top-[204px] xl:top-[335px] lg:left-[-90px] xl:left-[-70px] xl:w-auto xl:h-auto lg:w-auto lg:h-auto md:w-[68px] md:h-[111px] md:top-[216px] md:left-[-40px] hidden md:block lg:block xl:block">
            <Image src={retangle1} alt="Picture of the author" />
          </div>
          <div className="absolute lg:top-[312px] xl:top-[373px] lg:left-[110px] xl:left-[250px] xl:w-auto xl:h-auto lg:w-[23px] lg:h-[21px] hidden md:hidden xl:block lg:block">
            <Image src={retangle2} alt="Picture of the author" />
          </div>
          <div className="absolute xl:top-[277px] xl:right-[160px] xl:w-auto xl:h-auto lg:w-[45px] lg:h-[45px] lg:top-[297px] lg:right-[80px]  hidden md:hidden xl:block lg:block">
            <Image src={retangle3} alt="Picture of the author" />
          </div>
          <div className="absolute xl:top-[179px] xl:right-[-30px] xl:w-auto xl:h-auto lg:w-[61px] lg:h-[73px] lg:right-[-40px] lg:top-[114px] md:w-[61px] md:h-[73px] md:top-[246px] right-[-40px] hidden md:block lg:block xl:block">
            <Image src={retangle4} alt="Picture of the author" />
          </div>
          <div className="absolute xl:bottom-[91px] xl:right-[427px] lg:right-[340px] lg:bottom-[137px] hidden md:hidden xl:block lg:block">
            <Image src={retangle5} alt="Picture of the author" />
          </div>
          <div className="absolute xl:bottom-[147px] xl:left-[553px] xl:w-auto xl:h-auto lg:w-[31px] lg:h-[30px] lg:bottom-[159px] lg:left-[356px] md:bottom-[30px] md:left-[264px] bottom-[63px] right-[46px]">
            <Image src={retangle6} alt="Picture of the author" />
          </div>
          <div className="absolute xl:top-[108px] xl:right-[571px] xl:w-auto xl:h-auto lg:w-[33px] lg:h-[33px] lg:top-[142px] lg:right-[311px] md:top-[108px] md:right-[240px] top-[96px] left-[40px]">
            <Image src={retangle7} alt="Picture of the author" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
