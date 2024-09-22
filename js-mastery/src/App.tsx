import "./App.css";

interface Props {
  name: string;
  name2: string;
  age: number;
}

const Components = ({ name, name2, age }: Props) => {
  return (
    <>
      <h1>firstName: {name}</h1>
      <h2>lastName: {name2}</h2>
      <h3>Age: {age}</h3>
    </>
  );
};

const App = () => {
  return (
    <>
      <Components name="john" name2="doe" age={23} />
      <Components name="mike" name2="doe" age={43} />
      <Components name="mark" name2="doe" age={30} />
      <Components name="james" name2="doe" age={2} />
    </>
  );
};

export default App;
