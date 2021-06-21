import { combineReducers } from "redux";
import { activeCarListReducer } from "../reducers/activeCarListReducer";
import { completedCarListReducer } from "../reducers/completedCarListReducer";

export const rootReducer = combineReducers({
    activeCars: activeCarListReducer,
    completedCars: completedCarListReducer
})