import { projectEndpoint } from "@/helpers/endpoint";
import axios from "axios";

import MainProject from "@/components/sections/project/post/Main";
const getDetailProject = async (id: string) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: projectEndpoint.GET_PROJECT_BY_SLUG.replace("{slug}", id),
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

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getDetailProject(id);
  return <MainProject project={data?.data?.data} />;
}
