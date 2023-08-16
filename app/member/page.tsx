import React from "react";
// import in include   
import Banner from "../../components/sections/member/banner";
import ListLeaderMember from "../../components/sections/member/memberLeader";
import ListMember from "../../components/sections/member/memberNormal";
// 

function Member() {
  return (
     <div className=" xl:mt-[120px] lg:mt-[109px] sm:mt-[96px]">
        <Banner />
        <section className="bg-[#FAFBFC]  flex flex-col">
        <ListLeaderMember />
        <ListMember />
        </section>
    </div>
  )
}
export default Member;
