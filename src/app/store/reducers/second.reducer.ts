import { Action } from '@ngrx/store';

// ACTION TYPES
import {
  increaseCounterType,
  decreaseCounterType,
  completedCounterType,
  startCounterType,
} from '../actionTypes/second.type';

export type SecondState = {
    counter : number,
    loading : boolean,
}

const initialState = {
    counter : 0,
    loading : false
};

export const SecondReducer = (state: SecondState= initialState, action: Action) => {
    
    switch(action.type) {
        case increaseCounterType:
            return {...state, counter: state.counter + 1};
        case decreaseCounterType:
            return {...state, counter : state.counter -1};
        case completedCounterType:
            return {...state, loading : false}
        case startCounterType:
            return {...state, loading : true};
        default:
            return state;
    }
};