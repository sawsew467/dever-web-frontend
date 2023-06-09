import React from "react";
import Image from "next/image";
import logodever1 from "../../asset/img/logodever1.svg";
import facebookLogo from "../../asset/img/facebook-box-fill.svg";
import githubLogo from "../../asset/img/github-fill.svg";
import tiktokLogo from "../../asset/img/Tiktok.svg";
import mail from "../../asset/img/mail-line.svg";
import phone from "../../asset/img/phone-line.svg";
import mapPin from "../../asset/img/map-pin-line.svg";

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
    <div className="w-[100%] bg-[#0098FF] h-[250px] flex px-[80px] py-[60px] flex justify-between">
      <div className="flex flex-col justify-between ">
        <div className="flex ">
          <Image src={logodever1} alt="Picture of the author" />
          <a className="font-bold text-[40px] ml-[8px]">FU-DEVER</a>
        </div>
        <div className="flex w-[136px] justify-between">
          <Image src={facebookLogo} alt="Picture of the author" />
          <Image src={githubLogo} alt="Picture of the author" />
          <Image src={tiktokLogo} alt="Picture of the author" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
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
      <div className="w-[240px]  flex justify-between items-start">
        <div className="flex  justify-between flex-col">
          <a className="mb-[18px]">Home</a>
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
