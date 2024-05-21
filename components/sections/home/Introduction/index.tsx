"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import introduction from "@pageImage/home/introduction/introduce.png";
import SectionTitle from "@/components/SectionTitle";
import arrowRight from "@pageImage/home/icon/Chevron Down.svg";
import VisibilitySensor from "react-visibility-sensor";

import "./style.css";
function Counter({
  initialValue,
  maxValue,
  speed,
  startCounting,
}: {
  initialValue: number;
  maxValue: number;
  speed: number;
  startCounting: boolean;
}): JSX.Element {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (startCounting && count < maxValue) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [count, maxValue, speed, startCounting]);

  useEffect(() => {
    if (count === 0) {
      setCount(1);
    }
  }, [count, maxValue]);
  return <p>{count}+</p>;
}

function Introduction() {
  const [isReadMore, setReadMore] = useState<boolean>(false);
  const [isDesktopSite, setIsDesktopSite] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasCounted, setHasCounted] = useState<boolean>(false);

  const handleScroll = () => {
    const pos = window.pageYOffset;
    setScrollPosition(pos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollEventProcess = () => {
    if (scrollPosition > 1440) {
      setHasCounted(true);
    } else if (scrollPosition == 0) {
      setHasCounted(false);
    }
  };
  useEffect(() => {
    scrollEventProcess();
  });

  const data = [
    {
      number: 100,
      tittle: "Members",
      speed: 30,
    },
    {
      number: 5,
      tittle: "Years grow",
      speed: 500,
    },
    {
      number: 10,
      tittle: "Projects",
      speed: 300,
    },
    {
      number: 20,
      tittle: "Prizes",
      speed: 150,
    },
  ];

  const handleReadMore = () => {
    setReadMore((isReadMore) => !isReadMore);
    setIsDesktopSite((isDesktopSite) => false);
  };

  return (
    <div className="bg-[#F8FCFF]  text-[#000000]">
      <div className="max-w-[1440px] mx-auto  flex justify-end xl:flex-row lg:flex-row md:flex-row flex-col relative">
        <div className=" lg:w-[50%] md:w-[62%] sm:w-full pl-[20px] md:pl-[40px] lg:pl-[40px] xl:pl-[80px]  py-[40px] md:py-[60px] lg:py-[60px] xl:py-[60px] md:absolute md:left-0 z-10">
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
              <br />
              <br />
              Whether you&apos;re a beginner or an experienced programmer
              seeking to expand your knowledge, our club offers a range of
              activities, including coding challenges, workshops, and coding
              competitions.
              <span
                id="dots"
                className="lg:hidden xl:hidden"
                style={{
                  display: isReadMore ? "none" : "",
                }}
              >
                <br />
                ...
              </span>
              <span
                className="hidden md:hidden lg:block xl:block "
                style={{
                  display: isReadMore ? "block" : "",
                }}
              >
                <br />
                FU-DEVER has experienced a remarkable journey of growth. From a
                small group of passionate students, it has expanded into a
                thriving community of programmers from various disciplines.
                <br />
                <br />
                Through organizing larger events, hosting esteemed speakers, and
                fostering innovation, FU-DEVER has become a hub of knowledge and
                inspiration, leaving a lasting impact on the university&apos;s
                programming landscape.
              </span>
              <span className="lg:hidden xl:hidden">
                <br />
                <br />
                <button
                  className="px-[16px] py-[8px] border-[1px] border-primary text-primary rounded-md flex items-center outline-none"
                  onClick={handleReadMore}
                >
                  {isReadMore ? "Read less" : "Read more"}{" "}
                  <span>
                    <Image
                      loading="lazy"
                      src={arrowRight}
                      alt="Picture of the author"
                      className="ml-[5px] w-[16px] h-[16px]"
                      style={{
                        rotate: isReadMore ? "180deg" : "",
                      }}
                    />
                  </span>
                </button>
              </span>
            </p>
          </div>
        </div>
        <div className="flex md:items-end lg:items-end xl:items-end mt-[20px] md:mt-[0px] lg:pt-[0px] xl:pt-[0px] w-fit lg:h-[519px] md:h-[450px] relative z-0">
          <span className="absolute h-full w-[200px] background_blur_left_to_right left-0"></span>
          <Image
            loading="lazy"
            className="w-auto h-full "
            src={introduction}
            alt="Picture of the author"
          />
          <span className="absolute h-full w-[200px] background_blur_right_to_left right-0"></span>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0065A9] via-[#0098FF] to-[#0065A9]  text-[#fff]">
        <div className="max-w-[1440px] w-[100%] mx-auto px-[40px] xl:px-[80px] py-[40px] md:py-[24px] lg:py-[40px] xl:py-[40px] flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between">
          {data.map((item, index) => (
            <VisibilitySensor key={index} partialVisibility>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className="flex flex-col items-center">
                  <span className="text-[32px] md:text-[32px] lg:text-[32px] xl:text-[40px] font-[700] h-[48px]">
                    {isVisible && !hasCounted ? (
                      <Counter
                        initialValue={0}
                        maxValue={item.number}
                        speed={item.speed}
                        startCounting={isVisible}
                      />
                    ) : (
                      item.number + "+"
                    )}
                  </span>
                  <span className="text-[16px] md:text-[16px] lg:text-[16px] xl:text-[32px] font-[700] mt-[8px] h-[39px]">
                    {item.tittle}
                  </span>
                </div>
              )}
            </VisibilitySensor>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
