"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/sections/activity/Banner";
import Activities from "@/components/sections/activity/Activities";
import Reloading from "@/components/Reloading";
function Activity() {
  const [isReloading, setIsReloading] = useState<boolean>(true);
  console.log(isReloading);

  useEffect(() => {
    setTimeout(() => {
      setIsReloading(false);
    }, 2400);
  });
  return (
    <>
      {isReloading ? <Reloading></Reloading> : null}
      <Banner></Banner>
      <Activities></Activities>
    </>
  );
}

export default Activity;
