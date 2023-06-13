import React from "react";
import Image from "next/image";
import image1 from "@pageImage/home/banner/Group2.png";
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
      <section className="w-screen h-[810px] flex justify-center items-center ">
        <div className="max-w-[1440px] w-[100%] px-[80px] h-[100%] flex justify-center items-center">
          <div className="w-[620px] h-fit flex flex-col justify-center items-center translate-y-[-37px] ">
            <h1
              className={`stroke-black relative text-[#0098FF] text-[40px] flex justify-center items-center font-[700] after:content-[' '] after:w-[120px] after:h-[5px] after:bg-[red] after:absolute after:top-[54px] leading-[48px]`}
            >
              FU-DEVER
            </h1>
            <h2
              className={`text-[#0098FF] text-[32px] mt-[24px] font-[700] leading-[39px] `}
            >
              WORK HARD - PLAY HARD
            </h2>
            <p className="text-center text-[#22181C] font-[400] text-[20px] leading-[23px] mt-[12px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="px-[32px] py-[16px] bg-[#0098FF] flex justify-center items-center mt-[24px]">
              <p className="font-[400] text-[16px] text-white leading-[19px]">
                Send Your CV
              </p>
            </button>
          </div>
        </div>
        <div className="max-w-[1440px] w-[100%] h-[810px] px-[80px] absolute z-[-1]">
          <div className="w-[303px] h-[326px] absolute  bottom-[32px]">
            <Image src={image1} alt="person" />
          </div>
          <div className="w-[345px] h-[330px] absolute right-[80px] bottom-[81px]">
            <Image src={image3} alt="person" />
          </div>
          <div className="w-[115px] h-[166px] absolute xl:right-[349px] right-[160px] top-[132px]">
            <Image src={image4} alt="person" />
          </div>
          <div className="w-[115px] h-[166px] absolute xl:left-[256px] top-[112px] left-[160px]">
            <Image src={image2} alt="person" />
          </div>
        </div>
        <div className="w-[1440px] h-[810px]  absolute z-[-2]">
          <div className="absolute top-[335px] left-[-70px]">
            <Image src={retangle1} alt="Picture of the author" />
          </div>
          <div className="absolute top-[373px] left-[250px]">
            <Image src={retangle2} alt="Picture of the author" />
          </div>
          <div className="absolute top-[277px] right-[160px]">
            <Image src={retangle3} alt="Picture of the author" />
          </div>
          <div className="absolute top-[179px] right-[-30px]">
            <Image src={retangle4} alt="Picture of the author" />
          </div>
          <div className="absolute bottom-[91px] right-[427px]">
            <Image src={retangle5} alt="Picture of the author" />
          </div>
          <div className="absolute bottom-[147px] left-[553px]">
            <Image src={retangle6} alt="Picture of the author" />
          </div>
          <div className="absolute top-[108px] right-[571px]">
            <Image src={retangle7} alt="Picture of the author" />
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
