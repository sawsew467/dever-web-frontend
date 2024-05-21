import SectionTittle from "@/components/SectionTitle";
import React from "react";
const decs = [
  { label: "Join Date:", dataIndex: "dateJoin" },
  { label: "Education:", dataIndex: "school" },
  { label: "Position:", dataIndex: "positionId.name" },
  { label: "Major:", dataIndex: "majorId.name" },
  { label: "Department:", dataIndex: "departmentId.name" },
  { label: "Work history:", dataIndex: "workplace" },
];
const AboutMe = ({ user }: any) => {
  return (
    <div className="flex flex-col lg:p-[40px] sm:p-[20px] lg:rounded-[16px] rounded-[8px] shadow-[0_2px_8px_0_#00000040] lg:gap-[30px] sm:gap-[20px] w-full">
      <SectionTittle
        title="General Information:"
        textPosition="left"
        size="sm"
      />
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[#0065A9] xl:text-[20px] lg:text-[18px] font-semibold">
          About me
        </h2>
        <div
          className=" font-regular xl:text-[18px] lg:text-[16px] sm:text-[14px] leading-[150%]"
          dangerouslySetInnerHTML={{
            __html: `<div>${user?.description}</div>`,
          }}
        ></div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-3 xl:gap-[20px] lg:gap-[10px] sm:gap-[8px]">
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Join Date:
          </h2>
          <p className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]">
            Gen {user?.gen}
          </p>
        </span>
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Education:
          </h2>
          <p className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]">
            {user?.school}
          </p>
        </span>
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Position:
          </h2>
          <p className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]">
            {user?.positionId?.name}
          </p>
        </span>
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Major:
          </h2>
          <p className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]">
            {user?.majorId?.name}
          </p>
        </span>
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Department:
          </h2>
          <span className="flex flex-col gap-[4px]">
            {user?.departments?.map((department: any) => (
              <p
                className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]"
                key={department._id}
              >
                {department?.name}
              </p>
            ))}
          </span>
        </span>
        <span className="w-fit">
          <h2 className="font-regular xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px]">
            Work history:
          </h2>
          <p className="font-bold xl:text-[18px] lg:text-[16px] sm:text-[14px] text-[#0065A9]">
            {user?.workplace}
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
