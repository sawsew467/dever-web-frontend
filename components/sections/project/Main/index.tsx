import React from "react";

import Banner from "@/components/sections/project/Banner";
import Projects from "@/components/sections/project/Projects";

const Main = ({ data }: any) => {
  return (
    <>
      <Banner></Banner>
      <Projects data={data}></Projects>
    </>
  );
};

export default Main;
