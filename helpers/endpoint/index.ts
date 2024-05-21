const prefix = "/api/v1";
const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const userEndpoint = {
  GET_ALL_USERS: `${API_SERVER}${prefix}/users`,
  GET_USER_DETAIL_BY_ID: `${API_SERVER}${prefix}/users/{id}`,
  GET_USER_DETAIL_BY_SLUG : `${API_SERVER}${prefix}/users/slug/{slug}`
};
export { userEndpoint };
