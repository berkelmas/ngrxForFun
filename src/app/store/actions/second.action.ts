import { Action } from '@ngrx/store';

// IMPORT ACTION TYPES
import { 
    increaseCounterType, 
    decreaseCounterType,
    completedCounterType,
    startCounterType 
    } from '../actionTypes/second.type';


export interface StartCounterInterface {
    type: string,
    direction: string
}

export class IncreaseCounter implements Action {
    type: string = increaseCounterType;
};

export class DecreaseCounter implements Action {
    type: string = decreaseCounterType;
};

export class CompletedCounter implements Action {
    type : string = completedCounterType;
};

export class StartCounter implements StartCounterInterface {
    type : string = startCounterType;

    constructor(public direction : string = null) {}
}