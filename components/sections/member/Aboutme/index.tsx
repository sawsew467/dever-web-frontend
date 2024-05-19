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
    <div className="flex flex-col p-[40px] rounded-[16px] shadow-[0_2px_8px_0_#00000040] gap-[30px] w-fit h-fit">
      <SectionTittle
        title="General Information:"
        textPosition="left"
        size="sm"
      />
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-[#0065A9] text-[20px] font-semibold">About me</h2>
        <p className="w-[600px] font-regular text-[18px] leading-[150%]">
          {user?.description}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <span>
          <h2 className="font-regular text-[20px]">Join Date:</h2>
          <p className="font-bold text-[20px] text-[#0065A9]">
            Gen {user?.gen}
          </p>
        </span>
        <span>
          <h2 className="font-regular text-[20px]">Education:</h2>
          <p className="font-bold text-[20px] text-[#0065A9]">{user?.school}</p>
        </span>
        <span>
          <h2 className="font-regular text-[20px]">Position:</h2>
          <p className="font-bold text-[20px] text-[#0065A9]">
            {user?.positionId?.name}
          </p>
        </span>
        <span>
          <h2 className="font-regular text-[20px]">Major:</h2>
          <p className="font-bold text-[20px] text-[#0065A9]">
            {user?.majorId?.name}
          </p>
        </span>
        <span>
          <h2 className="font-regular text-[20px]">Department:</h2>
          <span className="flex flex-col gap-[4px]">
            {user?.departments?.map((department: any) => (
              <p
                className="font-bold text-[20px] text-[#0065A9]"
                key={department._id}
              >
                {department?.name}
              </p>
            ))}
          </span>
        </span>
        <span>
          <h2 className="font-regular text-[20px]">Work history:</h2>
          <p className="font-bold text-[20px] text-[#0065A9]">
            {user?.workplace}
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutMe;
