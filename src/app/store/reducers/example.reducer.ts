import { Action } from '@ngrx/store';
import { ExampleActions } from '../actions/example.action';

export type ExampleState = {
    loggedIn : boolean;
    username : string;
}

const initialState: ExampleState = {
    loggedIn : false,
    username : 'berkelmas'
}


// STATE AND ACTION PARAMETERS WILL BE PASSED
// TO THIS REDUCER FUNCTION BY NgRx.

export function ExampleReducer(state: ExampleState= initialState, action: ExampleActions) {
    switch(action.type) {
        case('login'):
            return {...state, loggedIn : true}
        case('logout'):
            return {...state, loggedIn : false}
        case('change_username'):
            return {...state, username : action.payload.username}
        default:
            return state;
    }
};
