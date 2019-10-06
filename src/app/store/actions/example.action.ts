import { Action } from '@ngrx/store';

interface examplePayload {
    username : string;
}

export class ExampleAction implements Action {
    type = 'change_username';

    constructor(
        public payload: examplePayload
        ) {}
};

export type ExampleActions = ExampleAction;