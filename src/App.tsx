import ContextCount from "./components/ContextCount";

function App() {
  return (
    <ContextCount>{(count: number) => <>Count is: {count} </>}</ContextCount>
  );
}

export default App;
