import React from "react";
import banner from "@pageImage/activity/banner.png";
import Image from "next/image";
import facebook from "@pageImage/activity/facebook.svg";
function Banner() {
  return (
    <>
      <section className="w-screen flex justify-center items-center">
        <div className="max-w-[1440px] w-full h-full sm:px-[20px] md:px-[40px] xl:px-[80px] flex flex-col justify-center items-center">
          <div className="w-full flex flex-row lg:justify-between justify-center items-center mt-[70px] sm:mb-[40px] md:mb-[60px] lg:mb-[45px]">
            <p className="max-w-[266px] w-full font-normal italic text-sm hidden lg:block leading-[17px] text-[#0098FF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <div className="flex flex-col items-center justify-center">
              <p className="font-black text-[32px] leading-[39px] stroke-text ">
                Activities in
              </p>
              <p className="uppercase font-black text-[40px] leading-[48px] text-[#0098FF]">
                {" "}
                fu-dever club
              </p>
            </div>
            <div className=" flex-row items-center justify-center hidden lg:flex gap-[20px]">
              <p className="font-black text-[24px] leading-[29px] text-[#0098FF] opacity-50 max-w-[80px] w-full">
                Follow us
              </p>
              <Image src={facebook} alt="facebookIcon"></Image>
            </div>
          </div>
          <div className="w-full md:mb-[60px] sm:mb-[40px] flex flex-col items-center justify-center">
            <Image src={banner} alt="bannerImg"></Image>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
