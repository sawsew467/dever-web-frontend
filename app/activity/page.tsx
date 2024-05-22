import MainActivy from "@/components/sections/activity/Main";
import { activityEndpointer } from "@/helpers/endpoint";
import axios from "axios";

export const metadata = {
  title: "FU-DEVER | Our Activities",
  description:
    "Discover the vibrant activities at FU-DEVER's coding club. Collaborate on innovative projects, boost your programming skills, and connect with a community of tech enthusiasts. Perfect for beginners and experienced coders alike.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/activity.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  },
};
const getActivity = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: activityEndpointer.GET_IMAGE_ACTIVITY,
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
async function Activity() {
  const data: any = await getActivity();
  return <MainActivy data={data?.data?.data} />;
}

export default Activity;
