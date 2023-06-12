import React from "react";
import Image from "next/image";
import Link from "next/link";
import introduction from "../../assets/images/pages/home/introduction/introduce.png";

function Introduction() {
  return (
    <div className="w-screen bg-[#F8FCFF]  text-[#000000]">
      {/* h-[250px] */}
      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px] flex justify-between">
        {/* who we are */}
        <div className="w-[607px]">
          <div className="flex flex-col border-l-8 border-l-[#FF0000] pl-[12px]">
            <a className="text-[#0098FF] text-[40px] font-[700] h-[48px] flex items-center">
              WHO WE ARE?
            </a>
            <a className="text-[#22181C] text-[28px] h-[34px] flex items-center mt-[4px]">
              About our establishment and growth
            </a>
          </div>
          <div className=" pt-[28px] text-[16px]">
            <p className=" m-0 p0">
              Welcome to FU-DEVER, the programming club of FPT University! . At
              FU-DEVER, we strive to foster a vibrant community of aspiring
              programmers and provide a platform for skill development and
              collaboration.
              <br></br>
              <br></br>
              Whether you're a beginner or an experienced programmer seeking to
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
              inspiration, leaving a lasting impact on the university's
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
    </div>
  );
}

export default Introduction;
