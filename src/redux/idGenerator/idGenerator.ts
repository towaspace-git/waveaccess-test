import {getStateFromLocalStorage} from '../localStorage/localStorage'

export const generateId = ():number =>{
    const state = getStateFromLocalStorage('active');
    if(state.cars.length){
        return state.cars[state.cars.length -1].id + 1
    }
    else{
        return 0
    }
}