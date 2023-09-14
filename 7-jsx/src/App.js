import { useState } from "react";
const App = () => {
  /* import 전
  let counter = 0;
  const setCount = () => {
    counter = counter + 1;
    console.log(counter);
  };
  */

  const [counter, setCounter] = useState(0);
  const setCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Total clicks: {counter}</h1>
      <button onClick={setCount}>Click!</button>
    </div>
  );
};

export default App;
