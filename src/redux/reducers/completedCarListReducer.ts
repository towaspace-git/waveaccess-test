import { ICompletedCarProps } from "../../components/Car/CompletedCar/CompletedCar";
import {
  CompletedCarActionTypes,
  ICompletedCarAction,
} from "../actions/actions";
import {
  getStateFromLocalStorage,
  setStateToLocalStorage,
} from "../../common/localStorage/localStorage";

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
      return newState;
    }
    case CompletedCarActionTypes.completeCar: {
      const newState = { ...state, cars: [...state.cars, action.payload] };
      return newState;
    }
    default:
      return state;
  }
};
