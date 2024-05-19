import MainMember from "@/components/sections/member/Main";
import { userEndpoint } from "@/helpers/endpoint";
import axios from "axios";
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
