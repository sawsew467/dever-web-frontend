import Image from "next/image";
import React from "react";
import position from "@/assets/icon/member/position.svg";
import dob from "@/assets/icon/member/dob.svg";
import id_person from "@/assets/icon/member/id_person.svg";
import moment from "moment";
const decs = [
  { label: "Email address:", dataIndex: "email" },
  { label: "Home address:", dataIndex: "hometown" },
  { label: "Phone number:", dataIndex: "phone" },
];
const Profile = ({ user }: { user: any }) => {
  return (
    <div className="flex flex-col p-[40px] rounded-[16px] shadow-[0_2px_8px_0_#00000040] gap-[30px] w-fit">
      <div className="flex gap-[20px]">
        <Image
          src={user?.avatar}
          alt={user?.description}
          width={160}
          height={220}
          className="rounded-[10px]"
        ></Image>
        <div className="flex gap-[8px] flex-col ">
          <h2 className="text-[24px] text-[#0065A9] font-extrabold mb-[10px]">
            {user?.firstname} {user?.lastname}
          </h2>
          <span className="flex gap-[8px] items-center">
            <Image src={position} alt="job" width={30} height={30}></Image>
            <p className="text-[20px] font-regular flex leading-none">
              {user?.positionId?.name}
            </p>
          </span>
          <span className="flex gap-[8px] items-center">
            <Image src={dob} alt="job" width={30} height={30}></Image>
            <p className="text-[20px] font-regular flex leading-none">
              {moment(user?.dob).subtract(10, "days").calendar()}
            </p>
          </span>
          <span className="flex gap-[8px] items-center">
            <Image
              src={id_person}
              alt="id student"
              width={30}
              height={30}
            ></Image>
            <p className="text-[20px] font-regular flex leading-none">
              {user?.MSSV}
            </p>
          </span>
          <span className="flex flex-col gap-[8px]">
            <h2 className="text-20px] font-bold">Social media</h2>
            <p className="text-[20px] font-regular flex leading-none">
              {moment(user?.dob).subtract(10, "days").calendar()}
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] ">
        {decs?.map((data) => (
          <span key={data.label} className="flex flex-col">
            <h2 className="text-[20px] font-semibold text-[#0065A9]">
              {data.label}
            </h2>
            <p className="text-[16px] font-bold">{user[data.dataIndex]}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
