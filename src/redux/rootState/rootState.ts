import { IActiveCarListState } from "../reducers/activeCarListReducer";
import { ICompletedCarListState } from "../reducers/completedCarListReducer";

export interface IRootState{
    activeCars: IActiveCarListState;
    completedCars: ICompletedCarListState
}