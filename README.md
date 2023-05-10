# Dynamic Puzzle with Web Camera
재미있는 다섯 가지 아이템을 활용하여 상대방보다 먼저 상대 얼굴을 맞춰야 하는 실시간 1대1 퍼즐 게임 (Web-RTC 활용)

## 프로젝트 기간 
(2023.02.02 ~ 2023.03.11(5주), 5인)  
[0주차] flutter, golang 학습하다가 프로젝트 엎기 (1.26 ~ 2.01)  
[1주차] 아이디어 내고 엎고 반복하기, 프로토타입 만들기  
[2주차] 확장성 있는 개발을 위해 기반 라이브러리 교체 작업 (Konva->react-spring)  
[3주차] 아이템 2개 추가  
[4주차] 아이템 3개 추가, 게임 로직 정교화  
[5주차] 게임 시간 관련 이벤트 정교화, 프레임 최적화 및 디버깅  

## 서비스 소개 
- 기획 배경
  서로 얼굴을 보다보면 웃음을 통해 분위기를 Up 할 수 있다!

- 서비스 특징
  1. 웹카메라를 사용한 퍼즐 게임
  2. 실시간 1:1 멀티플레이
  3. 재미있는 아이템들
- [시연 영상](https://www.youtube.com/watch?v=sIGSSbmrrp0)
![Untitled](https://user-images.githubusercontent.com/43032391/233377192-61993e32-2e66-4d0c-83b5-ac0c080b8aba.png)


## 아키텍처 & 기술스택

![image](https://user-images.githubusercontent.com/43032391/224637846-99736ca6-7cd8-450d-8418-06d5d1cb49d0.png)
1. 백엔드 : next.js (API 및 웹서버 역할)  
2. 프론트엔드 : react.js, next.js, react spring, redux, recoil, type script, Tensor flow  
3. 인프라: Amazon EC2, Github actions, Socket.io  
4. 협업 툴 : slack, github, notion  

### 주요 기술 스택
1. React.js  
  팀원 모두 프론트앤드 학습한 경험이 적어 그나마 익숙한 javscript를 사용하는 언어 중 레퍼런스가 가장 많은 react.js 언어를 채택하여 빠르게 프로토 타입을 개발하여 가능성 부터 확인하고자함.
2. Type Script  
  JavaScript에 Type을 명시하여 안정성을 향상
3. next.js  
  Hot Module Replacement(HMR)을 지원하여 개발 중 변경한 코드를 실시간으로 확인할 수 있고, Type Script를 지원하여 코드 유지보수와 디버깅이 안정적임. 추가로, API 라우팅 기능을 제공하여 간단한 API 서버를 사용하기에 가장 적절하였음.

## 프로젝트 진행
- 어떤 어려움이 있있는지?
  - 상태 관리
  - peer to peer 통신의 이벤트 타이밍 처리
  - 레퍼런스가 풍부하지 않은 라이브러리
- 어떤 문제를 해결했는지?
  - 프레임 저하 해결
  - 이벤트 순서 처리 해결
  - 공유자원 관리
  - 최적화
 
## 프로젝트 결과 
1. 메인화면
    
   
    ![1](https://user-images.githubusercontent.com/43032391/224641053-8a3978f8-c34e-40e9-bff5-27bcef07e789.png)
    메인화면 페이지로 BGM을 ON/OFF 할 수 있는 버튼이 왼쪽 하단에 있으며, 퍼즐 조각을 우측 하단에 놓으면 대기방이 보여지는 화면으로 이동한다.
    
2. 대기방 화면
    
    ![2](https://user-images.githubusercontent.com/43032391/224641078-b221a66b-8d57-4701-ba48-622d798bdc28.png)
    대기방에서는 아이템 설명 버튼을 클릭하여 5가지 게임 아이템에 대해 확인할 수 있으며, 만들어진 방을 클릭하여 참여 하거나, 방 만들기 버튼을 통해 게임 방을 생성 할 수 있다.
    
3. 아이템 설명 모달
    
    ![3](https://user-images.githubusercontent.com/43032391/224641109-a3cf934d-696e-44bb-bdb0-5e0457bf45d3.png)
    Dynamic Puzzle에서 각 판당 1번씩 사용 할 수 있는 5가지 아이템에 대해 설명을 볼 수 있다.
    
4. 게임화면
    
    ![4](https://user-images.githubusercontent.com/43032391/224641138-6447bcb6-1cea-46cb-8f91-3782035bfbaf.png)
    위 화면은 상대방이 입장하기를 기다리는 화면이다.
    
    ![5](https://user-images.githubusercontent.com/43032391/224641166-ef5dfe81-1ecc-465b-8396-f7dfb658b5c8.png)
    위 화면은 상대방이 입장하고 게임에 필요한 정보(얼굴인식 모델 Load, Twirl Item 초기 연산 수행) 등을 수행하는 화면이다.
    
    ![6](https://user-images.githubusercontent.com/43032391/224641189-a75cc653-2ebb-4085-b2ba-2131237d96d3.png)
    위 화면은 각 화면에 대한 설명과 준비 버튼을 위한 화면이다.
    
    ![7](https://user-images.githubusercontent.com/43032391/224641211-2c54b2b3-be4b-4086-a6f0-696c17187200.png)
    위 화면은 실제 게임 플레이 화면이다. 게임 플레이어는 상대방보다 먼저 상대방의 얼굴을 맞춰야 하며, 5가지 아이템을 통해 상대방을 방해 할 수 있다.

## 어려웠던 점

1. **처음 배우는 react.js 그리고 찾아봐도 나오지 않는 정보들**
    1. React.js와 Next.js는 처음 접하다보니 JS XML문법과 Hook이라는 개념이 제가 예전에 알고 있던 Javascript & jQuery 문법과 너무 달라 언어에 대한 괴리감과 어려움이 느껴졌습니다. 이 부분은 팀원들과 Hook 개념을 세미나 형식으로 공유하기도 하고, 잘 이해하지 못하고 작성된 코드는 코드리뷰를 통해 고쳐면서 다시 개념을 학습하는 식으로 어려움을 극복하였습니다.
    2.  드래그, 호버 등 마우스 이벤트를 그려주는 useSpring 라이브러리는 공식홈페이지나 외국자료에 생각보다 참고 할 수 있는 내용이 적었습니다. 특히 공식홈페이지에는 옵션 값에 대한 설명이 적어서 원하는 옵션인지 아닌지 하나하나씩 모두 넣어가며 효과를 확인해야 하는 부분이 답답하고 어려웠던 부분이였습니다.
    
2. **peer to peer 통신의 한계**
    1. Web RTC의 Datachannel을 사용해서 조각의 움직임이나 아이템 사용 정보를 서버를 거치지 않고 Peer to Peer 로 바로 통신이 되도록 처음에 설계하였습니다.
    2. 이 구조에서 서버는 페이지 라우팅이나 이미지,사운드 같은 최소한의 역할만을 수행하여 클라이언트 간의 데이터 전송이 엄청나게 빠른 장점이 있었습니다.
    3. 다만, 공유 자원에 동시에 접근 하였을 때나 두 클라이언트 간 이벤트 발생 시 어떤 이벤트가 먼저 발생했는지 판단해주는 서버가 없는 구성이다보니 이벤트처리 순서나 게임 상태관리가 모두 Logical하게 판단 되었어야 했습니다.
    4. 이벤트는 나의 이벤트를 상대방에게 전달하여 상대방이 종료를 보내는 구성(TCP 3-Way Hand Shaking와 유사)으로 바꾸고, 공유자원은 사용을 하고 사용 종료를 표시하는 Lock 속성의  플래그를 추가로 사용하여 게임 내에서 원하지 않는 다음 이벤트가 접근을 하지 못하도록 막는 세마포어 개념을 도입하였습니다. 이런 Logical한 개념을 적용해 버그를 고쳐 나가는 과정이 복잡하고 어려웠던 점이였습니다.

## Takeaway

5주간 무조건 돌아가는 프로그램을 만든다는 팀의 목표를 위해 처음 접해본 프론트엔드 언어인 React.js 언어를 빠르게 학습하였고 Hook, 상태관리, 렌더링 등 다양한 기술을 배울 수 있는 좋은 경험이였습니다.

또한, Peer to Peer 통신 연결과 Network Disconnection 시 예외 처리, Github에 개발한 코드를 Push 시 자동으로 서버에 적용이 될 수 있도록 환경을 구축하는 등 제가 관심 있고 잘 할 수 있는 부분들을 찾아서 주도적으로 개발을 맡았습니다.

 React.js, WebRTC를 활용한 재미있는 주제여서 몰입하여 개발할 수 있었고, 추가로 Node.js와 MongoDB를 학습하여 인증과 랭킹까지 구현하여 애정이 가는 프로젝트였습니다.
 
## 팀원소개
각 팀원들은 아래의 역할을 중점적으로 맡았으나, Boundary없이 서로 도우면서 개발하였음.
- 곽호연 : 게임 구조 설계, Canvas API
- 박다솔 : Canvas API, 이미지, 사운드
- 박찬 : 프로젝트 UI/UX
- 성현식 : 프로젝트 전반의 코드 퀄리티 향상 및 디버깅
- 이전제 : WebRTC, Socket.io, CI/CD

## ETC

- 포스터 
![posterv8 001](https://user-images.githubusercontent.com/115034667/224616200-21e8dbe4-2962-4960-8a89-415033506dcf.png)


