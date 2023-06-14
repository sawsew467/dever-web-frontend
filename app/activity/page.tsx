import React from "react";
import Image from "next/image";
import img from "@pageImage/activity/img.png";
import img3 from "@pageImage/activity/img3.png";
import img4 from "@pageImage/activity/img4.png";
import img5 from "@pageImage/activity/img5.png";
import img6 from "@pageImage/activity/img6.png";
import banner from "@pageImage/activity/banner.png";
import ArrowIcon from "@pageImage/activity/ArrowIcon.svg";
import facebook from "@pageImage/activity/facebook.svg";
function index() {
  const activity = [
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
      desc: "Talkshows provide wider knowledge for both members and non-members",
    },
  ];

  return (
    <section className="w-full h-full flex justify-center items-center relative top-[64px] ">
      <div className=" max-w-[1440px] w-full h-full px-[80px] flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-between items-center mt-[70px] mb-[45px]">
          <p className="max-w-[266px] w-full font-normal italic text-sm leading-[17px] text-[#0098FF]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black text-[32px] leading-[39px] stroke-text ">
              Activities in
            </p>
            <p className="uppercase font-black text-[40px] leading-[48px] text-[#0098FF]">
              {" "}
              fu-dever club
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[20px]">
            <p className="font-black text-[24px] leading-[29px] text-[#0098FF] opacity-50 max-w-[80px] w-full">
              Follow us
            </p>
            <Image src={facebook} alt="facebookIcon"></Image>
          </div>
        </div>
        <div className="w-full mb-[60px] flex flex-col items-center justify-center">
          <Image src={banner} alt="bannerImg"></Image>
        </div>
        <div className="bg-[#F8FCFF] flex flex-col w-full py-[60px]">
          <div className="flex flex-col gap-[4px] px-[20px] border-l-8 border-[#FF0000] mb-[28px]">
            <p className="text-[#0098FF] text-[40px] font-bold leading-[48px]">
              Academic{" "}
            </p>
            <p className=" font-normal text-[28px] text-[#22181C] leading-[34px]">
              About our establishment and growth
            </p>
          </div>
          <div className="flex flex-row justify-between max-w-[1280px] w-full ">
            {activity.map((activity, i) => (
              <>
                <div
                  className="flex w-[calc((100%-80px)/3)] flex-col items-center gap-4"
                  key={i}
                >
                  <Image
                    src={activity.img}
                    alt={activity.alt}
                    className="max-w-[400px] object-cover w-full h-[320px]"
                  ></Image>
                  <div className="flex flex-col items-center max-w-[277px] w-full">
                    <p className="text-[40px] text-[#0065A9] font-bold leading-[48px] mb-2">
                      {activity.title}
                    </p>
                    <p className="leading-[19px] text-[16px] font-light text-center mb-[20px]">
                      {activity.desc}
                    </p>
                    <button className=" flex gap-1 flex-row items-center px-[32px] py-2 bg-[#0098FF] rounded-[2px]">
                      <p className="font-normal text-[16px] text-white">
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
          <div className="flex flex-col gap-[4px] px-[20px] border-l-8 border-[#FF0000] mb-[28px]">
            <p className="text-[#0098FF] text-[40px] font-bold leading-[48px]">
              Extracurricular
            </p>
            <p className=" font-normal text-[28px] text-[#22181C] leading-[34px]">
              About our establishment and growth
            </p>
          </div>
          <div className="max-w-[1280px] w-full gap-4 columns-3 space-y-4">
            <Image src={img3} alt="img3"></Image>
            <Image src={img4} alt="img3"></Image>
            <Image src={img5} alt="img3"></Image>
            <Image src={img6} alt="img3"></Image>
            <Image src={img4} alt="img3"></Image>
            <Image src={img3} alt="img3"></Image>
            <Image src={img6} alt="img3"></Image>
            <Image src={img5} alt="img3"></Image>
            <Image src={img3} alt="img3"></Image>
            <Image src={img4} alt="img3"></Image>
            <Image src={img5} alt="img3"></Image>
            <Image src={img6} alt="img3"></Image>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
