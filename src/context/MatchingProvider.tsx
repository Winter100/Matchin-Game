import { createContext, useReducer } from "react";
import { matchingReducer } from "../reducer/reducer";
import { MatchingProps } from "../type/type";
import { initialValue } from "../reducer/initialValue";

export const MatchingContext = createContext({} as MatchingProps);

const MatchingProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(matchingReducer, initialValue);

  return (
    <MatchingContext.Provider value={{ state, dispatch }}>
      {children}
    </MatchingContext.Provider>
  );
};

export default MatchingProvider;
