import React from "react";
import Image from "next/image";
import LiListMember from "../../include/List/LiListMember";
import Fillter from "../../../../assets/images/pages/member/leader/filter.svg"
import Vector from "../../../../assets/images/pages/member/normal/vector.svg"
const ListMember = () => {
  return (
    <article className="mt-[60px] mx-[80px]">
      <div className=" justify-between relative flex w-[100%] h-[auto] after:content-[''] after:absolute after:h-[100%] after:w-[5px] after:left-[0px] after:bg-[rgba(255,0,0)]">
        <div className="w-[100%] ml-[10px]  ">
          <h3
            className=" uppercase text-[#0098FF] font-['Inter'] leading-[48px] xl:text-[40px] font-[800] h-[48px] w-[auto] 
                sm:text-[30px]  "
          >
            CLUB  MEMBERS
          </h3>
          <p className="">About our establishment and growth</p>
        </div>
        <button className="group w-[74px] h-[31px] bg-[#D9D9D9AB] rounded-[4px] border-0 flex justify-around items-center hover:bg-[#0098FF]  ">
          <Image src={Fillter} alt="button fillter" className="group-hover:fill-[#fff]" />
          <p className="text-[#0098FF] font-[600] font-['Inter'] group-hover:text-white ">
            Filters
          </p>
        </button>
      </div>
      <ul className="lg:gap-[20px] sm:gap-[10px] gap-[5px] mt-[36px]  flex flex-wrap lg:justify-between justify-center">
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
      </ul>
      <div className="mx-[auto] my-[10px]">
        <ul className="flex justify-center font-['Inter'] not-italic ">
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              <Image
                src={Vector}
                alt="button "
                className="  mx-[auto] mt-[auto]"
              />
            </button>
          </li>
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              1
            </button>
          </li>
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              2
            </button>
          </li>
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              3
            </button>
          </li>
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              4
            </button>
          </li>
          <li className="mx-[5px]">
            <button className=" rotate-180  text-[12px] sm:text-[16px] rounded-[2px] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              <Image
                src={Vector}
                alt="button "
                className="  mx-[auto] mt-[auto]   "
              />
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ListMember;
