import { useContext } from "react";
import { MatchingContext } from "../context/MatchingProvider";

export function useMatching() {
  const context = useContext(MatchingContext);

  if (!context) {
    throw new Error("유효 범위가 아닙니다.");
  }

  return context;
}
