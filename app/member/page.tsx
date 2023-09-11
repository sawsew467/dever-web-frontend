"use client";
import React, { useEffect, useState } from "react";
// import in include
import Banner from "../../components/sections/member/banner";
import ListLeaderMember from "../../components/sections/member/memberLeader";
import ListMember from "../../components/sections/member/memberNormal";
import Reloading from "@/components/Reloading";
//

function Member() {
  const [isReloading, setIsReloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsReloading(false);
    }, 2400);
  });
  return (
    <>
      {isReloading ? <Reloading></Reloading> : null}
      <div className=" xl:mt-[120px] lg:mt-[109px] sm:mt-[96px]">
        <Banner />
        <section className="bg-[#FAFBFC] xl:px-[80px] md:px-[40px] sm:px-[20px] flex flex-col">
          <ListLeaderMember />
          <ListMember />
        </section>
      </div>
    </>
  );
}
export default Member;
