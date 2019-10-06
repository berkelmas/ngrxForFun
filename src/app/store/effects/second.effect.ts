import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { of, Observable } from 'rxjs';
import { switchMap, switchMapTo, delay } from 'rxjs/operators';

// SECOND ACTIONS
import {
  increaseCounterType,
  startCounterType,
  decreaseCounterType
} from '../actionTypes/second.type';
import { DecreaseCounter, IncreaseCounter, CompletedCounter, StartCounterInterface } from '../actions/second.action';
import { Action } from '@ngrx/store';

@Injectable()
export class SecondEffects {
    
    @Effect()
    getCounter: Observable<Action> = this.actions.pipe(
        ofType<StartCounterInterface>(startCounterType),
        delay(1000),    
        switchMap(action => {
            if (action.direction === 'increase') {
                return of(new CompletedCounter(), new IncreaseCounter());
            } else {
                return of(new CompletedCounter(), new DecreaseCounter());
            };
        })
    );


    constructor(
        private actions: Actions
    ) {}
}