import React from "react";
import Image from "next/image";
import introduction from "@pageImage/home/introduction/introduce.png";
import SectionTittle from "@/components/SectionTittle";

function Introduction() {
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
  return (
    <div className="bg-[#F8FCFF]  text-[#000000]">
      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px] flex justify-between">
        <div className="w-[607px]">
          <SectionTittle
            tittle="who are we"
            subtittle="About our establishment and growth"
            textPosition="left"
          ></SectionTittle>
          <div className=" pt-[28px] text-[16px]">
            <p className=" m-0 p0">
              Welcome to FU-DEVER, the programming club of FPT University! . At
              FU-DEVER, we strive to foster a vibrant community of aspiring
              programmers and provide a platform for skill development and
              collaboration.
              <br></br>
              <br></br>
              Whether you&apos;re a beginner or an experienced programmer seeking to
              expand your knowledge, our club offers a range of activities,
              including coding challenges, workshops, and coding competitions.
              <br></br>
              <br></br>
              FU-DEVER has experienced a remarkable journey of growth. From a
              small group of passionate students, it has expanded into a
              thriving community of programmers from various disciplines.
              <br></br>
              <br></br>
              Through organizing larger events, hosting esteemed speakers, and
              fostering innovation, FU-DEVER has become a hub of knowledge and
              inspiration, leaving a lasting impact on the university&apos;s
              programming landscape.
            </p>
          </div>
        </div>
        <div className="w-[597px] flex items-end">
          <Image
            className="w-[597px] h-[371px]"
            src={introduction}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0065A9] via-[#0098FF] to-[#0065A9]  text-[#fff]">
        <div className="max-w-[1440px] w-[100%] mx-auto px-[80px] py-[40px] flex justify-between">
          {data.map((item, Introduction) => (
            <div className="flex flex-col items-center" key={Introduction}>
              <a className="text-[40px] font-[700] h-[48px]">{item.number}</a>
              <a className="text-[32px] font-[700] mt-[8px] h-[39px]">
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
