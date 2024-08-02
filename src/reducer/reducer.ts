import { MatchingAction, MatchingState } from "../type/type";
import countMatchingIndices from "../util/countMatchingIndices";
import { generateShuffledArray } from "../util/generateShuffledArray";
import setLevel from "../util/setLevel";

export const matchingReducer = (
  state: MatchingState,
  action: MatchingAction<string | number[]>
): MatchingState => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        numberOfCorrectAnswers: 0,
        numberOfAttempts: 0,
        answer: [],
        userAnswer: [],
        view: action.payload as string,
      };
    case "SET_LEVEL":
      return {
        ...state,
        numberOfCorrectAnswers: 0,
        numberOfAttempts: 0,
        userAnswer: [],
        view: "start",
        level: setLevel(action.payload as string),
        answer: generateShuffledArray(setLevel(action.payload as string)),
      };

    case "SET_USER_ANSWER":
      return {
        ...state,
        userAnswer: action.payload as number[],
      };

    case "ANSWER": {
      if (state.prevUserAnswer === state.userAnswer) {
        return { ...state };
      } else {
        const attempts = state.numberOfAttempts + 1;
        const correct = countMatchingIndices(state.answer, state.userAnswer);
        return {
          ...state,
          prevUserAnswer: state.userAnswer,
          view: correct === state.level ? "result" : state.view,
          numberOfAttempts: attempts,
          numberOfCorrectAnswers: correct,
        };
      }
    }

    default:
      return state;
  }
};
