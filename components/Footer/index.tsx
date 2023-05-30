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
  const data2 = ["Home", "Activities", "Project", "Menber"];
  return (
    <div className="w-screen bg-[#0098FF] h-[250px] flex">
      <div>
        <div>
          <Image src={logodever1} alt="Picture of the author" />
          <a>FU-DEVER</a>
        </div>
        <div className="flex w-[136px] justify-between">
          <Image src={facebookLogo} alt="Picture of the author" />
          <Image src={githubLogo} alt="Picture of the author" />
          <Image src={tiktokLogo} alt="Picture of the author" />
        </div>
      </div>
      <div>
        <div className="">
          {data.map((item) => (
            <div className="flex">
              <Image src={item.logo} alt="Picture of the author" />
              <a>{item.tittle}</a>
            </div>
          ))}
        </div>
      </div>
      <div>
        {data2.map((item) => (
          <a>{item}</a>
        ))}
      </div>
    </div>
  );
}

export default index;
