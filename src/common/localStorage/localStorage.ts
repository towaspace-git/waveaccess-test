import { IActiveCarListState } from "../../redux/reducers/activeCarListReducer";
import { ICompletedCarListState } from "../../redux/reducers/completedCarListReducer";

type LocalStorageStates = "active" | "completed"

type StatesTypes = IActiveCarListState | ICompletedCarListState;

export const getStateFromLocalStorage = (key: LocalStorageStates): StatesTypes => {
  const state = JSON.parse(localStorage.getItem(key) || "{}");
  return state;
};

export const setStateToLocalStorage = (key: LocalStorageStates, state: StatesTypes) => {
  const stateJSON = JSON.stringify(state);
  localStorage.setItem(key, stateJSON);
};
