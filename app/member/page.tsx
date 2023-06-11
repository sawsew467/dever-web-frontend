import React from "react";
// import in include   
import Banner from "./components/banner";
import ListLeaderMember from "./components/memberLeader";
import ListMember from "./components/memberNormal";
// 

function Member() {
  return (
     <div className="max-w-[1440px]  mt-[120px] mx-[auto]">
        <Banner />
        <section className=" bg-[#FAFBFC] mt-[60px]  flex flex-col">
        <ListLeaderMember />
        <ListMember />
        </section>
    </div>
  )
}
export default Member;
