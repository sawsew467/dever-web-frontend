import React from "react";
import Image from "next/image";
import img from "@pageImage/activity/img.png";
import img3 from "@pageImage/activity/img3.png";
import img4 from "@pageImage/activity/img4.png";
import img5 from "@pageImage/activity/img5.png";
import img6 from "@pageImage/activity/img6.png";
import ArrowIcon from "@pageImage/activity/ArrowIcon.svg";
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
        <div className="max-w-[1440px] w-full h-full xl:px-[80px] px-[40px] flex flex-col justify-center items-center">
          <div className="bg-[#F8FCFF] flex flex-col w-full py-[60px]">
            <div className="flex flex-col px-[20px] border-l-8 border-[#FF0000] mb-[20px] xl:mb-[28px]">
              <p className="text-[#0098FF] xl:text-[40px] xl:leading-[48px] text-[24px] leading-[29px] font-bold ">
                Academic{" "}
              </p>
              <p className=" font-normal xl:text-[28px] xl:leading-[34px] text-base leading-[19px]  text-[#22181C] ">
                About our establishment and growth
              </p>
            </div>
            <div className="flex flex-row justify-between xl:max-w-[1280px] max-w-[944px] w-full ">
              {academicActivities.map((activity, i) => (
                <>
                  <div
                    className="flex xl:w-[calc((100%-80px)/3)] w-[calc((100%-40px)/3)] flex-col items-center gap-4"
                    key={i}
                  >
                    <Image
                      src={activity.img}
                      alt={activity.alt}
                      className="xl:max-w-[400px] lg:max-w-[283px] max-w-[200px] object-cover w-full xl:h-[320px] lg:h-[252px] h-[178px]"
                    ></Image>
                    <div className="flex flex-col items-center max-w-[277px] w-full">
                      <p className="lg:text-[40px] text-[#0065A9] font-bold lg:leading-[48px] text-[24px] leading-[29px] mb-2">
                        {activity.title}
                      </p>
                      <p className="leading-[19px] lg:max-w-[277px] max-w-[188px] text-[16px] font-light text-center mb-[20px]">
                        {activity.desc}
                      </p>
                      <button className=" flex gap-1 flex-row items-center px-[32px] py-2 bg-[#0098FF] rounded-[2px]">
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
          <div className="w-full mt-[60px] mb-[60px]">
            <div className="flex flex-col  px-[20px] border-l-8 border-[#FF0000] mb-[20px] xl:mb-[28px]">
              <p className="text-[#0098FF] xl:text-[40px] xl:leading-[48px] text-[24px] leading-[29px] font-bold ">
                Extracurricular
              </p>
              <p className="font-normal xl:text-[28px] xl:leading-[34px] text-base leading-[19px]  text-[#22181C] ">
                About our establishment and growth
              </p>
            </div>
            <div className="xl:max-w-[1280px]  w-full gap-4 lg:columns-3 columns-2 space-y-4">
              {extraActivies.map((activity, index) => (
                <Image
                  className="max-h-[420px]"
                  max-height={420}
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
