import React from "react";
import Image from "next/image";
import logodever1 from "../../assets/images/footer/logodever1.svg";
import facebookLogo from "../../assets/images/footer/facebook-box-fill.svg";
import githubLogo from "../../assets/images/footer/github-fill.svg";
import tiktokLogo from "../../assets/images/footer/Tiktok.svg";
import mail from "../../assets/images/footer/mail-line.svg";
import phone from "../../assets/images/footer/phone-line.svg";
import mapPin from "../../assets/images/footer/map-pin-line.svg";
import fudever from "../../assets/images/footer/FU-DEVER.svg";

function index() {
  const data = [
    {
      logo: mail,
      tittle: "club.dever@gmail.com",
    },
    {
      logo: phone,
      tittle: "club.dever@gmail.com",
    },
    {
      logo: mapPin,
      tittle: "Khu đô thị FPT City, Ngũ Hành Sơn, Đà Nẵng, Việt Nam",
    },
  ];
  return (
    <div className="w-[100%] bg-[#0098FF] h-[250px] flex px-[80px] py-[60px] justify-between text-[#fff]">
      <div className="flex ">
        <div className="flex flex-col justify-between pr-[200px]">
          <div className="flex ">
            <Image src={logodever1} alt="Picture of the author" />
            <Image
              src={fudever}
              alt="Picture of the author"
              className="pl-[8px]"
            />
          </div>
          <div className="flex w-[136px] justify-between">
            <Image src={facebookLogo} alt="Picture of the author" />
            <Image src={githubLogo} alt="Picture of the author" />
            <Image src={tiktokLogo} alt="Picture of the author" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-[310px]">
          {data.map((item) => (
            <div className="flex ">
              <Image
                className="mr-[12px]"
                src={item.logo}
                alt="Picture of the author"
              />
              <a className="font-normal text-[16px]">{item.tittle}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[240px]  flex justify-between items-start">
        <div className="flex  justify-between flex-col">
          <a className="mb-[18px] ">Home</a>
          <a>Project</a>
        </div>
        <div className="flex  justify-between flex-col">
          <a className="mb-[18px]">Activities</a>
          <a>Member</a>
        </div>
      </div>
    </div>
  );
}

export default index;
