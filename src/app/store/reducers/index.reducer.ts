import { ActionReducerMap } from '@ngrx/store';

import { ExampleReducer, ExampleState } from './example.reducer';
import { SecondReducer, SecondState } from './second.reducer';

export type appState = {
    example : ExampleState,
    second : SecondState
}

export const appRootReducer: ActionReducerMap<appState> = {
    example : ExampleReducer,
    second : SecondReducer
};
