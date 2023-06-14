import React from "react";
// import in include   
import Banner from "../../components/sections/member/banner";
import ListLeaderMember from "../../components/sections/member/memberLeader";
import ListMember from "../../components/sections/member/memberNormal";
// 

function Member() {
  return (
     <div className=" mt-[120px]">
        <Banner />
        <section className=" bg-[#FAFBFC] px-[80px]  flex flex-col">
        <ListLeaderMember />
        <ListMember />
        </section>
    </div>
  )
}
export default Member;
