"use client"
import Reloading from "@/components/Reloading";
import Banner from "@/components/sections/blogs/Banner";
import Projects from "@/components/sections/blogs/Projects";
import { useEffect, useState } from "react";
export default function Blogs() {
  const [isReloading, setIsReloading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsReloading(false);
    }, 2400);
  })
  return (
    <>
      {
        isReloading ? <Reloading></Reloading> : null
      }
      <Banner></Banner>
      <Projects></Projects>
    </>
  );
}
