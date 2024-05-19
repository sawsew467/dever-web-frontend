import React from "react";
import Banner from "@components/sections/member/banner";
import ListLeaderMember from "@components/sections/member/memberLeader";
import ListMember from "@components/sections/member/memberNormal";

const Main = ({ data }: any) => {
  return (
    <>
      <div className=" xl:mt-[120px] lg:mt-[109px] sm:mt-[96px]">
        <Banner data={data?.excellentData} />
        <section className="bg-[#FAFBFC] xl:px-[80px] md:px-[40px] sm:px-[20px] flex flex-col">
          <ListLeaderMember data={data?.adminData} />
          <ListMember data={data?.memberData} />
        </section>
      </div>
    </>
  );
};

export default Main;
