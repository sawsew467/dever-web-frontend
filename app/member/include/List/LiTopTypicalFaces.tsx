import React from "react";
import Image from "next/image";
import avatar from "../../../../assets/images/pages/member/avatar/topface/avatar.png";

const ListTopTypicalFaces = () => {
  return (
    <li
      className="
       xxl:w-[350px] xxl:h-[570px] xl:w-[270px] xl:h-[400px] lg:w-[180px] lg:h-[240px] md:w-[160px] md:h-[200px]
        w-[100px] h-[180px]          "
    >
      <Image
        width={180}
        height={280}
         className="object-cover rounded-tl-[20px] rounded-br-[20px] w-[100%] h-[100%]  "
        alt=""
        src={avatar}
      ></Image>
    </li>
  );
};

export default ListTopTypicalFaces;
