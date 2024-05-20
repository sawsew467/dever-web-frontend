import LeaderboardModule from "@/components/Leaderboard/Main";
import axios from "axios";

export const metadata = {
  title: "FU-DEVER | Leaderboard",
  description:
    "Check out the FU-DEVER leaderboard! See top performers and track your progress as you compete in coding challenges and contribute to exciting projects. Join us and climb the ranks in our vibrant programming community.",
  icons: {
    icon: "/icons/layout/logo.png",
  },
};

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
