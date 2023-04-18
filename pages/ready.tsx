import Head from "next/head";
import RoomList from "@/components/WebRTC/RoomList";
import IndexBGM from "@/components/PageElements/IndexBGM";
import LogoutButton from "@/components/PageElements/auth/LogoutButton";
import withAuth from "@/components/PageElements/auth/withAuth";
import { useState,useEffect } from "react";

export default withAuth(function Ready() {

  return (
    <>
      <Head>
        <title>Dynamic Puzzle</title>
      </Head>
      {/* <IndexBGM /> */}
      <div className="absolute flex">
           <LogoutButton />
      </div>
      <div>
      <RoomList/>
      </div>
    </>
  );
});
