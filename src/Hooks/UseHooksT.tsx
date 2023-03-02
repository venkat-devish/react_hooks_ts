import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface User {
  id: number;
  username: string;
}

type FibFunc = (n: number) => number;

const fin: FibFunc = (n) => {
  if (n < 2) return n;
  return fin(n - 1) + fin(n - 2);
};

const myNum: number = 34;

const UseHooksT = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const textInputRef = useRef<HTMLInputElement>(null);
  const numberInputRef = useRef<HTMLInputElement>(null);

  const addTwo = useCallback((e: any): void => {
    console.log("Callback");
    setCount((prev) => prev + 2);
  }, []);

  const result = useMemo<number>(() => fin(myNum), [myNum]);

  useEffect(() => {
    console.log("Mounting");
    return () => console.log("Un Mounting");
  }, [users]);

  return (
    <div>
      <h1>{count}</h1>
      <h1>{result}</h1>
      <button onClick={addTwo}>Add</button>
      <form>
        <input type="text" ref={textInputRef} />
        <input type="number" ref={numberInputRef} />
      </form>
    </div>
  );
};

export default UseHooksT;
