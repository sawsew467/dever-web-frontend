"use client";
import React, { useEffect, useState } from "react";
import Logo from "@images/header/logo.svg";
import MenuLogo from "@images/header/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./style.css";
const animationHeader: any = {
  down: {
    y: [-60, 0],
    opacity: [0, 1],
    backgroundColor: "#fff",
    boxShadow: "0px 0px 20px 0px #2020204a",
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
  up: {
    y: 0,
    boxShadow: "none",
    scale: [1.2, 1],
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};
function Header() {
  const [isOpenMenu, setOpenMenu] = useState<Boolean>(false);
  const [isScrollHeader, setScrollHeader] = useState<Boolean>(false);

  const onClickMenuButton = () => {
    setOpenMenu((isOpenMenu) => !isOpenMenu);
  };

  const handleScroll = (e: any) => {
    setOpenMenu(false);
    const y = document.documentElement.scrollTop;
    if (y > 64) setScrollHeader(true);
    else setScrollHeader(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      animate={isScrollHeader ? "down" : "up"}
      variants={animationHeader}
      className="left-0 right-0 top-0 fixed z-[100] bg-white/[0.8] backdrop-blur-sm"
    >
      <div
        className={`max-w-[1440px] mx-auto h-[56px] lg:h-[64px] xl:h-[64px] flex justify-between items-center px-[20px] md:px-[40px] lg:px-[40px] xl:px-[80px]`}
      >
        <a href="/">
          <Image
            loading="lazy"
            src={Logo}
            alt="Picture of the author"
            className="w-auto h-auto"
          />
        </a>
        <div className={`hidden md:hidden lg:flex gap-[40px] text-[16px]`}>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/activity"
            style={{}}
          >
            Activities
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/member"
          >
            Members
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
          </Link>
          <Link
            className="hover:text-primary header transition-all relative"
            href="/leaderboard"
          >
            Leader board
            <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-blue-400 underline-span"></span>
          </Link>
        </div>

        <Image
          loading="lazy"
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
    </motion.div>
  );
}

export default Header;
