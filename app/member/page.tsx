import React from "react";
// import in include   
import Banner from "../../components/sections/member/banner";
import ListLeaderMember from "../../components/sections/member/memberLeader";
import ListMember from "../../components/sections/member/memberNormal";
// 

function Member() {
  return (
     <div className=" xl:mt-[120px] lg:mt-[109px]">
        <Banner />
        <section className=" bg-[#FAFBFC] xl:px-[80px] lg:px-[40px]  flex flex-col">
        <ListLeaderMember />
        <ListMember />
        </section>
    </div>
  )
}
export default Member;
