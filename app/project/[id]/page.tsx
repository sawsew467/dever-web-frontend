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

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getDetailProject(id);
  const project = data?.data?.data;
  return {
    title: `FU-DEVER | ${project?.title}`,
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
    icons: {
      icon: "/icons/layout/logo.png",
    },
    openGraph: {
      images: [project?.image],
      title: `FU-DEVER | ${project?.title}`,
      description:`${project?.subTitle}`,
    },
  };
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: any = await getDetailProject(id);
  return <MainProject project={data?.data?.data} />;
}
