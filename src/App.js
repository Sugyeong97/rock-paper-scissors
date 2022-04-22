import { useState } from "react";
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
    img: "https://cdn-icons.flaticon.com/png/512/2041/premium/2041965.png?token=exp=1650592901~hmac=aee820b23cce1a091feab04145df7358",
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons.flaticon.com/png/512/737/premium/737804.png?token=exp=1650592995~hmac=ed3d28ce6055d6598785a3495daaba64",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons.flaticon.com/png/512/737/premium/737812.png?token=exp=1650592976~hmac=37da059d513e14144d7d9ca3fe5a147a",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    setUserResult(userResultFn(choice[userChoice], computerChoice));
    setComputerResult(computerResultFn(choice[userChoice], computerChoice));
  };

  const userResultFn = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "Win" : "Lose";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "Win" : "Lose";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "Win" : "Lose";
    }
  };

  const computerResultFn = (user, computer) => {
    if (user.name == computer.name) {
      return "Tie";
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "Lose" : "Win";
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "Lose" : "Win";
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "Lose" : "Win";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값만 뽑아서 Array로 만들어 줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];

    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={userResult} />
        <Box title="COMPUTER" item={computerSelect} result={computerResult} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
