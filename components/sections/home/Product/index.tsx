"use client"

import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import ProductsOne from "@pageImage/home/product/image1.png";
import ProductsTwo from "@pageImage/home/product/image2.png";
import ProductsThree from "@pageImage/home/product/image3.png";
import ProductsFour from "@pageImage/home/product/image4.png";
import Vector from "@pageImage/home/product/longWave.svg";
import Facebook from "@pageImage/home/icon/Facebook.svg";
import Github from "@pageImage/home/icon/Github.svg";
import Tiktok from "@pageImage/home/icon/Tiktok.svg";

function Product() {
  return (
    <section className=" h-fit flex justify-center items-center relative overflow-hidden">
      <div className="max-w-[1440px] w-[100%] h-fit py-[40px] md:py-[60px] lg:py-[60px] xl:py-[60px] flex flex-col-reverse md:flex-row lg:flex-row xl:flex-row justify-between relative px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]">
        <div className="max-w-[100%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] w-[100%] h-[320px] md:h-[320px] lg:h-[480px] xl:h-[610px] grid grid-cols-2 grid-rows-2 gap-[20px] md:gap-[20px] lg:gap-[40px] xl:gap-[50px] mt-[20px] md:mt-[0px] lg:mt-[0px] xl:mt-[0px]">
          
          <div className=" bg-[#FFFFFF] pt-[12px] md:pt-[12px] lg:pt-[20px] xl:pt-[20px] px-[30px md:px-[30px] lg:px-[40px] xl:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsOne}
              className="w-[90px] md:w-[90px] lg:w-[140px] xl:w-[200px]"
              alt="Product Image"
            />
            <h3 className=" mt-[8px] md:mt-[8px] lg:mt-[18px] xl:mt-[8px] font-[400] text-[12px] md:text-[12px] lg:text-[18px] xl:text-[20px] leading-[28px]">
              2D Game
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#ffffff] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] md:pt-[12px] lg:pt-[20px] xl:pt-[20px] px-[30px md:px-[30px] lg:px-[40px] xl:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsTwo}
              className="w-[90px] md:w-[90px] lg:w-[140px] xl:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] md:mt-[8px] lg:mt-[18px] xl:mt-[8px] font-[400] text-[12px] md:text-[12px] lg:text-[18px] xl:text-[20px] leading-[28px]">
              Web App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] md:pt-[12px] lg:pt-[20px] xl:pt-[20px] px-[30px md:px-[30px] lg:px-[40px] xl:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsThree}
              className="w-[90px] md:w-[90px] lg:w-[140px] xl:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] md:mt-[8px] lg:mt-[18px] xl:mt-[8px] font-[400] text-[12px] md:text-[12px] lg:text-[18px] xl:text-[20px] leading-[28px]">
              Mobile App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] md:pt-[12px] lg:pt-[20px] xl:pt-[20px] px-[30px md:px-[30px] lg:px-[40px] xl:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsFour}
              className="w-[90px] md:w-[90px] lg:w-[140px] xl:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] md:mt-[8px] lg:mt-[18px] xl:mt-[8px] font-[400] text-[12px] md:text-[12px] lg:text-[18px] xl:text-[20px] leading-[28px]">
              Model AI
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

        </div>

        <div className="max-w-[100%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] h-fit flex flex-col items-end text-[16px] font-[400] ">
          <SectionTitle
            title="products we develop"
            subtitle="Appliction and services"
            textPosition="right"
          ></SectionTitle>
          <div className="w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] mt-[28px]">
            <p className="text-right leading-[normal] md:leading-[normal] lg:leading-[normal] xl:leading-[19px] text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] pl-[0] md:pl-[20px] lg:pl-[20px] xl:pl-[20px]">
              Our products are game-changers, revolutionizing industries and
              enhancing user experiences. With cutting-edge technology and
              user-centric design, we deliver innovative solutions that surpass
              expectations and drive positive change. 
              <br />
              <br />
              With a team of passionate programmers, developers, and designers,
              we collaborate to bring innovative solutions to life. Our products
              range from web and mobile applications to software tools and
              utilities that streamline processes and enhance productivity.
            </p>
          
          </div>

          <div className="mt-[20px] md:mt-[20px] lg:mt-[40px] xl:mt-[40px] relative">
            <button className="px-[24px] md:px-[24px] lg:px-[26px] xl:px-[32px] py-[12px] xl:py-[16px] bg-primary text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] text-white absolute 
            top-[-4px] md:top-[-4px] lg:top-[-8px] xl:top-[-10px] right-[-4px] md:right-[-4px] lg:right-[-8px] xl:right-[-10px] 
            hover:top-[-6px] hover:right-[-6px] active:top-[3px] active:right-[3px] 
            "
            style={{
              transitionDuration: "0.1s"
            }}>
              <p>Explore Projects</p>
            </button>
            <button className="px-[24px] md:px-[24px] lg:px-[26px] xl:px-[32px] py-[12px] xl:py-[16px] bg-white border-[3px] border-black text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]text-white"
            style={{
              transitionDuration: "0.1s"
            }}>
              <p>Explore Projects</p>
            </button>
          </div>
          
          <div className="mt-[171px] absolute bottom-[60px] hidden xl:block">
            <div className="font-[400] text-16px leading-[19px] text-[#FFFFFF]">
              <p>Follow FU-DEVER</p>
            </div>
            <div className="mt-[12px] w-[136px] flex flex-row justify-between">
              <a href="https://www.facebook.com/FPTUDever">
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a href="https://github.com/sawsew467">
                <Image src={Github} alt="Github" />
              </a>
              <a href="https://www.tiktok.com/@daihocfptdanang">
                <Image src={Tiktok} alt="Tiktok" />
              </a>
            </div>
          </div>

        </div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[348px] left-[360px] blur-[24px] z-[-1] hidden md:hidden lg:hidden xl:block"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[385px] right-[540px] blur-[24px] z-[-1] hidden md:hidden lg:hidden xl:block"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[260px] right-[420px] blur-[24px] z-[-1] hidden md:hidden lg:hidden xl:block"></div>
      </div>
      <Image
        src={Vector}
        className="absolute bottom-[-100px] md:bottom-[-140px] lg:bottom-[-120px] xl:bottom-0 right-[-580px] md:right-[-500px] lg:right-[-300px] xl:right-0 z-[-1] max-w-fit "
        alt="Vector"
      />
    </section>
  );
}

export default Product;
