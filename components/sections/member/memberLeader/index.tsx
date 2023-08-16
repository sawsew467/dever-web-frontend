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
    <article className="max-w-[1440px] mx-[auto] md:py-[60px] mobile:py-[40px] ">
      <div className="justify-between relative items-end flex mobile:flex-col mobile:items-start xl:gap-0 mobile:gap-[25px] w-[100%] h-[auto] ">
        <div className="w-[100%] pl-[12px] border-l-[8px] border-[#FF0000]">
          <h3
            className="mb-[4px] cursor-pointer w-[auto] uppercase text-[#0098FF] xl:leading-[48px] lg:leading-[38px] mobile:leading-[29px] xl:text-[40px] lg:text-[32px] mobile:text-[24px]  font-[700]"
          >
            CLUB LEADER MEMBERS
          </h3>
          <p className="xl:text-[28px] font-[400] lg:text-[24px] mobile:text-[16px]">About our establishment and growth</p>
        </div>
        <button className="lg:min-w-[93px] lg:h-[35px] md:min-w-[71px] mobile:h-[29px] lg:px-[16px] mobile:w-[69px] lg:py-[8px] mobile:py-[6px] mobile:px-[12px] flex bg-[#D9D9D9AB] rounded-[4px] border-0 gap-[4px] justify-around items-center  ">
          <Image
            src={fillter}
            width={17}
            height={17}
            alt="button fillter"
            className="lg:w-[17px] lg:h-[17px] mobile:w-[14px] mobile:h-[14px] mobile:mb-[2px]  "
          />
          <p className=" font-[600] lg:text-[16px] mobile:text-[12px] lg:h-[19px] md:h-[15px] md:mb-[1px] flex items-center ">Filter</p>
        </button>
      </div>
      <ul className=" xl:mt-[28px] md:mt-[40px] mobile:mt-[20px] xl:gap-y-[40px] md:gap-y-[35px] mobile:gap-y-[20px] flex flex-wrap lg:flex-[0_0_30%] justify-between">
        {data.map( (item , key)=> (
          <li key={key} className=" xl:w-[290px] xl:h-[400px] lg:w-[210px] lg:h-[300px] md:w-[146px] md:h-[204px] mobile:w-[93px] mobile:h-[123px]  cursor-pointer  relative">
          <Image
            width={290}
            height={400}
            className="object-cover lg:rounded-tl-[20px] lg:rounded-br-[20px] md:rounded-tl-[15px] md:rounded-br-[15px] mobile:rounded-tl-[8px] mobile:rounded-br-[8px]  w-[100%] h-[100%] "
            alt=""
            src={avatar}
          ></Image>
          <div className="h-[auto] absolute bottom-0 w-[100%]">
            <div className=" flex justify-center lg:pt-[3.75px] xl:py-[6px] lg:pb-[2.5px] mobile:py-[2px] xl:w-[93px] lg:w-[68px] h-[auto] md:w-[47px] mobile:w-[32px] lg:rounded-tl-[12px] md:rounded-tl-[6px] mobile:rounded-tl-[4px] bg-[#FF7171] absolute right-0 translate-y-[-100%] top-0">
                <p className="xl:h-[19px] lg:h-[17px] md:h-[12px] mobile:h-[7px] xl:text-[16px] lg:text-[14px] md:text-[10px] mobile:text-[6px] font-[700] text-[#ffffff]">K17</p>
            </div>
            <div className=" w-[100%] xl:p-[20px] lg:p-[14px] md:pt-[5px] md:px-[10px] mobile:p-[5px] xl:h-[118px] lg:h-[88px] md:h-[59px] mobile:h-[37px] bg-primary lg:rounded-br-[20px]  md:rounded-br-[15px]">
              <div className="flex flex-col h-[100%] xl:gap-[12px] md:gap-[6px]  ">
                <h4 className=" font-[700]  xl:leading-[24.2px] lg:leading-[16.94px] xl:text-[20px] lg:text-[14px] md:text-[10px] mobile:text-[6px] text-[12px] text-[#fff] ">
                  Trần Văn Bảo Thắng
                </h4>
                <div className=" h-[auto] xl:text-[14px]  lg:text-[12px] md:text-[8px] mobile:text-[5px] xl:leading-[17px] lg:leading-[14.52px] md:leading-[9.6px] flex justify-between items-end ">
                  <div className="flex flex-col xl:gap-[8px] md:gap-[6px] mobile:gap-[4px]">
                    <p className="font-[500] text-[#fff]">
                      -DE170145
                    </p>
                    <p className="font-[500] text-[#fff]">
                      -Academic Member
                    </p>
                  </div>
                  <h3 className="absolute xl:bottom-[20px] lg:bottom-[14px] md:bottom-[10px] xl:right-[20px] lg:right-[14px] md:right-[10px] mobile:right-[5px] mobile:bottom-[5px] inline text-[#fff] font-[600] xl:text-[20px] lg:text-[16px] md:text-[10px] mobile:text-[6px]">
                    GEN 5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </li>
        ) )}
      </ul>
      <div className="mx-[auto] xl:mt-[40px] md:mt-[35px] mobile:mt-[20px]">
      <ul className="text-[16px] xl:gap-[16px] lg:gap-[12px] mobile:gap-[10px] flex justify-center font-['Inter'] not-italic ">
        <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] mobile:w-[30px] mobile:h-[30px]">
          <button className="rounded-[2px] w-[100%] h-[100%]  border-[1px] border-[#1111111A]">
            <Image
              src={vector}
              alt="button "
              className="mx-[auto] mt-[auto]"
            />
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] mobile:w-[30px] mobile:h-[30px] border-[1px] border-[#1111111A]">
            1
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] mobile:w-[30px] mobile:h-[30px] border-[1px] border-[#1111111A]">
            2
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] mobile:w-[30px] mobile:h-[30px] border-[1px] border-[#1111111A]">
            3
          </button>
        </li>
        <li className="">
          <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] mobile:w-[30px] mobile:h-[30px] border-[1px] border-[#1111111A]">
            4
          </button>
        </li>
        <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] mobile:w-[30px] mobile:h-[30px]">
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
