"use client";
import Reloading from "@/components/Reloading";
import Banner from "@/components/sections/blogs/Banner";
import Projects from "@/components/sections/blogs/Projects";
import { useEffect, useState } from "react";
export default function Blogs() {
  return (
    <>
      <Banner></Banner>
      <Projects></Projects>
    </>
  );
}
