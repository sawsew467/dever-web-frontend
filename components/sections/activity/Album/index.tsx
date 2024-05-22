import SectionTittle from "@/components/SectionTitle";
import React from "react";

const Album = () => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-[#F8FCFF] ">
      <div className="max-w-[1440px] mx-auto w-full xl:px-[80px] md:px-[40px] sm:px-[20px] md:py-[60px] sm:py-[40px]">
        <SectionTittle
          title="Bộ sưu tập"
          subtitle="Không ngừng kết nối, phát triển vững bềnh"
          textPosition="left"
        />
      </div>
    </section>
  );
};

export default Album;
