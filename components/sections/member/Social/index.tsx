import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "@/assets/icon/member/detail/facebook.svg";
import github from "@/assets/icon/member/detail/github.svg";
import instagram from "@/assets/icon/member/detail/instagram.svg";
import leetcode from "@/assets/icon/member/detail/leetcode.svg";
const icon: any = {
  FACEBOOK: facebook,
  GITHUB: github,
  INSTAGRAM: instagram,
  LEETCODE: leetcode,
};
const Social = ({ socials }: any) => {
  return (
    <span className="flex gap-[16px]">
      {socials?.map((social: any) => (
        <Link href={social?.url} key={social?._id}>
          <Image
            src={icon[social?.socialId?.constant]}
            alt={`icon ${social?.name}`}
          ></Image>
        </Link>
      ))}
    </span>
  );
};

export default Social;
