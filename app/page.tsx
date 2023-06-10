"use-client";

import Image from "next/image";
import Link from "next/link";
import womanSmile from "../assets/images/pages/home/banner/womanPointing.png";
import manModel from "../assets/images/pages/home/banner/maleModel.png";
import man2Model from "../assets/images/pages/home/banner/male2Model.png";
import "@/app/page.css";

export default function Home() {
  return (
    <>
      <section className="w-screen h-[890px] flex justify-center items-center">
        <div className="w-[1280px] h-[100%] flex justify-center items-center">
          <div className="w-[620px] h-fit flex flex-col justify-center items-center translate-y-[-60px]">
            <h1
              className={`relative text-[#0098FF] text-[40px] flex justify-center items-center font-[700] after:content-[' '] after:w-[120px] after:h-[5px] after:bg-[red] after:absolute after:top-[60px]`}
            >
              FU-DEVER
            </h1>
            <h2 className={`text-[#0098FF] text-[32px] mt-[12px] font-[700]`}>
              WORK HARD - PLAY HARD
            </h2>
            <p className="text-center text-[#22181C] font-[400] text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button className="w-[160px] h-[52px] py-[6px] bg-[#0098FF] flex justify-center items-center mt-[24px]">
              <p className="font-[400] text-[16px] text-white">Send Your CV</p>
            </button>
          </div>
        </div>

        <div className="w-[1280px] h-[810px] absolute z-[-1]">
          <div className="w-[300px] h-[330px] absolute left-0 bottom-0">
            <div className="w-[200px] h-[230px] bg-[#FDECE8] absolute bottom-0 left-0 clip-path-myPolygon"></div>
            <div className="absolute left-0 bottom-0 w-[fit] mb-[20px]">
              <Image src={womanSmile} alt="Picture of the author" />
            </div>
            <div className="w-[200px] h-[230px] bg-white absolute bottom-0 left-0 clip-path-subPolygon"></div>
          </div>

          <div className="w-[345px] h-[330px] absolute right-0 bottom-[80px] rotateY180deg">
            <div className="w-[236px] h-[250px] bg-[#FBE8D5] absolute bottom-0 left-0 clip-path-myPolygon"></div>
            <div className="absolute left-0 bottom-0 w-[fit] mb-[20px]">
              <Image src={womanSmile} alt="Picture of the author" />
            </div>
            <div className="w-[260px] h-[260px] bg-white absolute bottom-0 left-0 clip-path-subPolygon"></div>
          </div>

          <div className="w-[120px] h-[180px] absolute right-[329px] top-[68px]">
            <div className="w-[106px] h-[136px] bg-[#FFF7AD] absolute bottom-0 left-0 clip-path-myPolygon"></div>
            <div className="absolute left-0 bottom-0 w-[fit] mb-[10px]">
              <Image src={manModel} alt="Picture of the author" />
            </div>
            <div className="w-[130px] h-[160px] bg-[#fff] absolute bottom-0 left-0 clip-path-subPolygon"></div>
          </div>

          <div className="w-[120px] h-[180px] absolute left-[256px] top-[48px] rotateY180deg">
            <div className="w-[106px] h-[136px] bg-[#D1F0E1] absolute bottom-0 left-0 clip-path-myPolygon"></div>
            <div className="absolute left-0 bottom-0 w-[fit] mb-[10px]">
              <Image src={man2Model} alt="Picture of the author" />
            </div>
            <div className="w-[130px] h-[160px] bg-[#ffffff] absolute bottom-0 left-0 clip-path-subPolygon"></div>
          </div>

        </div>

        <div className="w-[1280px] h-[810px] bg-blue-50 absolute z-[-2]">
          
        </div>

      </section>
    </>
  );
}
