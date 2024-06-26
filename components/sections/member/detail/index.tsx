import React, { useEffect, useState } from "react";
import goHome from "@pageImage/not-found/arrow-go-back-line.svg";
import Button from "@/components/core/common/button";
import Profile from "../Profile";
import CardInfor from "../CardInfor";
import AboutMe from "../Aboutme";
import LeetCode from "../LeetCode";
const initialUser = {
  _id: "awdawdawdawd",
  email: null,
  description: null,
  avatar:
    "https://aiartshop.com/cdn/shop/files/cute-anime-waifu-1-ai-artwork-913.webp?v=1707052300",
  nickname: null,
  phone: null,
  firstname: null,
  lastname: null,
  dob: null,
  hometown: null,
  positionId: {
    _id: null,
    name: null,
    constant: null,
    createdAt: null,
    updatedAt: null,
    __v: 0,
  },
  departments: [],
  job: null,
  workplace: null,
  school: null,
  majorId: {
    _id: null,
    name: null,
    constant: null,
    createdAt: null,
    updatedAt: null,
    __v: 0,
  },
  gen: 2,
  favourites: [],
  skills: [],
  isExcellent: false,
  isAdmin: null,
  MSSV: null,
  createdAt: null,  
  updatedAt: null,
  __v: 0,
  socials: [],
  slug: null,
};
const DetailMember = ({ user = initialUser }: any) => {
  return (
    <main className="p-[80px] xl:px-[80px] md:px-[40px] sm:px-[20px]  min-h-[500px]  max-w-[1440px] mx-auto">
      <div className="flex w-full justify-between lg:mb-[60px] sm:mb-[20px] items-center flex-wrap gap-[10px]">
        <span className="xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold flex gap-[10px]">
          <p>Hồ sơ của</p>
          <h2 className="text-[#0098FF] ">
            {user?.firstname || user?.lastname
              ? `${user?.firstname ?? ""} ${user?.lastname ?? ""}`
              : "Chưa có tông tin tên"}
          </h2>
        </span>
        <Button href="/member" title="Go back" icon={goHome}></Button>
      </div>
      <div className="w-full flex lg:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] justify-center ">
        <div className="flex lg:flex-col md:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] lg:w-1/2  md:w-full items-stretch">
          <Profile user={user} />
          <div className="flex md:flex-col lg:gap-[40px] sm:gap-[20px] h-fit lg:w-full md:w-1/2 lg:h-auto md:h-full">
            <CardInfor
              data={user?.skills}
              title="kĩ năng:"
              backgroundColor="#DEF7EC"
              color="#03543F"
            />
            <CardInfor
              data={user?.favourites}
              title="Sở thích:"
              backgroundColor="#EDEBFE"
              color="#5521B5"
            />
          </div>
        </div>
        <div className="flex flex-col lg:gap-[40px] sm:gap-[20px] xl:w-fit h-fit lg:w-1/2 xl:min-w-[600px]">
          <AboutMe user={user} />
          <LeetCode submissionList={user?.acSubmissionList} />
        </div>
      </div>
    </main>
  );
};

export default DetailMember;
