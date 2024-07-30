import { Dispatch } from "react";
import { initialValue } from "../reducer/initialValue";
import { customCharacter } from "../constant/constant";

// export interface MatchingState {
//   level: string;
//   ready:string;
// }

export type MatchingState = typeof initialValue;
export type PayloadType = typeof customCharacter;

export type MatchingAction<T> = { type: string; payload: T };

export interface MatchingProps {
  state: MatchingState;
  dispatch: Dispatch<MatchingAction<string | number[]>>;
}
