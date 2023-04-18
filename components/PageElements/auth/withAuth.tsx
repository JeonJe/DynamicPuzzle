import { useRouter } from 'next/router';
import { useEffect,useState } from 'react';
import axios from 'axios';

function withAuth(WrappedComponent) {
    
  return function Authenticated(props) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const storedToken = window.localStorage.getItem("token");

      async function verifyToken() {
        try {
          await axios.get("/api/validate-token", {
            headers: {
              Authorization: storedToken,
            },
          });
           setIsLoading(false); // 토큰 검증이 완료되면 로딩 상태를 false로 설정
        } catch (err) {
          router.push('/login');
          alert("원활한 게임을 위해 로그인을 해주세요.")
        }
      }
      if (!storedToken) {
        router.push('/login');
        alert("원활한 게임을 위해 로그인을 해주세요.")
      } else {
        verifyToken();
      }
    }, []);
    if (isLoading) {
      return null; // 로딩 상태가 true인 경우 화면에 아무것도 렌더링하지 않음
    }


    return <WrappedComponent {...props} />;
  };
}

export default withAuth;