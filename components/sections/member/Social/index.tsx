import Image from "next/image";
import React from "react";

const Social = ({ socials }: any) => {
  return (
    <div className="">
      {social?.map((social) => (
        <Image href={social?.url} alt={social?.}></Image>
      ))}
    </div>
  );
};

export default Social;
