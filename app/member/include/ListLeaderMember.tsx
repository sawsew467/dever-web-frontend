import React from 'react'
import Image from 'next/image'
import {
    Rectangle2,
    Rectangle3,
    Vector,
    Rectangle1,
    VectorFirst,
} from "./svg/svg";
import avatar from "../img/avatar.png";
import LiListLeaderMember from './List/LiListLeaderMember';

const ListLeaderMember = () => {
  return (
      <div>
          <article className="lg:mt-[60px] sm:mt-[40px] mt-[20px] ">
            <div className=" justify-between relative flex w-[100%] h-[auto] after:content-[''] after:absolute after:h-[100%] after:w-[5px] after:left-[0px] after:bg-[rgba(255,0,0)]">
              <div className="w-[100%] ml-[10px]  ">
                <h3
                  className="cursor-pointer w-[auto] uppercase text-[#0098FF] font-['Inter'] leading-[48px] md:text-[40px] font-[800] h-[48px] 
                sm:text-[30px] "
                >
                  CLUB LEADER MEMBERS
                </h3>
                <p className="">About our establishment and growth</p>
              </div>
              <button className="cursor-pointer group w-[74px] h-[31px] bg-[#D9D9D9AB] rounded-[4px] border-0 flex justify-around items-center hover:bg-[#0098FF]  ">
                <Vector className="cursor-pointer group-hover:fill-[#fff]" />
                <p className="text-[#0098FF] font-[600] font-['Inter'] group-hover:text-white ">
                  Filters
                </p>
              </button>
            </div>
            <ul className="lg:gap-[20px]  sm:gap-[10px] gap-[5px] mt-[36px] flex flex-wrap lg:flex-[0_0_30%] lg:justify-between  justify-center">
             <LiListLeaderMember  />
             <LiListLeaderMember  />
             <LiListLeaderMember />
             <LiListLeaderMember  />
             <LiListLeaderMember  />
             <LiListLeaderMember  />
             <LiListLeaderMember  />
             <LiListLeaderMember  />
            </ul>
          </article>
      </div>
    )
}

export default ListLeaderMember ;