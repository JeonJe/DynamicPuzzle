import Head from "next/head";
import BagicHome from "@/components/PageElements/BagicHome";
import IndexBGM from "@/components/PageElements/IndexBGM";
import Link from "next/link";

export default function Home() {
  const iconClass = "bg-[url('../public/images/whitevolume.png')]";
  return (
    <>
      <Head>
        <title>Dynamic Puzzle</title>
        <meta name="description" content="Play Dynamic Puzzle with FaceCamera!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <IndexBGM /> */}
      <div className="absolute flex">
        <img src="images/dpindexBg.webp" className="w-screen h-max z-5"></img>
      </div>
      <div className="absolute justify-end items-end flex w-1/5 h-4/5 z-7">
        <BagicHome />
      </div>
      <div>
        <Link href="/signup">
          <button className="z-10 absolute m-4 px-4 py-2 text-white bg-blue-500 rounded-md">
            회원가입
          </button>

        </Link>
      </div>
    </>
  );
}
