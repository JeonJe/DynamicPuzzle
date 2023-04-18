import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../WebRTC/styles.module.css";

interface User {
  name: string;
  win: number;
  lose: number;
}

export default function Ranking() {
  const [userData, setUserData] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    async function fetchData() {
      try {
        const response = await axios.get(`/api/ranking?page=${currentPage}`, {
          headers: {
            Authorization: storedToken,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    }

    fetchData();
  }, [currentPage]);

  return (
    <>
      <div className={styles.readyContainer}>
        <div className={styles.readypan}>
          <div className={styles.btnReady}></div>
          <table className={styles.readyTable}>
            <thead>
              <tr className="">
                <th scope="col" className="text-center text-3xl py-3 select-none">
                  이름
                </th>
                <th scope="col" className="text-center w-[12vw] text-3xl py-3 select-none">
                  승
                </th>
                <th scope="col" className="text-center w-[12vw] text-3xl py-3 select-none">
                  패
                </th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className={styles.readyTbody}>
                  <td className="text-3xl col-span-3 py-4 select-none ">{user.name}</td>
                  <td className="text-3xl py-4 select-none">{user.win}</td>
                  <td className="text-3xl py-4 select-none">{user.lose}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "1rem" }}>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{
                marginRight: "1rem",
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                background: "#3f51b5",
                color: "white",
                cursor: "pointer",
                border: "none",
              }}
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              style={{ padding: "0.5rem 1rem", borderRadius: "4px", background: "#3f51b5", color: "white", cursor: "pointer", border: "none" }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
