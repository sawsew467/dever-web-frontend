import React, { useEffect, useState } from "react";
import Banner from "@/components/sections/activity/Banner";
import Activities from "@/components/sections/activity/Activities";

const Main = ({ data }: any) => {
  return (
    <>
      <Banner></Banner>
      <Activities data={data} ></Activities>
    </>
  );
};

export default Main;
