"use client";
import Reloading from "@/components/Reloading";
import Banner from "@/components/sections/blogs/Banner";
import Projects from "@/components/sections/blogs/Projects";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
export default function Blogs() {
  const {activeBlogNav} = useAppContext();
  useEffect(() => {
    activeBlogNav();
  })
  return (
    <>
      <Banner></Banner>
      <Projects></Projects>
    </>
  );
}
