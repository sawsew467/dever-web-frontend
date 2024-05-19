import React from "react";
import MainMember from "@/components/sections/member/detail";
import axios from "axios";
import { userEndpoint } from "@/helpers/endpoint";
const Member = async ({ params: { id } }: { params: { id: string } }) => {
  const data = await axios.get(`${userEndpoint.GET_ALL_USERS}/${id}`);
  const user = data?.data?.data;
  return <MainMember user={user} />;
};

export default Member;
