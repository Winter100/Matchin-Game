import { MatchingAction, MatchingState } from "../type/type";

export const matchingReducer = (
  state: MatchingState,
  action: MatchingAction
) => {
  switch (action.type) {
    case "SET_VIEW":
      return {
        ...state,
        view: action.payload,
      };
    case "SET_LEVEL":
      return {
        ...state,
        view: "start",
        level: action.payload,
      };

    default:
      return state;
  }
};
