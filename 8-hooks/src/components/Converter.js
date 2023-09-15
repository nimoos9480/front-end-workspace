import { useState, useEffect } from "react"; // 특정함수만 쓰겠음
// import React from "react"; 통째로 가져올 수 있음

const Converter = () => {
  const [number, setNumber] = useState(""); // 초기값 설정
  const [bool, setBool] = useState(true);
  const [text, setText] = useState("Invert");

  const change = (e) => {
    console.log(e.target.value); // 입력한 넘버값 찍힘
    setNumber(e.target.value);
  };

  const reset = () => {
    setNumber("");
  };

  const invert = () => {
    setBool(!bool);
    reset();
  };

  useEffect(() => {
    if (bool) setText("Invert");
    else setText("Turn Back");
  }, [bool]); // 바뀔 값, bool값이 바뀔 때마다 실행

  return (
    <>
      <h1>Time Converter</h1>
      <div>
        <label>Minutes</label>
        <input
          type="number"
          placeholder="Minutes"
          disabled={!bool} //false
          onChange={change}
          value={bool ? number : Math.floor(number * 60)}
        />
      </div>
      <div>
        <label>Hours</label>
        <input
          type="number"
          placeholder="Hours"
          disabled={bool} // true
          onChange={change}
          value={bool ? Math.floor(number / 60) : number}
        />
      </div>

      <Btn click={reset} btnText="Reset" backgroundColor="tomato" />
      <Btn click={invert} btnText={text} backgroundColor="skyblue" />
    </>
  );
};

// 버튼 컴포넌트
const Btn = ({ click, btnText, backgroundColor }) => {
  return (
    <button
      style={{
        backgroundColor,
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
      }}
      onClick={click}
    >
      {btnText}
    </button>
  );
};

export default Converter;
