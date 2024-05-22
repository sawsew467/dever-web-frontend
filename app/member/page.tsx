import axios from "axios";

import { userEndpoint } from "@/helpers/endpoint";

import MainMember from "@/components/sections/member/Main";

export const metadata = {
  title: "FU-DEVER | Members",
  description:
    "Meet the talented members of FU-DEVER. Our diverse community of programmers, from beginners to experts, collaborates on innovative projects, shares knowledge, and grows together in the tech world.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
  openGraph: {
    images: ["/images/member.png"],
    title: "FU-DEVER | Câu lạc bộ lập trình FU-DEVER",
    description:
      "Welcome to FU-DEVER, the programming club of FPT University! . At FU-DEVER, we strive to foster a vibrant community of aspiring programmers and provide a platform for skill development and collaboration.",
  },
};

const getUser = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: userEndpoint.GET_ALL_USERS,
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
async function Member() {
  const data: any = await getUser();
  const adminData = data?.data?.data?.users?.filter(
    (user: any) => user?.isAdmin
  );
  const excellentData = data?.data?.data?.users?.filter(
    (user: any) => user?.isExcellent
  );
  const memberData = data?.data?.data?.users?.filter(
    (user: any) => !user?.isAdmin
  );
  const user = { adminData, excellentData, memberData };
  return <MainMember data={user} />;
}
export default Member;
