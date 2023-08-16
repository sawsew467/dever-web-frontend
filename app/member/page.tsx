import React from "react";
// import in include   
import Banner from "../../components/sections/member/banner";
import ListLeaderMember from "../../components/sections/member/memberLeader";
import ListMember from "../../components/sections/member/memberNormal";
// 

function Member() {
  return (
     <div className=" xl:mt-[120px] lg:mt-[109px] mobile:mt-[96px]">
        <Banner />
        <section className="bg-[#FAFBFC] xl:max-w-[1440px] lg:max-w-[1024px] md:max-w-[768px] mobile:max-w-[360px] mx-[auto] xl:px-[80px] md:pr-[40px] md:pl-[39px] mobile:px-[20px] flex flex-col">
        <ListLeaderMember />
        <ListMember />
        </section>
    </div>
  )
}
export default Member;
