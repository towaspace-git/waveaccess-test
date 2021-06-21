import { IActiveCarProps } from "../../components/Car/ActiveCar/ActiveCar";
import { ICompletedCarProps } from "../../components/Car/CompletedCar/CompletedCar";

//ActiveActions

export enum ActiveCarActionTypes{
    addCar = "ADD_CAR",
    removeCar = "REMOVE_CAR"
}

type addNewCarAction = {type: ActiveCarActionTypes.addCar, payload: IActiveCarProps};
type removeCarAction = {type: ActiveCarActionTypes.removeCar, payload: IActiveCarProps}

export type IActiveCarAction = addNewCarAction | removeCarAction

//CompletedActions

export enum CompletedCarActionTypes{
    clearCars = "CLEAR_CARS",
    completeCar ="COMPLETE_CAR"
}
type clearCarsAction = {type: CompletedCarActionTypes.clearCars}
type addCarAction = {type: CompletedCarActionTypes.completeCar, payload: ICompletedCarProps}
export type ICompletedCarAction = clearCarsAction | addCarAction

//=========

export type CarAction = IActiveCarAction | ICompletedCarAction