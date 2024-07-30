import { MatchingAction, MatchingState } from "../type/type";
import countMatchingIndices from "../util/countMatchingIndices";
import { generateShuffledArray } from "../util/generateShuffledArray";
import setLevel from "../util/setLevel";

export const matchingReducer = (
  state: MatchingState,
  action: MatchingAction<string | number[]>
) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        answerEa: 0,
        answer: [],
        userAnswer: [],
        view: action.payload,
      };
    case "SET_LEVEL":
      return {
        ...state,
        view: "start",
        level: setLevel(action.payload as string),
        answer: generateShuffledArray(setLevel(action.payload as string)),
      };

    case "SET_USER_ANSWER":
      return {
        ...state,
        userAnswer: action.payload,
      };

    case "ANSWER":
      return {
        ...state,
        answerEa: countMatchingIndices(state.answer, state.userAnswer),
      };

    default:
      return state;
  }
};
