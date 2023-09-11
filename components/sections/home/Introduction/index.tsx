"use client"
import React, { useState } from "react";
import Image from "next/image";
import introduction from "@pageImage/home/introduction/introduce.png";
import SectionTitle from "@/components/SectionTitle";
import arrowRight from "@pageImage/home/icon/Chevron Down.svg"

function Introduction() {
  const [isReadMore, setReadMore] = useState<boolean>(false);
  const [isDesktopSite, setIsDesktopSite] = useState<boolean>(true);
  
  const data = [
    {
      number: "100+",
      tittle: "Members",
    },
    {
      number: "5+",
      tittle: "Years grow",
    },
    {
      number: "10+",
      tittle: "Projects",
    },
    {
      number: "20+",
      tittle: "Prizes",
    },
  ];

  const handleReadMore = () => {
    setReadMore(isReadMore => !isReadMore); 
    setIsDesktopSite(isDesktopSite => false);
  }

  return (
    <div className="bg-[#F8FCFF]  text-[#000000]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] py-[40px] md:py-[60px] lg:py-[60px] xl:py-[60px] flex justify-between xl:flex-row lg:flex-row md:flex-row flex-col">
        <div className="w-fit md:w-[296px] lg:w-[505px] xl:w-[607px]">
          <SectionTitle
            title="who are we"
            subtitle="About our establishment and growth"
            textPosition="left"
          ></SectionTitle>
          <div className="pt-[20px] md:pt-[20px] lg:pt-[40px] xl:pt-[28px] text-[16px]">
            <p className=" m-0 p0 text-[12px] md:text-[12px] lg:text-[14px] xl:text-[16px] leading-[normal] font-[400]">
              Welcome to FU-DEVER, the programming club of FPT University! . At
              FU-DEVER, we strive to foster a vibrant community of aspiring
              programmers and provide a platform for skill development and
              collaboration.
              <br/>
              <br/>
              Whether you&apos;re a beginner or an experienced programmer seeking to
              expand your knowledge, our club offers a range of activities,
              including coding challenges, workshops, and coding competitions.

              <span id="dots" className="lg:hidden xl:hidden" style={{
                display: isReadMore ? "none" : ""
              }}>
                <br />
                ...</span>

              <span className="hidden md:hidden lg:block xl:block " style={{
                display: isReadMore ? "block" : ""
              }}>
                <br/>
                FU-DEVER has experienced a remarkable journey of growth. From a
                mdall group of passionate students, it has expanded into a
                thriving community of programmers from various disciplines.
                <br/>
                <br/>
                Through organizing larger events, hosting esteemed speakers, and
                fostering innovation, FU-DEVER has become a hub of knowledge and
                inspiration, leaving a lasting impact on the university&apos;s
                programming landscape.
              </span>

              <span className="lg:hidden xl:hidden">
                <br />
                <br />
                <button className="px-[16px] py-[8px] border-[1px] border-primary text-primary rounded-md flex items-center outline-none" 
                  onClick={handleReadMore}
                >{isReadMore ? "Read less" : "Read more"} <span>
                  <Image
                      src={arrowRight}
                      alt="Picture of the author"
                      className="ml-[5px] w-[16px] h-[16px]"
                      style={{
                        rotate: isReadMore ? "180deg" : ""
                      }}
                  />
                  </span></button>
              </span>
            </p>
          </div>
        </div>
        <div className="flex md:items-start lg:items-end xl:items-end pt-[20px] md:pt-[0px] lg:pt-[0px] xl:pt-[0px]">
          <Image
            className="w-fit md:w-[320px] md:h-[198px] lg:w-[399px] lg:h-[250px] xl:w-[597px] xl:h-[371px] mt-[0px] md:mt-[100px] lg:mt-[0px]  "
            src={introduction}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0065A9] via-[#0098FF] to-[#0065A9]  text-[#fff]">
        <div className="max-w-[1440px] w-[100%] mx-auto px-[40px] xl:px-[80px] py-[40px] md:py-[24px] lg:py-[40px] xl:py-[40px] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
          {data.map((item, Introduction) => (
            <div className="flex flex-col items-center" key={Introduction}>
              <a className="text-[32px] md:text-[32px] lg:text-[32px] xl:text-[40px] font-[700] h-[48px]">{item.number}</a>
              <a className="text-[16px] md:text-[16px] lg:text-[16px] xl:text-[32px] font-[700] mt-[8px] h-[39px]">
                {item.tittle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
