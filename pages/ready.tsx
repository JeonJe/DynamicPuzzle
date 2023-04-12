import Head from "next/head";
import RoomList from "@/components/WebRTC/RoomList";
import IndexBGM from "@/components/PageElements/IndexBGM";
import LogoutButton from "@/components/PageElements/auth/LogoutButton";
import PrivateRoute from "@/components/PageElements/auth/PrivateRoute";
export default function Ready() {
  return (
    <>
      <Head>
        <title>Dynamic Puzzle</title>
      </Head>
      {/* <IndexBGM /> */}
      <div className=" ">
      <LogoutButton />
      <RoomList/>
      </div>
    </>
  );
}
