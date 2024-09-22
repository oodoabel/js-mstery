import { useState } from "react";
import "./App.css";

// const Components = () => {
//   return <></>;
// };

// interface Props {
//   counter: number;
// }

const App = () => {
  const [counter, setCounter] = useState<number>(5);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prev) => (prev += 1))}>+</button>
    </>
  );
};

export default App;
