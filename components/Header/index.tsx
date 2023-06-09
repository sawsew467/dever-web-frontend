import React from "react";
import Logo from "../../assets/images/header/logo.svg";
import Image from "next/image";
function index() {
  return (
    <div className="w-[100%] h-[64px] flex justify-between items-center px-[5.5%] fixed z-[1]">
      <Image src={Logo} width={161.6} height={32} alt="Picture of the author" />
      <div className="flex gap-[40px] text-[16px]">
        <a className="hover:text-primary" href="">
          Home
        </a>
        <a className="hover:text-primary" href="">
          Activities
        </a>
        <a className="hover:text-primary" href="">
          Projects
        </a>
        <a className="hover:text-primary" href="">
          Members
        </a>
      </div>
    </div>
  );
}

export default index;
