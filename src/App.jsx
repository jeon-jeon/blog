import { useState } from "react";
import Check from "./Check";

function App() {
  // const [isCheckFirst, setIsCheckFirst] = useState(false);
  // const [isCheckSecond, setIsCheckSecond] = useState(false);

  // const changeFirst = () => setIsCheckFirst((prev) => !prev);
  // const changeSecond = () => setIsCheckSecond((prev) => !prev);

  // const changeFirst = () => {
  //   setCheckArr((prev) => {
  //     const newCheckArr = [...prev];
  //     newCheckArr[0] = !prev[0];
  //     return newCheckArr;
  //   });
  // };
  // const changeSecond = () => {
  //   setCheckArr((prev) => {
  //     const newCheckArr = [...prev];
  //     newCheckArr[1] = !prev[1];
  //     return newCheckArr;
  //   });
  // };

  const [checkArr, setCheckArr] = useState([false, false, false, false, false]);
  const change = (x) => {
    setCheckArr((prev) => {
      const newCheckArr = [...prev];
      newCheckArr[x] = !newCheckArr[x];
      return newCheckArr;
    });
  };

  return (
    <div className="App">
      {checkArr.map((v, i) => (
        <Check isCheck={v} change={() => change(i)} />
      ))}

      <button>{checkArr.every((v) => v) ? "합격" : "불합격"}</button>
    </div>
  );
}

export default App;
