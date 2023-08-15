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
      <section className=" h-[421px] sm:h-[573px] md:h-[708px] lg:h-[810px] flex justify-center items-center ">
        <div className="max-w-[1440px] w-[100%] px-[20px] sm:px-[40px] md:px-[40px] lg:px-[80px] h-[100%] flex justify-center items-center">
          <div className="w-[310px] md:w-[724px] lg:w-[724px] h-fit flex flex-col justify-center items-center lg:translate-y-[-40px] md:translate-y-[-37px] sm:translate-y-[32px] translate-y-[28px]">
            <h1
              className={`stroke-black relative text-[#0098FF] text-[32px] lg:text-[40px] flex justify-center items-center font-[700] after:content-[' '] after:w-[120px] after:h-[5px] after:bg-[red] after:absolute after:top-[50px] lg:after:top-[54px] lg:leading-[48px] leading-[40px]`}
            >
              FU-DEVER
            </h1>
            <h2
              className={`text-[#0098FF] text-[24px] lg:text-[32px] mt-[24px] font-[700] leading-[39px] `}
            >
              WORK HARD - PLAY HARD
            </h2>
            <p className="text-center text-[#22181C] font-[400] w-[310px] md:w-[724px] lg:w-[724px] text-[16px] md:text-[20px] lg:text-[20px] leading-[18px] md:leading-[23px] lg:leading-[23px] mt-[12px]">
              Dive into the world of coding, problem-solving, and tech with like-minded peers. Whether you're a beginner or an experienced programmer. Join us and unlock the limitless potential of programming!
            </p>
            <button className="px-[24px] lg:px-[32px] py-[12px] lg:py-[16px] bg-[#0098FF] flex justify-center items-center mt-[20px]">
              <p className="font-[400] text-[12px] lg:text-[16px] text-white leading-[19px]">
                Send Your CV
              </p>
            </button>
          </div>
        </div>

        <div className="max-w-[1440px] w-[100%]  h-[421px] sm:h-[573px] md:h-[708px] lg:h-[810px] px-[20px] sm:px-[40px] md:px-[40px] lg:px-[80px] hidden sm:block md:block lg:block absolute z-[-1]">
          <div className="w-[240px] h-[258px] md:w-[285px] md:h-[307px] lg:w-[303px] lg:h-[326px] absolute bottom-[40px]">
            <Image src={image1} alt="person" />
          </div>
          <div className="w-[200px] h-[190px] md:w-[307px] md:h-[310px] lg:w-[345px] lg:h-[330px] absolute right-[20px] sm:right-[40px] md:right-[40px] lg:right-[80px] bottom-[61px] md:bottom-[44px] lg:bottom-[80px]">
            <Image src={image3} alt="person"/>
          </div>
          <div className="w-[100px] h-[134px] lg:w-[119px] lg:h-[172px] absolute right-[120px] md:right-[180px] lg:right-[328px] top-[116px] md:top-[147px] lg:top-[132px]">
            <Image src={image4} alt="person" />
          </div>
          <div className="w-[84px] h-[118px] lg:w-[115px] lg:h-[166px] absolute lg:left-[256px] top-[96px] md:top-[142px] lg:top-[120px] md:left-[180px] left-[120px]">
            <Image src={image2} alt="person" />
          </div>
        </div>

        <div className="max-w-[1440px] w-[100%] m-auto  h-[421px] sm:h-[573px] md:h-[708px] lg:h-[810px] absolute z-[-2] overflow-hidden">
          <div className="absolute md:top-[204px] lg:top-[335px] md:left-[-90px] lg:left-[-70px] lg:w-auto lg:h-auto md:w-auto md:h-auto sm:w-[68px] sm:h-[111px] sm:top-[216px] sm:left-[-40px] hidden sm:block md:block lg:block">
            <Image src={retangle1} alt="Picture of the author" />
          </div>
          <div className="absolute md:top-[312px] lg:top-[373px] md:left-[110px] lg:left-[250px] lg:w-auto lg:h-auto md:w-[23px] md:h-[21px] hidden sm:hidden lg:block md:block">
            <Image src={retangle2} alt="Picture of the author" />
          </div>
          <div className="absolute lg:top-[277px] lg:right-[160px] lg:w-auto lg:h-auto md:w-[45px] md:h-[45px] md:top-[297px] md:right-[80px]  hidden sm:hidden lg:block md:block">
            <Image src={retangle3} alt="Picture of the author" />
          </div>
          <div className="absolute lg:top-[179px] lg:right-[-30px] lg:w-auto lg:h-auto md:w-[61px] md:h-[73px] md:right-[-40px] md:top-[114px] sm:w-[61px] sm:h-[73px] sm:top-[246px] right-[-40px] hidden sm:block md:block lg:block">
            <Image src={retangle4} alt="Picture of the author" />
          </div>
          <div className="absolute lg:bottom-[91px] lg:right-[427px] md:right-[340px] md:bottom-[137px] hidden sm:hidden lg:block md:block">
            <Image src={retangle5} alt="Picture of the author" />
          </div>
          <div className="absolute lg:bottom-[147px] lg:left-[553px] lg:w-auto lg:h-auto md:w-[31px] md:h-[30px] md:bottom-[159px] md:left-[356px] sm:bottom-[30px] sm:left-[264px] bottom-[63px] right-[46px]">
            <Image src={retangle6} alt="Picture of the author" />
          </div>
          <div className="absolute lg:top-[108px] lg:right-[571px] lg:w-auto lg:h-auto md:w-[33px] md:h-[33px] md:top-[142px] md:right-[311px] sm:top-[108px] sm:right-[240px] top-[96px] left-[40px]">
            <Image src={retangle7} alt="Picture of the author" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
