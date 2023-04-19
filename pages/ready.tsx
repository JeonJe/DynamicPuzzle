import Head from "next/head";
import RoomList from "@/components/WebRTC/RoomList";
import IndexBGM from "@/components/PageElements/IndexBGM";
import LogoutButton from "@/components/PageElements/auth/LogoutButton";
import RankingButton from "@/components/PageElements/auth/RankingButton";
import withAuth from "@/components/PageElements/auth/withAuth";
export default withAuth(function Ready() {

  return (
    <>
      <Head>
        <title>Dynamic Puzzle</title>
      </Head>
      <IndexBGM />
      <div className="absolute flex">
        <img src="images/perfectBackground.webp" className="w-screen h-max z-5"></img>
      </div>
      <div className="flex justify-end justify-items-center">
        <RankingButton />
        <LogoutButton />
      </div>
      <div>
        <RoomList />
      </div>
    </>
  );
});
