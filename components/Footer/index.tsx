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
import Link from "next/link";

function Footer() {
  const data = [
    {
      logo: mail,
      tittle: "club.dever@gmail.com",
      url: "",
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
    <div className="w-screen bg-[#0098FF] h-[250px] text-[#fff]">
      <div className="max-w-[1440px] mx-auto px-[80px] py-[60px] flex justify-between">
        <div className="flex">
          <div className="flex flex-col justify-between pr-[200px] gap-[38px]">
            <a target="_blank" href="/" className="flex ">
              <Image src={logodever1} alt="Picture of the author" />
              <Image
                src={fudever}
                alt="Picture of the author"
                className="pl-[8px]"
              />
            </a>
            <div className="flex gap-[20px]">
              <a target="_blank" href="https://www.facebook.com/FPTUDever">
                <Image src={facebookLogo} alt="Picture of the author" />
              </a>
              <a target="_blank" href="https://github.com/sawsew467">
                <Image src={githubLogo} alt="Picture of the author" />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@daihocfptdanang">
                <Image src={tiktokLogo} alt="Picture of the author" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between w-[310px]">
            {data.map((item, Footer) => (
              <div key={Footer} className="flex ">
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
            <Link href="/" className="mb-[18px] hover:underline">
              Home
            </Link>
            <Link href="/project" className="hover:underline">
              Project
            </Link>
          </div>
          <div className="flex  justify-between flex-col">
            <Link href="/activity" className="mb-[18px] hover:underline">
              Activities
            </Link>
            <Link href="/member" className="hover:underline">
              Member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
