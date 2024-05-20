import React, { useEffect, useState } from "react";
import goHome from "@pageImage/not-found/arrow-go-back-line.svg";
import Button from "@/components/core/common/button";
import Profile from "../Profile";
import CardInfor from "../CardInfor";
import AboutMe from "../Aboutme";

const DetailMember = ({ user }: any) => {
  return (
    <main className="p-[80px] xl:px-[80px] md:px-[40px] sm:px-[20px]  min-h-[500px]  max-w-[1440px] mx-auto">
      <div className="flex w-full justify-between lg:mb-[60px] sm:mb-[20px] items-center flex-wrap gap-[10px]">
        <span className="xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[20px] font-bold flex gap-[10px]">
          <h2 className="text-[#0098FF] ">
            {user?.firstname} {user?.lastname}
          </h2>
          <p>Profile</p>
        </span>
        <Button href="/member" title="Go back" icon={goHome}></Button>
      </div>
      <div className="w-full flex lg:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] justify-center ">
        <div className="flex lg:flex-col md:flex-row sm:flex-col lg:gap-[40px] sm:gap-[20px] lg:w-1/2  md:w-full items-stretch">
          <Profile user={user} />
          <div className="flex md:flex-col lg:gap-[40px] sm:gap-[20px] h-fit lg:w-full md:w-1/2 lg:h-auto md:h-full">
            <CardInfor
              data={user?.skills}
              title="Skill:"
              backgroundColor="#DEF7EC"
              color="#03543F"
            />
            <CardInfor
              data={user?.favourites}
              title="Hobbies:"
              backgroundColor="#EDEBFE"
              color="#5521B5"
            />
          </div>
        </div>
        <AboutMe user={user} />
      </div>
    </main>
  );
};

export default DetailMember;
