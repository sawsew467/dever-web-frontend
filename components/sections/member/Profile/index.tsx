import Image from "next/image";
import React from "react";
import position from "@/assets/icon/member/position.svg";
import dob from "@/assets/icon/member/dob.svg";
import id_person from "@/assets/icon/member/id_person.svg";
import moment from "moment";
import Social from "../Social";
const decs = [
  { label: "Email address:", dataIndex: "email" },
  { label: "Home address:", dataIndex: "hometown" },
  { label: "Phone number:", dataIndex: "phone" },
];
const Profile = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col lg:p-[40px] sm:p-[20px] lg:rounded-[16px] rounded-[8px]  shadow-[0_2px_8px_0_#00000040] xl:gap-[30px] lg:gap-[20px] sm:gap-[20px] w-full">
      <div className="flex lg:gap-[20px] md:gap-[10px] sm:gap-[20px]">
        <div className="rounded-[10px] aspect-[16/22] lg:w-[160px] md:w-[200px] overflow-hidden">
          <Image
            src={user?.avatar}
            alt={user?.description}
            width={160}
            height={220}
            className="w-full h-full"
          ></Image>
        </div>
        <div className="flex flex-col gap-[8px] w-fit">
          <h2 className="xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[20px] text-[#0065A9] font-extrabold mb-[10px]">
            {user?.firstname} {user?.lastname}
          </h2>
          <span className="flex gap-[8px] items-center w-fit">
            <Image
              className="aspect-square xl:w-[30px] lg:w-[25px] sm:w-[20px]"
              src={position}
              alt="job"
              width={30}
              height={30}
            ></Image>
            <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-regular flex leading-none">
              {user?.positionId?.name}
            </p>
          </span>
          <span className="flex gap-[8px] items-center w-fit">
            <Image
              className="aspect-square xl:w-[30px] lg:w-[25px] sm:w-[20px]"
              src={dob}
              alt="job"
              width={30}
              height={30}
            ></Image>
            <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-regular flex leading-none">
              {moment(user?.dob).subtract(10, "days").calendar()}
            </p>
          </span>
          <span className="flex gap-[8px] items-center w-fit">
            <Image
              className="aspect-square xl:w-[30px] lg:w-[25px] sm:w-[20px]"
              src={id_person}
              alt="id student"
              width={30}
              height={30}
            ></Image>
            <p className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-regular flex leading-none">
              {user?.MSSV}
            </p>
          </span>
          <span className="flex flex-col gap-[8px] w-full">
            <h2 className="lg:text-20px] md:text-[18px] sm:text-[14px] font-bold">Social media</h2>
            <Social socials={user?.socials} />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] ">
        {decs?.map((data) => (
          <span key={data.label} className="flex flex-col">
            <h2 className="xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[14px] font-semibold text-[#0065A9]">
              {data.label}
            </h2>
            <p className="xl:text-[16px] lg:text-[14px] font-bold">
              {user[data.dataIndex]}
            </p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
