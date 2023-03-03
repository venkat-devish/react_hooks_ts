import {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  UPDATE_TEXT,
}

type StateType = {
  count: number;
  text: string;
};

type ReducerType = {
  type: REDUCER_ACTION_TYPE;
  text?: string;
};

type ChildrenType = {
  children: ReactNode;
};

interface ContextTypes {
  count: number;
  text: string;
  increment: () => void;
  decrement: () => void;
  updateByText: (e: ChangeEvent<HTMLInputElement>) => void;
}

const initialState: StateType = { count: 0, text: "" };
const reducerFn = (
  state: StateType,
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

const CountContext = createContext({} as ContextTypes);

export const CountContextProvider = ({ children }: ChildrenType) => {
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

  const CountContextValue: ContextTypes = {
    count: state.count,
    text: state.text,
    increment,
    decrement,
    updateByText,
  };

  return (
    <CountContext.Provider value={CountContextValue}>
      {children}
    </CountContext.Provider>
  );
};

export const useCountContext = () => {
  return useContext(CountContext);
};
