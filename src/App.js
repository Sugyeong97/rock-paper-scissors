import "./App.css";
import Box from "./component/Box";

//1. 박스 2개 (타이틀, 사진, 결괏값)
//2. 가위, 바위, 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 You 박스에 보인다
//4. Computer 박스는 랜덤값 표시
//5. 3, 4의 결과를 가지고 승패결정
//6. 승패결과에 따라 테두리색 변경 (이기면 초록, 지면 빨강, 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons.flaticon.com/png/512/2041/premium/2041965.png?token=exp=1650509360~hmac=9e4e477cb66a2d86fb75c21dd5777eeb",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/512/889/889648.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons.flaticon.com/png/512/737/premium/737812.png?token=exp=1650510086~hmac=15385f319f86323c3ab6bc449bb32b39",
  },
};

function App() {
  const play = (userChoice) => {
    console.log("Click", userChoice);
  };

  return (
    <div>
      <div className="main">
        <Box title="YOU" />
        <Box title="COMPUTER" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
