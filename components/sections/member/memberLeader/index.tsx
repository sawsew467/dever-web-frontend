import React from "react";
import Image from "next/image";
import fillter from "@pageImage/member/leader/filter.svg";
import avatar from "@pageImage/member/avatar/topface/avatar.png";
import vector from "@pageImage/member/normal/vector.svg"
const ListLeaderMember = () => {
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
    }
    ,
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    }
    ,
    {
      url:'/assets/images/pages/member/avatar/topface/avatar.png',
      title:"Trần văn bảo thắng"
    }
    ,
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
    <article className="max-w-[1440px] mx-[auto] pb-[60px] ">
      <div className=" justify-between relative items-end flex w-[100%] h-[auto] border-l-[8px] border-[#FF0000]">
        <div className="w-[100%] ml-[12px] ">
          <h3
            className="mb-[4px] cursor-pointer w-[auto] uppercase text-[#0098FF]  xl:leading-[48px] lg:leading-[38px] xl:text-[40px] lg:text-[32px] font-[700] h-[48px]  "
          >
            CLUB LEADER MEMBERS
          </h3>
          <p className="xl:text-[28px] font-[400] lg:text-[24px]">About our establishment and growth</p>
        </div>
        <button className=" group min-w-[93px] h-[35px] px-[16px] py-[8px] flex bg-[#D9D9D9AB] rounded-[4px] border-0 gap-[4px] justify-around items-center  ">
          <Image
            src={fillter}
            width={17}
            height={17}
            alt="button fillter"
            className="w-[17px] mb-[2px]  h-[17px]"
          />
          <p className=" font-[600] text-[16px]  h-[19px] flex items-center ">Filter</p>
        </button>
      </div>
      <ul className=" xl:mt-[28px] lg:mt-[40px] xl:gap-y-[40px] lg:gap-y-[35px] flex flex-wrap lg:flex-[0_0_30%] lg:justify-between  justify-center">
        {data.map( (item , key)=> (
          <li key={key} className=" xl:w-[290px] xl:h-[400px] lg:w-[210px] lg:h-[300px] cursor-pointer  relative">
          <Image
            width={290}
            height={400}
            className="object-cover rounded-tl-[20px] rounded-br-[20px] w-[100%] h-[100%] "
            alt=""
            src={avatar}
          ></Image>
          <div className="h-[auto] absolute bottom-0 w-[100%]">
            <div className="z-[2] xl:px-[32px] lg:pr-[19px] lg:pl-[24px] xl:py-[6px] lx:py-[3px] xl:w-[93px] xl:h-[32px] lg:w-[68px]  lg:h-[23px] rounded-tl-[12px] bg-[#FF7171] absolute right-0 translate-y-[-100%] m-0">
                <p className="text-[16px] font-[700] text-[#ffffff] " >K17</p>
            </div>
            <div className="w-[100%] xl:p-[20px] lg:p-[14px]  xl:h-[118px] lg:h-[88px] bg-primary rounded-br-[20px]">
              <div className="flex flex-col h-[100%] xl:gap-[12px] lg:gap-[6px] ">
                <h4 className=" font-[700] h-[24px] xl:leading-[24.2px] lg:leading-[16.94px] xl:text-[20px] lg:text-[14px] text-[12px] text-[#fff] ">
                  Trần Văn Bảo Thắng
                </h4>
                <div className=" h-[auto] xl:text-[14px] lg:text-[12px] xl:leading-[17px] lg:leading-[14.52px]  flex justify-between items-end ">
                  <div className="flex flex-col xl:gap-[8px] lg:gap-[6px]">
                    <p className="font-[700] text-[#fff]">
                      -DE170145
                    </p>
                    <p className="font-[700] text-[#fff]">
                      -Academic Member
                    </p>
                  </div>
                  <h3 className="h-[24px] absolute xl:bottom-[20px] xl:right-[20px] lg:bottom-[14px] lg:right-[14px] inline text-[#fff] font-[800] sm:text-[20px] ">
                    GEN 5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </li>
        ) )}
      </ul>
      <div className="mx-[auto] xl:mt-[40px] lg:mt-[35px]">
      <ul className="text-[16px] xl:gap-[16px] lg:gap-[14px] flex justify-center font-['Inter'] not-italic ">
        <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px]">
          <button className="rounded-[2px] w-[100%] h-[100%] border-[1px] border-[#1111111A]">
            <Image
              src={vector}
              alt="button "
              className="mx-[auto] mt-[auto]"
            />
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
            1
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
            2
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
            3
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
            4
          </button>
        </li>
        <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px]">
          <button className="rotate-[180deg] rounded-[2px] w-[100%] h-[100%] border-[1px] border-[#1111111A]">
            <Image
              src={vector}
              alt="button "
              className="mx-[auto] mt-[auto]"
            />
          </button>
        </li>
      </ul>
      </div>
    </article>
  );
};

export default ListLeaderMember;
