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
      <div className="max-w-[1440px] w-[100%] h-fit py-[40px] sm:py-[60px] md:py-[60px] lg:py-[60px] flex flex-col-reverse sm:flex-row md:flex-row lg:flex-row justify-between relative px-[20px] sm:px-[40px] md:px-[40px] lg:px-[80px]">
        <div className="max-w-[100%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%] w-[100%] h-[320px] sm:h-[320px] md:h-[480px] lg:h-[610px] grid grid-cols-2 grid-rows-2 gap-[20px] sm:gap-[20px] md:gap-[40px] lg:gap-[50px] mt-[20px] sm:mt-[0px] md:mt-[0px] lg:mt-[0px]">
          
          <div className=" bg-[#FFFFFF] pt-[12px] sm:pt-[12px] md:pt-[20px] lg:pt-[20px] px-[30px sm:px-[30px] md:px-[40px] lg:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsOne}
              className="w-[90px] sm:w-[90px] md:w-[140px] lg:w-[200px]"
              alt="Product Image"
            />
            <h3 className=" mt-[8px] sm:mt-[8px] md:mt-[18px] lg:mt-[8px] font-[400] text-[12px] sm:text-[12px] md:text-[18px] lg:text-[20px] leading-[28px]">
              2D Game
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#ffffff] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] sm:pt-[12px] md:pt-[20px] lg:pt-[20px] px-[30px sm:px-[30px] md:px-[40px] lg:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsTwo}
              className="w-[90px] sm:w-[90px] md:w-[140px] lg:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] sm:mt-[8px] md:mt-[18px] lg:mt-[8px] font-[400] text-[12px] sm:text-[12px] md:text-[18px] lg:text-[20px] leading-[28px]">
              Web App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] sm:pt-[12px] md:pt-[20px] lg:pt-[20px] px-[30px sm:px-[30px] md:px-[40px] lg:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsThree}
              className="w-[90px] sm:w-[90px] md:w-[140px] lg:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] sm:mt-[8px] md:mt-[18px] lg:mt-[8px] font-[400] text-[12px] sm:text-[12px] md:text-[18px] lg:text-[20px] leading-[28px]">
              Mobile App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

          <div className=" bg-[#FFFFFF] pt-[12px] sm:pt-[12px] md:pt-[20px] lg:pt-[20px] px-[30px sm:px-[30px] md:px-[40px] lg:px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsFour}
              className="w-[90px] sm:w-[90px] md:w-[140px] lg:w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-[8px] sm:mt-[8px] md:mt-[18px] lg:mt-[8px] font-[400] text-[12px] sm:text-[12px] md:text-[18px] lg:text-[20px] leading-[28px]">
              Model AI
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>

        </div>

        <div className="max-w-[100%] sm:max-w-[50%] md:max-w-[50%] lg:max-w-[50%] h-fit flex flex-col items-end text-[16px] font-[400] ">
          <SectionTitle
            title="products we develop"
            subtitle="Appliction and services"
            textPosition="right"
          ></SectionTitle>
          <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] mt-[28px]">
            <p className="text-right leading-[normal] sm:leading-[normal] md:leading-[normal] lg:leading-[19px] text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] pl-[0] sm:pl-[20px] md:pl-[20px] lg:pl-[20px]">
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

          <div className="mt-[20px] sm:mt-[20px] md:mt-[40px] lg:mt-[40px] relative">
            <button className="px-[24px] sm:px-[24px] md:px-[26px] lg:px-[32px] py-[12px] lg:py-[16px] bg-primary text-[16px] text-white absolute 
            top-[-2px] sm:top-[-2px] md:top-[-6px] lg:top-[-10px] right-[-2px] sm:right-[-2px] md:right-[-6px] lg:right-[-10px] 
            hover:top-[-6px] hover:right-[-6px] active:top-[3px] active:right-[3px] 
            "
            style={{
              transitionDuration: "0.1s"
            }}>
              <p>Explore Projects</p>
            </button>
            <button className="px-[24px] sm:px-[24px] md:px-[26px] lg:px-[32px] py-[12px] lg:py-[16px] bg-white border-[3px] border-black text-[16px] text-white"
            style={{
              transitionDuration: "0.1s"
            }}>
              <p>Explore Projects</p>
            </button>
          </div>
          
          <div className="mt-[171px] absolute bottom-[60px] hidden lg:block">
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
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[348px] left-[360px] blur-[24px] z-[-1] hidden sm:hidden md:hidden lg:block"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[385px] right-[540px] blur-[24px] z-[-1] hidden sm:hidden md:hidden lg:block"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[260px] right-[420px] blur-[24px] z-[-1] hidden sm:hidden md:hidden lg:block"></div>
      </div>
      <Image
        src={Vector}
        className="absolute bottom-[-100px] sm:bottom-[-140px] md:bottom-[-120px] lg:bottom-0 right-[-580px] sm:right-[-500px] md:right-[-300px] lg:right-0 z-[-1] max-w-fit "
        alt="Vector"
      />
    </section>
  );
}

export default Product;
