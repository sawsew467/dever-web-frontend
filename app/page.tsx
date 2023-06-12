"use-client";

import Image from "next/image";
import Link from "next/link";
import womanSmile from "../assets/images/pages/home/banner/womanPointing.png";
import manModel from "../assets/images/pages/home/banner/maleModel.png";
import man2Model from "../assets/images/pages/home/banner/male2Model.png";
import retangle1 from "../assets/images/pages/home/banner/svg/Rectangle 7.svg";
import retangle2 from "../assets/images/pages/home/banner/svg/Rectangle 8.svg";
import retangle3 from "../assets/images/pages/home/banner/svg/Rectangle 9.svg";
import retangle4 from "../assets/images/pages/home/banner/svg/Rectangle 10.svg";
import retangle5 from "../assets/images/pages/home/banner/svg/Rectangle 11.svg";
import retangle6 from "../assets/images/pages/home/banner/svg/Rectangle 12.svg";
import retangle7 from "../assets/images/pages/home/banner/svg/Rectangle 13.svg";


import "@/app/page.css";
import Banner from "./sections/home/Banner";
import Product from "./sections/home/Product";

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Product></Product>
    </>
  );
}
