import { ChangeEvent, ReactNode, useReducer } from "react";

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  UPDATE_TEXT,
}

type ReducerType = {
  type: REDUCER_ACTION_TYPE;
  text?: string;
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initialState = { count: 0, text: "" };
const reducerFn = (
  state: typeof initialState,
  action: ReducerType
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.UPDATE_TEXT:
      return { ...state, text: action.text ?? "" };
    default:
      throw new Error();
  }
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };
  const updateByText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.UPDATE_TEXT, text: e.target.value });
  };

  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={updateByText} />
      <h2>{state.text}</h2>
    </div>
  );
};

export default Counter;
