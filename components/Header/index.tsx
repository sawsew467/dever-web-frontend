import React from "react";
import Logo from "../../assets/images/header/logo.svg";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="w-screen fixed z-[1] bg-white/[0.8] backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto  h-[64px] flex justify-between items-center px-[80px]">
        <a href="/">
          <Image
            src={Logo}
            width={161.6}
            height={32}
            alt="Picture of the author"
          />
        </a>
        <div className="flex gap-[40px] text-[16px]">
          <Link className="hover:text-primary transition-all" href="/">
            Home
          </Link>
          <Link className="hover:text-primary transition-all" href="/activity">
            Activities
          </Link>
          <Link className="hover:text-primary transition-all" href="/blogs">
            Blogs
          </Link>
          <Link className="hover:text-primary transition-all" href="/member">
            Members
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
