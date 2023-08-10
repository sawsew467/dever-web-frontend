import React from "react";
import Image from "next/image";
import group1498 from "@pageImage/member/banner/arrow.svg";
import avatar  from "@pageImage/member/avatar/topface/avatar.png"
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
    <article className="max-w-[1440px] mx-[auto]">
      <div className="xl:px-[80px] lg:px-[40px] flex flex-col text-center">
        <h1
          className="font-[700] w-[500px] text-[#0098FF] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]
       uppercase  text-[40px]  mx-[auto] not-italic  backdrog-blur-[2px]
        "
        >
          WHO ARE IN FU - DEVER?
        </h1>
        <p className="text-[#0065A9] font-[600]  h-[23px] not-italic text-[20px] leading-[23px] xl:mt-[28px] lg:mt-[25px]">
          2023 - Top typical faces of the club
        </p>
        <ul
          className="flex-wrap xl:content-normal justify-between
      xl:flex-[0_0_10%] mx-0 content-center flex mt-[40px] w-[100%] item-center"
        >
         {data.map(( item , banner)=> (
          <li key={banner}
          className="xl:w-[180px] xl:h-[280px] lg:w-[129px] lg:h-[200px] "
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
        <p className="mt-[40px]  text-[#0065A9] not-italic font-[600] text-[20px] leading-[23px]">
          Each member is a small part in the successful development of the club.
        </p>
        <div className=" my-[12px] mx-[auto]  w-[100%] bg-[#0098FF] h-[8px] "></div>
        <Image
          className="mx-[auto] mb-[12px] "
          src={group1498}
          alt="{group1498 }"
        ></Image>
      </div>
    </article>
  );
};

export default TopTypical;
