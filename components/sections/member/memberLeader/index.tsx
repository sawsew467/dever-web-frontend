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
    <article className="max-w-[1440px] mx-[auto] pt-[60px] ">
      <div className=" justify-between relative items-end flex w-[100%] h-[auto] border-l-[8px] border-[#FF0000]">
        <div className="w-[100%] ml-[20px]  ">
          <h3
            className="mb-[4px] cursor-pointer w-[auto] uppercase text-[#0098FF]  leading-[48px] md:text-[40px] font-[800] h-[48px] 
                sm:text-[30px] "
          >
            CLUB LEADER MEMBERS
          </h3>
          <p className="">About our establishment and growth</p>
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
      <ul className="lg:gap-[40px]  sm:gap-[10px] gap-[5px] mt-[28px] flex flex-wrap lg:flex-[0_0_30%] lg:justify-between  justify-center">
        {data.map( (item , key)=> (
          <li key={key} className=" cursor-pointer  relative">
          <Image
            width={290}
            height={400}
            className="object-cover rounded-tl-[20px] rounded-br-[20px] lg:w-[290px] lg:h-[400px] sm:w-[200px] sm:h-[300px] 
                      w-[160px] h-[200px]"
            alt=""
            src={avatar}
          ></Image>
          <div className="h-[auto] absolute bottom-0 w-[100%]">
            <div className="px-[32px] py-[6px] w-[93px] h-[32px] rounded-tl-[12px] relative left-[100%] m-0 translate-x-[-100%] bg-[#C69C6D]">
                <p className="text-[16px] font-[700] text-[#ffffff] " >K17</p>
            </div>
            <div className="w-[100%] h-[118px] bg-primary rounded-br-[20px]">
              <div className="ml-[20px] h-[100%] pt-[20px]">
                <h4 className=" font-[700] h-[24px] lg:text-[20px] md:text-[15px] text-[12px] text-[#fff] ">
                  Trần Văn Bảo Thắng
                </h4>
                <div className="mt-[12px] h-[auto] flex justify-between items-end ">
                  <div className="mb-[20px]">
                    <p className="font-[700] text-[14px]  leading-[17px] text-[#fff]">
                      -DE170145
                    </p>
                    <p className="mt-[8px] font-[700] text-[14px]  leading-[17px] text-[#fff]">
                      -Academic Member
                    </p>
                  </div>
                  <h3 className="h-[24px] mr-[20px] mb-[20px] inline text-[#fff] font-[800] sm:text-[20px] text-[14px]">
                    GEN 5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </li>
        ) )}
      </ul>
      <div className="mx-[auto] my-[40px]">
        <ul className="gap-[16px] flex justify-center font-['Inter'] not-italic ">
          <li className="">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              <Image
                src={vector}
                alt="button "
                className="  mx-[auto] mt-[auto]"
              />
            </button>
          </li>
          <li className="">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              1
            </button>
          </li>
          <li className="">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              2
            </button>
          </li>
          <li className="">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              3
            </button>
          </li>
          <li className="">
            <button className=" sm:text-[16px] text-[12px] rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] border-[1px] border-[#1111111A]">
              4
            </button>
          </li>
          <li className="">
            <button className=" rotate-180  text-[12px]  sm:text-[16px] rounded-[2px]   w-[40px] h-[40px] border-[1px] border-[#1111111A]">
              <Image
                src={vector}
                alt="button "
                className="  mx-[auto] mt-[auto]   "
              />
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ListLeaderMember;
