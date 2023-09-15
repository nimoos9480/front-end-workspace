import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

// 컴포넌트 명은 파일명과 일치시키는 걸 권장
const Counter = () => {
  const [counter, setCounter] = useState(0);
  // useState ==> 함수로 값을 받아 옴
  const plus = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
  };

  console.log("always~~");
  // 이벤트가 시작될때마다 리로드 되는 것 확인됨

  useEffect(() => {
    console.log("useEffect~~");
    // 처음 한 번만 찍힘
  }, []);
  // {함수안의 내용은 처음 한 번만 찍힘}, [배열안의 어떤 값들이 변경될 때에만 useEffect가 실행] 형식

  useEffect(() => {
    console.log("counter change~~");
  }, [counter]);
  return (
    <div>
      <h1 style={{ backgroundColor: "pink", color: "skyblue" }}>
        Total clicks: {counter}
      </h1>
      <Button text="+1" click={plus} />
      <Button text="-1" click={minus} />

      {/* <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>*/}
    </div>
  );
};

export default Counter;
