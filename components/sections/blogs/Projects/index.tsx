import React from "react";
import Slider from "../Projects/Slider";
import SectionTittle from "@/components/SectionTittle";
import ChangePage from "@/components/ChangePage";
import List from "./List";
const Projects = () => {
  return (
    <div className="w-[100%]  relative mb-[40px]">
      <div className="max-w-[1440px] w-[100%] mx-auto flex-row justify-between items-center px-[80px] space-y-[40px] ">
        <SectionTittle
          tittle="PROJECTS"
          subtittle="About our establishment and growth"
          textPosition="left"
        ></SectionTittle>
        <div className="flex-col w-[100%] space-y-[60px] mb-[60px] ">
          <Slider
            category={"java"}
            postTime={"5 month ago"}
            tiltle={"Java backend"}
            depcription={"how yo use java to backend"}
            page={2}
          ></Slider>
          <List></List>
        </div>
        <div className="flex justify-center  ">
          <ChangePage page={1}></ChangePage>
        </div>
      </div>
    </div>
  );
};

export default Projects;
