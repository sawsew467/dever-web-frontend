import React from "react";
import Image from "next/image";
import logodever1 from "@images/footer/logodever1.svg";
import facebookLogo from "@images/footer/facebook-box-fill.svg";
import githubLogo from "@images/footer/github-fill.svg";
import tiktokLogo from "@images/footer/Tiktok.svg";
import mail from "@images/footer/mail-line.svg";
import phone from "@images/footer/phone-line.svg";
import mapPin from "@images/footer/map-pin-line.svg";
import fudever from "@images/footer/FU-DEVER.svg";
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
    <div className=" bg-[#0098FF] h-fit text-[#fff]">
      <div className="max-w-[1440px] mx-auto px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px] py-[40px] md:py-[40px] lg:py-[60px] xl:py-[60px] flex">
        <div className="w-[100%] flex flex-col gap-[32px] md:flex-row lg:flex-row lg:gap-0 xl:flex-row xl:gap-0 justify-between">

          <div className="w-[213px] xl:w-[278px] h-[75px] md:h-[83px] lg:h-[91px] xl:h-[130px] flex flex-col justify-between gap-[12px] md:gap-[20px] xl:gap-[38px]">
            <a target="_blank" href="/" className="flex items-center">
              <Image src={logodever1} alt="Picture of the author" className="w-[40px] h-[37px] xl:w-[64px] xl:h-[60px]"/>
              <Image
                src={fudever}
                alt="Picture of the author"
                className="pl-[8px] w-[165px] h-[39px] xl:w-[264px] xl:h-[48px]"
              />
            </a>
            <div className="flex gap-[20px]">
              <a target="_blank" href="https://www.facebook.com/FPTUDever">
                <Image src={facebookLogo} alt="Picture of the author" className="w-[24px] h-[24px] xl:w-[23px] xl:h-[32px]"/>
              </a>
              <a target="_blank" href="https://github.com/sawsew467">
                <Image src={githubLogo} alt="Picture of the author" className="w-[24px] h-[24px] xl:w-[23px] xl:h-[32px]"/>
              </a>
              <a target="_blank" href="https://www.tiktok.com/@daihocfptdanang">
                <Image src={tiktokLogo} alt="Picture of the author" className="w-[24px] h-[24px] xl:w-[23px] xl:h-[32px]"/>
              </a>
            </div>
          </div>

          <div className="max-w-[302px] w-[310px] md:w-[216px] lg:w-[310px] xl:w-[310px] h-[94px] xl:h-[126px] flex flex-col justify-between gap-[12px] xl:gap-[20px]">
            {data.map((item, Footer) => (
              <div key={Footer} className="flex">
                <Image
                  className="mr-[12px] w-[20px] h-[20px] xl:w-[24px] xl:h-[24px]"
                  src={item.logo}
                  alt="Picture of the author"
                />
                <a className="font-normal text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">{item.tittle}</a>
              </div>
            ))}
          </div>

          <div className="w-[177px] lg:w-[195px] xl:w-[235px] h-[54px] lg:h-[58px] xl:h-[58px] flex justify-between items-start">
            <div className="flex  justify-between flex-col">
              <Link href="/" className="mb-[18px] text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] hover:underline">
                Home
              </Link>
              <Link href="/blogs" className="hover:underline text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                Blogs
              </Link>
            </div>
            <div className="flex  justify-between flex-col">
              <Link href="/activity" className="mb-[18px] text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px] hover:underline">
                Activities
              </Link>
              <Link href="/member" className="hover:underline text-[12px] md:text-[12px] lg:text-[16px] xl:text-[16px]">
                Member
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;
