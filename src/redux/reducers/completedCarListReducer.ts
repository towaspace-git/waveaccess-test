import { ICompletedCarProps } from "../../components/Car/CompletedCar/CompletedCar";
import {
  CompletedCarActionTypes,
  ICompletedCarAction,
} from "../actions/actions";
import {
  getStateFromLocalStorage,
  setStateToLocalStorage,
} from "../localStorage/localStorage";

export interface ICompletedCarListState {
  cars: ICompletedCarProps[];
}
if (!getStateFromLocalStorage("completed").cars) {
  setStateToLocalStorage("completed", { cars: [] });
}
const initialState = getStateFromLocalStorage("completed");

export const completedCarListReducer = (
  state = initialState,
  action: ICompletedCarAction
) => {
  switch (action.type) {
    case CompletedCarActionTypes.clearCars: {
      const newState = { ...state, cars: [] };
      setStateToLocalStorage("completed", newState);
      return newState;
    }
    case CompletedCarActionTypes.completeCar: {
      const newState = { ...state, cars: [...state.cars, action.payload] };
      setStateToLocalStorage("completed", newState);
      return newState;
    }
    default:
      return state;
  }
};
