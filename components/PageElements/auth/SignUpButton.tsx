import Link from "next/link";
export default function SignUpButton() {
  return(
     <Link href="/signup">
          <div className="flex">
        <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md">
          회원가입
        </button>
      </div>
    </Link>
  );
}
