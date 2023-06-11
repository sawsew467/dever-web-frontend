import React from "react";
import Image from "next/image";
import group1498 from "../../../../assets/images/pages/member/banner/arrow.svg";
import avatar  from "../../../../assets/images/pages/member/avatar/topface/avatar.png"
const TopTypical = () => {
  const data=[
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    },
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    },
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    },
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    },
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    }
    ,
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    }
  ]
     
  return (
    <div className="lg:mx-[80px]">
      <div className="flex flex-col text-center">
        <h1
          className="font-[800] xl:text-[64px] text-[#0098FF] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
       uppercase xl:leading-[77px] font-['Inter'] xl:h-[79.34px] not-italic  backdrog-blur-[2px]
       lg:text-[50px] lg:h-[50px] lg:leading[50px]
       sm:text-[40px] text-[20px] "
        >
          WHO ARE IN FU - DEVER?
        </h1>
        <p className="text-[#0065A9] font-[600] font-['roboto'] h-[23px] not-italic text-[20px] leading-[23px] mt-[25.66px]">
          2023 - Top typical faces of the club
        </p>
        <ul
          className=" gap-[5px] md:flex-nowrap flex-wrap xl:content-normal xl:justify-between
      xl:flex-[0_0_10%] mx-0 content-center flex mt-[50.27px] w-[100%]  justify-center item-center"
        >
         {data.map(( item , banner)=> (
          <li key={banner}
          className="
           xxl:w-[350px] xxl:h-[570px] xl:w-[270px] xl:h-[400px] lg:w-[180px] lg:h-[240px] md:w-[160px] md:h-[200px]
            w-[100px] h-[180px]          "
        >
          <Image
            width={180}
            height={280}
             className="object-cover rounded-tl-[20px] rounded-br-[20px] w-[100%] h-[100%]  "
            alt={item.title}
            src={avatar}
          ></Image>
        </li>
         ) )}
        </ul>
        <p className="mt-[62.73px] font-['roboto'] text-[#0065A9] not-italic font-[600] text-[20px] leading-[23px]">
          Each member is a small part in the successful development of the club.
        </p>
        <div className="my-[0] mx-[auto]  w-[80%] bg-[#0098FF] h-[6.18px] "></div>
        <Image
          className="mx-[auto] mt-[20px]"
          src={group1498}
          alt="{group1498 }"
        ></Image>
      </div>
    </div>
  );
};

export default TopTypical;
