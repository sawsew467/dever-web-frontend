import React from "react";
import Image from "next/image";
import {
  Rectangle2,
  Rectangle3,
  Vector,
  Rectangle1,
  VectorFirst,
} from "../svg/svg";
import logo from "../img/logodever1.png";
import avatar from "../img/avatar.png";
import group1498 from "../img/Group 1498.svg";

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
