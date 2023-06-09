import React from "react";
// import in include   
import TopTypicalFaces from "./include/TopTypicalFaces";
import ListLeaderMember from "./include/ListLeaderMember";
import ListMember from "./include/ListMember";
import ButtonSwitchSlide from "./include/ButtonSwitchSlide";
// 

function Member() {
  return (
     <div className=" xl:mx-[80px] lg:mx-[60px] md:mx-[40px] sm:mx-[20px] mx-0">
        <TopTypicalFaces />
        <section className=" bg-[#FAFBFC] lg:mt-[57px] sm:mt-[40px] mt-[20px] flex flex-col">
        <ListLeaderMember />
        <ListMember />
        <ButtonSwitchSlide /> 
        </section>
    </div>
  )
}
export default Member;
