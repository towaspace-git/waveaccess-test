import { IActiveCarProps } from '../../components/Car/ActiveCar/ActiveCar';
import { IActiveCarAction } from "../actions/actions";
import {ActiveCarActionTypes} from '../actions/actions'
import { setStateToLocalStorage, getStateFromLocalStorage } from '../localStorage/localStorage';
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
            const newState ={...state, cars: [...state.cars, action.payload]};
            setStateToLocalStorage('active', newState);
            return newState;
        }
        case ActiveCarActionTypes.removeCar:{
            let newState = state.cars;
            newState = newState.filter((car)=>{
                return car.id !== action.payload.id
            })
            setStateToLocalStorage('active', {...state, cars:newState});
            return {...state, cars:newState};
        }
        default: return state;
    }
}