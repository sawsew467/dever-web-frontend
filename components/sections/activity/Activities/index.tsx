import React from "react";
import Image from "next/image";
import img from "@pageImage/activity/img.png";
import img3 from "@pageImage/activity/img3.png";
import img4 from "@pageImage/activity/img4.png";
import img5 from "@pageImage/activity/img5.png";
import img6 from "@pageImage/activity/img6.png";
import ArrowIcon from "@pageImage/activity/ArrowIcon.svg";
import SectionTitle from "@/components/SectionTitle";

function Activities() {
  const academicActivities = [
    {
      img: img,
      title: "Workshop",
      alt: "workshopImg",
      desc: "Workshops provide a valuable opportunity for hands-on learning",
    },
    {
      img: img,
      title: "Training",
      alt: "trainingImg",
      desc: "Training activity provide personal skills and professional skills.",
    },
    {
      img: img,
      title: "Talkshows",
      alt: "talshowsImg",
      desc: "Talkshows provide knowledge for members and non-members",
    },
  ];

  const extraActivies = [
    { img: img3, alt: "img" },
    { img: img4, alt: "img" },
    { img: img5, alt: "img" },
    { img: img6, alt: "img" },
    { img: img4, alt: "img" },
    { img: img3, alt: "img" },
    { img: img6, alt: "img" },
    { img: img5, alt: "img" },
    { img: img3, alt: "img" },
    { img: img4, alt: "img" },
    { img: img5, alt: "img" },
    { img: img6, alt: "img" },
  ];
  return (
    <>
      <section className="w-full h-full flex justify-center items-center">
        <div className="max-w-[1440px] w-full h-full xl:px-[80px] md:px-[40px] sm:px-[20px] flex flex-col justify-center items-center">
          <div className="bg-[#F8FCFF] flex flex-col w-full md:py-[60px] sm:py-[40px]">
            <SectionTitle
              title="Academic"
              subtitle="About our establishment and growth"
              textPosition="left"
            ></SectionTitle>
            <div className="flex flex-col mt-[20px] md:flex-row md:gap-0 sm:gap-[30px] justify-between w-full ">
              {academicActivities.map((activity, i) => (
                <>
                  <div
                    className="flex xl:w-[calc((100%-80px)/3)] md:w-[calc((100%-40px)/3)] w-full flex-col items-center gap-4"
                    key={i}
                  >
                    <Image
                      src={activity.img}
                      alt={activity.alt}
                      className=" object-cover xl:w-[400px] xl:h-[320px] lg:w-[283px] lg:h-[252px] md:w-[200px] md:h-[178px] sm:w-[320px] sm:h-[270px]"
                    ></Image>
                    <div className="flex flex-col items-center max-w-[277px] w-full">
                      <p className="lg:text-[40px] text-[#0065A9] font-bold lg:leading-[48px] md:text-[24px] md:leading-[29px] sm:leading-[48px] sm:text-[40px] mb-2">
                        {activity.title}
                      </p>
                      <p className="leading-[19px] lg:max-w-[277px] md:max-w-[188px] sm:w-full text-[16px] font-light text-center mb-[20px]">
                        {activity.desc}
                      </p>
                      <button className=" flex gap-1 flex-row items-center lg:px-[32px] lg:py-2 md:px-[10px] md:py-1 px-[32px] py-2 bg-[#0098FF] rounded-[2px]">
                        <p className="font-normal text-[16px] leading-[24px] text-white">
                          View more
                        </p>
                        <Image src={ArrowIcon} alt="arrowIcon"></Image>
                      </button>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full md:py-[60px] sm:py-[40px]">
            <SectionTitle
              title="Extracurricular"
              subtitle="About our establishment and growth"
              textPosition="left"
            ></SectionTitle>
            <div className="xl:max-w-[1280px] mt-5 md:block sm:grid sm:justify-center w-full gap-4 lg:columns-3 md:columns-2 sm:columns-1 sm:space-y-0  md:space-y-4">
              {extraActivies.map((activity, index) => (
                <Image
                  src={activity.img}
                  alt={activity.alt}
                  key={index}
                ></Image>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
