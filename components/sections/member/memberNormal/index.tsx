"use client";
import React from "react";
import Image from "next/image";
import fillter from "@pageImage/member/leader/filter.svg";
import vector from "@pageImage/member/normal/vector.svg";
import avatar from "@pageImage/member/avatar/topface/avatar.png";
import SectionTittle from "@/components/SectionTitle";
import { motion } from "framer-motion";
import tranquockhanh from "@pageImage/member/normal/tranquockhanh.jpg";
import leducanhphuong from "@pageImage/member/normal/leducanhphuong.jpg";
import namphuoctruonghai from "@pageImage/member/normal/namphuoctruonghai.jpg";
import nguyenhuuson from "@pageImage/member/normal/nguyenhuuson.jpg";
import nguyentandat from "@pageImage/member/normal/nguyentandat.jpg";
import phanquocthaibao from "@pageImage/member/normal/phanquocthaibao.jpg";
import thantrongan from "@pageImage/member/normal/thantrongan.jpg";
import vothithuysuong from "@pageImage/member/normal/vothithuysuong.jpg";
import vovanvu from "@pageImage/member/normal/vovanvu.jpg";
import nguyenthaibao from "@pageImage/member/leader/nguyenthaibao.jpg";
const parent: any = {
  show: {
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};
const child: any = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: [1.2, 1],
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.5,
    },
  },
};
const ListMember = () => {
  const data = [
    {
      name: "Lê Đức Anh Phương",
      idStudent: "DE180914",
      course: "K18",
      url: leducanhphuong,
      title: "Lê Đức Anh Phương",
      position: "Academic Board",
    },
    {
      name: "Nguyễn Thái Bảo",
      idStudent: "DE170224",
      course: "K17",
      url: nguyenthaibao,
      title: "Nguyễn Thái Bảo",
      position: "Academic Board",
    },
    {
      name: "Trần Quốc Khánh",
      idStudent: "DE180301",
      course: "K18",
      url: tranquockhanh,
      title: "Trần Quốc Khánh",
      position: "Academic Board",
    },
    {
      name: "Võ Văn Vũ",
      idStudent: "DE170201",
      course: "K17",
      url: vovanvu,
      title: "Võ Văn Vũ",
      position: "Academic Board",
    },
    {
      name: "Thân Trọng An",
      idStudent: "DE170029",
      course: "K17",
      url: thantrongan,
      title: "Thân Trọng An",
      position: "Academic Board",
    },
    {
      name: "Đoàn Phước Trường Hải",
      idStudent: "DE180660",
      course: "K18",
      url: namphuoctruonghai,
      title: "Đoàn Phước Trường Hải",
      position: "Media Board",
    },

    {
      name: "Nguyễn Hữu Sơn",
      idStudent: "DE180845",
      course: "K18",
      url: nguyenhuuson,
      title: "Nguyễn Hữu Sơn",
      position: "Event Board",
    },
    {
      name: "Phan Quốc Thái Bảo",
      idStudent: "DE181053",
      course: "K18",
      url: phanquocthaibao,
      title: "Phan Quốc Thái Bảo",
      position: "Academic Board",
    },
    {
      name: "Nguyễn Tấn Đạt",
      idStudent: "DE180864",
      course: "K18",
      url: nguyentandat,
      title: "Nguyễn Tấn Đạt",
      position: "Academic Board",
    },
    {
      name: "Võ Thị Thùy Sương",
      idStudent: "DE180087",
      course: "K18",
      url: vothithuysuong,
      title: "Võ Thị Thùy Sương",
      position: "Media Board",
    },
  ].sort((a : any, b : any)=>(a.name.localeCompare(b.name)));;
  return (
    <article className="mx-[auto] md:pb-[60px] sm:pb-[40px]">
      <div className="xl:max-w-[1280px] mx-[auto] px-[auto]">
        <div className="justify-between relative items-end md:flex-row flex sm:flex-col md:items-end  sm:items-start xl:gap-0 sm:gap-[25px] w-[100%] h-[auto] ">
          <SectionTittle
            title="CLUB MEMBERS"
            subtitle="Meet our exceptional team leaders."
            textPosition="left"
          ></SectionTittle>
          {/* <button className="lg:min-w-[93px] lg:h-[35px] md:min-w-[71px] sm:h-[29px] lg:px-[16px] sm:w-[69px] lg:py-[8px] sm:py-[6px] sm:px-[12px] flex bg-[#D9D9D9AB] rounded-[4px] border-0 gap-[4px] justify-around items-center  ">
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
          </button> */}
        </div>
        <motion.ul
          initial="hidden"
          whileInView="show"
          variants={parent}
          className=" xl:mt-[28px] w-[100%] md:mt-[40px] sm:mt-[20px] xl:gap-[40px] md:gap-[35px] sm:gap-[20px] flex-wrap flex justify-start"
        >
          {data.map((item, key) => (
            <motion.li
              variants={child}
              key={key}
              className="xl:w-[calc((100%-40px*3)/4)] xl:aspect-[29/40]  md:w-[calc((100%-35px*3)/4)] lg:aspect-[7/10] md:aspect-[146/204] sm:w-[calc((100%-20px*2)/3)] sm:aspect-[93/123] h-[auto]  cursor-pointer  relative"
            >
              <Image
                width={290}
                height={400}
                className="pointer-events-none object-cover lg:rounded-tl-[20px] lg:rounded-br-[20px] md:rounded-tl-[15px] md:rounded-br-[15px] sm:rounded-tl-[8px] sm:rounded-br-[8px] w-[100%] h-[100%] "
                alt={item?.title}
                src={item?.url}
              ></Image>
              <div className="h-[auto] absolute bottom-0 w-[100%]">
                <div className=" flex justify-center lg:pt-[3.75px] xl:py-[6px] lg:pb-[2.5px] sm:py-[2px] xl:w-[93px] lg:w-[68px] h-[auto] md:w-[47px] sm:w-[32px] lg:rounded-tl-[12px] md:rounded-tl-[6px] sm:rounded-tl-[4px] bg-[#C69C6D] absolute right-0 translate-y-[-100%] top-[0.2px]">
                  <p className="xl:h-[19px] lg:h-[17px] md:h-[12px] sm:h-[7px] xl:text-[16px] lg:text-[14px] md:text-[10px] sm:text-[6px] font-[700] text-[#ffffff]">
                    {item?.course}
                  </p>
                </div>
                <div className=" w-[100%] xl:p-[20px] lg:p-[15px] md:pt-[5px] md:px-[10px] md:py-0 sm:p-[5px] xl:h-[118px] lg:h-[88px] md:h-[59px] sm:h-[37px] bg-primary lg:rounded-br-[20px]  md:rounded-br-[15px] sm:rounded-br-[4px]">
                  <div className="flex flex-col h-[100%] xl:gap-[12px] md:gap-[6px] sm:gap-[4px] ">
                    <h4 className=" font-[700]  xl:leading-[24.2px] lg:leading-[16.94px] md:leading-[12px] sm:leading-[7px] xl:text-[20px] lg:text-[14px] md:text-[10px] sm:text-[6px] text-[12px] text-[#fff] ">
                      {item?.name}
                    </h4>
                    <div className=" h-[auto] xl:text-[14px]  lg:text-[12px] md:text-[8px] sm:text-[5px] xl:leading-[17px] lg:leading-[14.52px] md:leading-[9.6px] sm:leading-[6px] flex justify-between items-end ">
                      <div className="flex flex-col xl:gap-[8px] md:gap-[6px] sm:gap-[4px]">
                        <p className="font-[500] text-[#fff]">
                          -{item?.idStudent}
                        </p>
                        <p className="font-[500] text-[#fff]">
                          -{item?.position}
                        </p>
                      </div>
                      <h3 className="absolute xl:bottom-[20px] lg:bottom-[14px] md:bottom-[10px] xl:right-[20px] lg:right-[14px] md:right-[10px] sm:right-[5px] sm:bottom-[5px] inline text-[#fff] font-[600] xl:text-[20px] lg:text-[16px] md:text-[10px] sm:text-[6px]">
                        GEN 5
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <div className="mx-[auto] xl:mt-[40px] md:mt-[35px] sm:mt-[20px]">
          <ul className="lg:text-[16px] sm:text-[12px] font-[400] xl:gap-[16px] lg:gap-[12px] sm:gap-[10px] flex justify-center font-['Inter'] not-italic ">
            <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] sm:w-[30px] sm:h-[30px]">
              <button className="cursor-not-allowed rounded-[2px] w-[100%] h-[100%]  border-[1px] border-[#1111111A]">
                <Image
                  src={vector}
                  alt="button "
                  className="pointer-events-none lg:w-[6px] lg:h-[10px] sm:w-[4px] sm:h-[8px] mx-[auto] mt-[auto]"
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
            <li className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] sm:w-[30px] sm:h-[30px]">
              <button className="cursor-not-allowed rotate-[180deg] rounded-[2px] w-[100%] h-[100%] border-[1px] border-[#1111111A]">
                <Image
                  src={vector}
                  alt="button "
                  className="pointer-events-none lg:w-[6px] lg:h-[10px] sm:w-[4px] sm:h-[8px] mx-[auto] mt-[auto]"
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

export default ListMember;
