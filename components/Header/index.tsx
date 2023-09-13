"use client";
import React, { useEffect, useState } from "react";
import Logo from "@images/header/logo.svg";
import MenuLogo from "@images/header/menu.svg";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
function Header() {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const [isHome, setIsHome] = useState<boolean>(true)
  const [isActivities, setIsActivities] = useState<boolean>(false);
  const [isMember, setIsMember] = useState(false);
  const [isBlog, setIsBlog] = useState(false);

  const onClickMenuButton = () => {
    setOpenMenu((isOpenMenu) => !isOpenMenu);
  };

  const handleScroll = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="left-0 right-0 top-0 fixed z-[1] bg-white/[0.8] backdrop-blur-sm">
      <div
        className={`max-w-[1440px] mx-auto h-[56px] lg:h-[64px] xl:h-[64px] flex justify-between items-center px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]`}
      >
        <a href="/">
          <Image
            src={Logo}
            alt="Picture of the author"
            className="w-auto h-auto"
          />
        </a>
        <div className={`hidden md:hidden lg:flex gap-[40px] text-[16px]`}>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/"
            onClick={() => {setOpenMenu(false)
              setIsActivities(false);
              setIsHome(true);
              setIsMember(false);
              setIsBlog(false);
            }}
            style={{
              color: isHome ? "#60a5fa" : ''
            }}
          >
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
            style={{
              width: isHome ? "50%" : '',
            }}></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
            style={{
              width: isHome ? "50%" : '',
            }}></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/activity"
            onClick={() => {setOpenMenu(false)
             setIsActivities(true);
              setIsHome(false);
              setIsMember(false);
              setIsBlog(false);}}
              style={{
                color: isActivities ? "#60a5fa" : ''
              }}
          >
            Activities
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isActivities ? "50%" : '',
            }}></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isActivities ? "50%" : '',
            }}></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/blogs"
            onClick={() => {setOpenMenu(false)
              setIsActivities(false);
              setIsHome(false);
              setIsMember(false);
              setIsBlog(true);}}
              style={{
                color: isBlog ? "#60a5fa" : ''
              }}
          >
            Blogs
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isBlog ? "50%" : '',
            }}></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isBlog ? "50%" : '',
            }}></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/member"
            onClick={() => {setOpenMenu(false)
              setIsActivities(false);
              setIsHome(false);
              setIsMember(true);
              setIsBlog(false);}}
              style={{
                color: isMember ? "#60a5fa" : ''
              }}
          >
            Members
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isMember ? "50%" : '',
            }}></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"
             style={{
              width: isMember ? "50%" : '',
            }}></span>
          </Link>
        </div>

        <Image
          src={MenuLogo}
          alt="Menu Logo"
          className="block lg:hidden md:block cursor-pointer"
          onClick={onClickMenuButton}
        />
      </div>

      <div
        className={`absolute h-fit top-[56px] w-[100%] flex md:flex lg:hidden flex-col md:flex-col text-[16px] max-w-[1024px] opacity-0 rounded-b-xl overflow-hidden`}
        style={{
          opacity: "1",
          transition: "all 0.3s",
        }}
        onClick={() => setOpenMenu(false)}
      >
        <Link
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          href="/"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.1s",
          }}
        >
          Home
        </Link>
        <Link
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          href="/activity"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.2s",
          }}
        >
          Activities
        </Link>
        <Link
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          href="/blogs"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.3s",
          }}
        >
          Blogs
        </Link>
        <Link
          className="w-[100%] bg-primary/[0.8] active:bg-white/[0.8] active:text-primary text-center cursor-pointer transition-all py-[10px] text-white  hover:font-bold translate-y-[-20px]"
          href="/member"
          style={{
            opacity: isOpenMenu ? "1" : "0",
            transition: "all 0.3s",
            visibility: isOpenMenu ? "visible" : "hidden",
            transform: isOpenMenu ? "translateY(0px)" : "translateY(-20px)",
            transitionDelay: "0.4s",
          }}
        >
          Members
        </Link>
      </div>
    </div>
  );
}

export default Header;
