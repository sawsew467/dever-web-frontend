import React from "react";
import MainMember from "@/components/sections/member/detail";
import { notFound } from "next/navigation";
import axios from "axios";
import { userEndpoint } from "@/helpers/endpoint";

async function fetchUser(id?: string) {
  const res = await axios.get(`${userEndpoint.GET_ALL_USERS}/${id}`);
  if (!res?.data?.data) return undefined;
  return res?.data?.data;
}

const Member = async ({ params: { id } }: { params: { id?: string } }) => {
  const user = await fetchUser(id);

  if (!user) {
    // notFound();
  }
  return <MainMember user={user} />;
};

export default Member;
