import { useState } from "react";
import "./App.css";

// const Components = () => {
//   return <></>;
// };

// interface Props {
//   counter: number;
// }

const App = () => {
  const [live, setLive] = useState("23");
  const [check, setCheck] = useState(true);
  return (
    <>
      <h1>{live}</h1>
      <input
        className="form-control"
        onChange={(event) => check && setLive(event.target.value)}
      />
      <input
        type="checkbox"
        onChange={(event) => setCheck(event.target.checked)}
      />
    </>
  );
};

export default App;
