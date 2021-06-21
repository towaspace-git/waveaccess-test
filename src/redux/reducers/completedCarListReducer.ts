
import { ICompletedCarProps } from "../../components/Car/CompletedCar/CompletedCar";
import { CompletedCarActionTypes, ICompletedCarAction } from "../actions/actions";

export interface ICompletedCarListState{
    cars:ICompletedCarProps[];
}


const initialState:ICompletedCarListState = {
    cars:[
        {
            id: 1,
            carName:"Toyota",
            carProblem:"Broken Carb",
            carArrivalDate:"19.05.2021",
            carCompleteDate:"213"
        },
        {
            id: 2,
            carName:"BMW",
            carProblem:"Broken Cylinder Head",
            carArrivalDate:"20.06.2021",
            carCompleteDate:"cas"
        }
    ]
}

export const completedCarListReducer = (state = initialState, action:ICompletedCarAction) =>{
    switch(action.type){
        case CompletedCarActionTypes.clearCars:{
            return {...state, cars:[]}
        }
        case CompletedCarActionTypes.completeCar:{
            return {...state, cars:[...state.cars, action.payload]}
        }
        default: return state;
    }

}