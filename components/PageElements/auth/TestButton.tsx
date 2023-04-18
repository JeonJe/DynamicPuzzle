import axios from "axios";
import { useRouter } from "next/router";
export default function SignUpButton() {
      const router = useRouter();

    const handleWinTest = () => { 
        const storedToken = window.localStorage.getItem("token");
         async function updateWinCount() {
          try {
            const response = await axios.post(
              "/api/update-win-count",
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: storedToken,
                },
              }
            );
          } catch (error) {
            console.error("Error:", error);
          }
        }
        
        updateWinCount();
    };

        const handleLoseTest = () => { 
        const storedToken = window.localStorage.getItem("token");
         async function updateLoseCount() {
          try {
            const response = await axios.post(
              "/api/update-lose-count",
              {},
              {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: storedToken,
                },
              }
            );
          } catch (error) {
            console.error("Error:", error);
          }
        }
        
        updateLoseCount();
    };
  return (
    <div className="flex">
      <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md" onClick={handleWinTest}>
        Win Test
      </button>
      <button className="z-10 m-4 px-4 py-2 text-white bg-blue-500 rounded-md" onClick={handleLoseTest}>
        Lose Test
      </button>
    </div>
  );
}
