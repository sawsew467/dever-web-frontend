import SectionTittle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const Skill = ({ title, data, backgroundColor, color }: any) => {
  return (
    <div className="flex flex-col p-[40px] rounded-[16px] shadow-[0_2px_8px_0_#00000040] gap-[40px] w-full">
      <SectionTittle
        title={title}
        textPosition="left"
        size="sm"
      ></SectionTittle>
      <div className="flex gap-[8px]">
        {data?.map((label: string) => (
          <span
            key={data.label}
            className={`flex flex-col rounded-[6px]  p-[2px_12px]`}
            style={{ backgroundColor, color }}
          >
            <h2 className="text-[20px] font-semibold">{label}</h2>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skill;
