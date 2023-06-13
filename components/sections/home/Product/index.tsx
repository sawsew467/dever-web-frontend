"use-client";

import React from "react";
import Image from "next/image";
import SectionTittle from "@/components/SectionTittle";
import ProductsOne from "../../../../assets/images/pages/home/product/image1.png";
import ProductsTwo from "../../../../assets/images/pages/home/product/image2.png";
import ProductsThree from "../../../../assets/images/pages/home/product/image3.png";
import ProductsFour from "../../../../assets/images/pages/home/product/image4.png";
import Vector from "../../../../assets/images/pages/home/product/longWave.svg";
import Facebook from "../../../../assets/images/pages/home/icon/Facebook.svg";
import Github from "../../../../assets/images/pages/home/icon/Github.svg";
import Tiktok from "../../../../assets/images/pages/home/icon/Tiktok.svg";

function Product() {
  return (
    <section className="w-screen h-fit flex justify-center items-center relative mb-[1px]">
      <div className="max-w-[1440px] w-[100%] h-fit py-[60px] px-[80px] flex justify-between relative">
        <div className="max-w-[610px] w-[100%] h-[610px] flex flex-wrap gap-[50px]">
          <div className=" bg-[#FFFFFF] pt-[20px] px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsOne}
              className="w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-2 font-[400] text-[20px] leading-[28px]">
              2D Game
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>
          <div className=" bg-[#FFFFFF] pt-[20px] px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsTwo}
              className="w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-2 font-[400] text-[20px] leading-[28px]">
              Web App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>
          <div className=" bg-[#FFFFFF] pt-[20px] px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsThree}
              className="w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-2 font-[400] text-[20px] leading-[28px]">
              Mobile App
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>
          <div className=" bg-[#FFFFFF] pt-[20px] px-[40px] pb-[23px] flex flex-col items-center drop-shadow-xl relative">
            <Image
              src={ProductsFour}
              className="w-[200px]"
              alt="Product Image"
            />
            <h3 className="mt-2 font-[400] text-[20px] leading-[28px]">
              Model AI
            </h3>
            <div className="w-[100%] h-[100%] absolute bg-[#FFFFFF] top-0 left-0 z-[-1] blur-[4px]"></div>
          </div>
        </div>
        <div className="w-fit h-[610px] flex flex-col items-end text-[16px] font-[400]">
          <SectionTittle
            tittle="products we develop"
            subtittle="Appliction and services"
            textPosition="right"
          ></SectionTittle>
          <div className="w-[540px] mt-[28px]">
            <p className="text-right leading-[19px]">
              Our products are game-changers, revolutionizing industries and
              enhancing user experiences. With cutting-edge technology and
              user-centric design, we deliver innovative solutions that surpass
              expectations and drive positive change.{" "}
            </p>
            <p className="text-right leading-[19px] mt-[14px]">
              {" "}
              With a team of passionate programmers, developers, and designers,
              we collaborate to bring innovative solutions to life. Our products
              range from web and mobile applications to software tools and
              utilities that streamline processes and enhance productivity.
            </p>
          </div>
          <div className="mt-[40px] w-[186px] h-[51px] border-[3px] relative border-black ">
            <button className="px-[32px] py-[16px] bg-primary absolute text-[#FFFFFF] font-[400] text-[16px] leading-[19px] top-[-19px] right-[-19px]  transition">
              <p>Explore Projects</p>
            </button>
          </div>
          <div className="mt-[171px]">
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
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[348px] left-[360px] blur-[24px] z-[-1]"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[385px] right-[540px] blur-[24px] z-[-1]"></div>
        <div className="w-[40px] h-[40px] bg-red-500 absolute top-[260px] right-[420px] blur-[24px] z-[-1]"></div>
      </div>
      <Image
        src={Vector}
        className="absolute right-0 bottom-0 z-[-1] max-w-fit"
        alt="Vector"
      />
    </section>
  );
}

export default Product;
