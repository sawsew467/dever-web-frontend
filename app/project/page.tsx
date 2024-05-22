import MainProject from "@/components/sections/project/Main";
import { projectEndpoint } from "@/helpers/endpoint";
import axios from "axios";
import { Metadata } from "next";
const getAllProject = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: projectEndpoint.GET_ALL_PROJECT,
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
export const metadata = {
  title: "FU-DEVER | Project",
  description:
    "Check out the FU-DEVER project! See top performers and track your progress as you compete in coding challenges and contribute to exciting projects. Join us and climb the ranks in our vibrant programming community.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/project.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  },
};
export default async function Project() {
  const data: any = await getAllProject();
  return <MainProject data={data?.data?.data} />;
}
