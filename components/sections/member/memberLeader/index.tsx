import React from "react";
import Image from "next/image";
import fillter from "@pageImage/member/leader/filter.svg";
import avatar from "@pageImage/member/avatar/topface/avatar.png";
import vector from "@pageImage/member/normal/vector.svg";
import SectionTittle from "@/components/SectionTitle";
const ListLeaderMember = () => {
  const data = [
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
    {
      url: "/assets/images/pages/member/avatar/topface/avatar.png",
      title: "Trần văn bảo thắng",
    },
  ];
  return (
    <article className="md:py-[60px] sm:py-[40px]  ">
      <div className="xl:max-w-[1280px] mx-[auto] ">
        <div className="justify-between relative items-end md:flex-row flex sm:flex-col md:items-end sm:items-start xl:gap-0 sm:gap-[25px] w-[100%] h-[auto] ">
         <SectionTittle title="CLUB LEADER MEMBERS" subtitle="Meet our exceptional team leaders." textPosition="left"></SectionTittle>
          <button className="lg:min-w-[93px] lg:h-[35px] md:min-w-[71px] sm:h-[29px] lg:px-[16px] sm:w-[69px] lg:py-[8px] sm:py-[6px] sm:px-[12px] flex bg-[#D9D9D9AB] rounded-[4px] border-0 gap-[4px] justify-around items-center  ">
            <Image
              src={fillter}
              width={17}
              height={17}
              alt="button fillter"
              className="lg:w-[17px] lg:h-[17px] sm:w-[14px] sm:h-[14px] sm:mb-[2px]  "
            />
            <p className=" font-[600] lg:text-[16px] sm:text-[12px] lg:h-[19px] md:h-[15px] md:mb-[1px] flex items-center ">
              Filter
            </p>
          </button>
        </div>
        <ul className=" xl:mt-[28px] w-[100%] md:mt-[40px] sm:mt-[20px] xl:gap-[40px] md:gap-[35px] sm:gap-[20px] flex-wrap flex justify-start">
          {data.map((item, key) => (
            <li
              key={key}
              className="xl:w-[calc((100%-40px*3)/4)] xl:aspect-[29/40]  md:w-[calc((100%-35px*3)/4)] lg:aspect-[7/10] md:aspect-[146/204] sm:w-[calc((100%-20px*2)/3)] sm:aspect-[93/123] h-[auto]  cursor-pointer  relative"
            >
              <Image
                width={290}
                height={400}
                className="object-cover lg:rounded-tl-[20px] lg:rounded-br-[20px] md:rounded-tl-[15px] md:rounded-br-[15px] sm:rounded-tl-[8px] sm:rounded-br-[8px] w-[100%] h-[100%] "
                alt=""
                src={avatar}
              ></Image>
              <div className="h-[auto] absolute bottom-0 w-[100%]">
                <div className=" flex justify-center lg:pt-[3.75px] xl:py-[6px] lg:pb-[2.5px] sm:py-[2px] xl:w-[93px] lg:w-[68px] h-[auto] md:w-[47px] sm:w-[32px] lg:rounded-tl-[12px] md:rounded-tl-[6px] sm:rounded-tl-[4px] bg-[#FF7171] absolute right-0 translate-y-[-100%] top-[0.2px]">
                  <p className="xl:h-[19px] lg:h-[17px] md:h-[12px] sm:h-[7px] xl:text-[16px] lg:text-[14px] md:text-[10px] sm:text-[6px] font-[700] text-[#ffffff]">
                    K17
                  </p>
                </div>
                <div className=" w-[100%] xl:p-[20px] lg:p-[15px] md:pt-[5px] md:px-[10px] md:py-0 sm:p-[5px] xl:h-[118px] lg:h-[88px] md:h-[59px] sm:h-[37px] bg-primary lg:rounded-br-[20px]  md:rounded-br-[15px] sm:rounded-br-[4px]">
                  <div className="flex flex-col h-[100%] xl:gap-[12px] md:gap-[6px] sm:gap-[4px] ">
                    <h4 className=" font-[700]  xl:leading-[24.2px] lg:leading-[16.94px] md:leading-[12px] sm:leading-[7px] xl:text-[20px] lg:text-[14px] md:text-[10px] sm:text-[6px] text-[12px] text-[#fff] ">
                      Trần Văn Bảo Thắng
                    </h4>
                    <div className=" h-[auto] xl:text-[14px]  lg:text-[12px] md:text-[8px] sm:text-[5px] xl:leading-[17px] lg:leading-[14.52px] md:leading-[9.6px] sm:leading-[6px] flex justify-between items-end ">
                      <div className="flex flex-col xl:gap-[8px] md:gap-[6px] sm:gap-[4px]">
                        <p className="font-[500] text-[#fff]">-DE170145</p>
                        <p className="font-[500] text-[#fff]">
                          -Academic Member
                        </p>
                      </div>
                      <h3 className="absolute xl:bottom-[20px] lg:bottom-[14px] md:bottom-[10px] xl:right-[20px] lg:right-[14px] md:right-[10px] sm:right-[5px] sm:bottom-[5px] inline text-[#fff] font-[600] xl:text-[20px] lg:text-[16px] md:text-[10px] sm:text-[6px]">
                        GEN 5
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mx-[auto] xl:mt-[40px] md:mt-[35px] sm:mt-[20px]">
          <ul className="lg:text-[16px] sm:text-[12px] font-[400] xl:gap-[16px] lg:gap-[12px] sm:gap-[10px] flex justify-center font-['Inter'] not-italic ">
            <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] sm:w-[30px] sm:h-[30px]">
              <button className="rounded-[2px] w-[100%] h-[100%]  border-[1px] border-[#1111111A]">
                <Image
                  src={vector}
                  alt="button "
                  className="lg:w-[6px] lg:h-[10px] sm:w-[4px] sm:h-[8px] mx-[auto] mt-[auto]"
                  width={16}
                  height={16}
                />
              </button>
            </li>
            <li className="">
              <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] border-[1px] border-[#1111111A]">
                1
              </button>
            </li>
            <li className="">
              <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] border-[1px] border-[#1111111A]">
                2
              </button>
            </li>
            <li className="">
              <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff] mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] border-[1px] border-[#1111111A]">
                3
              </button>
            </li>
            <li className="">
              <button className=" rounded-[2px] hover:bg-[#0098FF] hover:text-[#fff] focus:bg-[#0098FF] focus:text-[#fff]  mx-[auto] mt-[auto] xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] border-[1px] border-[#1111111A]">
                4
              </button>
            </li>
            <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] sm:w-[30px] sm:h-[30px]">
              <button className="rotate-[180deg] rounded-[2px] w-[100%] h-[100%] border-[1px] border-[#1111111A]">
                <Image
                  src={vector}
                  alt="button "
                  className="lg:w-[6px] lg:h-[10px] sm:w-[4px] sm:h-[8px] mx-[auto] mt-[auto]"
                  width={16}
                  height={16}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ListLeaderMember;
