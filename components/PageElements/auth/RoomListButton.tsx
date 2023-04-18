import Link from "next/link";

export default function RoomListButton() {
  return (
    <Link href="/ready">
       <div className="flex">
        <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md" >
          게임방 보기
        </button>
       </div>
     </Link>
  );
}
