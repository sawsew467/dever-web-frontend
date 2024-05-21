import MainProject from "@/components/sections/project/Main";
import { projectEndpoint } from "@/helpers/endpoint";
import axios from "axios";
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
export default async function Project() {
  const data : any = await getAllProject();
  return <MainProject data={data?.data?.data} />;
}
