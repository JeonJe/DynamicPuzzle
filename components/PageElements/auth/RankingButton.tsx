import Link from "next/link";

export default function RankingButton() {
  return (
    <Link href="/ranking">
       <div className="flex">
        <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md" >
          랭킹보기
        </button>
       </div>
     </Link>
  );
}
