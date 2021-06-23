import { IActiveCarListState } from "../../redux/reducers/activeCarListReducer";
import { ICompletedCarListState } from "../../redux/reducers/completedCarListReducer";

type StatesTypes = IActiveCarListState | ICompletedCarListState;

export const getStateFromLocalStorage = (key: string): StatesTypes => {
  const state = JSON.parse(localStorage.getItem(key) || "{}");
  return state;
};

export const setStateToLocalStorage = (key: string, state: StatesTypes) => {
  const stateJSON = JSON.stringify(state);
  localStorage.setItem(key, stateJSON);
};
