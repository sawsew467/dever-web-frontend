import MainMember from "@/components/sections/member/Main";
import { userEndpoint } from "@/helpers/endpoint";
import axios from "axios";
async function Member() {
  const data = await axios.get(userEndpoint.GET_ALL_USERS);
  const adminData = data?.data?.data?.users?.filter(
    (user: any) => user?.isAdmin
  );
  const excellentData = data?.data?.data?.users?.filter(
    (user: any) => user?.excellent
  );
  const memberData = data?.data?.data?.users?.filter(
    (user: any) => !user?.isAdmin
  );
  const user = { adminData, excellentData, memberData };
  return <MainMember data={user} />;
}
export default Member;
