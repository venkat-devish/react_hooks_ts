import { ChangeEvent, ReactNode, useReducer } from "react";

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INCREMENTBYQTY,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const initialState = { count: 0, text: "" };
const reducerFn = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.INCREMENTBYQTY:
      return { ...state, text: action.payload ?? "" };
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
  const incrementByQty = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INCREMENTBYQTY,
      payload: e.target.value,
    });
  };
  return (
    <div>
      {children(state.count)}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={incrementByQty} />
      <h2>{state.text}</h2>
    </div>
  );
};

export default Counter;
