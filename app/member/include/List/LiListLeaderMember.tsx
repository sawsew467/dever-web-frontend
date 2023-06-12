import React from "react";
import Image from "next/image";
import logo from "../../../../assets/images/pages/member/banner/logodever.png";
import avatar from "../../../../assets/images/pages/member/avatar/topface/avatar.png";
import Member from "../../../../assets/images/pages/member/normal/member.svg";
import Leader from "../../../../assets/images/pages/member/leader/leader.svg";

const LiListMember = () => {
  return (
    <li className=" cursor-pointer  relative">
      <Image
        width={290}
        height={400}
        className="object-cover rounded-tl-[20px] rounded-br-[20px] lg:w-[290px] lg:h-[400px] sm:w-[200px] sm:h-[300px] 
                  w-[160px] h-[200px]"
        alt=""
        src={avatar}
      ></Image>
      <div className="h-[auto] absolute bottom-0 w-[100%]">
        <div className="px-[32px] py-[6px] w-[93px] h-[32px] rounded-tl-[12px] relative left-[100%] m-0 translate-x-[-100%] bg-[#C69C6D]">
            <p className="text-[16px] font-[700] text-[#ffffff] " >K17</p>
        </div>
        <div className="w-[100%] h-[118px] bg-primary rounded-br-[20px]">
          <div className="ml-[20px] h-[100%] pt-[20px]">
            <h4 className=" font-[700] h-[24px] lg:text-[20px] md:text-[15px] text-[12px] text-[#fff] ">
              Trần Văn Bảo Thắng
            </h4>
            <div className="mt-[12px] h-[auto] flex justify-between ">
              <div className="mb-[20px]">
                <p className="font-[700] text-[14px]  leading-[17px] text-[#fff]">
                  -DE170145
                </p>
                <p className="mt-[8px] font-[700] text-[14px]  leading-[17px] text-[#fff]">
                  -Academic Member
                </p>
              </div>
              <h3 className="mr-[20px] mb-[20px] inline text-[#fff] font-[800] sm:text-[20px] text-[14px]">
                GEN 5
              </h3>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LiListMember;
