const prefix = "/api/v1";
const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const userEndpoint = {
  GET_ALL_USERS: `${API_SERVER}${prefix}/users`,
};
export { userEndpoint };
