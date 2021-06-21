import { ICompletedCarAction } from "../actions/actions";
import { IActiveCarListState } from "../reducers/activeCarListReducer";
import { ICompletedCarListState } from "../reducers/completedCarListReducer";
type StatesTypes = IActiveCarListState | ICompletedCarListState
export const setStateToLocalStorage = (key:string, state:StatesTypes) =>{
    const stateJSON = JSON.stringify(state);
    localStorage.setItem(key, stateJSON);
}

export const getStateFromLocalStorage = (key:string):StatesTypes =>{
    const state = JSON.parse(localStorage.getItem(key) || '{}');
    return state;
}