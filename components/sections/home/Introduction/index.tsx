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
      <div className="max-w-[1440px] mx-auto px-[20px] sm:px-[40px] md:px-[40px] lg:px-[80px] py-[40px] sm:py-[60px] md:py-[60px] lg:py-[60px] flex justify-between lg:flex-row md:flex-row sm:flex-row flex-col">
        <div className="w-fit sm:w-[296px] md:w-[505px] lg:w-[607px]">
          <SectionTitle
            title="who are we"
            subtitle="About our establishment and growth"
            textPosition="left"
          ></SectionTitle>
          <div className="pt-[20px] sm:pt-[20px] md:pt-[40px] lg:pt-[28px] text-[16px]">
            <p className=" m-0 p0 text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-[normal] font-[400]">
              Welcome to FU-DEVER, the programming club of FPT University! . At
              FU-DEVER, we strive to foster a vibrant community of aspiring
              programmers and provide a platform for skill development and
              collaboration.
              <br/>
              <br/>
              Whether you&apos;re a beginner or an experienced programmer seeking to
              expand your knowledge, our club offers a range of activities,
              including coding challenges, workshops, and coding competitions.

              <span id="dots" className="md:hidden lg:hidden" style={{
                display: isReadMore ? "none" : ""
              }}>
                <br />
                ...</span>

              <span className="hidden sm:hidden md:block lg:block " style={{
                display: isReadMore ? "block" : ""
              }}>
                <br/>
                FU-DEVER has experienced a remarkable journey of growth. From a
                small group of passionate students, it has expanded into a
                thriving community of programmers from various disciplines.
                <br/>
                <br/>
                Through organizing larger events, hosting esteemed speakers, and
                fostering innovation, FU-DEVER has become a hub of knowledge and
                inspiration, leaving a lasting impact on the university&apos;s
                programming landscape.
              </span>

              <span className="md:hidden lg:hidden">
                <br />
                <br />
                <button className="px-[16px] py-[8px] border-[1px] border-primary text-primary rounded-lg flex items-center outline-none" 
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
        <div className="flex sm:items-start md:items-end lg:items-end pt-[20px] sm:pt-[0px] md:pt-[0px] lg:pt-[0px]">
          <Image
            className="w-fit sm:w-[320px] sm:h-[198px] md:w-[399px] md:h-[250px] lg:w-[597px] lg:h-[371px] mt-[0px] sm:mt-[90px] md:mt-[0px]  "
            src={introduction}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0065A9] via-[#0098FF] to-[#0065A9]  text-[#fff]">
        <div className="max-w-[1440px] w-[100%] mx-auto px-[40px] lg:px-[80px] py-[40px] sm:py-[24px] md:py-[40px] lg:py-[40px] flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between">
          {data.map((item, Introduction) => (
            <div className="flex flex-col items-center" key={Introduction}>
              <a className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-[700] h-[48px]">{item.number}</a>
              <a className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[32px] font-[700] mt-[8px] h-[39px]">
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
