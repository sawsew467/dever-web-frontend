"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/sections/activity/Banner";
import Activities from "@/components/sections/activity/Activities";
import Reloading from "@/components/Reloading";
function Activity() {
  return (
    <>
      <Banner></Banner>
      <Activities></Activities>
    </>
  );
}

export default Activity;
