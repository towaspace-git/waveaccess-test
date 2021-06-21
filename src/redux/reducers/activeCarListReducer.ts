import { IActiveCarProps } from '../../components/Car/ActiveCar/ActiveCar';
import { IActiveCarAction } from "../actions/actions";
import {ActiveCarActionTypes} from '../actions/actions'
export interface IActiveCarListState{
    cars:IActiveCarProps[];
}

const initialState:IActiveCarListState = {
    cars:[
        {
            id: 1,
            carName:"Toyota",
            carProblem:"Broken Carb",
            carArrivalDate:"19.05.2021"
        },
        {
            id: 2,
            carName:"BMW",
            carProblem:"Broken Cylinder Head",
            carArrivalDate:"20.06.2021"
        }
    ]
}

export const activeCarListReducer = (state = initialState, action:IActiveCarAction) =>{
    switch(action.type){
        case ActiveCarActionTypes.addCar:{
            return {...state, cars: [...state.cars, action.payload]};
        }
        case ActiveCarActionTypes.removeCar:{
            let newState = state.cars;
            newState = newState.filter((car)=>{
                return car.id !== action.payload.id
            })
            return {...state, cars:newState};
        }
        default: return state;
    }
}