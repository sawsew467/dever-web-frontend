import React from "react";
import Image from "next/image";
import LiListLeaderMember from "../../include/List/LiListLeaderMember";
import fillter from "../../../../assets/images/pages/member/leader/filter.svg";
import avatar from "../../../../assets/images/pages/member/avatar/topface/avatar.png";
const ListLeaderMember = () => {
  const data = [{}];
  return (
    <article className="mx-[80px] pt-[60px] ">
      <div className=" justify-between relative flex w-[100%] h-[auto] border-l-[8px] border-[#FF0000]">
        <div className="w-[100%] ml-[20px]  ">
          <h3
            className="mb-[4px] cursor-pointer w-[auto] uppercase text-[#0098FF]  leading-[48px] md:text-[40px] font-[800] h-[48px] 
                sm:text-[30px] "
          >
            CLUB LEADER MEMBERS
          </h3>
          <p className="">About our establishment and growth</p>
        </div>
        <button className="group w-[auto] h-[31px] bg-[#D9D9D9AB] rounded-[4px] border-0 flex justify-around items-center   ">
          <Image
            src={fillter}
            alt="button fillter"
            className=" ml-[9px] mr-[5px] "
          />
          <p className=" font-[600] py-[6px] pr-[9px] ">Filters</p>
        </button>
      </div>
      <ul className="lg:gap-[65px]  sm:gap-[10px] gap-[5px] mt-[36px] flex flex-wrap lg:flex-[0_0_30%] lg:justify-between  justify-center">
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
        <LiListLeaderMember />
      </ul>
    </article>
  );
};

export default ListLeaderMember;
