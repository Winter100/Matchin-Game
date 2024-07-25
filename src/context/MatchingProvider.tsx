import { createContext, useState } from "react";

export interface MatchingProps {
  level: number;
  increase: () => void;
  decrease: () => void;
}

export const MatchingContext = createContext({} as MatchingProps);

const MatchingProvider = ({ children }: { children: React.ReactNode }) => {
  const [level, setLevel] = useState(1);

  const increase = () => {
    setLevel((pre) => pre + 1);
  };

  const decrease = () => {
    setLevel((pre) => (pre <= 1 ? 1 : pre - 1));
  };
  return (
    <MatchingContext.Provider value={{ level, increase, decrease }}>
      {children}
    </MatchingContext.Provider>
  );
};

export default MatchingProvider;
