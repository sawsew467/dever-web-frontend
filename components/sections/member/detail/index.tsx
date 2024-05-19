import React, { useEffect, useState } from "react";
import goHome from "@pageImage/not-found/arrow-go-back-line.svg";
import Button from "@/components/core/common/button";
import Profile from "../Profile";
import CardInfor from "../CardInfor";
import AboutMe from "../Aboutme";

const DetailMember = ({ user }: any) => {
  return (
    <main className="p-[60px] min-h-[500px] mt-[60px] ">
      <div className="flex w-full justify-between mb-[60px] px-[60px]">
        <span className="text-[40px] font-bold flex gap-[10px]">
          <h2 className="text-[#0098FF]">
            {user?.firstname} {user?.lastname}
          </h2>
          <p>Profile</p>
        </span>
        <Button href="/member" title="Go back" icon={goHome}></Button>
      </div>
      <div className="w-full flex gap-[40px] justify-center">
        <div className="flex flex-col gap-[40px] w-fit ">
          <Profile user={user} />
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
        <AboutMe user={user} />
      </div>
    </main>
  );
};

export default DetailMember;
