"use client"
import React, { useEffect, useState } from "react";
import Logo from "@images/header/logo.svg";
import MenuLogo from "@images/header/menu.svg";
import Image from "next/image";
import Link from "next/link";
function Header() {
  const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);

  const onClickMenuButton = () => { 
    setOpenMenu(isOpenMenu => !isOpenMenu);
  }

  const handleScroll = () => {
      setOpenMenu(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  return (
    <div className="left-0 right-0 top-0 fixed z-[1] bg-white/[0.8] backdrop-blur-sm">
      <div className={`max-w-[1440px] mx-auto h-[56px] lg:h-[64px] xl:h-[64px] flex justify-between items-center px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]`}>
        <a href="/">
          <Image
            src={Logo}
            alt="Picture of the author"
            className="w-auto h-auto"
          />
        </a>
        <div className={`hidden md:hidden lg:flex gap-[40px] text-[16px]`}>
          <Link className="hover:text-primary transition-all" href="/" onClick={() => setOpenMenu(false)}>
            Home
          </Link>
          <Link className="hover:text-primary transition-all" href="/activity" onClick={() => setOpenMenu(false)}>
            Activities
          </Link>
          <Link className="hover:text-primary transition-all" href="/blogs" onClick={() => setOpenMenu(false)}>
            Blogs
          </Link>
          <Link className="hover:text-primary transition-all" href="/member" onClick={() => setOpenMenu(false)}>
            Members
          </Link>
        </div>
        
        <Image
          src={MenuLogo}
          alt="Menu Logo"
          className="block lg:hidden md:block cursor-pointer"
          onClick={onClickMenuButton}
        />
      </div>
      <div className={`absolute top-[56px] w-[100%] py-[20px] flex md:flex lg:hidden flex-col md:flex-col justify-center items-end h-fit bg-primary/[0.8] text-[16px] max-w-[1024px] opacity-0`}
      style={{
        right: isOpenMenu ? "0px" : "-1024px",
        opacity: "1",
        transitionDuration: "0.3s",
      }}
      onClick={() => setOpenMenu(false)}
      >
          <Link className="w-[100%] text-center hover:text-primary transition-all py-[10px] text-white hover:bg-white/[0.8] hover:font-bold" href="/">
            Home
          </Link>
          <Link className="w-[100%] text-center hover:text-primary transition-all py-[10px] text-white  hover:bg-white/[0.8] hover:font-bold" href="/activity">
            Activities
          </Link>
          <Link className="w-[100%] text-center hover:text-primary transition-all py-[10px] text-white  hover:bg-white/[0.8] hover:font-bold" href="/blogs">
            Blogs
          </Link>
          <Link className="w-[100%] text-center hover:text-primary transition-all py-[10px] text-white  hover:bg-white/[0.8] hover:font-bold" href="/member">
            Members
          </Link>
        </div>
        
    </div>
  );
}

export default Header;
