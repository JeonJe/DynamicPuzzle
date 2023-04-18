import { useRouter } from "next/router";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
          <div className="flex">
        <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md" onClick={handleLogout}>로그아웃</button>
      </div>
      
  )
}
