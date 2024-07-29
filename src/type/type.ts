import { Dispatch } from "react";
import { initialValue } from "../reducer/initialValue";

// export interface MatchingState {
//   level: string;
//   ready:string;
// }

export type MatchingState = typeof initialValue;

export type MatchingAction = { type: string; payload: string };

export interface MatchingProps {
  state: MatchingState;
  dispatch: Dispatch<MatchingAction>;
}
