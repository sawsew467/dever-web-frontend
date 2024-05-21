import React from "react";
import MainMember from "@/components/sections/member/detail";
import { notFound } from "next/navigation";
import axios from "axios";
import { userEndpoint } from "@/helpers/endpoint";

const fetchUser = async (id: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: userEndpoint.GET_USER_DETAIL_BY_ID.replace("{id}", id),
    headers: {
      "X-API-Key": "{{token}}",
    },
  };

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    return error;
  }
};

const Member = async ({ params: { id } }: { params: { id: string } }) => {
  const user: any = await fetchUser(id);

  if (!user) {
    // notFound();
  }
  return <MainMember user={user?.data?.data} />;
};

export default Member;
