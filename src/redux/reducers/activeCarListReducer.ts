import { IActiveCarProps } from '../../components/Car/ActiveCar/ActiveCar';
import { IActiveCarAction } from "../actions/actions";
import {ActiveCarActionTypes} from '../actions/actions'
import { setStateToLocalStorage, getStateFromLocalStorage } from '../../common/localStorage/localStorage';
export interface IActiveCarListState{
    cars:IActiveCarProps[];
}
if(!getStateFromLocalStorage('active').cars){
    setStateToLocalStorage('active', {cars:[]})
}
const initialState:IActiveCarListState = getStateFromLocalStorage('active');

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