import { ReactNode } from "react";
import { useCountContext } from "../Hooks/ContextCart";

type ChildrenProps = {
  children: (count: number) => ReactNode;
};

const ContextCount = ({ children }: ChildrenProps) => {
  const { count, increment, decrement, text, updateByText } = useCountContext();

  return (
    <div>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={updateByText} />
      <h2>{text}</h2>
    </div>
  );
};

export default ContextCount;
