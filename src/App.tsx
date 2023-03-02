import Counter from "./Hooks/Counter";

function App() {
  return <Counter>{(num) => <h1>Count is: {num}</h1>}</Counter>;
}

export default App;
