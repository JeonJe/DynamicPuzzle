import Head from "next/head";
import RankingBoard from "@/components/PageElements/Ranking";
import IndexBGM from "@/components/PageElements/IndexBGM";
import LogoutButton from "@/components/PageElements/auth/LogoutButton";
import RoomListButton from "@/components/PageElements/auth/RoomListButton";
import withAuth from "@/components/PageElements/auth/withAuth";

export default withAuth(function Ranking() {
  return (
    <>
      <Head>
        <title>Dynamic Puzzle</title>
      </Head>
      {/* <IndexBGM /> */}
      <div className="absolute flex">
        <img src="images/perfectBackground.webp" className="w-screen h-max z-5"></img>
      </div>
      <div className="flex justify-end justify-items-center">
        <RoomListButton />
        <LogoutButton />
      </div>
      <div>
        <RankingBoard />
      </div>
    </>
  );
});
