import React from "react";
import Image from "next/image";
import LiListMember from "../../include/List/LiListMember";
import fillter from "../../../../assets/images/pages/member/leader/filter.svg"
import vector from "../../../../assets/images/pages/member/normal/vector.svg"
const ListMember = () => {
  return (
    <article className="mt-[65px] mx-[80px]">
      <div className=" justify-between relative flex w-[100%] h-[auto] border-l-[8px] border-[#FF0000]">
        <div className="w-[100%] ml-[20px]  ">
          <h3
            className="mb-[4px] uppercase text-[#0098FF]  leading-[48px] xl:text-[40px] font-[800] h-[48px] w-[auto] 
                sm:text-[30px]  "
          >
            CLUB  MEMBERS
          </h3>
          <p className="">About our establishment and growth</p>
        </div>
        <button className="group w-[auto] h-[31px] bg-[#D9D9D9AB] rounded-[4px] border-0 flex justify-around items-center   ">
          <Image src={fillter} alt="button fillter" className=" ml-[9px] mr-[5px] " />
          <p className=" font-[600] py-[6px] pr-[9px] ">
            Filters
          </p>
        </button>
      </div>
      <ul className="lg:gap-[65px] sm:gap-[10px] gap-[5px] mt-[36px]  flex flex-wrap lg:justify-between justify-center">
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
        <LiListMember />
      </ul>
      <div className="mx-[auto] my-[65px]">
        <ul className="gap-[16px] flex justify-center font-['Inter'] not-italic ">
          <li className="mx-[5px]">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              <Image
                src={vector}
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
                src={vector}
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
