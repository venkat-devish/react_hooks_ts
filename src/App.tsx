import Counter from "./Hooks/Counter";

function App() {
  return <Counter>{(num: number) => <>Count is: {num}</>}</Counter>;
}

export default App;
