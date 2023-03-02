import Counter from "./Hooks/Counter";

function App() {
  return <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>;
}

export default App;
