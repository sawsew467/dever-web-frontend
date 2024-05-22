import React from "react";
import { Metadata } from "next";
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
export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await fetchUser(id);
  const user = data?.data?.data;
  return {
    title: `FU-DEVER | ${user?.firstname} ${user?.lastname}`,
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
    icons: {
      icon: "/icons/layout/logo.png",
    },
    openGraph: {
      images: [user?.avatar],
      title: `FU-DEVER | ${user?.firstname} ${user?.lastname}`,
      description: `${user?.firstname} ${user?.lastname} là một người cực kì nhiệt huyết trong câu lạc bộ Dever`,
    },
  };
}

const Member = async ({ params: { id } }: { params: { id: string } }) => {
  const user: any = await fetchUser(id);

  if (!user?.data?.data) {
    notFound();
  }
  return <MainMember user={user?.data?.data} />;
};

export default Member;
