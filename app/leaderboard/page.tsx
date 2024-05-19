import LeaderboardModule from "@/components/Leaderboard/Main";
import axios from "axios";

const getLeaderboard = async () => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://dever-dashboard-api.onrender.com/api/v1/leetcode",
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

export default async function LeaderBoardPage() {
  const leaderboard: any = await getLeaderboard();

  return <LeaderboardModule leaderboardData={leaderboard?.data?.data} />;
}
