import React from "react";
import Slider from "../Projects/Slider";
import SectionTittle from "@/components/SectionTitle";
import ChangePage from "@/components/ChangePage";
import List from "./List";
const Projects = () => {
  return (
    <div className="w-[100%] relative sm:mb-[20px] lg:mb-[40px] xl:mb-[60px] ">
      <div className="max-w-[1440px] w-[100%] mx-auto flex-row justify-between items-center sm:px-[20px] md:px-[40px] xl:px-[80px] sm:space-y-[20px] lg:space-y-[40px] xl:space-y-[60px] ">
        <SectionTittle
          title="PROJECTS"
          subtitle="About our establishment and growth"
          textPosition="left"
        ></SectionTittle>
        <div className="flex-col w-[100%] sm:space-y-[20px] lg:space-y-[40px] xl:space-y-[60px]">
          <Slider
            category={"java"}
            postTime={"5 month ago"}
            tiltle={"Java backend"}
            depcription={"how yo use java to backend"}
            page={2}
          ></Slider>
          <List></List>
        </div>
      </div>
    </div>
  );
};

export default Projects;