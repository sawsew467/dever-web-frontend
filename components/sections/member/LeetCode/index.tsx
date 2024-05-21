import SectionTittle from "@/components/SectionTitle";
import moment from "moment";
import Link from "next/link";
import React from "react";

const LEETCODE_URL = "https://leetcode.com/problems/{id}/description";

const LeetCode = ({ submissionList }: any) => {
//   const momentj = moment.locale("vi");
  return (
    <div className="w-full flex flex-col lg:p-[40px] sm:p-[20px] lg:rounded-[16px] rounded-[8px] shadow-[0_2px_8px_0_#00000040] lg:gap-[30px] sm:gap-[20px]">
      <SectionTittle textPosition="left" title="Leet code" size="sm" />
      <ul className="w-full flex flex-col gap-[20px]">
        {submissionList?.map((infor: any) => (
          <li
            className="p-[20px_40px] shadow-[0_2px_4px_0_#00000040] rounded-[16px] cursor-pointer hover:bg-[#7dd6ff] transition-all"
            key={infor._id}
          >
            <Link
              href={LEETCODE_URL?.replace("{id}", infor?.titleSlug)}
              className="flex justify-between"
              target="_blank"
            >
              <h2>{infor?.title}</h2>
              <p>
                {moment(
                  new Date(infor?.timestamp * 1000),
                  "YYYYMMDD"
                ).fromNow()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeetCode;
