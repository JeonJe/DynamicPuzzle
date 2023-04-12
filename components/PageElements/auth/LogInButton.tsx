import Link from "next/link";

export default function LogInButton() {
  return (
    <Link href="/login">
        <div className="flex">
    <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md">
             로그인
        </button>
        </div>
        
    </Link>
  );
}
