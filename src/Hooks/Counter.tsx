import { ReactNode, useReducer } from "react";

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const initialState = { count: 0 };

const reducerFn = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);
  return (
    <div>
      <h1>{children(state.count)}</h1>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>
        +
      </button>
      <button>-</button>
    </div>
  );
};

export default Counter;
