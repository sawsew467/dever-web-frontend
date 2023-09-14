"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/sections/activity/Banner";
import Activities from "@/components/sections/activity/Activities";
import { useAppContext } from "../context/AppContext";
function Activity() {
  const {activeActivitiesNav} = useAppContext();
  useEffect(() => {
    activeActivitiesNav();
  })
  return (
    <>
      <Banner></Banner>
      <Activities></Activities>
    </>
  );
}

export default Activity;
